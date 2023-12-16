const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    res.json(user);
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      res.json({
        message: "Email not found",
      });
    } else {
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        res.json({
          message: "Invalid password",
        });
      } else {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        res.header("auth-token", token).json({
          message: "Login success",
          token,
          name: user.name,
          email: user.email,
        });
      }
    }
  },
};
