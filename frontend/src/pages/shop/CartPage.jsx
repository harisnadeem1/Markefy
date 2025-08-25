import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  // ✅ prepend backend base URL
  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // calculate total
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <section className="w-[80%] mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/shop/collection"
          className="px-6 py-3 bg-[#0071bc] text-white uppercase text-sm rounded"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="w-[80%] mx-auto py-16">
      <h2
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        Your Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b pb-6"
          >
            {/* ✅ Product Image with API_BASE */}
            <img
              src={`${API_BASE}${item.preview_url}`}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            {/* ✅ Product Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              {item.sale_price ? (
               <p className="text-base flex items-center gap-2">
  <span
    className="line-through text-gray-500 text-sm"
    style={{ fontFamily: "'Inconsolata', monospace" }}
  >
    ${item.regular_price}
  </span>
  <span
    className="text-lg "
    style={{
      color: "#871120",
      fontFamily: "'Inconsolata', monospace",
    }}
  >
    ${item.sale_price}
  </span>
</p>

              ) : (
                <p
                  className="text-lg"
                  style={{
                    color: "#871120",
                    fontFamily: "'Inconsolata', monospace",
                  }}
                >
                  ${item.price}
                </p>
              )}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-sm underline"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 flex flex-col items-end">
        <p
          className="text-xl mb-4"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Subtotal:{" "}
          <span>
            ${subtotal.toFixed(2)}
          </span>
        </p>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-3 bg-gray-300 text-black uppercase text-sm rounded"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            Clear Cart
          </button>

          <button
            onClick={() => navigate("/shop/checkout")}
            className="px-6 py-3 bg-[#0071bc] text-white uppercase text-sm rounded"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
