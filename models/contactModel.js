const mongoose = require('mongoose');

const ContactSchema= new mongoose.Schema({
    name: { type: String, required: true}   ,
    phone: { type: String, required: true },
    email:{type:String,required: true},
    query:{type:String,required: true},
    idea:{type:String,required: false},
    message:{type:String,required: true},
    page:{type:String,required: true},
    created_at:{type:String,required: true}
});

const Contact = mongoose.model('contact', ContactSchema);
module.exports=Contact;