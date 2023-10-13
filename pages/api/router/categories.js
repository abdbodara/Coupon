const express = require("express");
const {
  createCategories,
  getCategories,
  categoriesWiseData,
  updateCategories,
  deleteCategories,
} = require("../controller/categories");
const upload = require("../utils/multer");
const { isAuthincated } = require("../middleware/authincation");
const router = express.Router();

const uploadFields = upload.fields([{ name: "categoriesImage", maxCount: 1 }]);

router.post(
  "/createCategories",
  upload.single("categoriesImage"),
  createCategories
);
router.get("/getCategoriesData", getCategories);
router.get("/categoriesWiseData/:id", categoriesWiseData);
router.put(
  "/updateCategories/:id",
  isAuthincated,
  uploadFields,
  updateCategories
);
router.delete("/deleteCategories/:id", isAuthincated, deleteCategories);
module.exports = router;
