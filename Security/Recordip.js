const UserIP = require("../models/UserIPModel");

exports.Recordlog =(props) => {
    try {
    // console.log("RECORD LOG",props);
    // task , content
    const clientIp = props.user.headers['x-forwarded-for'] || props.user.connection.remoteAddress;
    const newlog = new UserIP({user:{"rawheader":JSON.stringify(props.user.rawHeaders),"IP":clientIp},task:props.task,content:props.content,created_at:new Date()});
    // console.log(newlog)
    newlog.save().then(() => console.log(`USER IP ${clientIp} `))
        .catch((err) => console.log("Error: " + err)); 
    } catch (err) {
        console.log("ERROR: ",err);
    }
};