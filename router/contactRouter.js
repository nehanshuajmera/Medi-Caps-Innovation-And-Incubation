const router = require("express").Router();
const Contact=require("../models/contactModel")
const adminauth=require("../middleware/adminauth");

router.post("/", async (req, res) => {
  // console.log(req.body);
    const { name,phone,email,query,idea,message} = req.body;
    const newuser = new Contact({
        name,
        phone,
        email,
        query,
        idea,
        message
    });
   
    newuser.save()
        .then(() => res.json("New Query Added Succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  
  router.get("/allquery",adminauth, (req, res) => {
    try {
        // console.log("searching for blogs")
        Contact.find()
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
  });

module.exports=router