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
}

module.exports = new PriorityController();
