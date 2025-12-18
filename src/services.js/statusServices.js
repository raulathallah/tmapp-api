const statusRepositories = require("../repositories/statusRepositories");

class StatusService {
  async getAllStatus() {
    return await statusRepositories.findAll();
  }

  async updateStatusTask(taskId, data) {
    if (!taskId) throw new Error("Task status is required");
    if (!data.tbl_task_statusId) throw new Error("Task status is required");

    return await statusRepositories.updateStatusTask(taskId, data);
  }
}

module.exports = new StatusService();
