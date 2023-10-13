const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Brand = require("../model/brand");
const Deals = require("../model/deals");
const Joi = require("joi");
const path = require("path");
const { unlinkFile } = require("../utils/unlinkFile");

const CreateBrand = catchAsyncError(async (req, res, next) => {
  try {
    var { brandLogo } = req.files;
    var brandLogo = brandLogo ? brandLogo[0]?.filename : undefined;
    const querySchema = Joi.object({
      brandTitle: Joi.string(),
      brandLink: Joi.string().uri().required(),
      about: Joi.string(),
    });

    const { error } = querySchema.validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message.split(`"`).join(""))
        .join(", ");
      return next(new ErrorHandler(errorMessage, 400, res));
    }

    const existingWebsite = await Brand.findOne({
      brandLink: req.body.brandLink,
    });
    if (existingWebsite) {
      await unlinkFile(
        path.join("./public/uploads", req.files.brandLogo[0].filename)
      );
      return res.status(406).json({ message: "This URL already exists" });
    }

    const data = new Brand({
      brandLogo,
      ...req.body,
    });
    await data.save();
    return res.status(200).json({
      success: true,
      data: data,
      message: "brand created successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getBrand = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Brand.find({});
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const findByIdBrand = catchAsyncError(async (req, res, next) => {
  try {
    const { _id } = req.query;
    const brand = await Brand.findById({ _id: _id });
    if (!brand) {
      return res
        .status(404)
        .json({ success: false, message: "Brand not found" });
    }
    const products = await Deals.find({ brand: _id });
    return res
      .status(200)
      .json({ success: true, brand: brand, products: products });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const updateBrand = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const { brandLogo } = req.files;
    const newbrandLogo = brandLogo ? brandLogo[0]?.filename : undefined;

    const querySchema = Joi.object({
      brandTitle: Joi.string(),
      brandLink: Joi.string().uri().required(),
      about: Joi.string(),
    });
    const { error } = querySchema.validate(req.body);
    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message.split(`"`).join(""))
        .join(", ");
      return next(new ErrorHandler(errorMessage, 400, res));
    }

    const existingWebsite = await Brand.findOne({ _id: id });

    if (newbrandLogo && existingWebsite.brandLogo !== newbrandLogo) {
      try {
        await unlinkFile(
          path.join("./public/uploads", existingWebsite.brandLogo)
        );
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }
    const updateData = await Brand.findByIdAndUpdate(
      id,
      {
        brandLogo: newbrandLogo,
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
      message: "Brand has been updated",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const deleteBrand = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Brand.findByIdAndDelete({ _id: id });
    if (!data) {
      return next(new ErrorHandler("No Brand found", 400, res));
    }
    if (data.brandLogo) {
      try {
        await unlinkFile(path.join("./public/uploads", data.brandLogo));
      } catch (unlinkErr) {
        console.error(unlinkErr);
      }
    }
    return res
      .status(200)
      .json({ success: true, message: "Brand has been deleted" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = {
  CreateBrand,
  getBrand,
  findByIdBrand,
  updateBrand,
  deleteBrand,
};
