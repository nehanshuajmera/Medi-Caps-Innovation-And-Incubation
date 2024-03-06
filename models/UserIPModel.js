const mongoose = require('mongoose');

const UserIPSchema = new mongoose.Schema({
    user:{type: {}, required: true},
    task:{type: String, required: true},
    content:{type: {}, required: true},
    created_at:{type:String,required: true},
});

const UserIP = mongoose.model('UserIP', UserIPSchema);
module.exports=UserIP;