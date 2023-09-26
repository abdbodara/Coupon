const express = require("express");
const router = express.Router();
const { CreateBrand, getBrand, findByIdBrand } = require("../controller/brand");
const upload = require("../utils/multer");

const uploadFields = upload.fields([{ name: "brandLogo", maxCount: 1 }]);

router.post("/brand", uploadFields, CreateBrand);
router.get("/getbrands", getBrand);
router.get("/getbrand", findByIdBrand);
module.exports = router;
