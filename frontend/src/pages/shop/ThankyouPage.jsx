import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ThankYouPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_BASE_URL}/order/order-status/${orderId}`)
    .then((res) => res.json())
    .then(setOrder)
    .catch(console.error);
}, [orderId]);


  if (!order) return <p>Loading...</p>;

  return (
    <section className="w-[80%] mx-auto py-16 text-center">
      {order.status === "finished" ? (
        <>
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Thank you! Your payment was successful 🎉
          </h2>
          <p className="mb-6">Download your products below:</p>
          <ul className="space-y-4">
            {order.products.map((p) => (
              <li key={p.id}>
                <a
                  href={`${import.meta.env.VITE_API_BASE_URL}/order/download/${p.id}/${orderId}`}
                  className="text-[#0071bc] underline"
                >
                  Download {p.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">
            Payment Pending...
          </h2>
          <p>We’re waiting for your payment confirmation. Refresh later.</p>
          <Link to="/shop/collection" className="text-[#0071bc] underline block mt-4">
            Back to Shop
          </Link>
        </>
      )}
    </section>
  );
};

export default ThankYouPage;
