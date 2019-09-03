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

  	//api call #2 for financials and advanced stats data. this is annual revenue
  	//financials 
  	let stockfinancials1 = "https://cloud.iexapis.com/stable/stock/" + a + "/advanced-stats?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockfinancials2 = "https://cloud.iexapis.com/stable/stock/" + b + "/advanced-stats?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockfinancials3 = "https://cloud.iexapis.com/stable/stock/" + c + "/advanced-stats?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockfinancials4 = "https://cloud.iexapis.com/stable/stock/" + d + "/advanced-stats?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockfinancials5 = "https://cloud.iexapis.com/stable/stock/" + e + "/advanced-stats?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"

  	// let stockfinancialshuh = "https://cloud.iexapis.com/stable/stock/" + a + "/financials?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"

  	let stockpt1 = "https://cloud.iexapis.com/stable/data-points/" + a + "/PRICE-TARGET?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockpt2 = "https://cloud.iexapis.com/stable/data-points/" + b + "/PRICE-TARGET?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockpt3 = "https://cloud.iexapis.com/stable/data-points/" + c + "/PRICE-TARGET?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockpt4 = "https://cloud.iexapis.com/stable/data-points/" + d + "/PRICE-TARGET?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"
  	let stockpt5 = "https://cloud.iexapis.com/stable/data-points/" + e + "/PRICE-TARGET?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a"

  	const promise1 = axios.get(stockfinancials1)
  	const promise2 = axios.get(stockfinancials2)
  	const promise3 = axios.get(stockfinancials3)
  	const promise4 = axios.get(stockfinancials4)
  	const promise5 = axios.get(stockfinancials5)
  	const promise6 = axios.get(stockquote1)
  	const promise7 = axios.get(stockquote2)
  	const promise8 = axios.get(stockquote3)
  	const promise9 = axios.get(stockquote4)
  	const promise10 = axios.get(stockquote5)
  	const promise11 = axios.get(stockpt1)
  	const promise12 = axios.get(stockpt2)
  	const promise13 = axios.get(stockpt3)
  	const promise14 = axios.get(stockpt4)
  	const promise15 = axios.get(stockpt5)


  	return Promise.all([
  		promise1, promise2, promise3, promise4, promise5, 
  		promise6, promise7, promise8, promise9, promise10,
  		promise11, promise12, promise13, promise14, promise15,

  	]).then(function(stockarray) {
  	return stockarray
  	
	})
	.catch(function (err) {
		console.log(err);
	})
    
  }

};




