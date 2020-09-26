const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const middleSchema = new mongoose.Schema({
  productId: Number,
  prices: [Number],
  images: [String],
  short_headers: [String],
  long_headers: [String],
  recc_prod_names: [String],
  captions: [String]
});

const Middle = mongoose.model('Middle', middleSchema);

module.exports = Middle;
