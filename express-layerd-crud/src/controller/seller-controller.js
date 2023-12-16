const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getAllSeller: async (req, res) => {
    const sellers = await prisma.seller.findMany();
    res.json(sellers);
  },
  getSellerById: async (req, res) => {
    const { id } = req.params;
    const seller = await prisma.seller.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(seller);
  },
  createSeller: async (req, res) => {
    const { name, email, password } = req.body;
    const seller = await prisma.seller.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.json(seller);
  },
  updateSeller: async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const seller = await prisma.seller.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
        password,
      },
    });
    res.json(seller);
  },
  deleteSeller: async (req, res) => {
    const { id } = req.params;
    const seller = await prisma.seller.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(seller);
  },
};
