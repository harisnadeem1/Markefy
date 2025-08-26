import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

  const StarRating = ({ rating = 5, size = "w-4 h-4" }) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${size} ${i < rating ? "text-blue-600" : "text-gray-300"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          
          {/* Overall Rating */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <StarRating rating={5} size="w-5 h-5" />
              <span className="text-lg font-medium text-gray-900">4.9</span>
            </div>
            <span className="hidden md:block text-gray-400">•</span>
            <span className="text-lg">Based on 73 verified reviews</span>
          </div>
        </div>

        {/* Reviews Swiper */}
        <div className="relative">
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
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100">
                    {/* Rating & Title */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <StarRating rating={5} />
                        <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {review.title}
                      </h3>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 mb-6">
                      <p className="text-gray-600 leading-relaxed line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Product & Reviewer Info */}
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={`${API_BASE}${product.preview_url}`}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg border-2 border-gray-100"
                          />
                        </div>
                        
                        {/* Product & Reviewer Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-semibold">
                                {review.reviewer.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {review.reviewer}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">Verified Reviews</span>
            </div>
            
            <div className="w-px h-4 bg-gray-300"></div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">Secure & Trusted</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
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