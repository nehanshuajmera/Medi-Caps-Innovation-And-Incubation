const router = require("express").Router();
const Contact=require("../models/contactModel")

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
  

module.exports=router