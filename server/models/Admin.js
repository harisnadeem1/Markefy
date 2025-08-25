const pool = require("../config/db");

const AdminModel = {
  async addProduct(p) {
    const result = await pool.query(
      `INSERT INTO products 
       (name, description, regular_price, sale_price, collection_id, is_featured, rating, preview_url, preview_images, preview_videos, file_url) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) 
       RETURNING *`,
      [
        p.name,
        p.description,
        p.regular_price,
        p.sale_price,
        p.collection_id,
        p.is_featured,
        p.rating, // can be null
        p.preview_url,
        p.preview_images,
        p.preview_videos,
        p.file_url,
      ]
    );
    return result.rows[0];
  },
};

module.exports = AdminModel;
