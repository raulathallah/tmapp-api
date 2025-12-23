const { connect } = require("../app");
const prisma = require("../prisma");

class ProjectRepository {
  async getTotalProject() {
    return await prisma.tBL_PROJECT.count();
  }

  async findAll() {
    return await prisma.tBL_PROJECT.findMany({
      orderBy: { tbl_project_id: "desc" },
      include: {
        MSTR_PRIO: true,
        MSTR_STATUS: true,
        TBL_TASK: {
          select: { tbl_task_title: true },
        },
      },
    });
  }

  /*
  {
    "tbl_project_name": "Export Function Development",
    "tbl_project_desc": "make export function for client reporting needs",
  }
  */
  async create(data) {
    return await prisma.tBL_PROJECT.create({
      data: {
        tbl_project_name: data.tbl_project_name,
        tbl_project_desc: data.tbl_project_desc,
        tbl_project_updatedAt: new Date(),
      },
    });
  }
}

module.exports = new ProjectRepository();
