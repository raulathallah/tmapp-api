const taskRepositories = require("../repositories/taskRepositories");

class TaskService {
  async getAllTasks() {
    return await taskRepositories.findAll();
  }

  async getTask(taskId) {
    return await taskRepositories.find(taskId);
  }

  async createNewTask(taskData) {
    if (!taskData.tbl_task_title) throw new Error("Task title is required");

    return await taskRepositories.create(taskData);
  }

  async deleteTask(taskId) {
    return await taskRepositories.delete(taskId);
  }
}

module.exports = new TaskService();
