const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithProduct,
} = require("../controller/user-controller");

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/userProducts", getUserWithProduct);

module.exports = router;
