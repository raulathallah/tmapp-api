const taskServices = require("../services.js/taskServices");
const ApiResponse = require("../utils/responses/apiResponse");

class TaskController {
  getAllTask = async (req, res) => {
    try {
      const tasks = await taskServices.getAllTasks();
      return ApiResponse.success(res, "Tasks retrieved successfully", tasks);
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch tasks", err.message, 500);
    }
  };

  getTask = async (req, res) => {
    try {
      const { id } = req.params;
      const tasks = await taskServices.getTask(id);

      return ApiResponse.success(
        res,
        "Task detail retrieved successfully",
        tasks
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to fetch task detail",
        err.message,
        500
      );
    }
  };

  createTask = async (req, res) => {
    try {
      const newTask = await taskServices.createNewTask(req.body);

      return ApiResponse.success(res, "Task created successfully", newTask);
    } catch (err) {
      return ApiResponse.error(res, "Failed to create task", err.message, 500);
    }
  };

  deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await taskServices.deleteTask(id);
      return ApiResponse.success(res, "Task deleted successfully", tasks);
    } catch (err) {
      return ApiResponse.error(res, "Failed to delete task", err.message, 500);
    }
  };
}

module.exports = new TaskController();
