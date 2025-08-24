import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
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
import ShopHome from "@/pages/shop/ShopHome";
import CollectionPage from "@/pages/shop/CollectionPage"; // ⬅ added
import ProductPage from "@/components/shop/product/ProductPage"; // ⬅ added

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
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
        <Route path="/shop/collection" element={<CollectionPage />} />
        <Route path="/shop/collection/:category" element={<CollectionPage />} />
        <Route path="/shop/product/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
