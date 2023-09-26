const Merchant = require("../model/merchantmodel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const user = require("../model/user");
const Joi = require("joi");
const slug = require("slug");

const createMerchant = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    var { RetailerLogo, RetailerImage } = req.files;

    var RetailerLogo = RetailerLogo ? RetailerLogo[0]?.filename : undefined;
    var RetailerImage = RetailerImage ? RetailerImage[0]?.filename : undefined;

    const querySchema = Joi.object({
      RetailerName: Joi.string(),
      RetailerRank: Joi.number(),
      Categories: Joi.string(),
      RetailerUrl: Joi.string().uri().required(),
      Affilate: Joi.array(),
      RetailerPublish: Joi.string(),
      Title: Joi.string(),
      Desc: Joi.string(),
      Metatitle: Joi.string(),
      Metadesc: Joi.string(),
    });

    const slugUrl = slug(req.body.RetailerUrl, { lower: true });

    const { error } = querySchema.validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message.split(`"`).join(""))
        .join(", ");
      return next(new ErrorHandler(errorMessage, 400, res));
    }

    const existingWebsite = await Merchant.findOne({
      RetailerUrl: req.body.RetailerUrl,
    });

    if (existingWebsite) {
      return res.status(406).json({ message: "This URL already exists" });
    }

    const value = await user.findById(userId);
    if (value.role === "admin") {
      const data = new Merchant({
        userId: userId,
        RetailerLogo,
        RetailerImage,
        SlugUrl: slugUrl,
        ...req.body,
      });
      await data.save();
      res
        .status(201)
        .json({ data: data, message: "Merchant created successfully." });
    } else {
      return next(
        new ErrorHandler("Only admin can create this merchant", 400, res)
      );
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500, res));
  }
});

const getMerchant = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Merchant.find();
    const activeBanners = data.filter((banner) => banner.status === true);
    if (activeBanners.length > 0) {
      return res.status(200).json({ status: true, data: activeBanners });
    } else {
      return next(
        new ErrorHandler("Admin has not created any active banners", 400, res)
      );
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const updateStatus = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const bannerId = req.params.id;
    const bannerdata = await Merchant.findById(bannerId);
    if (!bannerdata) {
      return next(new ErrorHandler("merchant not found", 400, res));
    }
    const value = await user.findById(userId);
    if (value.role === "admin") {
      bannerdata.status = !bannerdata.status;
      await bannerdata.save();
      return res.status(200).json({ success: true, data: bannerdata });
    } else {
      return next(new ErrorHandler("only admin can update status", 400, res));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = { createMerchant, getMerchant, updateStatus };
