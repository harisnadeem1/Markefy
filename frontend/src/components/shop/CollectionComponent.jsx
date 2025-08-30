import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, X, Filter } from "lucide-react";
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
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Section Heading ---------- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
  <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
    {activeCategory}
  </span>
</h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Browse our premium, ready-to-use code snippets. Clean, flexible, and easy to install anywhere.
          </p>
        </motion.div>

        {/* ---------- Filters (Desktop) ---------- */}
        <div className="hidden md:block mb-16">
          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-0 justify-center mb-12"
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat.slug || "all"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => setActiveCategory(cat.name)}
                className={`relative px-4 py-2 text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.name
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.name}
                {activeCategory === cat.name && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Sort Dropdown */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-end items-center"
          >
            <label className="text-sm text-gray-300 mr-4 font-medium">Sort by</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#1C1C1C] border border-gray-700 text-white text-sm px-4 py-3 pr-10 rounded-xl focus:outline-none focus:border-blue-500 cursor-pointer transition-all duration-300 hover:border-gray-500"
              >
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* ---------- Mobile Filter Button ---------- */}
        <div className="flex justify-end md:hidden mb-8">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-[#1C1C1C] text-white rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </motion.button>
        </div>

        {/* ---------- Products Grid ---------- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={`/shop/product/${product.id}`} className="block h-full">
                <div className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                    <img
                      src={`${API_BASE}${product.preview_url}`}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Sale Badge */}
                    {product.sale_price && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Sale
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      {product.rating !== null && (
                        <div className="flex items-center gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <span
                              key={idx}
                              className={`text-sm ${
                                idx < product.rating
                                  ? "text-blue-400"
                                  : "text-gray-600"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-center gap-3 mb-4">
                        {product.sale_price ? (
                          <>
                            <span className="text-2xl font-bold text-white">
                              ${product.sale_price}
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                              ${product.regular_price}
                            </span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-white">
                            ${product.regular_price}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="inline-flex items-center text-sm font-semibold text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      View Details
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-[#1C1C1C] rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 border-2 border-gray-600 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No products found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your filters or browse a different category.
            </p>
          </motion.div>
        )}
      </div>

      {/* ---------- Mobile Filter Sidebar ---------- */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 z-[2220] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsFilterOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="relative w-80 bg-[#111111] h-full shadow-2xl p-6 overflow-y-auto ml-auto border-l border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-6 mb-10">
                <h4 className="text-lg font-semibold text-white">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug || "all"}
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat.name
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-[#1C1C1C] hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Sort by</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-[#1C1C1C] border border-gray-700 text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300"
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