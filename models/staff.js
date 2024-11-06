const mongoose = require('mongoose')

const StaffsSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    city:String
})


const StaffsModel = mongoose.model('register',StaffsSchema)
module.exports = StaffsModel