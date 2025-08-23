import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Monitor, Search, Megaphone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DetailedServices = () => {
    const navigate = useNavigate();
  const onNotImplemented = () => {
    alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀");
  };

  const services = [
    {
      icon: Code,
      category: "Custom Software Development",
      title: "Scalable and tailored software for your business needs",
      description: "We develop custom software solutions designed to fit your exact workflows and goals. Whether it's an ERP system, automation tool, or a specialized business application, our software is built to be secure, reliable, and scalable. We ensure seamless integration with your existing systems and provide continuous support for long-term success.",
      image: "/Services-Images/custom_software_development_markefy.jpg",
      imageAlt: "Custom software development dashboard showing business analytics, workflow automation, and enterprise resource planning interface",
      order: 'text-first'
    },
    {
      icon: Monitor,
      category: "Website Design & Development",
      title: "Fast, modern, and conversion-focused websites",
      description: "We create visually stunning, fully responsive websites that work flawlessly across all devices. From corporate sites to eCommerce platforms, our websites are optimized for performance, SEO, and user experience. We focus on both design and functionality to make sure your site not only looks great but also drives results.",
      image: "/Services-Images/web_design_development_markefy.jpg",
      imageAlt: "Modern responsive website design showing mobile and desktop layouts with clean UI/UX design elements and fast loading performance",
      order: 'image-first'
    },
    {
      icon: Search,
      category: "SEO Optimization",
      title: "Boost rankings and attract the right audience",
      description: "Our SEO strategies help your business dominate search results and attract customers who are ready to engage. We combine keyword research, technical optimization, content improvements, and link building to improve your search rankings. The result is a steady flow of targeted traffic that converts into sales and leads.",
      image: "/Services-Images/seo_opitmzation_markefy.jpg",
      imageAlt: "SEO analytics dashboard displaying search rankings, keyword performance, organic traffic growth, and website optimization metrics",
      order: 'text-first'
    },
     {
      icon: Megaphone,
      category: "Ads Campaigns & Digital Marketing",
      title: "Targeted ads that maximize your ROI",
      description: "We design and manage high-ROI ad campaigns on Google, Facebook, Instagram, and more. Our process includes creative ad design, precise audience targeting, and ongoing optimization to ensure every dollar of your budget delivers measurable results. Whether you want leads, sales, or brand awareness, we've got you covered.",
      image: "/Services-Images/digital-ad-campaign_markefy.jpg",
      imageAlt: "Digital marketing campaign dashboard showing Google Ads, Facebook Ads, and Instagram advertising performance with ROI metrics and audience targeting",
      order: 'image-first'
    }
  ];

  return (
    <section className="py-14 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
         <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              How We{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Business
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our proven approach to delivering exceptional results. Each service is carefully crafted to meet your unique needs and drive measurable growth for your business.
            </p>
          </motion.div>
        </div>
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
              
              {/* Mobile Image - Shows between description and button */}
              <motion.div
                className="md:hidden relative"
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
              
              <Button
                onClick={() => navigate('/services')}
                variant="outline"
                className="rounded-full border-gray-400 hover:bg-gray-100 text-black px-6 py-3"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Desktop Image - Hidden on mobile */}
            <motion.div
              className={`relative hidden md:block ${service.order === 'image-first' ? 'md:order-1' : 'md:order-2'}`}
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