const catchAsyncError = require("../middleware/catchAsyncError");
const Offer = require("../model/offer");
const Merchant = require("../model/merchantmodel");
const ErrorHandler = require("../utils/ErrorHandler");
const user = require("../model/user");

const createOffer = catchAsyncError(async (req, res, next) => {
  try {
    var { logo, image } = req.files;
    const { RetailerName, title, desc, conditions, categories } = req.body;
    var logo = logo ? logo[0]?.filename : undefined;
    var image = image ? image[0]?.filename : undefined;

    const userId = req.user._id;

    const data = await Merchant.findOne({ RetailerName: RetailerName });

    if (!data) {
      return next(
        new ErrorHandler("please enter valid Merchantname", 400, res)
      );
    }

    if (data.status !== true) {
      return next(new ErrorHandler("only activated merchant allow", 400, res));
    }

    const userprofile = await user.findById(userId);

    if (userprofile.role === "admin") {
      const create = await Offer.create({
        MerchantId: data._id,
        RetailerName,
        logo,
        image,
        title,
        desc,
        conditions,
        categories,
        userId,
      });
      return res
        .status(200)
        .json({ data: create, message: "offer created successfully" });
    } else {
      return next(new ErrorHandler("only admin can create offer", 400, res));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getOffer = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Offer.find({});
    const activeOffer = data.filter((value) => value.status === true);
    if (activeOffer.length > 0) {
      return res.status(200).json({ success: true, data: data });
    } else {
      return next(
        new ErrorHandler("admin has not created any offer", 400, res)
      );
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getPublicOffer = catchAsyncError(async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = await Offer.findById(_id).populate("MerchantId");
    if (!data) {
      return next(new ErrorHandler("data not found", 404, res));
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = { createOffer, getOffer, getPublicOffer };
