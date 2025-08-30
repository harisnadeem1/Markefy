import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PlayCircle } from "lucide-react";
import ProductVideoSection from "./ProductVideoSection";
import ProductFAQSection from "./ProductFAQSection";
import ReviewsSection from "../ReviewsSection";

import "swiper/css";
import "swiper/css/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);
  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="w-[80%] mx-auto py-16 text-center">Loading...</div>;

  if (!product) {
    return (
      <div className="w-[80%] mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <Link to="/shop/collection" className="text-blue-600 underline mt-4 block">
          Back to Collection
        </Link>
      </div>
    );
  }

  const isInCart = cart.some((item) => item.id === product.id);

  // ✅ All media
  const allImages = [product.preview_url, ...(product.preview_images || [])].filter(Boolean);
  const allVideos = product.preview_videos || [];
  const allMedia = [
    ...allImages.map((img) => ({ type: "image", src: img })),
    ...allVideos.map((vid) => ({ type: "video", src: vid })),
  ];

  return (
    <section className="w-[80%] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* ---------- LEFT: MEDIA ---------- */}
        <div className="md:col-span-2">
          {allMedia.length > 1 ? (
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {allMedia.map((media, i) => (
                <SwiperSlide key={i}>
                  {media.type === "image" ? (
                    <img
                      src={`${API_BASE}${media.src}`}
                      alt={`Slide ${i}`}
                      className="w-full h-[400px] object-contain rounded bg-gray-100"
                    />
                  ) : (
                    <video
                      src={`${API_BASE}${media.src}`}
                      controls
                      className="w-full h-[400px] object-contain rounded bg-black"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="bg-gray-100 rounded-lg">
              <img
                src={`${API_BASE}${product.preview_url}`}
                alt={product.name}
                className="w-full h-[400px] object-contain"
              />
            </div>
          )}

          {/* ✅ Thumbnails */}
          {allMedia.length > 1 && (
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {allMedia.map((media, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    swiperRef.current?.slideTo(i);
                  }}
                  className="relative cursor-pointer"
                >
                  {media.type === "image" ? (
                    <img
                      src={`${API_BASE}${media.src}`}
                      alt={`Thumb ${i}`}
                      className={`w-20 h-20 object-cover rounded border-2 ${
                        activeIndex === i ? "border-blue-600" : "border-transparent"
                      }`}
                    />
                  ) : (
                    <div
                      className={`relative w-20 h-20 rounded overflow-hidden border-2 ${
                        activeIndex === i ? "border-blue-600" : "border-transparent"
                      }`}
                    >
                      <video
                        src={`${API_BASE}${media.src}`}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="text-white w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---------- RIGHT: PRODUCT DETAILS ---------- */}
        <div className="md:col-span-1 flex flex-col items-start">
          {product.collection_name && (
            <p className="text-sm uppercase tracking-wide text-blue-600 mb-2">
              {product.collection_name}
            </p>
          )}
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            {product.name}
          </h1>

          {/* ⭐ Rating */}
          {product.rating !== null && (
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`text-lg ${idx < product.rating ? "text-blue-600" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          {product.sale_price ? (
            <p className="text-2xl mb-6 flex items-center gap-3">
              <span className="line-through text-gray-500">${product.regular_price}</span>
              <span className="text-red-600 font-bold">${product.sale_price}</span>
            </p>
          ) : (
            <p className="text-xl mb-6 text-blue-600 font-semibold">
              ${product.regular_price}
            </p>
          )}

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`w-full mb-6 px-8 py-3 uppercase tracking-wide text-sm rounded-2xl transition font-semibold shadow-md ${
              isInCart
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-[1.02]"
            }`}
          >
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </button>

          <div
            className="product-description text-gray-700 mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>

      {/* Related Sections */}
      <ProductVideoSection videoUrl={product.preview_videos?.[0]} />
      <ProductFAQSection />
      <ReviewsSection />
    </section>
  );
};

export default ProductPage;
