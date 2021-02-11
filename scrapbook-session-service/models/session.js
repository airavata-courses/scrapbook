var mongoose = require('mongoose')
 
const sessionSchema = new mongoose.Schema({
  userID: {type: String, required: true, unique: true},
  token: {type: String, required: true}
});

module.exports = User = mongoose.model('Session', sessionSchema);
