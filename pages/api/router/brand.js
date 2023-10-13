const express = require("express");
const router = express.Router();
const {
  CreateBrand,
  getBrand,
  findByIdBrand,
  updateBrand,
  deleteBrand,
} = require("../controller/brand");
const upload = require("../utils/multer");
const { isAuthincated } = require("../middleware/authincation");

const uploadFields = upload.fields([{ name: "brandLogo", maxCount: 1 }]);

router.post("/brand", isAuthincated, uploadFields, CreateBrand);
router.get("/getbrands", getBrand);
router.get("/getbrand", findByIdBrand);
router.put("/updateBrand/:id", isAuthincated, uploadFields, updateBrand);
router.delete("/deleteBrand/:id", isAuthincated, deleteBrand);
module.exports = router;
