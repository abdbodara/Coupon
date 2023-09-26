const Subscribe = require("../model/subscribe");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");

const subscribe = catchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;
    const data = await Subscribe.create({
      email,
    });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return ErrorHandler(error.message, 400, res);
  }
});

module.exports = { subscribe };
