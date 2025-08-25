const pool = require("../config/db");

const createOrder = async ({ email, total_price, products, payment_id }) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const orderRes = await client.query(
      `INSERT INTO orders (buyer_email, total_price, status, payment_id)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [email.toLowerCase(), total_price, "pending", payment_id || null]
    );

    const order = orderRes.rows[0];

    for (const p of products) {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, price)
         VALUES ($1,$2,$3)`,
        [order.id, p.id, p.price]
      );
    }

    await client.query("COMMIT");
    return order;
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

const updateOrderStatus = async (orderId, status, payment_id = null) => {
  const res = await pool.query(
    `UPDATE orders SET status=$1, payment_id=COALESCE($2,payment_id)
     WHERE id=$3 RETURNING *`,
    [status, payment_id, orderId]
  );
  return res.rows[0];
};

const findOrderById = async (orderId) => {
  const orderRes = await pool.query(`SELECT * FROM orders WHERE id=$1`, [orderId]);
  const order = orderRes.rows[0];
  if (!order) return null;

  const itemsRes = await pool.query(
    `SELECT oi.*, p.name, p.file_url, p.preview_url
     FROM order_items oi
     JOIN products p ON oi.product_id = p.id
     WHERE oi.order_id=$1`,
    [orderId]
  );

  order.items = itemsRes.rows;
  return order;
};

module.exports = { createOrder, updateOrderStatus, findOrderById };
