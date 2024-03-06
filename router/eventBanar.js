const router = require("express").Router();
const EventBanar = require("../models/eventBanarModel")
const adminauth = require("../middleware/adminauth");
const {Recordlog}=require("../Security/Recordip");

router.get("/allbanar",(req, res) => {
    try {
        EventBanar.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
});

router.post("/addbanar", adminauth, async (req, res) => {
    try {
        var { image } = req.body;
        image=String(image);

        await Recordlog({task:"ADD Banner",content:req.body,user:req});
        
        const banar = await EventBanar.find();
        if (!banar.length) {

            const newBanar = new EventBanar({ image: image, updated_at: new Date() });
            newBanar.save().then(() => res.json("Bannar was Created Succesfully"))
                .catch((err) => res.status(400).json("Error: " + err));
        }
        else {
            let oldevent = await EventBanar.findOneAndUpdate({ _id: banar[0]._id }, {image:image, updated_at: new Date() });
            res.status(200).send(oldevent);
        }
    } catch (err) {
        res.status(200).send(err);
    }
});
module.exports = router
