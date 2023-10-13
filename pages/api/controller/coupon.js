const catchAsyncError = require("../middleware/catchAsyncError");
const Coupon = require("../model/coupon");
const Merchant = require("../model/merchantmodel");
const offer = require("../model/offer");
const user = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const schedule = require("node-schedule");

const createCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const {
      RetailerName,
      CouponCode,
      ExpiryDate,
      Conditions,
      Title,
      Description,
      categoriesId,
    } = req.body;
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
      const create = await Coupon.create({
        MerchantId: data._id,
        RetailerName,
        CouponCode,
        ExpiryDate,
        Conditions,
        Title,
        Description,
        categoriesId,
        userId,
      });
      return res
        .status(200)
        .json({ data: create, message: "coupon created successfully" });
    } else {
      return next(new ErrorHandler("only admin can create coupon", 400, res));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500, res));
  }
});

async function deleteExpiredCoupons() {
  try {
    const now = new Date();
    await Coupon.deleteMany({ ExpiryDate: { $lt: now }, status: "Active" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

schedule.scheduleJob("0 0 * * *", deleteExpiredCoupons);

const getCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const data = await Coupon.find({ userId: userId });
    if (data.length === 0) {
      return next(
        new ErrorHandler("user has not created any coupon", 400, res)
      );
    }
    return res.status(200).json({ data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getCoupons = catchAsyncError(async (req, res, next) => {
  try {
    const data = await Coupon.find({}).populate("MerchantId");
    if (data.length === 0) {
      return next(
        new ErrorHandler("user has not created any coupon", 400, res)
      );
    }
    return res.status(200).json({ data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getPublicCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const merchantId = req.params.merchantId;
    const data = await Coupon.find({ MerchantId: merchantId }).populate(
      "MerchantId"
    );
    const value = await offer
      .find({ MerchantId: merchantId })
      .populate("MerchantId");
    if (data.length === 0) {
      return next(new ErrorHandler("no any coupon", 400, res));
    }
    return res.status(200).json({ data: [{ coupon: data }, { offer: value }] });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getGateroriesData = catchAsyncError(async (req, res, next) => {
  try {
    const { categoriesId } = req.query;
    const coupon = await Coupon.find({ categoriesId: categoriesId }).populate(
      "MerchantId"
    );
    return res.status(200).json({ success: true, data: coupon });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getCouponLength = catchAsyncError(async (req, res, next) => {
  try {
    const coupon = await Coupon.countDocuments();
    const Offer = await offer.countDocuments();
    const totalcountlength = coupon + Offer;
    return res.status(200).json({ success: true, data: totalcountlength });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getCouponData = catchAsyncError(async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = await Coupon.findById(_id).populate("MerchantId");
    if (!data) {
      return next(new ErrorHandler("data not found", 404, res));
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const updateCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      RetailerName,
      CouponCode,
      ExpiryDate,
      Conditions,
      Title,
      Description,
      categoriesId,
    } = req.body;
    const newData = {
      RetailerName,
      CouponCode,
      ExpiryDate,
      Conditions,
      Title,
      Description,
      categoriesId,
    };
    const userId = req.user._id;
    const userData = await user.findById(userId);
    if (userData.role === "admin") {
      const coupon = await Coupon.findByIdAndUpdate({ _id: id }, newData, {
        new: true,
        runValidators: true,
      });
      return res.status(200).json({
        success: true,
        data: coupon,
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const deleteCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const id = req.params.id;
    await Coupon.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "coupon hass been deleted",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = {
  createCoupon,
  getCoupon,
  getCoupons,
  getPublicCoupon,
  getGateroriesData,
  getCouponLength,
  getCouponData,
  updateCoupon,
  deleteCoupon,
};
