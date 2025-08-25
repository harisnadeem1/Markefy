import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);

  const [form, setForm] = useState({
    name: "",
    regular_price: "",
    sale_price: "",
    collection_id: "",
    is_featured: false,
    rating: "",
  });
  const [description, setDescription] = useState("");

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
  });

  const token = localStorage.getItem("adminToken");

  // Fetch products and categories
  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const [prodRes, catRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${import.meta.env.VITE_API_BASE_URL}/collections`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setProducts(await prodRes.json());
      setCategories(await catRes.json());
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  // ---------- PRODUCT HANDLERS ----------
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      regular_price: form.regular_price,
      sale_price: form.sale_price || null,
      collection_id: form.collection_id,
      is_featured: form.is_featured,
      rating: form.rating || null,
      description,
    };

    try {
      if (editingProduct) {
        // Update product
        await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/admin/products/${editingProduct.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          }
        );
      } else {
        // Add product
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
      }

      setShowProductModal(false);
      setEditingProduct(null);
      resetForm();
      fetchData();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      regular_price: "",
      sale_price: "",
      collection_id: "",
      is_featured: false,
      rating: "",
    });
    setDescription("");
  };

  const handleProductEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      regular_price: product.regular_price,
      sale_price: product.sale_price,
      collection_id: product.collection_id,
      is_featured: product.is_featured,
      rating: product.rating,
    });
    setDescription(product.description || "");
    setShowProductModal(true);
  };

  const handleProductDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // ---------- CATEGORY HANDLERS ----------
  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingCategory) {
        // Update
        await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/admin/collections/${editingCategory.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(categoryForm),
          }
        );
      } else {
        // Add
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/collections`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(categoryForm),
        });
      }

      setShowCategoryModal(false);
      setEditingCategory(null);
      setCategoryForm({ name: "", description: "" });
      fetchData();
    } catch (err) {
      console.error("Error saving category:", err);
    }
  };

  const handleCategoryEdit = (cat) => {
    setEditingCategory(cat);
    setCategoryForm({ name: cat.name, description: cat.description || "" });
    setShowCategoryModal(true);
  };

  const handleCategoryDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/collections/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#0071bc]">Admin Dashboard</h1>

      {/* Categories */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button
            onClick={() => {
              setEditingCategory(null);
              setCategoryForm({ name: "", description: "" });
              setShowCategoryModal(true);
            }}
            className="px-3 py-1 bg-green-600 text-white rounded text-sm"
          >
            + Add Category
          </button>
        </div>

        <ul className="divide-y">
          {categories.map((c) => (
            <li key={c.id} className="flex justify-between items-center py-2">
              <span>{c.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleCategoryEdit(c)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleCategoryDelete(c.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <button
            onClick={() => {
              resetForm();
              setEditingProduct(null);
              setShowProductModal(true);
            }}
            className="px-3 py-1 bg-green-600 text-white rounded text-sm"
          >
            + Add Product
          </button>
        </div>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">
                  {p.sale_price ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        ${p.regular_price}
                      </span>
                      <span className="text-[#871120]">${p.sale_price}</span>
                    </>
                  ) : (
                    `$${p.regular_price}`
                  )}
                </td>
                <td className="p-2 border">{p.collection_name || "—"}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleProductEdit(p)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleProductDelete(p.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-[600px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleProductSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                className="border w-full p-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <select
                className="border w-full p-2"
                value={form.collection_id}
                onChange={(e) =>
                  setForm({ ...form, collection_id: e.target.value })
                }
                required
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                step="0.01"
                placeholder="Regular Price"
                className="border w-full p-2"
                value={form.regular_price}
                onChange={(e) =>
                  setForm({ ...form, regular_price: e.target.value })
                }
                required
              />
              <input
                type="number"
                step="0.01"
                placeholder="Sale Price (optional)"
                className="border w-full p-2"
                value={form.sale_price || ""}
                onChange={(e) =>
                  setForm({ ...form, sale_price: e.target.value })
                }
              />
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                className="border w-full p-2"
                value={form.rating || ""}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={form.is_featured}
                  onChange={(e) =>
                    setForm({ ...form, is_featured: e.target.checked })
                  }
                />
                <span>Featured</span>
              </label>

              <ReactQuill value={description} onChange={setDescription} />

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowProductModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-[500px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">
              {editingCategory ? "Edit Category" : "Add Category"}
            </h2>
            <form onSubmit={handleCategorySubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Category Name"
                className="border w-full p-2"
                value={categoryForm.name}
                onChange={(e) =>
                  setCategoryForm({ ...categoryForm, name: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Description (optional)"
                className="border w-full p-2"
                value={categoryForm.description}
                onChange={(e) =>
                  setCategoryForm({ ...categoryForm, description: e.target.value })
                }
              />

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCategoryModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
