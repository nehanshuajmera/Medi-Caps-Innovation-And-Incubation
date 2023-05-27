const router = require("express").Router();
const Event=require("../models/eventModel")
const adminauth=require("../middleware/adminauth");

// add new event
router.post("/addevent",adminauth, async (req, res) => {
  // console.log(req.body);
    const { images,description,title,authername,date,time,location,numberofspeaker,registrationfee} = req.body;
    const newevent = new Event({
        images,
        description,
        title,
        authername,
        date,
        time,
        location,
        numberofspeaker,
        registrationfee,
        likes:0,
        comments:[]
        });
   
    newevent.save()
        .then(() => res.json("Blog Added Succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

//   delete event
router.get("/deleteevent/:id",adminauth, async (req, res) => {
    const eventId= req.params.id;
    try {
        let oldevent= await Event.findOneAndDelete({ _id:eventId});
        res.status(200).send(oldevent);
    } catch (err) {
      res.status(200).send(err);
    }
  });

router.get("/allevents",(req, res) => {
    try {
        // console.log("searching for event")
        Event.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

module.exports=router