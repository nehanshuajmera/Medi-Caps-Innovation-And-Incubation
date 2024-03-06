const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:  { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pass:{ type: String, required: true },
  created_at:{type:String,required: true}
});

const User = mongoose.model('user', UserSchema);
module.exports=User;