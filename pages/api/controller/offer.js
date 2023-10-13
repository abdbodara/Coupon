const catchAsyncError = require("../middleware/catchAsyncError");
const Offer = require("../model/offer");
const Merchant = require("../model/merchantmodel");
const ErrorHandler = require("../utils/ErrorHandler");
const user = require("../model/user");
const path = require("path");
const { unlinkFile } = require("../utils/unlinkFile");

const createOffer = catchAsyncError(async (req, res, next) => {
  try {
    var { logo, image } = req.files;
    const { RetailerName, title, desc, conditions, categoriesId } = req.body;
    var logo = logo ? logo[0]?.filename : undefined;
    var image = image ? image[0]?.filename : undefined;

    const userId = req.user._id;

    const data = await Merchant.findOne({ RetailerName: RetailerName });

    if (!data) {
      await unlinkFile(
        path.join("./public/uploads", req?.files.logo[0]?.filename)
      );
      await unlinkFile(
        path.join("./public/uploads", req.files.image[0]?.filename)
      );
      return next(
        new ErrorHandler("please enter valid Merchantname", 400, res)
      );
    }

    if (data.status !== true) {
      await unlinkFile(
        path.join("./public/uploads", req?.files.logo[0]?.filename)
      );
      await unlinkFile(
        path.join("./public/uploads", req.files.image[0]?.filename)
      );
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
        userId,
        categoriesId: categoriesId,
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

const updateOffer = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const { logo, image } = req.files;
    const newLogo = logo ? logo[0]?.filename : undefined;
    const newImage = image ? image[0]?.filename : undefined;
    const { RetailerName, title, desc, conditions, categoriesId } = req.body;
    const data = await Merchant.findOne({ RetailerName: RetailerName });

    if (!data) {
      await unlinkFile(
        path.join("./public/uploads", req?.files.logo[0]?.filename)
      );
      await unlinkFile(
        path.join("./public/uploads", req.files.image[0]?.filename)
      );
      return next(
        new ErrorHandler("please enter valid Merchantname", 400, res)
      );
    }

    if (data.status !== true) {
      await unlinkFile(
        path.join("./public/uploads", req?.files.logo[0]?.filename)
      );
      await unlinkFile(
        path.join("./public/uploads", req.files.image[0]?.filename)
      );
      return next(new ErrorHandler("only activated merchant allow", 400, res));
    }

    const offerData = await Offer.findOne({ _id: id });

    if (newLogo && offerData.logo) {
      await unlinkFile(path.join("./public/uploads", offerData.logo));
    }

    if (newImage && offerData.image) {
      await unlinkFile(path.join("./public/uploads", offerData.image));
    }

    const updateData = await Offer.findByIdAndUpdate(
      id,
      {
        RetailerName: data.RetailerName,
        title,
        desc,
        conditions,
        categoriesId,
        logo: newLogo,
        image: newImage,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: updateData,
      message: "Offer has been updated",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const deleteOffer = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Offer.findByIdAndDelete({ _id: id });
    if (!data) {
      return next(new ErrorHandler("No data found", 400, res));
    }
    if (data.logo && data.image) {
      try {
        await unlinkFile(
          path.join("./public/uploads", data.logo),
          await unlinkFile(path.join("./public/uploads", data.image))
        );
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }
    return res
      .status(200)
      .json({ success: true, message: "Offer has been deleted" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});
module.exports = {
  createOffer,
  getOffer,
  getPublicOffer,
  updateOffer,
  deleteOffer,
};
