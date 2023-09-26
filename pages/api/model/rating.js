const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Types.ObjectId,
    ref: "merchantmodel",
  },
  value: Number,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("Rating", ratingSchema);
