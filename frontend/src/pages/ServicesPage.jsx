import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Code, 
  Globe, 
  Search, 
  TrendingUp, 
  Palette, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Target,
  Users,
  Database,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Eye,
  MousePointer,
  Award,
  Rocket,
  Settings,
  Heart,
  Star,
  Lightbulb,
  Gauge,
  ThumbsUp,
  Lock,
  Cpu,
  Cloud,
  Monitor,
  FileText,
  BarChart,
  MessageSquare,
  Briefcase,
  Package,
  Presentation,
  MapPin
} from 'lucide-react';

import LetsTalk from '../components/LetsTalk';

const services = [
  {
    id: 'software',
    icon: Code,
    title: "Custom Software Development",
    subtitle: "Scalable, Secure, and Tailored for Your Business",
    description: "In today's fast-paced world, businesses need software that is built for their unique needs, not one-size-fits-all solutions. We design and develop custom software applications that streamline operations, boost productivity, and deliver long-term value.",
    fullDescription: "We don't just write code – we solve business problems. Our custom software development approach begins with understanding your unique challenges and translating them into powerful, scalable solutions. Whether you need to automate complex workflows, integrate disparate systems, or create entirely new digital products, our team has the expertise to deliver exceptional results.",
    offerings: [
      { icon: Briefcase, title: "Enterprise Software Solutions", desc: "Large-scale applications designed for enterprise operations" },
      { icon: Database, title: "ERP & CRM Systems", desc: "Comprehensive business management platforms" },
      { icon: Settings, title: "Workflow Automation Tools", desc: "Streamline processes and eliminate manual tasks" },
      { icon: Cpu, title: "AI-Driven Business Applications", desc: "Intelligent systems that learn and adapt" },
      { icon: Cloud, title: "API Integrations & Cloud Platforms", desc: "Seamless connectivity and cloud-native solutions" }
    ],
    whyBest: [
      "Deep expertise in full-stack development and scalable architectures",
      "Agile development methodology for faster delivery and flexibility", 
      "Security-first coding practices to protect your valuable data",
      "Long-term maintenance and dedicated support partnerships"
    ],
    result: "Your business gets a high-performance system that grows with you, improves efficiency, and saves you money in the long run.",
    technologies: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    color: "blue",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 'website',
    icon: Globe,
    title: "Website Design & Development", 
    subtitle: "Beautiful, Fast, and Built to Convert",
    description: "Your website is your digital storefront, and first impressions matter. At Markefy, we craft visually stunning, mobile-responsive, and conversion-focused websites that reflect your brand and engage your audience.",
    fullDescription: "We create more than websites – we build digital experiences that captivate, engage, and convert. Every pixel is carefully considered, every interaction thoughtfully designed. Our websites don't just look beautiful; they perform exceptionally, load lightning-fast, and are optimized for search engines from day one.",
    offerings: [
      { icon: Monitor, title: "Corporate & Business Websites", desc: "Professional websites that establish credibility" },
      { icon: ShoppingCart, title: "eCommerce Platforms & Online Stores", desc: "Full-featured online selling solutions" },
      { icon: Target, title: "Landing Pages for Marketing Campaigns", desc: "High-converting pages for specific campaigns" },
      { icon: Smartphone, title: "Progressive Web Apps (PWAs)", desc: "App-like experiences in the browser" },
      { icon: Gauge, title: "Website Redesigns & Performance Optimization", desc: "Transform existing sites for better results" }
    ],
    whyBest: [
      "UI/UX designs that perfectly balance beauty and usability",
      "Websites that load in under 2 seconds for better SEO rankings",
      "SEO-ready structure and optimization from day one",
      "Fully responsive designs that work flawlessly on all devices"
    ],
    result: "A website that not only looks amazing but also drives traffic, generates leads, and converts visitors into customers.",
    technologies: ["React", "Next.js", "Tailwind CSS", "WordPress", "Shopify", "Webflow"],
    color: "gray",
    gradient: "from-gray-600 to-gray-700"
  },
  {
    id: 'seo',
    icon: Search,
    title: "SEO Optimization",
    subtitle: "Rank Higher, Get Found, Grow Your Audience", 
    description: "Great products and services deserve visibility. Our AI-powered SEO strategies help you climb search rankings, increase organic traffic, and attract high-intent customers.",
    fullDescription: "SEO isn't just about rankings – it's about connecting your business with people who are actively searching for what you offer. Our comprehensive SEO approach combines technical excellence, content strategy, and data-driven insights to deliver sustainable organic growth that compounds over time.",
    offerings: [
      { icon: Target, title: "Keyword Research & Strategy", desc: "Identify high-value opportunities in your market" },
      { icon: FileText, title: "On-Page SEO Optimization", desc: "Optimize every element for maximum visibility" },
      { icon: Settings, title: "Technical SEO Audits & Fixes", desc: "Resolve technical issues that hurt rankings" },
      { icon: BarChart, title: "Link Building & Authority Growth", desc: "Build domain authority through quality backlinks" },
      { icon: MapPin, title: "Local SEO for Targeted Reach", desc: "Dominate local search results in your area" }
    ],
    whyBest: [
      "Data-driven approach powered by cutting-edge AI insights",
      "Continuous monitoring and optimization for sustained growth",
      "Proven track record – clients see traffic increases of 200%+",
      "White-hat SEO practices that ensure long-term, stable rankings"
    ],
    result: "A steady stream of qualified leads and customers without paying for every click.",
    technologies: ["SEMrush", "Ahrefs", "Google Analytics", "Search Console", "Screaming Frog", "Hotjar"],
    color: "blue",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    id: 'ads',
    icon: TrendingUp, 
    title: "Paid Ads & PPC Campaigns",
    subtitle: "Smart Advertising That Delivers ROI",
    description: "We make your advertising budget work harder by targeting the right audience with the right message at the right time. Our PPC and paid campaigns are data-driven and results-oriented.",
    fullDescription: "Every dollar you spend on advertising should return more than a dollar in value. Our paid advertising expertise spans across all major platforms, utilizing advanced targeting, compelling creatives, and continuous optimization to maximize your return on ad spend while minimizing cost per acquisition.",
    offerings: [
      { icon: Search, title: "Google Search & Display Ads", desc: "Capture high-intent searches and build awareness" },
      { icon: Users, title: "Facebook & Instagram Ads", desc: "Engage your audience on social platforms" },
      { icon: Briefcase, title: "LinkedIn B2B Ad Campaigns", desc: "Target decision-makers and professionals" },
      { icon: Eye, title: "YouTube Video Advertising", desc: "Leverage the power of video marketing" },
      { icon: Target, title: "Retargeting Campaigns", desc: "Re-engage visitors who didn't convert initially" }
    ],
    whyBest: [
      "Ad creatives that stand out in crowded feeds and convert viewers",
      "Advanced audience targeting for maximum relevance and efficiency",
      "Ongoing A/B testing to continuously lower costs and boost conversions", 
      "Transparent reporting so you know exactly where every dollar goes"
    ],
    result: "More leads, more sales, and significantly better ROI from your advertising spend.",
    technologies: ["Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager", "Google Analytics", "Unbounce", "Hotjar"],
    color: "black",
    gradient: "from-gray-800 to-black"
  },
  {
    id: 'branding',
    icon: Palette,
    title: "Branding & Graphic Design",
    subtitle: "Visual Identity That Tells Your Story",
    description: "Your brand is more than just a logo — it's the emotional connection you create with your audience. We design brand identities that are consistent, memorable, and aligned with your vision.",
    fullDescription: "Great branding isn't just about looking good – it's about feeling right. We create comprehensive brand identities that capture the essence of your business and resonate deeply with your target audience. Every color, font, and design element is carefully chosen to support your business goals and create lasting emotional connections.",
    offerings: [
      { icon: Star, title: "Logo Design & Brand Guidelines", desc: "Complete visual identity systems and usage standards" },
      { icon: MessageSquare, title: "Social Media Graphics", desc: "Consistent, engaging visuals for all platforms" },
      { icon: FileText, title: "Business Cards, Flyers, Brochures", desc: "Professional print materials that make an impact" },
      { icon: Package, title: "Product Packaging & Promotional Materials", desc: "Packaging that sells and promotional items that convert" },
      { icon: Presentation, title: "Presentation & Pitch Deck Design", desc: "Compelling presentations that win deals" }
    ],
    whyBest: [
      "Designs that perfectly balance creativity with strategic brand thinking", 
      "Absolute consistency across all platforms and touchpoints",
      "Deep understanding of color psychology and visual brand impact",
      "Collaborative design process with unlimited revisions until perfect"
    ],
    result: "A brand identity that makes your business instantly recognizable, trusted, and preferred by your ideal customers.",
    technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro", "After Effects", "Principle"],
    color: "gray",
    gradient: "from-gray-700 to-gray-800"
  },
  {
    id: 'support',
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    subtitle: "Always Updated, Secure, and Ahead",
    description: "We don't disappear after launch — we stay with you. Our support and maintenance plans ensure your systems, websites, and campaigns keep performing at their best.",
    fullDescription: "Your digital success doesn't end at launch – it evolves and grows. Our comprehensive support and maintenance services ensure your digital assets remain secure, fast, and optimized. We're your long-term technology partner, proactively monitoring, updating, and improving your systems so you can focus on growing your business.",
    offerings: [
      { icon: Shield, title: "Regular Updates & Security Patches", desc: "Keep your systems secure and up-to-date" },
      { icon: Gauge, title: "Performance Monitoring & Optimization", desc: "Ensure peak performance at all times" },
      { icon: Settings, title: "Bug Fixes & Issue Resolution", desc: "Quick resolution of any technical issues" },
      { icon: Zap, title: "Feature Enhancements & Upgrades", desc: "Continuous improvement and new capabilities" },
      { icon: BarChart3, title: "Monthly Analytics & Performance Reports", desc: "Detailed insights into your digital performance" }
    ],
    whyBest: [
      "Proactive monitoring to catch and resolve issues before they impact you",
      "Flexible support plans designed to fit any budget and requirement",
      "24/7 availability for urgent support with guaranteed response times",
      "Dedicated account manager who knows your business and goals intimately"
    ],
    result: "Complete peace of mind knowing your digital assets are in expert hands and performing optimally.",
    technologies: ["Monitoring Tools", "Security Scanners", "Analytics Platforms", "Backup Systems", "CDN Networks", "Support Systems"],
    color: "blue",
    gradient: "from-blue-500 to-blue-700"
  }
];

