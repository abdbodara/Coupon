const Join_deal = require("../model/join_deals");
const Join_platform = require("../model/join_platform");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");

const Join_deals = catchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;
    const data = await Join_deal.create({
      email,
    });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return ErrorHandler(error.message, 400, res);
  }
});

const Join_platforms = catchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;
    const data = await Join_platform.create({
      email,
    });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return ErrorHandler(error.message, 400, res);
  }
});


module.exports = { Join_deals, Join_platforms };
