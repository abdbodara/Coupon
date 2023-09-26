const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Deals = require("../model/deals");
const Joi = require("joi");

const CreateDeals = catchAsyncError(async (req, res, next) => {
  try {
    var { image } = req.files;
    var image = image ? image[0]?.filename : undefined;
    const querySchema = Joi.object({
      offer: Joi.string(),
      brand: Joi.string().id().required(),
      description: Joi.string(),
      price: Joi.number(),
      oldPrice: Joi.number(),
      productLink: Joi.string().uri().required(),
      categories: Joi.string(),
      productCategories: Joi.string(),
      status: Joi.boolean(),
    });

    const { error } = querySchema.validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message.split(`"`).join(""))
        .join(", ");
      return next(new ErrorHandler(errorMessage, 400, res));
    }

    const data = new Deals({
      image,
      ...req.body,
    });
    await data.save();
    return res.status(200).json({
      success: true,
      data: data,
      message: "deals created successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getDeals = catchAsyncError(async (req, res, next) => {
  try {
    const { categories } = req.query;
    const data = await Deals.find({ categories: categories }).populate("brand");
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = { CreateDeals, getDeals };
