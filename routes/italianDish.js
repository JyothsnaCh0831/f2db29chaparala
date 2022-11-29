var express = require('express');
const italianDish_controlers= require('../controllers/italianDish'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Class page. */
router.get('/', italianDish_controlers.italianDish_view_all_Page);

// GET detail italian dish page
router.get('/detail', italianDish_controlers.italianDish_view_one_Page); 

/* GET create dish page */ 
router.get('/create', secured, italianDish_controlers.italianDish_create_Page); 

/* GET dish update page */ 
router.get('/update', secured, italianDish_controlers.italianDish_update_Page); 

/* GET delete dish page */ 
router.get('/delete', secured, italianDish_controlers.italianDish_delete_Page); 

module.exports = router;
