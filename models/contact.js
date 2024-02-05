const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name : {type:String, required:true},
    email : {type:String,required:true},
    query: {type:String,required:true}
})

module.exports = mongoose.model('Query',contactSchema);