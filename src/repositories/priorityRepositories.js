const prisma = require("../prisma");

class PriorityRepository {
  async findAll() {
    return await prisma.mSTR_PRIO.findMany({
      orderBy: { mstr_prio_id: "desc" },
    });
  }
}

module.exports = new PriorityRepository();
