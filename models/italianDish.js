const mongoose = require("mongoose");
const italianDishSchema = mongoose.Schema({
    dishName: String,
    mainIngredient: String,
    dishPrice: Number
});

module.exports = mongoose.model("ItalianDish", italianDishSchema);