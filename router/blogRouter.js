const router = require("express").Router();
const Blog=require("../models/blogModel")
const adminauth=require("../middleware/adminauth");

// add new blog
router.post("/addblog",adminauth, async (req, res) => {
    const { images,description,title,authername,date} = req.body;
    const newblog = new Blog({
        images,
        description,
        authername,
        title,
        date,
        like:0,
        comments:[]
        });
   
    newblog.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});
  

//   delet blogs

router.get("/deleteblog/:id",adminauth, async (req, res) => {
    const blogId= req.params.id;
    try {
        let oldblog= await Blog.findOneAndDelete({ _id:blogId});
        res.status(200).send(oldblog);
    } catch (err) {
      res.status(200).send(err);
    }
});

router.get("/allblogs", (req, res) => {
    try {
        // console.log("searching for blogs")
        Blog.find()
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.get("/singleblog/:id", (req, res) => {
    // console.log(req.params.id)
    try {
        Blog.findById(req.params.id)
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.post("/updateblog/:id",adminauth, (req, res) => {
    try {
        // console.log("Blog Updated",req.params.id)
         const {images,description,title,authername,date} = req.body;
        Blog.findOneAndUpdate({_id:req.params.id},{images,description,authername,title,date})
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

module.exports=router