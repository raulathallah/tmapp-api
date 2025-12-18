const taskServices = require("../services.js/taskServices");

class TaskController {
  getAllTask = async (req, res) => {
    try {
      const tasks = await taskServices.getAllTasks();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getTask = async (req, res) => {
    try {
      const { id } = req.params;
      const tasks = await taskServices.getTask(id);
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  createTask = async (req, res) => {
    try {
      const newTask = await taskServices.createNewTask(req.body);
      res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask,
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };
}

module.exports = new TaskController();
