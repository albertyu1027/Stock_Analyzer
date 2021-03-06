var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');

//SSL cert
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('certificate.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var express = require('express');
var app = express();

app.get('/', function(req, res){
    // console.log(req)
    // console.log(res)

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    var options = {
                //see the Authentication API's Post Access Token method for more information
        url: 'https://api.tdameritrade.com/v1/oauth2/token',
        method: 'POST',
        headers: headers,
                //POST Body params
        form: {
            'grant_type': 'authorization_code',
            'access_type': 'offline',
            'code': req.query.code, //get the code
            'client_id': 'PNE0ANW8TRKBP2QKAUAY0YGKV3J0YYNS',
            'redirect_uri': 'https://localhost:8334'
        }
    }

        //Post Access Token request
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //see Post Access Token response summary for what authReply contains
            authReply = JSON.parse(body);
            
            //the line below is for convenience to test that it's working after authenticating
            res.send(authReply);
        }
    })
    
    function errorHandler (err, req, res, next) {
        res.status(500)
        res.render('error', { error: err })
}
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//Set to 8080, but can be any port, code will only come over https, even if you specified http in your Redirect URI
httpServer.listen(8080);
httpsServer.listen(8334);
console.log('listening on port 8334')



