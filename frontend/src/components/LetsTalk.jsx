import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, MapPin, CheckCircle, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Toast = ({ message, type, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl ${type === 'success'
          ? 'bg-green-600 text-white'
          : 'bg-red-600 text-white'
        }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <X className="w-5 h-5" />
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const LetsTalk = ({ onNotImplemented }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({
      isVisible: true,
      message,
      type
    });

    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast(t("home.letstalk.toast.error_email"), 'error');
      return;
    }

    setIsSubmitting(true);

    // Immediate UI feedback - clear form and show success message
    clearForm();
    showToast(t("home.letstalk.toast.success"), 'success');

    // Send email in the background (fire and forget)
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => {
        // Silently handle errors - user already got positive feedback
        console.error("Background email error:", err);
      });
    }
    catch (err) {
      // Silently handle errors
      console.error("Background email error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast {...toast} onClose={hideToast} />
      <section className="bg-black py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-8 md:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Left Side - Text + Form */}
              <motion.div className="lg:w-1/2 text-center lg:text-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {t("home.letstalk.title")}
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  {t("home.letstalk.subtitle")}
                </p>

                <div className="space-y-4 mb-8">
                  <input name="name" placeholder={t("home.letstalk.form.name")} value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />
                  <input name="email" placeholder={t("home.letstalk.form.email")} value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />
                  <textarea name="message" placeholder={t("home.letstalk.form.message")} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white resize-none" rows="4" />
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full sm:w-auto bg-blue-700 text-white rounded-full px-8 py-3">
                    {isSubmitting ? t("home.letstalk.form.sending") : t("home.letstalk.form.submit")}
                  </Button>
                </div>

                {/* Mobile Contact */}
                <div className="lg:hidden space-y-3 text-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>{t("home.letstalk.contact.email")}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">{t("home.letstalk.contact.address")}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Rocket Illustration */}
              <motion.div className="lg:w-1/2 flex flex-col items-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>
                <div className="relative w-72 h-72 md:w-96 md:h-96 mb-8">
                  <motion.div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
                  <motion.div className="absolute inset-4 rounded-full border-2 border-dashed border-gray-600" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
                  <motion.div className="absolute inset-10 rounded-full bg-gradient-to-bl from-teal-400/20 to-blue-600/20 blur-xl" animate={{ scale: [1, 1.05, 1], rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="w-20 h-20 text-white" />
                  </div>
                </div>
                <div className="hidden lg:block space-y-4 text-gray-300">
                  <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-400" /> <span>{t("home.letstalk.contact.email")}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-400" /> <span>{t("home.letstalk.contact.address")}</span></div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsTalk;