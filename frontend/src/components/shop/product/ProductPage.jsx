import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PlayCircle } from "lucide-react"; // play icon

// Import Swiper styles
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
        <Link to="/shop/collection" className="text-[#0071bc] underline mt-4 block">
          Back to Collection
        </Link>
      </div>
    );
  }

  const isInCart = cart.some((item) => item.id === product.id);

  // ✅ All media (images first, then videos)
  const allImages = [product.preview_url, ...(product.preview_images || [])].filter(Boolean);
  const allVideos = product.preview_videos || [];
  const allMedia = [
    ...allImages.map((img) => ({ type: "image", src: img })),
    ...allVideos.map((vid) => ({ type: "video", src: vid })),
  ];

  return (
    <section className="w-[80%] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ---------- LEFT: MEDIA ---------- */}
        <div>
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
                      className={`w-20 h-20 object-cover rounded border-2 ${activeIndex === i ? "border-[#0071bc]" : "border-transparent"
                        }`}
                    />
                  ) : (
                    <div
                      className={`relative w-20 h-20 rounded overflow-hidden border-2 ${activeIndex === i ? "border-[#0071bc]" : "border-transparent"
                        }`}
                    >
                      {/* 👇 Show first frame as cover (poster) */}
                      <video
                        src={`${API_BASE}${media.src}`}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                      />
                      {/* Overlay play icon */}
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
        <div className="flex flex-col items-start">
          {product.collection_name && (
            <p
              className="text-sm uppercase tracking-wide  mb-2"
              style={{ fontFamily: "'Inconsolata', monospace", color: "#0071bc" }}
            >
              {product.collection_name}
            </p>
          )}
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#0071bc" }}
          >
            {product.name}
          </h1>

          {/* ⭐ Rating */}
          {product.rating !== null && (
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`text-lg ${idx < product.rating ? "text-[#0071bc]" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          {product.sale_price ? (
            <p className="text-2xl mb-6 flex items-center gap-3">
              <span
                className="line-through text-gray-500"
                style={{ fontFamily: "'Inconsolata', monospace" }}
              >
                ${product.regular_price}
              </span>
              <span
                style={{
                  color: "#871120",
                  fontFamily: "'Inconsolata', monospace",
                }}
              >
                ${product.sale_price}
              </span>
            </p>
          ) : (
            <p
              className="text-xl mb-6"
              style={{
                color: "#871120",
                fontFamily: "'Inconsolata', monospace",
              }}
            >
              ${product.regular_price}
            </p>
          )}

          {/* ✅ Description (HTML) */}
          <div
            className="prose max-w-none text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`px-8 py-3 uppercase tracking-wide text-sm rounded transition ${isInCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0071bc] text-white hover:bg-[#005a94]"
              }`}
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            {isInCart ? "Already in Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
