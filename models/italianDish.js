const mongoose = require("mongoose");
const italianDishSchema = mongoose.Schema({
    dishName: {
        type: String,
        required: [true, 'Name of the dish cannot be empty']
    },
    mainIngredient: {
        type: String,
        required: [true, 'Ingredient of the dish cannot be empty']
    },
    dishPrice: {
        type: Number,
        min: [1.25, 'Price must be at least $1.25'],
        max: 30
    }
});

module.exports = mongoose.model("ItalianDish", italianDishSchema);