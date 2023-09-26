const Secret_deals = require("../model/secret_deals");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");

const create_deal = catchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;
    const data = await Secret_deals.create({
      email,
    });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return ErrorHandler(error.message, 400, res);
  }
});

module.exports = { create_deal };
