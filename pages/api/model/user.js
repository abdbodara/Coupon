const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userLogin = new mongoose.Schema(
  {
    clientId: {
      type: String,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please enter valid email"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    store: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "merchantmodel",
      },
    ],
    favoriteCoupon: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coupon",
      },
    ],
    favoriteOffer: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// JWT TOKEN
userLogin.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("user", userLogin);
