const mongoos = require('mongoose')

let productSchema = new mongoos.Schema({
    name:String,
    price:Number
})

module.exports = mongoos.model('Product',productSchema);