var italianDish = require('../models/italianDish'); 
 
// List of all dishes
exports.italianDish_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Italian Dish list'); 
}; 
 
// for a specific dish. 
exports.italianDish_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Italian Dish detail: ' + req.params.id); 
}; 
 
// Handle dish create on POST. 
exports.italianDish_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Italian Dish create POST'); 
}; 
 
// Handle dish delete form on DELETE. 
exports.italianDish_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Italian Dish delete DELETE ' + req.params.id); 
}; 
 
// Handle dish update form on PUT. 
exports.italianDish_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Italian Dish update PUT' + req.params.id); 
}; 