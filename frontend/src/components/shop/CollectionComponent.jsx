import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

// 🔹 Map slug → label
const slugToLabel = Object.fromEntries(categories.map((c) => [c.slug, c.label]));

const CollectionComponent = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState("All Sections");
  const [sortBy, setSortBy] = useState("Best Selling");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // ✅ Sync category with URL slug
  useEffect(() => {
    if (category && slugToLabel[category]) {
      setActiveCategory(slugToLabel[category]);
    } else {
      setActiveCategory("All Sections");
    }
  }, [category]);

  // ✅ Filter products
  let filteredProducts =
    activeCategory === "All Sections"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // ✅ Sort products
  if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <section className="w-[95%] mx-auto py-12 px-6 bg-[#eae6e3]">
      {/* ---------- DESKTOP FILTERS (unchanged) ---------- */}
      <div className="hidden md:block">
        {/* Category Tabs */}
        <div className="border-t border-b border-gray-400 py-4 mb-8">
          <div
            className="flex flex-wrap gap-8 uppercase justify-center text-sm tracking-wide"
            style={{ fontFamily: "'Inconsolata', sans-serif" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.slug || "all"}
                onClick={() => setActiveCategory(cat.label)}
                className={`pb-0 transition ${
                  activeCategory === cat.label
                    ? "text-[#0071bc] border-b-2 border-[#0071bc]"
                    : "text-gray-700 hover:text-[#0071bc]"
                }`}
                style={{ fontFamily: "'Inconsolata', sans-serif" }}
              >
                {cat.label}
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

      {/* ---------- MOBILE FILTER BUTTON ---------- */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="w-full border border-[#0071bc] text-[#0071bc] px-4 py-3 flex items-center justify-center gap-2"
          style={{ fontFamily: "'Inconsolata', sans-serif" }}
        >
          Filter and sort <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* ---------- MOBILE DRAWER ---------- */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFilterOpen(false)}
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-[#eae6e3] shadow-xl flex flex-col p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-lg font-semibold text-[#0071bc]"
                style={{ fontFamily: "'Inconsolata', sans-serif" }}
              >
                Filter and sort
              </h2>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="h-6 w-6 text-[#0071bc]" />
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-4 mb-6">
              {categories.map((cat) => (
                <Link
                  key={cat.slug || "all"}
                  to={`/shop/collection/${cat.slug}`}
                  onClick={() => setMobileFilterOpen(false)}
                  className={`uppercase text-sm ${
                    activeCategory === cat.label
                      ? "text-[#0071bc] font-semibold"
                      : "text-gray-800 hover:text-[#0071bc]"
                  }`}
                  style={{ fontFamily: "'Inconsolata', sans-serif" }}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* Sort */}
            <div className="mt-auto">
              <label className="block text-sm text-gray-700 mb-2">Sort by</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border-b border-gray-400 text-gray-800 text-sm w-full py-2 pr-6 focus:outline-none cursor-pointer"
                  style={{ fontFamily: "'Inconsolata', sans-serif" }}
                >
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-1 top-3 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>

              {/* Footer buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    setSortBy("Best Selling");
                    setActiveCategory("All Sections");
                    setMobileFilterOpen(false);
                  }}
                  className="text-[#0071bc] text-sm"
                  style={{ fontFamily: "'Inconsolata', sans-serif" }}
                >
                  CLEAR
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="bg-[#0071bc] text-white px-4 py-2 text-sm"
                  style={{ fontFamily: "'Inconsolata', sans-serif" }}
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-[#0071bc] text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {product.title}
              </h3>

              {/* Ratings (if available) */}
              {product.rating && (
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span
                      key={starIdx}
                      className={`${
                        starIdx < product.rating ? "text-[#0071bc]" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}

              {/* Price */}
              <p
                className="text-[0.9rem] font-normal"
                style={{
                  color: "#871120",
                  fontFamily: "'Inconsolata', sans-serif",
                }}
              >
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionComponent;
