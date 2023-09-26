const express = require("express");
const router = express.Router();
const { create_deal } = require("../controller/secret_deals");

router.post("/secret_deal", create_deal);

module.exports = router;
