const express = require("express");
const taskControllers = require("../controllers/taskControllers");
const statusControllers = require("../controllers/statusControllers");

const router = express.Router();

router.get("/", taskControllers.getAllTask);
router.get("/:id", taskControllers.getTask);
router.delete("/:id", taskControllers.deleteTask);
router.post("/create", taskControllers.createTask);
router.post("/update-status/:id", statusControllers.updateStatusTask);

module.exports = router;
