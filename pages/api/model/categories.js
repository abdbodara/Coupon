const mongoose = require("mongoose");

const Categories = new mongoose.Schema({
  categoriesName: {
    type: String,
    require: true,
  },
  categoriesImage: {
    type: String,
  },
});

module.exports = mongoose.model("categories", Categories);
