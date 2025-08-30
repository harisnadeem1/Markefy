import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Base API (http://localhost:5000 if your VITE_API_BASE_URL = http://localhost:5000/api)
  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ Fetch featured products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
        const data = await res.json();
        const featured = data.filter((p) => p.is_featured);
        console.log("Fetched featured products:", featured);
        setProducts(featured);
      } catch (err) {
        console.error("Failed to load featured products", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-8"
          >
            <Star className="w-4 h-4 mr-2 text-blue-400" />
            Featured Collection
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Featured Products
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium, high-converting section templates
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-16"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            navigation={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="featured-products-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <Link to={`/shop/product/${product.id}`} className="block h-full">
                    <div className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-blue-500/10 hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                        <img
                          src={`${API_BASE}${product.preview_url}`}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </div>
                        
                        {/* Sale Badge */}
                        {product.sale_price && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                            Sale
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                            {product.name}
                          </h3>

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

                        {/* Call to Action */}
                        <motion.div 
                          className="inline-flex items-center text-sm font-semibold text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 4 }}
                        >
                          View Details
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/shop/collection">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center px-8 py-4 bg-[#1C1C1C] border border-gray-700 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Custom Swiper Navigation Styling */}
      <style jsx>{`
        .featured-products-swiper .swiper-button-next,
        .featured-products-swiper .swiper-button-prev {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white !important;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .featured-products-swiper .swiper-button-next:hover,
        .featured-products-swiper .swiper-button-prev:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
        }
        
        .featured-products-swiper .swiper-button-next::after,
        .featured-products-swiper .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: 600;
        }
        
        .featured-products-swiper .swiper-button-next {
          right: -25px;
        }
        
        .featured-products-swiper .swiper-button-prev {
          left: -25px;
        }
        
        @media (max-width: 1024px) {
          .featured-products-swiper .swiper-button-next,
          .featured-products-swiper .swiper-button-prev {
            display: none;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;