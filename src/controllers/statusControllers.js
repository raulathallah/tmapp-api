const statusServices = require("../services.js/statusServices");

class StatusController {
  getAllStatus = async (req, res) => {
    try {
      const stat = await statusServices.getAllStatus();
      res.json(stat);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  updateStatusTask = async (req, res) => {
    try {
      const { id } = req.params;
      const newTask = await statusServices.updateStatusTask(id, req.body);
      res.status(201).json({
        success: true,
        message: "Task status updated successfully",
        data: newTask,
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };
}

module.exports = new StatusController();
