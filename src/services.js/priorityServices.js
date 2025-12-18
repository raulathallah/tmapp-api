const priorityRepository = require("../repositories/priorityRepositories");

class PriorityService {
  async getAllPriorities() {
    return await priorityRepository.findAll();
  }
}

module.exports = new PriorityService();
