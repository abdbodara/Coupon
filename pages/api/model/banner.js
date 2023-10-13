const mongoose = require("mongoose");

const Banner = new mongoose.Schema({
  bannerImage: {
    type: String,
  },
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchantmodel",
  },
  link: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("banner", Banner);
