var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find({})
    .then(function(dbProduct) {
      // If we were able to successfully find Articles, send them back to the client
      // res.json(dbProduct);
      res.render('index', { items: dbProduct, activate: true });
      console.log("fired")
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  
});

// router.get('/products-page', function(req, res, next) {

//   Product.find({})
//     .then(function(dbProduct) {
//       // If we were able to successfully find Articles, send them back to the client
//       // res.json(dbProduct);
//       res.render('shop/products-page', { items: dbProduct, activate: true });
//       console.log(dbProduct)
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
  
// });


router.get('/products-page', function(req, res, next) {

  
  const category = 'homeware';
  const page = req.query.page || 1
  const limit = 3;
  const skipVal = (page -1) * limit;
  var pageCount = [];

  Product.count()
      .then(function(dbCount) {
     console.log("This is the count " + dbCount)
    
        var pageTotal = dbCount/limit;

        for(var i=1; i < pageTotal + 1; i++) {
          var obj = {}
          obj['pageNum'] = i
          obj['totalItems'] = dbCount
          pageCount.push(obj)
        }

  });


  if(page === 1) {
    Product.find({}).limit(limit)
    .then(function(dbProduct) {
      // If we were able to successfully find Articles, send them back to the client
      // res.json(dbProduct);
     
      res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  } else if(category != 'all') {
    Product.find({'category': category}).skip(skipVal).limit(limit)
    .then(function(dbProduct) {
      // If we were able to successfully find Articles, send them back to the client
      // res.json(dbProduct);
      res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  }else {
    Product.find({}).skip(skipVal).limit(limit)
    .then(function(dbProduct) {
      // If we were able to successfully find Articles, send them back to the client
      // res.json(dbProduct);
      res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  }


  

  // if(page === 1) {
  //   Product.find({}).limit(limit)
  //   .then(function(dbProduct) {
  //     // If we were able to successfully find Articles, send them back to the client
  //     // res.json(dbProduct);
     
  //     res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
  //   })
  //   .catch(function(err) {
  //     // If an error occurred, send it to the client
  //     res.json(err);
  //   });
  // } else if(category != 'all') {
  //   Product.find({'category': category}).skip(skipVal).limit(limit)
  //   .then(function(dbProduct) {
  //     // If we were able to successfully find Articles, send them back to the client
  //     // res.json(dbProduct);
  //     res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
  //   })
  //   .catch(function(err) {
  //     // If an error occurred, send it to the client
  //     res.json(err);
  //   });
  // }else {
  //   Product.find({}).skip(skipVal).limit(limit)
  //   .then(function(dbProduct) {
  //     // If we were able to successfully find Articles, send them back to the client
  //     // res.json(dbProduct);
  //     res.render('shop/products-page', { items: dbProduct, pageNo: pageCount, activate: true });
      
  //   })
  //   .catch(function(err) {
  //     // If an error occurred, send it to the client
  //     res.json(err);
  //   });
  // }
  
});

router.get("/products/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  Product.findOne({ _id: req.params.id })
    
    .then(function(dbArticle) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      console.log(dbArticle.price)
      res.render('single', {item : dbArticle});
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;
