const express = require("express");
const { isAuthincated } = require("../middleware/authincation");
const { createContact } = require("../controller/contact");
const router = express.Router();

router.post("/contact", isAuthincated, createContact);
module.exports = router;
