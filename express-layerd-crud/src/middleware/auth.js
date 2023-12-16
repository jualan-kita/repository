const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(404).json({
        message: 'user not found',
      });
    } else {
      if (user.password === password) {
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET
        );
        res.json({
          message: 'login success',
          token,
        });
      } else {
        res.status(401).json({
          message: 'wrong password',
        });
      }
    }
  },
};

