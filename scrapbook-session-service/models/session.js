var mongoose = require('mongoose')
 
const sessionSchema = new mongoose.Schema({
  user: {type: String},
  createdAt: {type: Date},
  event: {type: String}
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = User = mongoose.model('Session', sessionSchema);
