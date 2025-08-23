import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Globe, 
  Users, 
  Target, 
  ArrowRight, 
  Code, 
  Smartphone, 
  Search, 
  TrendingUp, 
  PenTool, 
  CheckCircle,
  Zap,
  Shield,
  Award,
  Heart
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Stunning, fast, and user-focused websites that convert visitors into customers."
  },
  {
    icon: Smartphone,
    title: "Software & App Development",
    description: "Scalable, secure applications tailored to your specific business needs."
  },
  {
    icon: Search,
    title: "AI-Powered SEO Optimization",
    description: "Rank higher, get noticed, and grow organic traffic with cutting-edge strategies."
  },
  {
    icon: TrendingUp,
    title: "Paid Ads & PPC Campaigns",
    description: "Targeted advertising strategies designed for maximum ROI and growth."
  },
  {
    icon: PenTool,
    title: "Content & Brand Marketing",
    description: "Compelling storytelling that connects with your audience and builds trust."
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Full-Stack Expertise",
    description: "From code to campaigns, we handle every aspect of your digital presence."
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Custom-built strategies designed to match your business and audience perfectly."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Measurable impact on traffic, sales, and engagement that drives real growth."
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "Long-term partnerships to keep you ahead of the competition."
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "5+", label: "Years Experience" }
];

const AboutPage = () => {
  const { toast } = useToast();
  
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>About Us - Markefy | Digital Innovation & Growth Solutions</title>
        <meta name="description" content="Learn about Markefy.ai - we blend design, technology, and innovation to deliver transformative digital solutions that help businesses scale and compete." />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovating Digital Experiences,{' '}
              <span className="text-blue-600">Driving Business Growth</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Markefy, we believe technology should be more than just functional — it should be transformative. 
              We're a team of creative thinkers, skilled developers, and marketing strategists dedicated to building 
              digital solutions that help businesses scale, compete, and win.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Build Something Extraordinary
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section 
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            >
              <p className="text-xl mb-6">
                Markefy started with a simple idea — to make high-quality digital services accessible to businesses of all sizes. 
                What began as a small passion project quickly grew into a full-scale agency trusted by clients worldwide.
              </p>
              <p className="text-lg">
                Today, we work across industries, helping startups, SMEs, and enterprises bring their visions to life. 
                From custom websites and enterprise software to SEO strategies and data-driven marketing campaigns, 
                we blend design, technology, and innovation to deliver results that matter.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of services to meet modern business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section 
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every project starts with <strong className="text-gray-900">understanding you</strong> — your vision, challenges, and goals. 
                We combine research, strategy, and creativity to deliver solutions that not only look great but also 
                <strong className="text-blue-600"> drive measurable growth</strong>.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Markefy.ai?</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Something Extraordinary
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Whether you're launching a new brand, upgrading your website, or scaling your digital marketing, 
                Markefy is here to make it happen. Your growth is our mission.
              </p>
              <Button 
                onClick={handleGetStarted}
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey Today
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;