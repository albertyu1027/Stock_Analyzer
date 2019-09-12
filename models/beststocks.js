const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// mongoose.promise = Promise;


// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const StocksToTradeSchema = new Schema({
  // `stock` is required and of type String
  stock1: { type: String },
  stock2: { type: String },
  stock3: { type: String },
  stock4: { type: String },
  stock5: { type: String },
  stock6: { type: String },
  stock7: { type: String },
  stock8: { type: String },
  stock9: { type: String },
  stock10: { type: String },
  stock11: { type: String },
  date: { type: Date, default: Date.now }

});

// This creates our model from the above schema, using mongoose's model method
const StocksToTrade = mongoose.model("stocks", StocksToTradeSchema);

// Export the Stockstotrade model
module.exports = StocksToTrade;