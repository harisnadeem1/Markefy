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
            to="/shop/collection"
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
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {products.map((product) => (
           <SwiperSlide key={product.id}>
  <div className="flex flex-col items-center p-4 bg-transparent shadow-none">
    {/* ✅ Wrap Image + Name + Price in one Link */}
    <Link to={`/shop/product/${product.id}`} className="block w-full text-center">
      <img
        src={`${API_BASE}${product.preview_url}`}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded hover:opacity-90 transition"
      />

      {/* Title */}
      <h3
        className="text-md font-medium mb-2"
        style={{ color: "#0071bc" }}
      >
        {product.name}
      </h3>

      {/* Price */}
      {product.sale_price ? (
        <p className="text-sm mb-3 flex items-center gap-2 justify-center">
          <span
            className="line-through text-gray-500"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            ${product.regular_price}
          </span>
          <span
            className="text-red-600 font-semibold"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            ${product.sale_price}
          </span>
        </p>
      ) : (
        <p
          className="text-sm mb-3"
          style={{
            fontFamily: "'Inconsolata', monospace",
            color: "#a00",
          }}
        >
          ${product.regular_price}
        </p>
      )}
    </Link>

    {/* CTA Button (separate, still clickable)
    <Link
      to={`/shop/product/${product.id}`}
      className="px-4 py-2 text-sm uppercase font-medium"
      style={{
        fontFamily: "'Inconsolata', monospace",
        backgroundColor: "#0071bc",
        color: "#fff",
      }}
    >
      View Product
    </Link> */}
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        {/* Mobile View All */}
        <div className="text-center mt-6 block md:hidden">
          <Link
            to="/shop/collection"
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
