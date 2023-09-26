const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
