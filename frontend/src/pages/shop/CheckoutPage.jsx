import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

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
    <section className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg grid grid-cols-1 lg:grid-cols-3">
        {/* LEFT: Customer Info */}
        <div className="lg:col-span-2 p-8 border-r">
          <h1
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Checkout
          </h1>

          {itemCount === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">Your cart is empty.</p>
              <Link
                to="/shop/collection"
                className="text-[#0071bc] underline mt-4 block"
              >
                Back to Collection
              </Link>
            </div>
          ) : (
            <>
              {/* Customer Info Form */}
              <div className="space-y-4 mb-8">
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Customer Information
                </h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded text-sm"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email (product link will be delivered here)"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded text-sm"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address (Optional)"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border p-3 rounded text-sm"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded text-sm"
                  style={{ fontFamily: "'Inconsolata', monospace" }}
                />
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" defaultChecked />{" "}
                    <span style={{ fontFamily: "'Inconsolata', monospace" }}>
                      Pay with Crypto (via NowPayments)
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: Order Summary */}
        <div className="p-8 bg-gray-50 lg:rounded-r-lg">
          <h2
            className="text-xl font-semibold mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Order Summary
          </h2>

          {itemCount === 0 ? (
            <p className="text-gray-600">No products in cart.</p>
          ) : (
            <>
              <div className="space-y-4 text-sm mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`${API_BASE}${item.preview_url}`}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span
                        className="font-medium"
                        style={{ fontFamily: "'Inconsolata', monospace" }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Price display (with sale/regular) */}
                    {item.sale_price ? (
                      <p className="flex flex-col items-end">
                        <span
                          className="line-through text-gray-500 text-xs"
                          style={{ fontFamily: "'Inconsolata', monospace" }}
                        >
                          ${item.regular_price}
                        </span>
                        <span
                          className="text-base "
                          style={{
                            fontFamily: "'Inconsolata', monospace",
                            color: "#871120",
                          }}
                        >
                          ${item.sale_price}
                        </span>
                      </p>
                    ) : (
                      <span
                        className="text-base "
                        style={{
                          fontFamily: "'Inconsolata', monospace",
                          color: "#871120",
                        }}
                      >
                        ${item.regular_price}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="mt-8 w-full bg-[#0071bc] text-white py-3 uppercase tracking-wide text-sm rounded hover:bg-[#005a94] transition disabled:opacity-50"
                style={{ fontFamily: "'Inconsolata', monospace" }}
              >
                {loading ? "Redirecting..." : "Place Order"}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
