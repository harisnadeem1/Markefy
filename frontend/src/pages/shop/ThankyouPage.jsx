import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const ThankYouPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { clearCart } = useCart();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/order/order-status/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        clearCart();
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [orderId, clearCart]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find your order details.</p>
          <Link
            to="/shop/collection"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {order.status === "finished" ? (
          // Success State
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Success Header */}
            <div className="px-8 py-12 text-center" style={{ background: 'linear-gradient(135deg, rgba(0, 113, 188, 0.1) 0%, rgba(0, 113, 188, 0.05) 100%)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(0, 113, 188, 0.15)' }}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0071bc' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">Payment Successful!</h1>
              <p className="text-gray-600 text-lg">Thank you for your purchase</p>
            </div>

            {/* Order Details */}
            <div className="px-8 py-8">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Details</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">Order ID:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{orderId}</code>
                </div>
              </div>

              {/* Download Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Your Downloads ({order.products.length} item{order.products.length !== 1 ? 's' : ''})
                </h3>
                <div className="space-y-3">
                  {order.products.map((product, index) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 113, 188, 0.1)' }}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0071bc' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">Code Snippet</p>
                        </div>
                      </div>
                      <a
                        href={`${import.meta.env.VITE_API_BASE_URL}/order/download/${product.product_id}/${orderId}`}
                        className="inline-flex items-center px-4 py-2 font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md text-white"
                        style={{ backgroundColor: '#0071bc' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#005a94'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#0071bc'}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: 'rgba(0, 113, 188, 0.05)' }}>
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-600 text-sm mb-3">
                  If you have any issues with your downloads or need support, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/shop/contact"
                    className="inline-flex items-center px-4 py-2 bg-white font-medium rounded-lg border transition-colors duration-200"
                    style={{ color: '#0071bc', borderColor: 'rgba(0, 113, 188, 0.3)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 113, 188, 0.05)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get Support
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <Link
                  to="/shop/collection"
                  className="inline-flex items-center justify-center px-8 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#0071bc' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#005a94'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0071bc'}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Pending State
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Pending Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-12 text-center text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-2">Payment Processing</h1>
              <p className="text-yellow-100 text-lg">We're confirming your payment</p>
            </div>

            <div className="px-8 py-8 text-center">
              <div className="max-w-md mx-auto">
                <p className="text-gray-600 mb-6">
                  Your payment is being processed. This usually takes just a few moments. 
                  Please refresh this page or check back shortly.
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: '#0071bc' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#005a94'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0071bc'}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh Page
                  </button>
                  
                  <Link
                    to="/shop/collection"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Back to Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankYouPage;