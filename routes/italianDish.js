var express = require('express');
var router = express.Router();

/* GET Class page. */
router.get('/', function(req, res, next) {
  res.render('italianDish', { title: 'Search Results Italian Dish' });
});

module.exports = router;
