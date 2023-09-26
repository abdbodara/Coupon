const mongoose = require("mongoose");

const dealsModel = new mongoose.Schema(
  {
    offer: {
      type: String,
      require: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    oldPrice: {
      type: Number,
      require: true,
    },
    productLink: {
      type: String,
    },
    categories: {
      type: String,
      enum: ["trending deals", "deals of the day"],
      default: "deals of the day",
    },
    productCategories: {
      type: String,
      enum: ["best deals", "more deals"],
      default: "more deals",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("delas", dealsModel);
