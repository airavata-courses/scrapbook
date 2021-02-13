var mongoose = require('mongoose')
 
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
    },
    photo: {
      type: String
    },
    token: {
      type: String
    }
  },
);
 
module.exports = User = mongoose.model('User', userSchema);
