// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

const prisma = require("../prisma");

exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    const user = await prisma.user.create({
      data: { email, name },
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
