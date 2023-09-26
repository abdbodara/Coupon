const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
  Fullname: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  Select: {
    type: String,
    enum: [
      "Cricket Fantasy (Campaigns)",
      "Business",
      "Problem with a Coupon",
      "Site Feedback",
      "General Question",
      "Others",
    ],
    default: "Others",
  },
  Contact: {
    type: Number,
    require: true,
    // minlength: 10,
    // maxlength: 10,
  },
  Message: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("contact", Contact);
