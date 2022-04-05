const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/?readPreference=primary&ssl=false";

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });
