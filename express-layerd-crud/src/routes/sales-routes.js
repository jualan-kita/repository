const express = require("express");
const router = express.Router();

const {
  getAllSales,
  getSalesById,
  getSaleWithProduct,
  createSales,
  updateSales,
  deleteSales,
} = require("../controller/sales-controller");

router.get("/", getAllSales);
router.get("/:id", getSalesById);
router.get("/salesProducts", getSaleWithProduct);
router.post("/", createSales);
router.put("/:id", updateSales);

router.delete("/:id", deleteSales);

module.exports = router;
