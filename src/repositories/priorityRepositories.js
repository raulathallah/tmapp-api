const prisma = require("../prisma");

class PriorityRepository {
  async findAll() {
    return await prisma.mSTR_PRIO.findMany({
      orderBy: { mstr_prio_id: "desc" },
    });
  }

  async updatePriorityTask(taskId, data) {
    return await prisma.tBL_TASK.update({
      where: {
        tbl_task_id: Number(taskId),
      },
      data: {
        MSTR_PRIO: {
          connect: { mstr_prio_id: Number(data.tbl_task_priorityId || 1) },
        },
        tbl_task_updatedAt: new Date(),
      },
    });
  }
}

module.exports = new PriorityRepository();
