const mongoose = require("mongoose");

const Join_platforms = new mongoose.Schema({
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Join_platforms", Join_platforms);
