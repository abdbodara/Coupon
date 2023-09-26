const express = require("express");
const router = express.Router();
const { isAuthincated } = require("../middleware/authincation");
const {
  createMerchant,
  getMerchant,
  updateStatus,
} = require("../controller/merchantcontroller");
const upload = require("../utils/multer");

const uploadFields = upload.fields([
  { name: "RetailerLogo", maxCount: 1 },
  { name: "RetailerImage", maxCount: 1 },
]);

router.post("/createmerchant", isAuthincated, uploadFields, createMerchant);
router.get("/merchant", getMerchant);
router.put("/status/:id", isAuthincated, updateStatus);

module.exports = router;
