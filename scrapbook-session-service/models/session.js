var mongoose = require('mongoose')
 
const sessionSchema = new mongoose.Schema({
  createdAt: {type: Date, expires: 3600, default: Date.now},
  userID: {type: String, required: true, unique: true},
  token: {type: String, required: true}
});
sessionSchema.index({"lastModifiedDate": 1 },{ expireAfterSeconds: 3600 });

module.exports = User = mongoose.model('Session', sessionSchema);
