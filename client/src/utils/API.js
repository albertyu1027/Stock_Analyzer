import axios from "axios";
// const BASEURL = "https://cloud.iexapis.com";
const APIKEY = "pk_c62a25ebc4e446feb04cd894c2c7f4d9";

export default {
  getQuote: function() {
    return axios.get("https://cloud.iexapis.com/stable/tops?token="+APIKEY+"&symbols=baba");
  },
  getRevenue: function(query) {
    return axios.get("https://cloud.iexapis.com/stable/stock/aapl/advanced-stats?token="+APIKEY);
  },
  getEarningsPerShare: function() {
    return axios.get("https://cloud.iexapis.com");
  }
};




