import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CollectionComponent = () => {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Sections");
  const [sortBy, setSortBy] = useState("Best Selling");

  // ✅ API base for images
  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ Fetch categories + products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, prodsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/collections`),
          fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
        ]);

        const cats = await catsRes.json();
        const prods = await prodsRes.json();

        setCategories([{ name: "All Sections", slug: "" }, ...cats]);
        setProducts(prods);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // ✅ Sync category from URL
  useEffect(() => {
    if (categories.length > 0) {
      const slugToLabel = Object.fromEntries(
        categories.map((c) => [c.slug, c.name])
      );
      if (category && slugToLabel[category]) {
        setActiveCategory(slugToLabel[category]);
      } else {
        setActiveCategory("All Sections");
      }
    }
  }, [category, categories]);

  // ✅ Filter products
  let filteredProducts =
    activeCategory === "All Sections"
      ? products
      : products.filter((p) => p.collection_name === activeCategory);

  // ✅ Sort products
  if (sortBy === "Best Selling") {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      if (a.rating === null && b.rating !== null) return 1;
      if (a.rating !== null && b.rating === null) return -1;
      if (a.rating !== null && b.rating !== null) return b.rating - a.rating;
      return 0;
    });
  } else if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        (a.sale_price || a.regular_price) -
        (b.sale_price || b.regular_price)
    );
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        (b.sale_price || b.regular_price) -
        (a.sale_price || a.regular_price)
    );
  }

  return (
    <section className="w-[95%] mx-auto py-12 px-6 bg-[#eae6e3]">
      {/* ---------- DESKTOP FILTERS ---------- */}
      <div className="hidden md:block">
        <div className="border-t border-b border-gray-400 py-4 mb-8">
          <div
            className="flex flex-wrap gap-8 uppercase justify-center text-sm tracking-wide"
            style={{ fontFamily: "'Inconsolata', sans-serif" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.slug || "all"}
                onClick={() => setActiveCategory(cat.name)}
                className={`pb-0 transition ${
                  activeCategory === cat.name
                    ? "text-[#0071bc] border-b-2 border-[#0071bc]"
                    : "text-gray-700 hover:text-[#0071bc]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-end items-center mb-8">
          <label className="text-sm text-gray-600 mr-2">SORT BY</label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-b border-gray-400 text-gray-800 text-sm px-2 py-1 pr-6 focus:outline-none cursor-pointer"
              style={{ fontFamily: "'Inconsolata', sans-serif" }}
            >
              <option>Best Selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-1 top-1.5 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ---------- PRODUCTS GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/shop/product/${product.id}`}
            className="transition hover:scale-[1.02] rounded-md overflow-hidden flex flex-col items-center text-center"
          >
            {/* Product Image */}
            <div className="relative w-full h-44 bg-white">
              <img
                src={`${API_BASE}${product.preview_url}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>

              {/* ⭐ Rating (only if not null) */}
              {product.rating !== null && (
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`${
                        idx < product.rating
                          ? "text-[#0071bc]"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}

              {/* 💰 Price */}
              {product.sale_price ? (
                <p className="text-sm mb-1 flex gap-2 items-center">
                  <span
                    className="line-through text-gray-500"
                    style={{ fontFamily: "'Inconsolata', sans-serif" }}
                  >
                    ${product.regular_price}
                  </span>
                  <span
                    className=""
                    style={{
                      fontFamily: "'Inconsolata', sans-serif",
                      color: "#871120",
                    }}
                  >
                    ${product.sale_price}
                  </span>
                </p>
              ) : (
                <p
                  className="text-sm font-normal"
                  style={{
                    color: "#871120",
                    fontFamily: "'Inconsolata', sans-serif",
                  }}
                >
                  ${product.regular_price}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionComponent;
