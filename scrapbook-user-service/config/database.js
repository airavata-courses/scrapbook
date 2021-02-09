const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/scrapbookUserService"
module.exports =  function connectMongoDB() {
  mongoose.connect("mongodb://localhost:27017/scrapbookUserService", {
    useNewUrlParser: "true",
  })
  try {
     mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("MongoDB is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
}