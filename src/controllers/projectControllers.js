const projectServices = require("../services.js/projectServices");

class ProjectController {
  getAllProject = async (req, res) => {
    try {
      const project = await projectServices.getAllProjects();
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  createProject = async (req, res) => {
    try {
      const newProject = await projectServices.createNewProject(req.body);
      res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: newProject,
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };
}

module.exports = new ProjectController();
