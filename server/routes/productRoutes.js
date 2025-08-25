const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// ✅ Get all products with their collection
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id, 
        p.name,
        p.regular_price, 
        p.sale_price,
        COALESCE(p.sale_price, p.regular_price) AS price,
        p.preview_url,
        p.preview_images,
        p.preview_videos,
        p.rating,
        c.name AS collection_name,
        p.description,
        p.is_featured,
        p.created_at
      FROM products p
      JOIN collections c ON p.collection_id = c.id
      ORDER BY p.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// ✅ Get single product (no file_url here)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
      SELECT 
        p.id, 
        p.name,
        p.regular_price, 
        p.sale_price,
        COALESCE(p.sale_price, p.regular_price) AS price,
        p.preview_url,
        p.preview_images,
        p.preview_videos,
        p.rating,
        c.name AS collection_name,
        p.description,
        p.is_featured,
        p.created_at
      FROM products p
      JOIN collections c ON p.collection_id = c.id
      WHERE p.id=$1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching product:", err.message);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

module.exports = router;
