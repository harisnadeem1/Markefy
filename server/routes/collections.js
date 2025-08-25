// routes/collections.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// ✅ Get all collections
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, slug, description FROM collections ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching collections:", err.message);
    res.status(500).json({ error: "Failed to fetch collections" });
  }
});

module.exports = router;
