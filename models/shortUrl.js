const mongoose = require('mongoose')


const shortUrlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true
    },
    urlId:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required : true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)