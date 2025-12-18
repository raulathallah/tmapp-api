const prisma = require("../prisma");

class StatusRepository {
  async findAll() {
    return await prisma.mSTR_STATUS.findMany();
  }

  async updateStatusTask(taskId, data) {
    return await prisma.tBL_TASK.update({
      where: {
        tbl_task_id: Number(taskId),
      },
      data: {
        MSTR_STATUS: {
          connect: { mstr_status_id: Number(data.tbl_task_statusId || 1) },
        },
        tbl_task_updatedAt: new Date(),
      },
    });
  }
}

module.exports = new StatusRepository();
