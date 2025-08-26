import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Lock, Mail, User, MapPin, Phone, CreditCard, ShoppingBag, Tag } from "lucide-react";

const CheckoutPage = () => {
  const { cart, itemCount } = useCart();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

  // ✅ totals
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.sale_price || item.regular_price),
    0
  );
  const tax = 0;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!form.email) {
      alert("Please provide your email so we can deliver the product link.");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/payment/create-payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            name: form.name,
            address: form.address,
            phone: form.phone,
            total_price: total,
            products: cart.map((p) => ({
              id: p.id,
              price: p.sale_price || p.regular_price,
            })),
          }),
        }
      );

      const data = await res.json();

      if (data.invoice_url) {
        window.location.href = data.invoice_url;
      } else {
        alert(data.error || "Failed to create payment. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/shop/cart"
            className="inline-flex items-center gap-2 text-[#0071bc] hover:text-blue-700 font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Cart
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Checkout
          </h1>
        </div>

        {itemCount === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-[#0071bc]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Your cart is empty
            </h2>
            <Link
              to="/shop/collection"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0071bc] hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              <ShoppingBag className="w-5 h-5" />
              Back to Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Customer Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Customer Information
                </h2>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0071bc] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email (product link will be delivered here)"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0071bc] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                      required
                    />
                  </div>

                  {/* Address Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address (Optional)"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0071bc] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (Optional)"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0071bc] focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    Payment Method
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-[#0071bc] border-opacity-20">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="payment" 
                          defaultChecked 
                          className="w-5 h-5 text-[#0071bc] border-2 border-gray-300 focus:ring-[#0071bc] focus:ring-2"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0071bc] rounded-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                            Pay with Crypto
                          </p>
                          <p className="text-sm text-gray-600" style={{ fontFamily: "'Inconsolata', monospace" }}>
                            Secure payment via NowPayments
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8">
                  {cart.map((item, index) => (
                    <div key={item.id} className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors ${index !== cart.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div className="relative overflow-hidden rounded-xl shadow-sm">
                        <img
                          src={`${API_BASE}${item.preview_url}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                          {item.name}
                        </h4>
                        
                        {/* Price display */}
                        {item.sale_price ? (
                          <div className="flex items-center gap-2">
                            <span
                              className="text-lg font-bold text-[#0071bc]"
                              style={{ fontFamily: "'Inconsolata', monospace" }}
                            >
                              ${item.sale_price}
                            </span>
                            <span
                              className="text-sm line-through text-gray-400"
                              style={{ fontFamily: "'Inconsolata', monospace" }}
                            >
                              ${item.regular_price}
                            </span>
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              SALE
                            </span>
                          </div>
                        ) : (
                          <span
                            className="text-lg font-bold text-[#0071bc]"
                            style={{ fontFamily: "'Inconsolata', monospace" }}
                          >
                            ${item.regular_price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-4 text-sm border-t pt-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                    <span className="font-bold text-lg" style={{ fontFamily: "'Inconsolata', monospace" }}>
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-[#0071bc]" style={{ fontFamily: "'Inconsolata', monospace" }}>
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="mt-8 w-full py-4 bg-[#0071bc] hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none uppercase flex items-center justify-center gap-3"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Redirecting...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Place Order
                    </>
                  )}
                </button>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-green-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Secure Payment</p>
                      <p className="text-xs text-green-600">Your payment is encrypted and secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;