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
exports.italianDish_detail = async function(req, res) { 
    console.log("detail "  + req.params.id) 
    try { 
        result = await italianDish.findById(req.params.id)
        res.send(result)
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }  
}; 
 
// Handle dish create on POST. 
exports.italianDish_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new italianDish(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object
    document.dishName = req.body.dishName; 
    document.dishPrice = req.body.dishPrice; 
    document.mainIngredient = req.body.mainIngredient; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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