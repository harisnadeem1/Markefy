import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import products from "../../data/products.json";

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-[#eae6e3] w-full">
      <div className="w-full px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-3xl md:text-3xl font-bold text-center flex-1"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Featured sections for your Shopify store
          </h2>

          {/* Desktop View All */}
          <Link
            to="/shop"
            className="text-xs font-normal ml-4 hidden md:block"
            style={{ color: "gray" }}
          >
            View all
          </Link>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={true} // ✅ FIXED
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center p-4 bg-transparent shadow-none">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4"
                />
                {/* Title */}
                <h3
                  className="text-md font-medium mb-2 text-center"
                  style={{ color: "#0071bc" }}
                >
                  {product.title}
                </h3>
                {/* Price */}
                <p
                  className="text-sm mb-3"
                  style={{
                    fontFamily: "'Inconsolata', monospace",
                    color: "#a00",
                  }}
                >
                  {product.price}
                </p>
                {/* CTA Button */}
                <Link
                  to="/shop"
                  className="px-4 py-2 text-sm uppercase font-medium"
                  style={{
                    fontFamily: "'Inconsolata', monospace",
                    backgroundColor: "#0071bc",
                    color: "#fff",
                  }}
                >
                  SHOP NOW
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All */}
        <div className="text-center mt-6 block md:hidden">
          <Link
            to="/shop"
            className="text-base font-normal"
            style={{
              color: "gray",
              fontFamily: "'Inconsolata', monospace",
            }}
          >
            View all
          </Link>
        </div>
      </div>

      {/* Custom Swiper Arrow Styling */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #0071bc;
            color: #fff !important;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            font-size: 12px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 14px !important;
            font-weight: bold;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedProducts;
