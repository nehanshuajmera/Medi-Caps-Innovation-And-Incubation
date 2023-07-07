const mongoose = require('mongoose');

const BlogSchema= new mongoose.Schema({
    images: { type: String, required: false}   ,
    description: { type: String, required: true },
    title:{type:String,required: true},
    authername:{type:String,required: true},
    date:{type:String,required: true},
    like:{type:Number,required: true},
    comments:[{
        name:{type:String},
        comment:{type:String},
        date:{type:String},
        like:{type:Number}   
       }],
    created_at:{type:String,required: true},
    featured:{type:String,required: true}
    });

const Blog = mongoose.model('blog', BlogSchema);
module.exports=Blog;