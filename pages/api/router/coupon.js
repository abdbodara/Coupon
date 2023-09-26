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
} = require("../controller/coupon");

router.post("/couponCoupon", isAuthincated, createCoupon);
router.get("/getCoupon", isAuthincated, getCoupon);
router.get("/getPublicCoupon/:merchantId", getPublicCoupon);
router.get("/getcategories", getGateroriesData);
router.get("/countlength", getCouponLength);
router.get("/publiccoupon/:id", getCouponData);

module.exports = router;
