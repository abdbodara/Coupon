const Merchant = require("../model/merchantmodel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const user = require("../model/user");
const Joi = require("joi");
const slug = require("slug");
const path = require("path");
const { unlinkFile } = require("../utils/unlinkFile");

const createMerchant = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    var { RetailerLogo, RetailerImage } = req.files;

    var RetailerLogo = RetailerLogo ? RetailerLogo[0]?.filename : undefined;
    var RetailerImage = RetailerImage ? RetailerImage[0]?.filename : undefined;

    const querySchema = Joi.object({
      RetailerName: Joi.string(),
      RetailerRank: Joi.number(),
      RetailerUrl: Joi.string().uri().required(),
      Affilate: Joi.array(),
      RetailerPublish: Joi.string(),
      Title: Joi.string(),
      Desc: Joi.string(),
      Metatitle: Joi.string(),
      Metadesc: Joi.string(),
      categoriesId: Joi.string().id().required(),
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
      await unlinkFile(
        path.join("./public/uploads", req?.files.RetailerLogo[0]?.filename)
      );
      await unlinkFile(
        path.join("./public/uploads", req.files.RetailerImage[0]?.filename)
      );
      return res.status(406).json({ message: "This URL already exists" });
    }

    const value = await user.findById(userId);
    console.log("Req.body------------>", req.body);
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
      const merchants = await Merchant.aggregate([
        {
          $match: { status: true }, // Filter active merchants
        },
        {
          $lookup: {
            from: "coupons", // The name of the Coupon collection
            localField: "_id",
            foreignField: "MerchantId",
            as: "coupons",
          },
        },
        {
          $lookup: {
            from: "offers", // The name of the Offer collection
            localField: "_id",
            foreignField: "MerchantId",
            as: "offers",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            couponCount: { $size: "$coupons" },
            offerCount: { $size: "$offers" },
          },
        },
      ]);

      return res.status(200).json({
        status: true,
        data: activeBanners,
        count: merchants,
      });
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

const updateMerchant = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const userId = req.user._id;
    const { RetailerLogo, RetailerImage } = req.files;
    const newRetailerLogo = RetailerLogo
      ? RetailerLogo[0]?.filename
      : undefined;
    const newRetailerImage = RetailerImage
      ? RetailerImage[0]?.filename
      : undefined;
    const querySchema = Joi.object({
      RetailerName: Joi.string(),
      RetailerRank: Joi.number(),
      RetailerUrl: Joi.string().uri().required(),
      Affilate: Joi.array(),
      RetailerPublish: Joi.string(),
      Title: Joi.string(),
      Desc: Joi.string(),
      Metatitle: Joi.string(),
      Metadesc: Joi.string(),
      categoriesId: Joi.string().id().required(),
    });

    const slugUrl = slug(req.body.RetailerUrl, { lower: true });
    const { error } = querySchema.validate(req.body);
    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message.split(`"`).join(""))
        .join(", ");
      return next(new ErrorHandler(errorMessage, 400, res));
    }
    const existingWebsite = await Merchant.findOne({ _id: id });
    if (newRetailerLogo && existingWebsite.RetailerLogo !== newRetailerLogo) {
      try {
        await unlinkFile(
          path.join("./public/uploads", existingWebsite.RetailerLogo)
        );
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }
    if (
      newRetailerImage &&
      existingWebsite.RetailerImage !== newRetailerImage
    ) {
      try {
        await unlinkFile(
          path.join("./public/uploads", existingWebsite.RetailerImage)
        );
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }

    if (existingWebsite.RetailerUrl != req.body.RetailerUrl) {
      const existingUrl = await Merchant.findOne({
        RetailerUrl: req.body.RetailerUrl,
      });
      if (existingUrl) {
        return res.status(406).json({ message: "This URL already exists" });
      }
    }
    const updateData = await Merchant.findByIdAndUpdate(
      id,
      {
        userId: userId,
        RetailerLogo: newRetailerLogo,
        RetailerImage: newRetailerImage,
        SlugUrl: slugUrl,
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: updateData,
      message: "Merchant has been updated",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const deleteMerchant = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const userId = req.user._id;
    const userData = await user.findById(userId);
    if (userData.role === "admin") {
      const data = await Merchant.findByIdAndDelete({ _id: id });
      if (!data) {
        return next(new ErrorHandler("No merchant found", 400, res));
      }
      if (data.RetailerLogo && data.RetailerImage) {
        try {
          await unlinkFile(
            path.join("./public/uploads", data.RetailerLogo),
            await unlinkFile(path.join("./public/uploads", data.RetailerImage))
          );
        } catch (unlinkErr) {
          console.error(unlinkErr);
        }
      }
      return res
        .status(200)
        .json({ success: true, message: "Merchant has been deleted" });
    } else {
      return next(
        new ErrorHandler("only admin can delete this merchant", 400, res)
      );
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = {
  createMerchant,
  getMerchant,
  updateStatus,
  updateMerchant,
  deleteMerchant,
};
