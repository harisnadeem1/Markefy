
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';


// 👉 Add swiper styles here
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
