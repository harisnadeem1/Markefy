import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Trash2, ShoppingBag, ArrowLeft, Lock, Tag } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  // ✅ prepend backend base URL
  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // calculate total
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-[#0071bc]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover amazing products and start shopping today
            </p>
            <Link
              to="/shop/collection"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0071bc] hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/shop/collection"
            className="inline-flex items-center gap-2 text-[#0071bc] hover:text-blue-700 font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Continue Shopping
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Your Cart
          </h2>
          <p className="text-gray-600 text-lg">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  {cart.map((item, index) => (
                    <div key={item.id} className={`group transition-all duration-300 hover:bg-gray-50 p-4 rounded-2xl ${index !== cart.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div className="flex items-center gap-6">
                        {/* Product Image */}
                        <div className="relative overflow-hidden rounded-2xl shadow-md">
                          <img
                            src={`${API_BASE}${item.preview_url}`}
                            alt={item.name}
                            className="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0071bc] transition-colors" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                            {item.name}
                          </h3>
                          
                          {/* Price Display */}
                          {item.sale_price ? (
                            <div className="flex items-center gap-3">
                              <span
                                className="text-2xl font-bold text-[#0071bc]"
                                style={{ fontFamily: "'Inconsolata', monospace" }}
                              >
                                ${item.sale_price}
                              </span>
                              <span
                                className="text-lg line-through text-gray-400"
                                style={{ fontFamily: "'Inconsolata', monospace" }}
                              >
                                ${item.regular_price}
                              </span>
                              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                SALE
                              </span>
                            </div>
                          ) : (
                            <span
                              className="text-2xl font-bold text-[#0071bc]"
                              style={{ fontFamily: "'Inconsolata', monospace" }}
                            >
                              ${item.price}
                            </span>
                          )}
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-500 hover:text-red-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                          title="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                  <span 
                    className="font-bold text-lg"
                    style={{ fontFamily: "'Inconsolata', monospace" }}
                  >
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span 
                      className="text-2xl font-bold text-[#0071bc]"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                    >
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/shop/checkout")}
                  className="w-full py-4 bg-[#0071bc] hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl uppercase"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                >
                  Checkout
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-2xl transition-all duration-300 uppercase"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                >
                  Clear Cart
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 space-y-4">
                {/* Security Badge */}
                <div className="p-4 bg-green-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Secure Checkout</p>
                      <p className="text-xs text-green-600">Your information is protected</p>
                    </div>
                  </div>
                </div>

                {/* Digital Products Badge */}
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-[#0071bc]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0071bc]">Digital Products</p>
                      <p className="text-xs text-blue-600">Instant download after purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;