
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
import LetsTalk from '@/components/LetsTalk';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Markefy.ai</title>
        <meta name="description" content="Get in touch with the Markefy.ai team to discuss your project or learn more about our services." />
      </Helmet>
      <div className="pt-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 md:py-24 bg-gray-900"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            We're here to answer your questions and help you get started on your next big idea.
          </p>
        </motion.div>
        <Contact onNotImplemented={handleNotImplemented} />
        <LetsTalk onNotImplemented={handleNotImplemented} />
      </div>
    </>
  );
};

export default ContactPage;
