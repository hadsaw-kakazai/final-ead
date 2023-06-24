const mongoose = require('mongoose')
const Schema = mongoose.Schema
const RecepieSchema = new Schema({
    title: String,
    description: String,
    ingredients: String,
    instructions: String
})

module.exports = mongoose.model('receipes',RecepieSchema)