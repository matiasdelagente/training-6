var express = require('express');
var router = express.Router();
var Product = require('../models/ProductModel.js');

router.route('/products')
.get(function(req, res){
  Product.find(function(err, data){
    if(err) res.json(err);
    res.json(data);
  });
})
.post(function(req, res){
  var product = new Product();
  product.name = req.body.name;
  product.stock = req.body.stock;
  product.price = req.body.price;

  product.save(function(err, data){
    if(err) res.json(err);
    res.json(data);
  });
});
router.route('/products/:id')
.get(function(req, res){
  var id = req.params.id;
  Product.findById(id, function(err, data){
    if(err) res.send(err);
    res.json(data);
  });
})
.put(function(req,res){
  var id = req.params.id;
  Product.findById(id, function(err, product){
    if(err) res.json(err);
    product.name = req.body.name;
    product.stock = req.body.stock;
    product.price = req.body.price;
    product.save(function(err, data){
      if(err) res.json(err);
      res.json(data);
    });
  });
})
.delete(function(req,res){
  var id = req.params.id;
  Product.findById(id, function(err, product){
    if(err) res.json(err);
    product.remove(function(err, data){
      if(err) res.json(err);
      res.json(data);
    });
  });
});

module.exports = router;
