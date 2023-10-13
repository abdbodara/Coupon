const mongoose = require("mongoose");

const PopularStore = new mongoose.Schema({
  merchantData: [
    {
      merchant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "merchantmodel",
      },
    },
  ],
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
});

module.exports = mongoose.model("popular_store", PopularStore);
