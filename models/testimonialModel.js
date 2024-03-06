const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    content:{type: String, required: true},
    name:{type: String, required: true},
    designation:{type: String, required: true},
    profileurl:{type: String, required: true},
    created_at:{type:String,required: true},
    sequence_no:{type:Number,required: false}
});

const Testimonial = mongoose.model('testimonial', TestimonialSchema);
module.exports=Testimonial;