const db = require("../models");
var request = require("request");
// const ObjectId = require("mongodb").ObjectID;
// const stocks = require("../models/beststocks");

// Defining methods for the stockController
module.exports = {
  // insert: function(array_of_object, res) {
  //   db.stocks.insert(array_of_object)
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },
  // findAll: function(req, res) {
  //   db.stocks
  //     .find()
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },





  findAll: function(req, res) {
    db.StocksToTrade
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.StocksToTrade
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.StocksToTrade
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.StocksToTrade
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  insert: function(req, res) {
    db.StocksToTrade
      .insert([{stock1: 'baba'}])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.StocksToTrade
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
 
};