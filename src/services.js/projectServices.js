const projectRepositories = require("../repositories/projectRepositories");

class ProjectService {
  async getAllProjects() {
    return await projectRepositories.findAll();
  }

  async createNewProject(projectData) {
    if (!projectData.tbl_project_name)
      throw new Error("Project name is required");

    return await projectRepositories.create(projectData);
  }
}

module.exports = new ProjectService();
