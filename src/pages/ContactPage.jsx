
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
        
        <LetsTalk onNotImplemented={handleNotImplemented} />
      </div>
    </>
  );
};

export default ContactPage;
