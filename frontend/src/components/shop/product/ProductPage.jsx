import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "@/data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

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

  return (
    <section className="w-[80%] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            {product.title}
          </h1>
          <p className="text-xl mb-6" style={{ color: "#871120", fontFamily: "'Inconsolata', monospace" }}>
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">
            {product.description || "This is a premium custom Shopify section template with powerful features and easy setup."}
          </p>
          <button
            className="px-8 py-3 bg-[#0071bc] text-white uppercase tracking-wide text-sm rounded"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
