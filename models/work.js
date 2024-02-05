const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema ({
    ImageURL : {type:String, required:true},
    ImageLink : {type:String,required:true}
})

module.exports = mongoose.model('Work',workSchema);