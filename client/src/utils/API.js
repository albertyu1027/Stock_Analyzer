import axios from "axios";
// const BASEURL = "https://cloud.iexapis.com";
// const APIKEY = "pk_51bdaef9e7324c8f80fa7f6bbe14323a";


export default {
  getQuote: function(a,b,c,d,e) {

  	//api call #1 for quote data
  	let stockquote1 = "https://cloud.iexapis.com/stable/stock/" + a + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockquote2 = "https://cloud.iexapis.com/stable/stock/" + b + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockquote3 = "https://cloud.iexapis.com/stable/stock/" + c + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockquote4 = "https://cloud.iexapis.com/stable/stock/" + d + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockquote5 = "https://cloud.iexapis.com/stable/stock/" + e + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	//api call #2 for cash flow data
  	let stockcf1 = "https://cloud.iexapis.com/stable/stock/" + a + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockcf2 = "https://cloud.iexapis.com/stable/stock/" + b + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockcf3 = "https://cloud.iexapis.com/stable/stock/" + c + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockcf4 = "https://cloud.iexapis.com/stable/stock/" + d + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockcf5 = "https://cloud.iexapis.com/stable/stock/" + e + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	//api call #3 for revenue data. this is annual revenue
  	let stockrev1 = "https://cloud.iexapis.com/stable/data-points/" + a + "/REVENUE?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockrev2 = "https://cloud.iexapis.com/stable/data-points/" + b + "/REVENUE?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockrev3 = "https://cloud.iexapis.com/stable/data-points/" + c + "/REVENUE?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockrev4 = "https://cloud.iexapis.com/stable/data-points/" + d + "/REVENUE?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockrev5 = "https://cloud.iexapis.com/stable/data-points/" + e + "/REVENUE?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"

  	const promise1 = axios.get(stockquote1)
  	const promise2 = axios.get(stockquote2)
  	const promise3 = axios.get(stockquote3)
  	const promise4 = axios.get(stockquote4)
  	const promise5 = axios.get(stockquote5)
  	const promise6 = axios.get(stockcf1)
  	const promise7 = axios.get(stockcf2)
  	const promise8 = axios.get(stockcf3)
  	const promise9 = axios.get(stockcf4)
  	const promise10 = axios.get(stockcf5)
  	const promise11 = axios.get(stockrev1)
  	const promise12 = axios.get(stockrev2)
  	const promise13 = axios.get(stockrev3)
  	const promise14 = axios.get(stockrev4)
  	const promise15 = axios.get(stockrev5)

  	return Promise.all([promise1, promise2, promise3, promise4, promise5, 
  						promise6, promise7, promise8, promise9, promise10,
  						promise11, promise12, promise13, promise14, promise15
  	]).then(function(stockarray) {
  	return stockarray
  	
	})
	.catch(function (err) {
		console.log(err);
	})
    
  }

};




