const catchAsyncError = require("../middleware/catchAsyncError");
const Categories = require("../model/categories");
const Coupon = require("../model/coupon");
const Offer = require("../model/offer");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const { unlinkFile } = require("../utils/unlinkFile");

const createCategories = catchAsyncError(async (req, res, next) => {
  try {
    const { categoriesName } = req.body;
    const categoriesImage = req.file.filename;

    const data = await Categories.create({
      categoriesName,
      categoriesImage,
    });
    return res.status(200).json({
      success: true,
      data: data,
      message: "categories created successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getCategories = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Categories.find();
    if (data.length === 0) {
      return next(
        new ErrorHandler("admin has not created any categories", 400, res)
      );
    }

    const categoryData = [];

    for (const category of data) {
      const categoryId = category._id;
      const couponCount = await Coupon.countDocuments({
        categoriesId: categoryId,
      });
      const offerCount = await Offer.countDocuments({
        categoriesId: categoryId,
      });
      categoryData.push({
        _id: categoryId,
        categoriesName: category.categoriesName,
        categoriesImage: category.categoriesImage,
        couponCount,
        offerCount,
      });
    }

    return res.status(200).json({ success: true, data: categoryData });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const categoriesWiseData = catchAsyncError(async (req, res, next) => {
  try {
    const categoriesId = req.params.id;
    const categories = await Categories.find({ _id: categoriesId });
    const coupon = await Coupon.find({ categoriesId: categoriesId }).populate({
      path: "MerchantId",
      select: "RetailerLogo RetailerUrl RetailerName",
    });
    const offer = await Offer.find({ categoriesId: categoriesId }).populate({
      path: "MerchantId",
      select: "RetailerLogo RetailerUrl RetailerName",
    });
    return res
      .status(200)
      .json({ success: true, data: { coupon, offer, categories } });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const updateCategories = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const { categoriesName } = req.body;
    const { categoriesImage } = req.files;
    const newcategoriesImage = categoriesImage
      ? categoriesImage[0]?.filename
      : undefined;

    const data = await Categories.findOne({ _id: id });
    if (newcategoriesImage && data.categoriesImage !== newcategoriesImage) {
      try {
        await unlinkFile(path.join("./public/uploads", data.categoriesImage));
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }

    const updateData = await Categories.findByIdAndUpdate(
      id,
      {
        categoriesImage: newcategoriesImage,
        categoriesName,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: updateData,
      message: "Categories has been updated",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const deleteCategories = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Categories.findByIdAndDelete({ _id: id });
    if (!data) {
      return next(new ErrorHandler("No data found", 400, res));
    }

    if (data.categoriesImage) {
      try {
        await unlinkFile(path.join("./public/uploads", data.categoriesImage));
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }
    return res
      .status(200)
      .json({ success: true, message: "Categories has been deleted" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = {
  createCategories,
  getCategories,
  categoriesWiseData,
  updateCategories,
  deleteCategories,
};
