import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop'; // ⬅ import this
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

function App() {
  return (
    <Layout>
      <ScrollToTop /> {/* ⬅ Add this */}
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
      </Routes>
    </Layout>
  );
}

export default App;
