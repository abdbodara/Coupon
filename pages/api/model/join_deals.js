const mongoose = require("mongoose");

const Join_deals = new mongoose.Schema({
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Join_deals", Join_deals);
