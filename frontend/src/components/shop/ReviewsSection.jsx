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

  return (
    <section className="py-12 bg-white w-full ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2
            className="text-2xl md:text-2xl font-bold text-center md:text-left"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Happy customers who saved time and money
          </h2>
          <div
            className="text-sm mt-2 md:mt-0 flex items-center gap-1"
            style={{ color: "#0071bc", fontFamily: "'Inconsolata', monospace" }}
          >
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="stamped-fa stamped-fa-star"
                style={{
                  fontSize: "10px",
                  color: "#0071bc",
                  marginRight: "1px",
                }}
              ></span>
            ))}
            <span className="ml-1">73 Reviews</span>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {reviews.map((review, idx) => {
            const product = products.find((p) => p.id === review.productId); // match review to product

            if (!product) return null; // skip if product not found

            return (
              <SwiperSlide key={idx}>
                <div className="flex flex-col h-full p-4">
                  {/* Stars */}
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="stamped-fa stamped-fa-star"
                        style={{
                          fontSize: "10px",
                          color: "#0071bc",
                          marginRight: "1px",
                        }}
                      ></span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-normal mb-3"
                    style={{ color: "#0071bc" }}
                  >
                    {review.title}
                  </h3>

                  {/* Product left + Review right */}
                  <div className="flex gap-2">
                    {/* Left side: Product */}
                    <div className="flex flex-col items-start min-w-[90px]">
                      <img
                        src={`${API_BASE}${product.preview_url}`} // ✅ product image from DB
                        alt={product.name}
                        className="h-16  object-cover border rounded mb-1"
                      />
                      <div
                        className="text-[#0071bc] text-left"
                        style={{
                          fontFamily: "'Inconsolata', monospace",
                          fontSize: "10px",
                        }}
                      >
                        {product.name}
                      </div>
                    </div>

                    {/* Right side: Review */}
                    <div className="text-sm text-gray-700">
                      {review.text}
                      <div className="font-bold mt-1">{review.reviewer}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
