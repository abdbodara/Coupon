const express = require("express");
const router = express.Router();
const { isAuthincated } = require("../middleware/authincation");
const {
  createCoupon,
  getCoupon,
  getPublicCoupon,
  getGateroriesData,
  getCouponLength,
  getCouponData,
  getCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controller/coupon");

router.post("/couponCoupon", isAuthincated, createCoupon);
router.get("/getCoupon", isAuthincated, getCoupon);
router.get("/getCoupons", getCoupons);
router.get("/getPublicCoupon/:merchantId", getPublicCoupon);
router.get("/getcategories", getGateroriesData);
router.get("/countlength", getCouponLength);
router.get("/publiccoupon/:id", getCouponData);
router.put("/updateCoupon/:id", isAuthincated, updateCoupon);
router.delete("/deleteCoupon/:id", isAuthincated, deleteCoupon);

module.exports = router;
