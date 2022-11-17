var express = require('express');
const italianDish_controlers= require('../controllers/italianDish'); 
var router = express.Router();

/* GET Class page. */
router.get('/', italianDish_controlers.italianDish_view_all_Page);

// GET detail italian dish page
router.get('/detail', italianDish_controlers.italianDish_view_one_Page); 

/* GET create dish page */ 
router.get('/create', italianDish_controlers.italianDish_create_Page); 

/* GET dish update page */ 
router.get('/update', italianDish_controlers.italianDish_update_Page); 

/* GET delete dish page */ 
router.get('/delete', italianDish_controlers.italianDish_delete_Page); 

module.exports = router;
