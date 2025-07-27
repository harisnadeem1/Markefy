
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DetailedServices = () => {
  const { toast } = useToast();
  const onNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const services = [
    {
      icon: ShieldCheck,
      category: "Web Development",
      title: "Use the industry's most robust tech to reduce risk on the web.",
      description: "Protect your digital assets with 360° security and AI that detects risks 4x more accurately than competitors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      imageAlt: "Dashboard showing web security metrics",
      order: 'text-first'
    },
    {
      icon: Truck,
      category: "SEO Optimization",
      title: "Save time and cut costs with unparalleled visibility into your search rankings.",
      description: "Drive efficiency with deep insights into website health, keyword location, and usage—all while automating SEO management workflows.",
      image: "https://images.unsplash.com/photo-1560472354-b333cb936246?q=80&w=1974",
      imageAlt: "Dashboard showing SEO and fleet management data",
      order: 'image-first'
    }
  ];

  return (
    <section className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              className={`space-y-6 ${service.order === 'image-first' ? 'md:order-2' : 'md:order-1'}`}
              initial={{ opacity: 0, x: service.order === 'image-first' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-semibold text-blue-600 tracking-wider uppercase">{service.category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{service.title}</h2>
              <p className="text-lg text-gray-600">{service.description}</p>
              <Button
                onClick={onNotImplemented}
                variant="outline"
                className="rounded-full border-gray-400 hover:bg-gray-100 text-black px-6 py-3"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className={`relative ${service.order === 'image-first' ? 'md:order-1' : 'md:order-2'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;

