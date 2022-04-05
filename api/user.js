const mongoose = require("mongoose");

const userschme = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  number: {
    type: Number,
    require: true,
  },
});

const user = mongoose.model("USER", userschme);

module.exports = user;
