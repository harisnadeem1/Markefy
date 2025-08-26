import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';

// Website Pages
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import ProcessPage from '@/pages/ProcessPage';
import ResultsPage from '@/pages/ResultsPage';
import TechnologiesPage from '@/pages/TechnologiesPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/TermsofServices';
import CookiePolicy from '@/pages/Cookie';
import Disclamier from '@/pages/Disclamier';
import CaseStudyDetail from '@/pages/CaseStudyDetail';

// Shop Pages
import ShopHome from "@/pages/shop/ShopHome";
import CollectionPage from "@/pages/shop/CollectionPage";
import ProductPage from "@/components/shop/product/ProductPage";
import CartPage from "@/pages/shop/CartPage";
import CheckoutPage from '@/pages/shop/CheckoutPage';
import ThankyouPage from "@/pages/shop/ThankyouPage";
import ShopAboutPage  from '@/pages/shop/AboutPage';
import WhatAreCodeSnippets  from '@/pages/shop/WhatAreCodeSnippets';
import FAQPage  from '@/pages/shop/FAQPage';
import Orders from '@/pages/shop/Orders'


WhatAreCodeSnippets

// Admin Pages
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ProtectedRoute from "@/pages/admin/ProtectedRoute";
import AdminRegister from "@/pages/admin/AdminRegister";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclamier />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />

        {/* Shop Routes */}
        <Route path="/shop" element={<ShopHome />} />
        <Route path="/shop/about" element={<ShopAboutPage />} />
        <Route path="/shop/what-are-code-snippets" element={<WhatAreCodeSnippets />} />
        <Route path="/shop/faq" element={<FAQPage />} />
        <Route path="/shop/orders" element={<Orders />} />




        <Route path="/shop/collection" element={<CollectionPage />} />
        <Route path="/shop/collection/:category" element={<CollectionPage />} />
        <Route path="/shop/product/:id" element={<ProductPage />} />
        <Route path="/shop/cart" element={<CartPage />} />
        <Route path="/shop/checkout" element={<CheckoutPage />} />
        <Route path="/shop/thankyou/:orderId" element={<ThankyouPage />} />

        {/* Admin Routes */}
        <Route path="/shop/admin/login" element={<AdminLogin />} />
        <Route path="/shop/admin/register" element={<AdminRegister />} />
        <Route
          path="/shop/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
