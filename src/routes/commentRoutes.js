const express = require("express");
const commentControllers = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", commentControllers.getAllCommentsByTaskId);
//router.get("/:id", taskControllers.getTask);
router.delete("/delete/:id", commentControllers.delete);
router.post("/create", commentControllers.create);
router.post("/update/:id", commentControllers.update);
//router.post("/update-status/:id", statusControllers.updateStatusTask);

module.exports = router;
