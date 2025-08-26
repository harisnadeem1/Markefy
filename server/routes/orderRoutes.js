const express = require("express");
const router = express.Router();
const { getOrderStatus, downloadProduct,getOrdersByEmail } = require("../controllers/orderController");

// Check status
router.get("/order-status/:orderId", getOrderStatus);

// Download product
router.get("/download/:productId/:orderId", downloadProduct);


router.get("/by-email/:email", getOrdersByEmail);

module.exports = router;
