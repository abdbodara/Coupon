const catchAsyncError = require("../middleware/catchAsyncError");
const Rating = require("../model/rating");
const user = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");

const createRating = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { itemId, value } = req.body;
    const rating = await Rating.create({
      itemId,
      value,
      userId,
    });
    const userprofile = await user.findById(userId);
    if (!userprofile) {
      return next(
        new ErrorHandler(
          "please login before you can add your rating",
          400,
          res
        )
      );
    }
    res.status(201).json({ success: true, data: rating });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getRating = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Rating.find();
    if (!data) {
      return next(new ErrorHandler("rating not found", 400, res));
    }
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});
module.exports = { createRating, getRating };
