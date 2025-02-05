const express = require("express");
const router = express.Router();
const Controller = require("../controler/controler.js");

// Home Route
router.get(`/`, Controller.Home); 

router.get("/calendar", Controller.calandar);

module.exports = router;