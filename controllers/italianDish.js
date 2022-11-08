var italianDish = require('../models/italianDish'); 
 
// List of all dishes
exports.italianDish_list = async function(req, res) { 
    try{ 
        theDishes = await italianDish.find(); 
        res.send(theDishes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.italianDish_view_all_Page = async function(req, res) { 
    try{ 
        theDishes = await italianDish.find(); 
        res.render('italianDish', { title: 'Italian Dish Search Results', results: theDishes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 