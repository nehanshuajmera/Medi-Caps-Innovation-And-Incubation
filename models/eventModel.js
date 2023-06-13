const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    images:{type:String,required:false},
    description: { type: String, required: true },
    title:{type:String,required: true},
    authername:{type:String,required: true},
    date:{type:String,required: true},
    time:{type:String,require:true},
    location:{type:String,require:true},
    numberofspeaker:{type:Number,require:true},
    registrationfee:{type:Number,require:true},
    registrationstatus:{type:String,require:true},
    like:{type:Number,required: true},
    comments:[{
        name:{type:String},
        comment:{type:String},
        date:{type:String},
        like:{type:Number}   
       }]
});

const Event = mongoose.model('event', EventSchema);
module.exports=Event;