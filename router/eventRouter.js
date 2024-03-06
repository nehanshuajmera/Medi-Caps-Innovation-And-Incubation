const router = require("express").Router();
const Event=require("../models/eventModel")
const adminauth=require("../middleware/adminauth");
const {Recordlog}=require("../Security/Recordip");

router.use("/eventbanar", require("./eventBanar"));
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
        like:0,
        registrationstatus:"ongoing",
        comments:[],
        created_at:new Date(),
        featured:"False"
        });
       
     await Recordlog({task:"ADD EVENT",content:newevent,user:req});
  
    newevent.save()
        .then(() => res.json("Blog Added Succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

//   delete event
router.get("/deleteevent/:id",adminauth, async (req, res) => {
    const eventId= req.params.id;
    try {
        let oldevent= await Event.findOneAndDelete({ _id:eventId});
      
        await Recordlog({task:`Delete Event ${eventId}`,content:oldevent,user:req});

        res.status(200).send(oldevent);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  
router.get("/changefeaturedstatus/:id",adminauth, async (req, res) => {
  const eventId= req.params.id;
  // console.log("Change api status")
  try {
      let eventcontent= await Event.findById(req.params.id)
      let uppdatedfeatured=eventcontent.featured==="False"?"True":"False";
      // console.log(uppdatedfeatured)
      
      await Recordlog({task:`CHANGE EVENT FEATURED To ${uppdatedfeatured}`,content:eventcontent,user:req});

      let oldevent= await Event.findOneAndUpdate({ _id:eventId},{featured:uppdatedfeatured});
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

router.get("/singleevent/:id", (req, res) => {
    // console.log(req.params.id)
    try {
        Event.findById(req.params.id)
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.post("/updateevent/:id",adminauth, async(req, res) => {
  try {
      // console.log("Events Updated",req.params.id)
       const {images, description,title,authername,date,time,location,numberofspeaker,registrationfee} = req.body;

       await Recordlog({task:`UPDATE Event ${req.params.id}`,content:req.body,user:req});
       if (!images.length) {
        Event.findOneAndUpdate({_id:req.params.id},{ description,title,authername,date,time,location,numberofspeaker,registrationfee})
        .then((evt) => res.json(evt))
        .catch((err) => res.status(400).json("Error: " + err));        
       }
       else{
         Event.findOneAndUpdate({_id:req.params.id},{images, description,title,authername,date,time,location,numberofspeaker,registrationfee})
         .then((evt) => res.json(evt))
         .catch((err) => res.status(400).json("Error: " + err));
       }
  } catch (err) {
    res.status(200).send(err);
  }
});

module.exports=router