const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const { addProduct,updateProduct,deleteProduct ,addCategory,updateCategory,deleteCategory} = require("../controllers/adminController");

const router = express.Router();

// Admin-only route for adding product
router.post(
  "/products",
  authMiddleware,
  upload.fields([
    { name: "front_image", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
    { name: "videos", maxCount: 3 },
    { name: "product_file", maxCount: 1 }, // handle zip file here
  ]),
  addProduct
);
router.put("/products/:id", updateProduct);

// ✅ Delete Product
router.delete("/products/:id", deleteProduct);


router.post("/collections", addCategory);
router.put("/collections/:id",updateCategory);
router.delete("/collections/:id", deleteCategory);
module.exports = router;