const benefits = [
  {
    icon: Rocket,
    title: "Full-Stack Expertise",
    description: "End-to-end solutions from strategy to implementation and ongoing optimization."
  },
  {
    icon: Target,
    title: "Tailored Approach",
    description: "Custom strategies designed specifically for your unique business goals and challenges."
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description: "Consistent track record of delivering measurable growth and exceptional ROI."
  },
  {
    icon: Shield,
    title: "Long-term Partnership",
    description: "Ongoing support and optimization to ensure your continued success and growth."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business, goals, challenges, and competitive landscape",
    icon: Lightbulb,
    details: "Comprehensive business analysis, competitor research, target audience identification, and goal setting."
  },
  {
    step: "02", 
    title: "Strategy & Planning",
    description: "Create a detailed roadmap and strategy tailored specifically to your success",
    icon: Target,
    details: "Strategic planning, project roadmapping, resource allocation, and timeline development."
  },
  {
    step: "03",
    title: "Design & Development", 
    description: "Build your solution with precision, attention to detail, and best practices",
    icon: Settings,
    details: "Creative design, technical development, quality assurance, and iterative improvements."
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing and smooth deployment to ensure flawless performance",
    icon: Rocket,
    details: "Comprehensive testing, performance optimization, deployment, and launch coordination."
  },
  {
    step: "05",
    title: "Growth & Optimization",
    description: "Continuous monitoring, analysis, and optimization for long-term success",
    icon: TrendingUp,
    details: "Performance monitoring, data analysis, continuous optimization, and scaling strategies."
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: CheckCircle, desc: "Successfully completed projects across all industries" },
  { number: "98%", label: "Client Satisfaction", icon: Heart, desc: "Clients who are thrilled with our results and service" },
  { number: "200%", label: "Average Growth", icon: TrendingUp, desc: "Average increase in key metrics for our clients" },
  { number: "24/7", label: "Support Available", icon: Clock, desc: "Round-the-clock support whenever you need us" }
];

