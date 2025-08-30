import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Mail, Download, Clock, CheckCircle, X, Package, Calendar } from "lucide-react";

const OrdersPage = () => {
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/order/by-email/${email}`
      );
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "finished":
        return {
          color: "text-green-600",
          bgColor: "bg-green-100",
          icon: CheckCircle
        };
      case "pending":
        return {
          color: "text-yellow-600", 
          bgColor: "bg-yellow-100",
          icon: Clock
        };
      default:
        return {
          color: "text-red-600",
          bgColor: "bg-red-100", 
          icon: X
        };
    }
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
          >
            <Package className="w-4 h-4 mr-2" />
            Order History
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Orders
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your email address to view your order history and download your purchased products.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <motion.button
              onClick={fetchOrders}
              disabled={loading || !email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl transition-all"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
              {loading ? "Searching..." : "Search Orders"}
            </motion.button>
          </div>
        </motion.div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">
              {email ? "No orders found for this email address." : "Enter your email to search for orders."}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${statusConfig.bgColor} ${statusConfig.color}`}>
                        <StatusIcon className="w-4 h-4" />
                        {order.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">${order.total_price}</div>
                    </div>
                  </div>

                  {/* Order Date */}
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(order.created_at).toLocaleString()}</span>
                  </div>

                  {/* Products */}
                  <div className="space-y-4 mb-6">
                    {order.products.map((product) => (
                      <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                        <img
                          src={`${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${product.preview_url}`}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-xl border border-gray-200"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  {order.status === "finished" ? (
                    <Link to={`/shop/thankyou/${order.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                      >
                        <Download className="w-5 h-5" />
                        Download Products
                      </motion.button>
                    </Link>
                  ) : (
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-gray-600 font-medium">
                        {order.status === "pending"
                          ? "Payment pending. Downloads will be available once payment is complete."
                          : "Order not available for download."}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrdersPage;