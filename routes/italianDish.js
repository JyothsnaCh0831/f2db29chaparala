var express = require('express');
const italianDish_controlers= require('../controllers/italianDish'); 
var router = express.Router();

/* GET Class page. */
router.get('/', italianDish_controlers.italianDish_view_all_Page);

module.exports = router;