const ServicesPage = () => {
  const { toast } = useToast();
  
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Markefy | Complete Digital Solutions Guide</title>
        <meta name="description" content="The complete guide to Markefy.ai's comprehensive digital solutions. Custom software, web development, SEO, paid ads, branding, and ongoing support - everything you need to know." />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold text-xs md:text-sm rounded-full mb-6 md:mb-8 shadow-lg">
                Complete Services Guide
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-2">
                The Complete Guide to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Digital Excellence
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Everything you need to know about our comprehensive digital solutions. From custom software development to ongoing support – this is your complete resource for transforming your business.
            </motion.p>
          </div>
        </motion.section>

        {/* Enhanced Stats Section */}
        <motion.section 
          className="py-12 md:py-20 bg-white border-b border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comprehensive Services Section */}
        <motion.section 
          className="py-12 md:py-20 lg:py-28"
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
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-2">Our Complete Service Portfolio</h2>
              <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                Every service, every detail, every benefit explained. This is your comprehensive guide to how we transform businesses through digital excellence.
              </p>
            </motion.div>

            <div className="space-y-12 md:space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Service Header */}
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
                    <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6 mx-auto sm:mx-0`}>
                          <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">{service.title}</h3>
                          <p className="text-base md:text-lg font-semibold text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{service.fullDescription}</p>
                    </div>
                    <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                      <div className={`bg-gradient-to-br ${service.gradient} p-6 md:p-8 rounded-2xl md:rounded-3xl text-white`}>
                        <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                          <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                          The Result
                        </h4>
                        <p className="text-base md:text-lg leading-relaxed opacity-95">{service.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                      {/* What We Offer */}
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3" />
                          What We Offer
                        </h4>
                        <div className="space-y-4 md:space-y-6">
                          {service.offerings.map((offering, idx) => (
                            <div key={idx} className="flex items-start bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                                <offering.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{offering.title}</h5>
                                <p className="text-xs md:text-sm text-gray-600">{offering.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Why We're The Best */}
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                          <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3" />
                          Why We're The Best
                        </h4>
                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                          {service.whyBest.map((reason, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0">
                                <Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                              </div>
                              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{reason}</p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="bg-white p-4 md:p-6 rounded-xl">
                          <h5 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base">
                            <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2" />
                            Technologies We Use
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"
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
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">The Markefy Advantage</h2>
              <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">What sets us apart and makes us the right choice for your digital transformation</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Process Section */}
        <motion.section 
          className="py-12 md:py-20 bg-white"
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
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Proven 5-Step Process</h2>
              <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                A systematic, time-tested approach that ensures success at every stage of your project. Here's exactly how we work with you to achieve exceptional results.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 text-center sm:text-left">{step.step}</div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center sm:text-left">{step.title}</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4 leading-relaxed">{step.description}</p>
                      <p className="text-sm md:text-base text-gray-700">{step.details}</p>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                    <div className="relative">
                      <div className="w-full h-48 md:h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl md:rounded-3xl flex items-center justify-center">
                        <step.icon className="w-16 h-16 md:w-24 md:h-24 text-blue-500 opacity-20" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      
      <LetsTalk />
    </>
  );
};

export default ServicesPage;