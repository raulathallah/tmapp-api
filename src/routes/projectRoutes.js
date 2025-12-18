const express = require("express");
const projectControllers = require("../controllers/projectControllers");

const router = express.Router();

router.get("/", projectControllers.getAllProject);
router.post("/create", projectControllers.createProject);

module.exports = router;
