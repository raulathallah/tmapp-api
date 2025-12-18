const taskRepository = require("../repositories/taskRepositories");

class TaskService {
  async getAllTasks() {
    return await taskRepository.findAll();
  }

  async getTask(taskId) {
    return await taskRepository.find(taskId);
  }

  async createNewTask(taskData) {
    if (!taskData.tbl_task_title) throw new Error("Task title is required");

    return await taskRepository.create(taskData);
  }
}

module.exports = new TaskService();
