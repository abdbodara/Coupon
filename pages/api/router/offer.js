const express = require("express");
const { isAuthincated } = require("../middleware/authincation");
const upload = require("../utils/multer");
const {
  createOffer,
  getOffer,
  getPublicOffer,
  deleteOffer,
  updateOffer,
} = require("../controller/offer");
const router = express.Router();

const uploadFields = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

router.post("/createOffer", isAuthincated, uploadFields, createOffer);
router.get("/getOffer", getOffer);
router.get("/publicoffer/:id", getPublicOffer);
router.put("/updateOffer/:id", isAuthincated, uploadFields, updateOffer);
router.delete("/deleteOffer/:id", isAuthincated, deleteOffer);

module.exports = router;
