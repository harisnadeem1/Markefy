import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

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
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Featured Products
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/shop/product/${product.id}`} className="group block h-full">
                  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-700 flex-shrink-0">
                      <img
                        src={`${API_BASE}${product.preview_url}`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors duration-200 line-clamp-2 min-h-[3.5rem]">
                          {product.name}
                        </h3>

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

                      {/* Call to Action */}
                      <div className="pt-4 mt-auto">
                        <div className="inline-flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                          View Details
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop/collection"
            className="inline-flex items-center px-8 py-3 border border-gray-600 text-sm font-medium rounded-full text-gray-300 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Custom Swiper Navigation Styling */}
      <style jsx>{`
        .featured-products-swiper .swiper-button-next,
        .featured-products-swiper .swiper-button-prev {
          background: white;
          color: #374151 !important;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }
        
        .featured-products-swiper .swiper-button-next:hover,
        .featured-products-swiper .swiper-button-prev:hover {
          background: #f9fafb;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        
        .featured-products-swiper .swiper-button-next::after,
        .featured-products-swiper .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: 600;
        }
        
        .featured-products-swiper .swiper-button-next {
          right: -24px;
        }
        
        .featured-products-swiper .swiper-button-prev {
          left: -24px;
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