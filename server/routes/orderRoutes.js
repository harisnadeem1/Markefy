const express = require("express");
const router = express.Router();
const { getOrderStatus, downloadProduct } = require("../controllers/orderController");

// Check status
router.get("/order-status/:orderId", getOrderStatus);

// Download product
router.get("/download/:productId/:orderId", downloadProduct);

module.exports = router;
