const mongoose = require('mongoose');

const EventBanarSchema = new mongoose.Schema({
    image:{type:String,required:false},
    updated_at:{type:String,required: true},
});

const EventBanar = mongoose.model('eventbanar', EventBanarSchema);
module.exports=EventBanar;