const priorityServices = require("../services.js/priorityServices");

class PriorityController {
  getAllPriorities = async (req, res) => {
    try {
      const priority = await priorityServices.getAllPriorities();
      res.json(priority);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = new PriorityController();
