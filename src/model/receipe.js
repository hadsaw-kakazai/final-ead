const mongoose = require('mongoose');
mongoose.connection("mongodb://127.0.0.1:27017/receipe")
const receipeSchema = new mongoose.Schema({
        title: String,
        description: String,
        ingredients: String,
        instructions: String
        
});

const receipe = mongoose.model('receipe', receipeSchema);
module.exports = User;

