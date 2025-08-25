const path = require("path");
const products = require("../../frontend/src/data/products.json"); // import products with `file` field
const { findOrderById } = require("../models/Order");

// ✅ Check order status
exports.getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await findOrderById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ status: order.status, products: order.products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

// ✅ Secure file download
exports.downloadProduct = async (req, res) => {
  try {
    const { productId, orderId } = req.params;

    const order = await findOrderById(orderId);
    if (!order || order.status !== "finished") {
      return res.status(403).json({ error: "Unauthorized: payment not complete" });
    }

    // Check product exists in order
    const productsInOrder = order.products; // stored as JSON
    const hasProduct = productsInOrder.find((p) => String(p.id) === String(productId));
    if (!hasProduct) {
      return res.status(403).json({ error: "Product not part of this order" });
    }

    // Find product file
    const product = products.find((p) => String(p.id) === String(productId));
    if (!product || !product.file) {
      return res.status(404).json({ error: "File not found" });
    }

    const filePath = path.join(__dirname, "../files/products", product.file);
    res.download(filePath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Download failed" });
  }
};
