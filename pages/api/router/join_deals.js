const express = require("express");
const router = express.Router();
const { Join_deals, Join_platforms } = require("../controller/join_deals");

router.post("/join_deals", Join_deals);
router.post("/join_platforms", Join_platforms)

module.exports = router;
