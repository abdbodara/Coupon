const express = require("express");
const { isAuthincated } = require("../middleware/authincation");
const upload = require("../utils/multer");
const {
  createOffer,
  getOffer,
  getPublicOffer,
} = require("../controller/offer");
const router = express.Router();

const uploadFields = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

router.post("/createOffer", isAuthincated, uploadFields, createOffer);
router.get("/getOffer", getOffer);
router.get("/publicoffer/:id", getPublicOffer);

module.exports = router;
