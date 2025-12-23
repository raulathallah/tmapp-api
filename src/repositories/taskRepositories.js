const { connect } = require("../app");
const prisma = require("../prisma");

class TaskRepository {
  async getTotalTask() {
    return await prisma.tBL_TASK.count();
  }

  async findAll(where = {}) {
    return await prisma.tBL_TASK.findMany({
      where,
      orderBy: { tbl_task_id: "desc" },
      include: {
        MSTR_PRIO: true,
        MSTR_STATUS: true,
        TBL_PROJECT: {
          select: { tbl_project_name: true },
        },
      },
    });
  }

  async find(taskId) {
    return await prisma.tBL_TASK.findUnique({
      where: {
        tbl_task_id: Number(taskId),
      },
      include: {
        MSTR_PRIO: true,
        MSTR_STATUS: true,
        TBL_PROJECT: true,
        TBL_USER: {
          select: { tbl_user_username: true, tbl_user_email: true },
        },
      },
    });
  }

  /*
  {
    "tbl_task_title": "Export Function Development",
    "tbl_task_desc": "make export function for client reporting needs",
    "tbl_task_dueDate": "2026-01-12",
    "tbl_task_completedAt": null,
    "tbl_task_projectId": 1,
    "tbl_task_userId": null,
    "tbl_task_priority": 1,
  }
  */
  async create(data) {
    return await prisma.tBL_TASK.create({
      data: {
        tbl_task_title: data.tbl_task_title,
        tbl_task_desc: data.tbl_task_desc,

        tbl_task_dueDate: data.tbl_task_dueDate
          ? new Date(data.tbl_task_dueDate)
          : null,
        tbl_task_completedAt: data.tbl_task_completedAt
          ? new Date(data.tbl_task_completedAt)
          : null,
        tbl_task_updatedAt: new Date(),

        MSTR_PRIO: {
          connect: { mstr_prio_id: Number(data.tbl_task_priorityId) },
        },

        MSTR_STATUS: {
          connect: { mstr_status_id: Number(data.tbl_task_statusId || 1) },
        },

        MSTR_ACTV: {
          connect: { mstr_actv_id: Number(data.tbl_task_actvId) },
        },

        TBL_PROJECT: {
          connect: { tbl_project_id: Number(data.tbl_task_projectId) },
        },

        ...(data.tbl_task_userId &&
          data.tbl_task_userId !== 0 && {
            TBL_USER: {
              connect: { tbl_user_id: Number(data.tbl_task_userId) },
            },
          }),
      },
    });
  }

  async delete(taskId) {
    return await prisma.tBL_TASK.delete({
      where: {
        tbl_task_id: Number(taskId),
      },
    });
  }
}

module.exports = new TaskRepository();
