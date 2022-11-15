var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var italianDish_controller = require('../controllers/italianDish'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Dishes ROUTES /// 
 
// POST request for creating a dish.  
router.post('/italianDish', italianDish_controller.italianDish_create_post); 
 
// DELETE request to delete Dish. 
router.delete('/italianDish/:id', italianDish_controller.italianDish_delete); 
 
// PUT request to update Dish. 
router.put('/italianDish/:id', italianDish_controller.italianDish_update_put); 
 
// GET request for one Dish. 
router.get('/italianDish/:id', italianDish_controller.italianDish_detail); 
 
// GET request for list of all Dish items. 
router.get('/italianDish', italianDish_controller.italianDish_list); 

// GET detail italian dish page
router.get('/detail', italianDish_controller.italianDish_view_one_Page); 

/* GET create dish page */ 
router.get('/create', italianDish_controller.italianDish_create_Page); 


 
module.exports = router; 