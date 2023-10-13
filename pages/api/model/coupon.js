const mongoose = require("mongoose");

const coupon = new mongoose.Schema(
  {
    RetailerName: {
      type: String,
      required: true,
    },
    CouponCode: {
      type: String,
      required: true,
    },
    ExpiryDate: {
      type: Date,
      required: true,
    },
    Conditions: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Expired"],
      default: "Active",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    MerchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "merchantmodel",
    },
    categoriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("coupon", coupon);
