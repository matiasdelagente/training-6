var mongoose = require('mongoose');

var ProductSchema = {
  name: String,
  stock: Number,
  price: Number
}

module.exports = mongoose.model("product", ProductSchema);
