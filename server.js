const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const axios = require("axios");
const cheerio = require("cheerio");
const routes = require("./routes");


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);


// Use express.static to serve the public folder as a static directory
// app.use(express.static("client/public"));
app.use(express.static(`${__dirname}/client/build`));

// Add routes, both API and view
app.use(routes);

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/stockstotrade";
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });





// A GET route 
// app.get("/stockstotrade", function(req, res) {
// //   // First, we grab the body of the html with request
//   axios.get("http://www.localhost/stockstotrade").then(function(response) {
// //     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     // var $ = cheerio.load(response.data);

//     console.log(response.data)

//     // Now, we grab every h2 within an article tag, and do the following:
//     // $("article h2").each(function(i, element) {
//       // Save an empty result object
//       var result = {};


//       // Create a new Article using the `result` object built from scraping
//       db.StocksToTrade
//         .create(result)
//         .then(function(dbStocks) {
//           // If we were able to successfully scrape and save an Article, send a message to the client
//           res.send("Complete");
//         })
//         .catch(function(err) {
//           // If an error occurred, send it to the client
//           res.json(err);
//         });
//     });
//   });
// });











// Route for getting all Articles from the db
app.get("/", function(req, res) {
  // Grab every document in the Articles collection
  db.stocks
    .find()
    .insert([{stock1: 'baba'}])
    .then(function(dbStocks) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbStocks);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



// // Route for saving/updating stocks
// app.post("/stockstotrade", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.StocksToTrade
//     .create(req.body)
//     .then(function(dbStocks) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Stocks
//       // .findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbStocks) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbStocks);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });









// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${app.get("port")}!`);
  	console.log(`🌎 ==> Server now on port ${PORT}!`);
});


//render all stocks that were updated from sectors.
//run 200MA and 50MA numbers and see if it's tradable
