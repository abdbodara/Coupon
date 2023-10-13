const mongoose = require("mongoose");

const Reply = new mongoose.Schema({
  reply: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  msgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },
  date: {
    type: Number,
    default: () => new Date().getFullYear(),
  },
});

module.exports = mongoose.model("reply", Reply);
