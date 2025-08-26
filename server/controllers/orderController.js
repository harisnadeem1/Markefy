const path = require("path");
const pool = require("../config/db");
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

    // Normalize output so frontend always gets products
    res.json({
      status: order.status,
      products: order.items || []   // ✅ map items to products
    });
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

    // ✅ Check product exists in this order using product_id
    const item = order.items.find(
      (p) => String(p.product_id) === String(productId)
    );

    if (!item) {
      return res.status(403).json({ error: "Product not part of this order" });
    }

    // ✅ Extract the filename safely
    const filename = path.basename(item.file_url); 
    const filePath = path.join(__dirname, "../files/products", filename);

    return res.download(filePath);
  } catch (err) {
    console.error("Download error:", err);
    res.status(500).json({ error: "Download failed" });
  }
};



exports.getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);

    const ordersRes = await pool.query(
      "SELECT * FROM orders WHERE buyer_email = $1 ORDER BY created_at DESC",
      [email.toLowerCase()]
    );

    const orders = [];

    for (const order of ordersRes.rows) {
      const itemsRes = await pool.query(
        `SELECT oi.*, p.name, p.preview_url 
         FROM order_items oi 
         JOIN products p ON p.id = oi.product_id
         WHERE order_id = $1`,
        [order.id]
      );

      orders.push({
        ...order,
        products: itemsRes.rows
      });
    }

    res.json(orders);
  } catch (err) {
    console.error("Get orders by email error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

