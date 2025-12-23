const prisma = require("../prisma");

class CommentRepository {
  async findAllByTaskId(taskId) {
    return await prisma.tBL_CMTS.findMany({
      where: {
        tbl_cmts_id: Number(taskId),
      },
      orderBy: { tbl_cmts_createdAt: "desc" },
    });
  }

  async create(data) {
    const task = await prisma.tBL_TASK.findUnique({
      where: { tbl_task_id: data.taskId },
    });

    if (!task) {
      throw new Error(`Task with ID ${data.taskId} not found.`);
    }

    return await prisma.tBL_CMTS.create({
      data: {
        tbl_cmts_desc: data.tbl_cmts_desc,
        tbl_cmts_updatedAt: new Date(),
        ...(data.taskId && {
          TBL_TASK: {
            connect: { tbl_task_id: Number(data.taskId) },
          },
        }),
        ...(data.userId && {
          TBL_USER: {
            connect: { tbl_user_id: Number(data.userId) },
          },
        }),
      },
    });
  }

  async update(id, data) {
    const existingComment = await prisma.tBL_CMTS.findUnique({
      where: { tbl_cmts_id: Number(id) },
    });

    if (!existingComment) {
      throw new Error(`Comment with ID ${id} not found.`);
    }

    return await prisma.tBL_CMTS.update({
      where: {
        tbl_cmts_id: Number(id),
      },
      data: {
        tbl_cmts_desc: data.tbl_cmts_desc,
        tbl_cmts_updatedAt: new Date(),

        ...(data.taskId && {
          TBL_TASK: {
            connect: { tbl_task_id: Number(data.taskId) },
          },
        }),
        ...(data.userId && {
          TBL_USER: {
            connect: { tbl_user_id: Number(data.userId) },
          },
        }),
      },
    });
  }

  async delete(id) {
    return await prisma.tBL_CMTS.delete({
      where: {
        tbl_cmts_id: Number(id),
      },
    });
  }
}

module.exports = new CommentRepository();
