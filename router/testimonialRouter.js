const router = require("express").Router();
const Testimonial = require("../models/testimonialModel")
const adminauth = require("../middleware/adminauth");
const {Recordlog}=require("../Security/Recordip");

router.get("/",(req, res) => {
    try {
        // console.log("ALl testimonials")
        Testimonial.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.post("/addtestimonial", adminauth, async (req, res) => {
    try {
        // console.log(req.body)
        const {content,name,profileurl,designation} = req.body;
            const newtestimonial = new Testimonial({ content,name,profileurl,designation,created_at: new Date(),sequence_no:0});

        await Recordlog({task:"ADD TESTIMONIAL",content:newtestimonial,user:req});
            
        newtestimonial.save()
            .then(() => res.json("New Testimonial added Succesfully"))
            .catch((err) =>{
                console.log("ERROR :",err); 
            res.status(400).json("Error: " + err);
        });
    } catch (err) {
        console.log("ERROR :",err)
        res.status(200).send(err);
    }
});

//   delete testimonials
router.get("/deletetestimonial/:id",adminauth, async (req, res) => {
    // console.log("Delete Testimonials")
    const testimonialsId= req.params.id;
    try {
        let oldtestimonials= await Testimonial.findOneAndDelete({ _id:testimonialsId});

        await Recordlog({task:"DELETE TESTIMONIAL",content:oldtestimonials,user:req});
        
        res.status(200).send(oldtestimonials);
    } catch (err) {
      res.status(200).send(err);
    }
  });
  
module.exports = router
