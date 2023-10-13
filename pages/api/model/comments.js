const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
  comment: {
    type: String,
  },
  date: {
    type: Number,
    default: () => new Date().getFullYear(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  couponId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coupon",
    default: null,
  },
  offerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offer",
    default: null,
  },
});

module.exports = mongoose.model("comment", Comment);
