const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

module.exports =  function connectMongoDB() {
  mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected!');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log(err.message);
  });
}