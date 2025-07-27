import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Code, Cloud, Palette, Cpu, Zap, BarChart, ArrowRight } from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';

const services = [
  {
    icon: Cpu,
    title: "AI & Data Strategy",
    description: "Unlock the power of your data with our AI solutions. We help you build intelligent systems that drive automation, prediction, and optimization.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "From concept to launch, we build bespoke software solutions tailored to your unique business needs, ensuring scalability and performance.",
  },
  {
    icon: Palette,
    title: "Product Design (UI/UX)",
    description: "Create unforgettable user experiences with our human-centered design approach. We craft intuitive and beautiful interfaces that users love.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate your development lifecycle and improve infrastructure with our cloud and DevOps expertise. We ensure your applications are reliable and scalable.",
  },
  {
    icon: Zap,
    title: "Web Development",
    description: "Building high-performance, feature-packed, and digitally transformative web experiences that are secure, and built to scale.",
  },
  {
    icon: BarChart,
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies that deliver measurable results.",
  },
];

const ServicesPage = () => {
  const { toast } = useToast();
  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Markefy.ai</title>
        <meta name="description" content="Explore the range of services offered by Markefy.ai, including web development, SEO, custom software, and AI solutions." />
      </Helmet>
      <div className="pt-20 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 md:py-24"
        >
          <p className="text-blue-400 font-semibold">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">What We Do</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            We provide end-to-end solutions to help you build, launch, and grow your digital products.
          </p>
        </motion.div>
        
        <div className="py-16 md:py-24 bg-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                            className="bg-[#1C1C1C] rounded-xl p-8 flex flex-col cursor-pointer"
                            onClick={handleNotImplemented}
                        >
                            <div className="bg-blue-600/20 text-blue-400 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 flex-grow mb-6">{service.description}</p>
                            <div className="flex items-center text-blue-400 font-semibold group">
                                <span>Learn More</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        <LetsTalk onNotImplemented={handleNotImplemented} />
      </div>
    </>
  );
};

export default ServicesPage;