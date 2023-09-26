const express = require("express");
const router = express.Router();
const {
  userLogin,
  getUserProfile,
  addStore,
  getStore,
} = require("../controller/user");
const { isAuthincated } = require("../middleware/authincation");
router.post("/login", userLogin);
router.get("/profile", isAuthincated, getUserProfile);
router.put("/addstore/:id", isAuthincated, addStore);
router.get("/stores", isAuthincated, getStore);

module.exports = router;
