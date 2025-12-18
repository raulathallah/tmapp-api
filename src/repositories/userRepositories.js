// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

const prisma = require("../prisma");

class UserRepository {
  async findAll() {
    return await prisma.user.findMany();
  }

  async create(data) {
    return await prisma.user.create({ data });
  }
}

module.exports = new UserRepository();
