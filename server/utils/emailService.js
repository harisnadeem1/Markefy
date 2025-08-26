const nodemailer = require("nodemailer");
const pool = require("../config/db");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.sendOrderEmail = async (orderId) => {
  try {
    // ✅ Fetch order and items
    const orderRes = await pool.query(
      "SELECT * FROM orders WHERE id = $1",
      [orderId]
    );

    if (orderRes.rows.length === 0) return;
    const order = orderRes.rows[0];

    const itemsRes = await pool.query(
      `SELECT oi.*, p.name
       FROM order_items oi
       JOIN products p ON p.id = oi.product_id
       WHERE order_id = $1`,
      [order.id]
    );

    const products = itemsRes.rows;

    // ✅ Build download links
    const downloadLinks = products
      .map(
        (p) =>
          `<li><a href="${process.env.FRONTEND_URL}/shop/thankyou/${order.id}" target="_blank">Download ${p.name}</a></li>`
      )
      .join("");

    // ✅ Send email
    await transporter.sendMail({
      from: `"Markefy Shop" <${process.env.GMAIL_USER}>`,
      to: order.buyer_email, // send directly to the buyer
      subject: `Your Markefy Order #${order.id} is Ready 🎉`,
      html: `
        <h2>Thank you for your purchase!</h2>
        <p>Your order <strong>#${order.id}</strong> has been successfully processed.</p>
        <p>You can download your products below:</p>
        <ul>${downloadLinks}</ul>
        <p>Or access anytime from <a href="${process.env.FRONTEND_URL}/shop/orders">My Orders</a>.</p>
      `,
    });

    console.log("✅ Order email sent to:", order.buyer_email);
  } catch (err) {
    console.error("❌ Email send error:", err.message);
  }
};
