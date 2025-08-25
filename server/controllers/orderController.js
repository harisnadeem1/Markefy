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


exports.downloadProduct = async (req, res) => {
  try {
    const { productId, orderId } = req.params;

    const order = await findOrderById(orderId);
    if (!order || order.status !== "finished") {
      return res.status(403).json({ error: "Unauthorized: payment not complete" });
    }

    // Check product exists in this order
    const item = order.products.find((p) => String(p.id) === String(productId));
    if (!item) {
      return res.status(403).json({ error: "Product not part of this order" });
    }

    // item.file_url looks like: "/files/products/myfile.zip"
    // Normalize it so we only take the actual filename
    const filename = path.basename(item.file_url); // → "myfile.zip"

    const filePath = path.join(__dirname, "../files/products", filename);

    return res.download(filePath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Download failed" });
  }
};

