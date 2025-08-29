
import React from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DetailedServices from '@/components/DetailedServices';
import EngineeringFuture from '@/components/EngineeringFuture';
import TangibleResults from '@/components/TangibleResults';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import TechStack from '@/components/TechStack';
import LetsTalk from '@/components/LetsTalk';
import Contact from '@/components/Contact';
import { useTranslation } from "react-i18next";


const HomePage = () => {
    const { t } = useTranslation();
  
  const { toast } = useToast();
  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>{t("home.title")}</title>
        <meta name="description" content="Transform your digital presence with Markefy. Expert web development, SEO optimization, and custom software solutions for modern businesses." />
      </Helmet>
      
      <Hero onNotImplemented={handleNotImplemented} />
      <Services onNotImplemented={handleNotImplemented} />
      <EngineeringFuture onNotImplemented={handleNotImplemented} />
      <DetailedServices />

      <TangibleResults onNotImplemented={handleNotImplemented} />
      <Process onNotImplemented={handleNotImplemented} />
      <TechStack />
      <LetsTalk onNotImplemented={handleNotImplemented} />
    </>
  );
};

export default HomePage;
