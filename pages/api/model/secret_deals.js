const mongoose = require("mongoose");

const secret_deals = new mongoose.Schema({
  email: {
    type: String,
  },
});

module.exports = mongoose.model("secret_deals", secret_deals);
