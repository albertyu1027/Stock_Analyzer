import axios from "axios";
// const BASEURL = "https://cloud.iexapis.com";
const APIKEY = "pk_51bdaef9e7324c8f80fa7f6bbe14323a";

//grab watchlist from database.
//if sector = industrials, show on list



export default {
  getQuote: function(query) {
    return axios.get("https://cloud.iexapis.com/stable/stock/" +  query + "/quote?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a");
  },
  getRevenue: function(query) {
    return axios.get("https://cloud.iexapis.com/stable/stock/" + query + "/cash-flow?token=pk_51bdaef9e7324c8f80fa7f6bbe14323a");
  }

};




