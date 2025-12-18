const express = require("express");
const priorityControllers = require("../controllers/priorityControllers");

const router = express.Router();

router.get("/", priorityControllers.getAllPriorities);

module.exports = router;
