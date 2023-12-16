module.exports = {
  getAllProduct: async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(product);
  },

  createProduct: async (req, res) => {
    const { name, price, stock } = req.body;
    const product = await prisma.product.create({
      data: {
        id_sales,
        name,
        type_product,
        price,
        description,
        stock,
        image_url,
      },
    });
    res.json(product);
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        price,
        stock,
      },
    });
    res.json(product);
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(product);
  },
};
