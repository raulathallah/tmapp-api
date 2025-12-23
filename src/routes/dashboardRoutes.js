const express = require("express");
const { getDashboard } = require("../controllers/dashboardControllers");

const router = express.Router();

router.get("/", getDashboard);

module.exports = router;
