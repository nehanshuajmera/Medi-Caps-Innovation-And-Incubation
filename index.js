const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// const adminauth= require("./middleware/adminauth")
dotenv.config();
app.use(express.json());

app.use(cors({
    origin: [
       "http://localhost:3000",
    ],
     credentials: true,
   })
);
app.use(cookieParser());

// connect to mongoDB
// console.log(process.env.MDB_CONNECT)
// connect to mongoDB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MDB_CONNECT) 
.then(()=>{console.log('Mongodb connected')})
.catch((err)=>{console.log("Error in connection",err)});

// console.log("udsgfgd")

//  set up routes
app.use("/admin",require("./router/adminRouter"));
app.use("/blog", require("./router/blogRouter"));
app.use("/event", require("./router/eventRouter"));
app.use("/contactdetails", require("./router/contactRouter"));
app.use("/testimonial", require("./router/testimonialRouter"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

const path=require("path");
app.use(express.static('client/build'));
 app.get('*', (req, res) => {
    res.sendFile(path.resolve('client','build','index.html'));
});