const mongoose = require("mongoose");

const subscribeModel = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
});

module.exports = mongoose.model("subscribe", subscribeModel);
