const router = require("express").Router();
const Blog=require("../models/blogModel")
const adminauth=require("../middleware/adminauth");
const {Recordlog}=require("../Security/Recordip");
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
        comments:[],
        created_at:new Date(),
        featured:"False"
        });
   
        await Recordlog({task:"ADD BLOG",content:newblog,user:req});
    newblog.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
});
  

//   delet blogs

router.get("/deleteblog/:id",adminauth, async (req, res) => {
    const blogId= req.params.id;
    try {
        let oldblog= await Blog.findOneAndDelete({ _id:blogId});
        await Recordlog({task:`Delete BLOG ${blogId}`,content:oldblog,user:req});
        res.status(200).send(oldblog);
    } catch (err) {
      res.status(200).send(err);
    }
});

router.get("/changefeaturedstatus/:id",adminauth, async (req, res) => {
    const blogId= req.params.id;
    // console.log("Change api status")
    try {
        let blogcontent= await Blog.findById(req.params.id)
        let uppdatedfeatured=blogcontent.featured==="False"?"True":"False";
        
        await Recordlog({task:`CHANGE BLOG FEATURED To ${uppdatedfeatured}`,content:blogcontent,user:req});

        let oldblog= await Blog.findOneAndUpdate({ _id:blogId},{featured:uppdatedfeatured});
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

router.post("/updateblog/:id",adminauth,async (req, res) => {
    try {
        // console.log("Blog Updated",req.params.id)
         const {images,description,title,authername,date} = req.body;
         
        await Recordlog({task:`UPDATE BLOG ${req.params.id}`,content:req.body,user:req});
        if(!images.length){
            Blog.findOneAndUpdate({_id:req.params.id},{description,authername,title,date})
            .then((blg) => res.json(blg))
            .catch((err) => res.status(400).json("Error: " + err));
        }
        else{
            Blog.findOneAndUpdate({_id:req.params.id},{images,description,authername,title,date})
            .then((blg) => res.json(blg))
            .catch((err) => res.status(400).json("Error: " + err));
        }
    } catch (err) {
      res.status(200).send(err);
    }
});

module.exports=router