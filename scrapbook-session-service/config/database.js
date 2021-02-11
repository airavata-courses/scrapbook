const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/scrapbookSessionService"
module.exports =  function connectMongoDB() {
  mongoose.connect(uri, {
    useNewUrlParser: "true",
  })
  mongoose.set('useFindAndModify', false);

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