const mongoose = require("mongoose");

const Merchants = new mongoose.Schema(
  {
    RetailerName: {
      type: String,
    },
    RetailerLogo: {
      type: String,
    },
    RetailerImage: {
      type: String,
    },
    RetailerRank: {
      type: Number,
    },
    SlugUrl: {
      type: String,
    },
    RetailerUrl: {
      type: String,
      unique: true,
    },
    Affilate: [
      {
        name: {
          type: String,
        },
        url: {
          type: String,
          unique: true,
        },
      },
    ],
    RetailerPublish: {
      type: String,
      enum: ["publish", "unpublish"],
      default: "unpublish",
    },
    Title: {
      type: String,
    },
    Desc: {
      type: String,
    },
    Metatitle: {
      type: String,
    },
    Metadesc: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    categoriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
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
module.exports = new mongoose.model("merchantmodel", Merchants);
