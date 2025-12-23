const commentRepositories = require("../repositories/commentRepositories");

class CommentService {
  async findByTaskId(taskId) {
    return await commentRepositories.findAllByTaskId(taskId);
  }

  async create(data) {
    if (!data.taskId) throw new Error("Task is required");
    if (!data.userId) throw new Error("User is required");

    return await commentRepositories.create(data);
  }

  async update(id, data) {
    if (!data.taskId) throw new Error("Task is required");
    if (!data.userId) throw new Error("User is required");
    if (!id) throw new Error("Comment id is required");

    return await commentRepositories.update(id, data);
  }

  async delete(id) {
    if (!id) throw new Error("Comments id required");

    return await commentRepositories.delete(id);
  }
}

module.exports = new CommentService();
