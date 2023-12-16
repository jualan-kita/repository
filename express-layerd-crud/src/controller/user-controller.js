const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getAllUser: async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(user);
  },

  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.json(user);
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
        password,
      },
    });
    res.json(user);
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(user);
  },

  getUserWithProduct: async (req, res) => {
    const users = await prisma.user.findMany({
      include: {
        products: true,
      },
    });
    res.json(users);
  },

  getUserWithProductAndCategory: async (req, res) => {
    const users = await prisma.user.findMany({
      include: {
        products: {
          include: {
            category: true,
          },
        },
      },
    });
    res.json(users);
  },
};
