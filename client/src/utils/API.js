import axios from "axios";
// const BASEURL = "https://cloud.iexapis.com";
const APIKEY = "pk_c62a25ebc4e446feb04cd894c2c7f4d9";
const APIKEYencrypted = encodeURIComponent(APIKEY)

//grab watchlist from database.
//if sector = industrials, show on list
const stocksearch = ['RTN', 'LMT', 'BA', 'NOC', 'FDX']


export default {
  getQuote: function() {
    return axios.get("https://sandbox.iexapis.com/stable/stock/" + stocksearch[0] + "/quote?token=Tpk_23147acc44694325971560f25873ffbc");
  },
  getRevenue: function() {
    return axios.get("https://sandbox.iexapis.com/stable/stock/" + stocksearch[0] + "/cash-flow?token=Tpk_23147acc44694325971560f25873ffbc");
  },
  getEarningsPerShare: function() {
    return axios.get("https://cloud.iexapis.com");
  }
};




