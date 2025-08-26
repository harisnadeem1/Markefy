import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CollectionComponent = () => {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Sections");
  const [sortBy, setSortBy] = useState("Best Selling");
  const [isFilterOpen, setIsFilterOpen] = useState(false); // mobile filter

  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ Fetch categories + products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, prodsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/collections`),
          fetch(`${import.meta.env.VITE_API_BASE_URL}/products`),
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
        (a.sale_price || a.regular_price) - (b.sale_price || b.regular_price)
    );
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        (b.sale_price || b.regular_price) - (a.sale_price || a.regular_price)
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Section Heading ---------- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            {activeCategory}
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our premium, ready-to-use code snippets. Clean, flexible,
            and easy to install anywhere.
          </p>
        </div>

        {/* ---------- Filters (Desktop) ---------- */}
        <div className="hidden md:block mb-12">
          {/* Categories */}
          <div
            className="flex flex-wrap gap-6 text-sm uppercase tracking-wide justify-center mb-6"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.slug || "all"}
                onClick={() => setActiveCategory(cat.name)}
                className={`pb-1 transition border-b-2 ${
                  activeCategory === cat.name
                    ? "text-[#0071bc] border-[#0071bc]"
                    : "text-gray-400 border-transparent hover:text-white hover:border-gray-500"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown under menu */}
          <div className="flex justify-end items-center">
            <label className="text-sm text-gray-300 mr-2">Sort by</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 text-gray-200 text-sm px-3 py-2 pr-8 rounded-md focus:outline-none cursor-pointer"
                style={{ fontFamily: "'Inconsolata', monospace" }}
              >
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ---------- Mobile Filter Button ---------- */}
        <div className="flex justify-end md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="px-4 py-2 text-sm bg-gray-800 text-gray-200 rounded-md shadow hover:bg-gray-700"
          >
            Filters
          </button>
        </div>

        {/* ---------- Products Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/product/${product.id}`}
              className="group block h-full"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-700 flex-shrink-0">
                  <img
                    src={`${API_BASE}${product.preview_url}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors duration-200 line-clamp-2 min-h-[3.5rem]">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    {product.rating !== null && (
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={idx}
                            className={`${
                              idx < product.rating
                                ? "text-yellow-400"
                                : "text-gray-500"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-3">
                      {product.sale_price ? (
                        <>
                          <span className="text-xl font-semibold text-white">
                            ${product.sale_price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ${product.regular_price}
                          </span>
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                            Sale
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-semibold text-white">
                          ${product.regular_price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 mt-auto">
                    <div className="inline-flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      View Details
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ---------- Mobile Filter Sidebar ---------- */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 z-[2220] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsFilterOpen(false)}
            ></div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-80 bg-gray-900 h-full shadow-xl p-6 overflow-y-auto ml-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-lg font-semibold text-white mb-6">
                Filters
              </h3>

              {/* Categories */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm uppercase text-gray-400">Categories</h4>
                {categories.map((cat) => (
                  <button
                    key={cat.slug || "all"}
                    onClick={() => {
                      setActiveCategory(cat.name);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition ${
                      activeCategory === cat.name
                        ? "bg-[#0071bc] text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-sm uppercase text-gray-400 mb-3">
                  Sort by
                </h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-gray-200 text-sm px-3 py-2 rounded-md focus:outline-none"
                >
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollectionComponent;
