const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Recipe = new Schema({
    Recipe_Name: {
        type: String
    },
    Recipe_Ingredients: {
        type: String
    },
    Optional_Ingredients: {
        type: String
    },
});
module.exports = mongoose.model('Recipe', Recipe);