const mongoose = require("mongoose");

const Offer = new mongoose.Schema(
  {
    RetailerName: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    conditions: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      enum: [
        "Most Used",
        "Travel",
        "Recharge",
        "Fashion",
        "Food",
        "Electronics",
      ],
      default: "Most Used",
    },
    status: {
      type: Boolean,
      default: true,
    },
    offer: {
      type: String,
      default: "OFFER ACTIVATED",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    MerchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "merchantmodel",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Offer", Offer);
