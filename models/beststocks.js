const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// mongoose.promise = Promise;


// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const StocksToTradeSchema = new Schema({
  // `stock` is required and of type String
  stockarray: { type: Array },
  date: { type: Date, default: Date.now }

});

// This creates our model from the above schema, using mongoose's model method
const StocksToTrade = mongoose.model("stocks", StocksToTradeSchema);

// Export the Stockstotrade model
module.exports = StocksToTrade;