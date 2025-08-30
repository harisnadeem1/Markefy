import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote, Shield, CheckCircle } from "lucide-react";
import "swiper/css";

import reviews from "../../data/reviews.json"; // still using your static reviews file

const ReviewsSection = () => {
  const [products, setProducts] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ Fetch products from DB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
    fetchProducts();
  }, []);

  const StarRating = ({ rating = 5, size = "w-5 h-5" }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <Star
            className={`${size} ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} transition-colors`}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />
            Customer Reviews
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          
          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-3">
              <StarRating rating={5} size="w-6 h-6" />
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <span className="hidden md:block text-gray-400">•</span>
            <span className="text-lg">Based on 73 verified reviews</span>
          </motion.div>
        </motion.div>

        {/* Reviews Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-16"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="reviews-swiper"
          >
            {reviews.map((review, idx) => {
              const product = products.find((p) => p.id === review.productId);

              if (!product) return null;

              return (
                <SwiperSlide key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl p-8  transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden">
                      {/* Subtle background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Quote icon */}
                      <div className="relative mb-6">
                        <Quote className="w-10 h-10 text-blue-200 group-hover:text-blue-300 transition-colors" />
                      </div>

                      {/* Rating */}
                      <div className="relative mb-4">
                        <StarRating rating={5} />
                      </div>
                      
                      {/* Review title */}
                      <h3 className="relative text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {review.title}
                      </h3>

                      {/* Review Content */}
                      <div className="relative flex-1 mb-8">
                        <p className="text-gray-600 leading-relaxed text-lg line-clamp-4">
                          "{review.text}"
                        </p>
                      </div>

                      {/* Product & Reviewer Info */}
                      <div className="relative border-t border-gray-100 pt-6 mt-auto">
                        <div className="flex items-center gap-4">
                          {/* Product Image */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0"
                          >
                            <img
                              src={`${API_BASE}${product.preview_url}`}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-xl border-2 border-gray-100 shadow-sm"
                            />
                          </motion.div>
                          
                          {/* Product & Reviewer Details */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate mb-2">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-white text-sm font-bold">
                                  {review.reviewer.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-gray-700">
                                {review.reviewer}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-200">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Verified Reviews</span>
            </motion.div>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Secure & Trusted</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;