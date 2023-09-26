const express = require("express");
const { isAuthincated } = require("../middleware/authincation");
const { createRating, getRating } = require("../controller/rating");
const router = express.Router();

router.post("/rating", isAuthincated, createRating);
router.get("/getRating", getRating);

module.exports = router;
