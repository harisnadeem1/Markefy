import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!email) return alert("Enter your email");

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/order/by-email/${email}`
      );
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-[80%] mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Find Your Orders</h2>

      <div className="flex gap-4 justify-center mb-10">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded w-96"
        />
        <button
          onClick={fetchOrders}
          disabled={loading}
          className="bg-[#0071bc] text-white px-6 rounded"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-6 rounded shadow-sm bg-white"
            >
              <h3 className="font-bold text-lg">
                Order #{order.id} —{" "}
                <span
                  className={
                    order.status === "finished"
                      ? "text-green-600"
                      : order.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {order.status}
                </span>
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(order.created_at).toLocaleString()} — $
                {order.total_price}
              </p>

              <ul className="mt-3 space-y-2">
                {order.products.map((p) => (
                  <li key={p.id} className="flex items-center gap-3">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}${p.preview_url}`}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{p.name}</span>
                  </li>
                ))}
              </ul>

              {order.status === "finished" ? (
                <Link
                  to={`/shop/thankyou/${order.id}`}
                  className="mt-4 inline-block bg-[#0071bc] text-white px-4 py-2 rounded"
                >
                  Download Products
                </Link>
              ) : (
                <p className="mt-4 text-sm text-gray-500 italic">
                  {order.status === "pending"
                    ? "Payment pending. Downloads will be available once payment is complete."
                    : "Order not available for download."}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrdersPage;
