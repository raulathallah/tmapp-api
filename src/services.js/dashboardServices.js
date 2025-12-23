const projectRepositories = require("../repositories/projectRepositories");
const taskRepositories = require("../repositories/taskRepositories");

class DashboardService {
  async getDashboard() {
    //== Task ==
    const total_task = await taskRepositories.getTotalTask();
    const total_task_pending = await taskRepositories.findAll({
      tbl_task_statusId: 1,
    });
    const total_task_onWork = await taskRepositories.findAll({
      tbl_task_statusId: 2,
    });
    const total_task_done = await taskRepositories.findAll({
      tbl_task_statusId: 3,
    });
    const total_task_onRevision = await taskRepositories.findAll({
      tbl_task_statusId: 4,
    });

    //== Project ==
    const total_project = await projectRepositories.getTotalProject();

    //== User
    const total_user = 0;

    return {
      total_task,
      total_task_pending: total_task_pending.length,
      total_task_onWork: total_task_onWork.length,
      total_task_done: total_task_done.length,
      total_task_onRevision: total_task_onRevision.length,
      total_project,
      total_user,
    };
  }
}

module.exports = new DashboardService();
