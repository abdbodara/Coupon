const express = require("express");
const router = express.Router();
const { CreateDeals, getDeals } = require("../controller/deals");
const upload = require("../utils/multer");

const uploadFields = upload.fields([{ name: "image", maxCount: 1 }]);

router.post("/createdeals", uploadFields, CreateDeals);
router.get("/getdeals", getDeals);

module.exports = router;
