const AdminModel = require("../models/Admin");
const pool = require("../config/db");
const slugify = require("slugify");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      regular_price,
      sale_price,
      collection_id,
      is_featured,
      rating,
    } = req.body;

    // Handle uploaded files
    const frontImage = req.files["front_image"]
  ? `/uploads/products/${req.files["front_image"][0].filename}`
  : null;

const gallery = req.files["gallery"]
  ? req.files["gallery"].map(f => `/uploads/products/${f.filename}`)
  : [];

const videos = req.files["videos"]
  ? req.files["videos"].map(f => `/uploads/products/${f.filename}`)
  : [];

const productFile = req.files["product_file"]
  ? `/files/products/${req.files["product_file"][0].filename}`
  : null;


    const newProduct = await AdminModel.addProduct({
      name,
      description,
      regular_price,
      sale_price: sale_price || null,
      collection_id,
      is_featured: is_featured === "true" || is_featured === true,
      rating: rating ? parseInt(rating) : null, // allow null
      preview_url: frontImage,
      preview_images: gallery,
      preview_videos: videos,
      file_url: productFile,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Admin add product error:", err);
    res.status(500).json({ message: "Server error creating product" });
  }
};


const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    regular_price,
    sale_price,
    collection_id,
    is_featured,
    rating,
    description,
  } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE products
      SET 
        name = $1,
        regular_price = $2,
        sale_price = $3,
        collection_id = $4,
        is_featured = $5,
        rating = $6,
        description = $7,
        updated_at = NOW()
      WHERE id = $8
      RETURNING *
      `,
      [
        name,
        regular_price,
        sale_price || null,
        collection_id,
        is_featured,
        rating || null,
        description,
        id,
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully", product: result.rows[0] });
  } catch (err) {
    console.error("Error updating product:", err.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};

// --------------------- DELETE PRODUCT ---------------------
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING id", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err.message);
    res.status(500).json({ error: "Failed to delete product" });
  }
};


const addCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const slug = slugify(name, { lower: true, strict: true });

    const result = await pool.query(
      `INSERT INTO collections (name, slug, description)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, slug, description || ""]
    );

    res.json({ message: "Category added successfully", category: result.rows[0] });
  } catch (err) {
    console.error("Error adding category:", err.message);
    res.status(500).json({ error: "Failed to add category" });
  }
};

// --------------------- UPDATE CATEGORY ---------------------
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const slug = slugify(name, { lower: true, strict: true });

    const result = await pool.query(
      `UPDATE collections
       SET name = $1, slug = $2, description = $3
       WHERE id = $4
       RETURNING *`,
      [name, slug, description || "", id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category updated successfully", category: result.rows[0] });
  } catch (err) {
    console.error("Error updating category:", err.message);
    res.status(500).json({ error: "Failed to update category" });
  }
};

// --------------------- DELETE CATEGORY ---------------------
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM collections WHERE id = $1 RETURNING id", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error("Error deleting category:", err.message);
    res.status(500).json({ error: "Failed to delete category" });
  }
};

module.exports = { addProduct ,deleteProduct, updateProduct,addCategory,updateCategory,deleteCategory};
