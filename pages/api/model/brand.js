const mongoose = require("mongoose");

const brandModel = new mongoose.Schema(
  {
    brandLogo: {
      type: String,
    },
    brandTitle: {
      type: String,
      require: true,
    },
    brandLink: {
      type: String,
    },
    about: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("brand", brandModel);
