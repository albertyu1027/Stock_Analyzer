import axios from "axios";
// const BASEURL = "https://cloud.iexapis.com";
const APIKEY = "pk_c62a25ebc4e446feb04cd894c2c7f4d9";
const APIKEYencrypted = encodeURIComponent(APIKEY)
console.log(APIKEYencrypted)

export default {
  getQuote: function() {
    return axios.get("https://sandbox.iexapis.com/stable/stock/IQ/quote?token=Tpk_23147acc44694325971560f25873ffbc");
  },
  getRevenue: function(query) {
    return axios.get();
  },
  getEarningsPerShare: function() {
    return axios.get("https://cloud.iexapis.com");
  }
};




