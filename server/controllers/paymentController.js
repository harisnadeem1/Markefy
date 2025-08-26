const axios = require("axios");
const path = require("path");
const { createOrder, updateOrderStatus, findOrderById } = require("../models/Order");

const { sendOrderEmail } = require("../utils/emailService");

const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY;
const NOWPAYMENTS_API_URL = process.env.NOWPAYMENTS_API_URL || "https://api.nowpayments.io/v1";

// Create payment
exports.createPayment = async (req, res) => {
  try {
    const { email, products, total_price } = req.body;

    // Create pending order
    const order = await createOrder({ email, total_price, products });

    // Call NowPayments
    const response = await axios.post(
      `${NOWPAYMENTS_API_URL}/invoice`,
      {
        price_amount: total_price,
        price_currency: "usd",
        order_id: order.id,
        order_description: "Digital Product Order",
        ipn_callback_url: `${process.env.APP_URL}/api/payment/webhook`,
        success_url: `${process.env.FRONTEND_URL}/shop/thankyou/${order.id}`,
        cancel_url: `${process.env.FRONTEND_URL}/shop/checkout`
      },
      {
        headers: {
          "x-api-key": NOWPAYMENTS_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ invoice_url: response.data.invoice_url, orderId: order.id });
  } catch (err) {
    console.error("NowPayments error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to create payment" });
  }
};

// Webhook
exports.handleWebhook = async (req, res) => {
  try {
    const { order_id, payment_status, payment_id } = req.body;

    if (order_id && payment_status) {
      const order = await updateOrderStatus(order_id, payment_status, payment_id);

      if (payment_status === "finished") {
        // fire and forget
        sendOrderEmail(order_id).catch((err) => {
          console.error("❌ Failed to send order email:", err.message);
        });
      }
    }

    // ✅ Always acknowledge webhook quickly
    res.status(200).send("OK");
  } catch (err) {
    console.error("Webhook error:", err.message);
    // still send 200 so NowPayments doesn't retry forever
    res.status(200).send("OK");
  }
};

// Get order + items
exports.getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await findOrderById(orderId);

    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json({ status: order.status, items: order.items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

// Secure download
exports.downloadProduct = async (req, res) => {
  try {
    const { productId, orderId } = req.params;
    const order = await findOrderById(orderId);

    if (!order || order.status !== "finished") {
      return res.status(403).json({ error: "Unauthorized: payment not complete" });
    }

    const item = order.items.find((i) => String(i.product_id) === String(productId));
    if (!item) {
      return res.status(403).json({ error: "Product not part of this order" });
    }

    const filePath = path.join(__dirname, "../files/products", item.file_url);
    res.download(filePath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Download failed" });
  }
};
