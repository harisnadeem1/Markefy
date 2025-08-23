import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';       // Main Markefy header
import ShopHeader from '@/components/shop/ShopHeader'; // Shop-specific header
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if we're inside the shop routes
  const isShop = location.pathname.startsWith('/shop');

  return (
    <div className="min-h-screen bg-white text-black flex flex-col overflow-x-hidden">
      {/* Switch header depending on route */}
      {isShop ? <ShopHeader /> : <Header />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
