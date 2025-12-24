const priorityServices = require("../services.js/priorityServices");
const ApiResponse = require("../utils/responses/apiResponse");

class PriorityController {
  getAllPriorities = async (req, res) => {
    try {
      const priority = await priorityServices.getAllPriorities();
      return ApiResponse.success(
        res,
        "Priority retrieved successfully",
        priority
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to fetch priority",
        err.message,
        500
      );
    }
  };

  updatePriorityTask = async (req, res) => {
    try {
      const { id } = req.params;
      const newTask = await priorityServices.updatePriorityTask(id, req.body);
      res.status(201).json({
        success: true,
        message: "Task priority updated successfully",
        data: newTask,
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };
}

module.exports = new PriorityController();
