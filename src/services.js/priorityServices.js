const priorityRepository = require("../repositories/priorityRepositories");

class PriorityService {
  async getAllPriorities() {
    return await priorityRepository.findAll();
  }

  async updatePriorityTask(taskId, data) {
    if (!taskId) throw new Error("Task ID is required");
    if (!data.tbl_task_priorityId) throw new Error("Task priority is required");

    return await priorityRepository.updatePriorityTask(taskId, data);
  }
}

module.exports = new PriorityService();
