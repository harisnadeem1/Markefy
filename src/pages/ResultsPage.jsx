import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import TangibleResults from '@/components/TangibleResults';
import LetsTalk from '@/components/LetsTalk';

const caseStudies = [
  // 🌐 Web Development
  {
    client: "Tech Startup Hub",
    title: "Custom SaaS platform boosted client onboarding by 70%.",
    description: "Developed a scalable web application with automated onboarding, subscription billing, and analytics dashboard, reducing manual work by 50%.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89ae72?q=80&w=800",
    tags: ["Web Development", "SaaS", "Automation"],
  },
  {
    client: "Global Logistics Firm",
    title: "Real-time tracking portal increased shipment visibility.",
    description: "Built a web-based tracking system with live GPS integration and automated status updates, improving customer satisfaction scores by 40%.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    tags: ["Web Development", "Tracking System", "Logistics"],
  },
  {
    client: "Creative Agency",
    title: "Portfolio site doubled client leads in 3 months.",
    description: "Designed a sleek, fast-loading portfolio website with integrated lead capture forms, boosting incoming project inquiries by 120%.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    tags: ["Web Design", "Lead Generation", "Branding"],
  },

  // 💻 Software Development
  {
    client: "Healthcare ERP Provider",
    title: "Integrated ERP reduced admin workload by 60%.",
    description: "Engineered a HIPAA-compliant ERP with automated scheduling, billing, and reporting, cutting down repetitive admin tasks.",
    image: "https://images.unsplash.com/photo-1581093588401-22e8a0f3bba4?q=80&w=800",
    tags: ["ERP Development", "Healthcare", "Automation"],
  },
  {
    client: "Construction Firm",
    title: "Project management tool improved efficiency by 50%.",
    description: "Built a custom software system for managing projects, budgets, and timelines, leading to faster delivery rates.",
    image: "https://images.unsplash.com/photo-1581090700227-4c4f50d4e4b5?q=80&w=800",
    tags: ["Software Development", "Project Management", "Productivity"],
  },
  {
    client: "Retail Chain",
    title: "POS software increased transaction speed by 45%.",
    description: "Developed a robust point-of-sale solution with inventory management, sales tracking, and customer loyalty features.",
    image: "https://images.unsplash.com/photo-1581093448799-9e1b1c2b5b6a?q=80&w=800",
    tags: ["POS", "Retail", "Automation"],
  },

  // 📈 SEO Optimization
  {
    client: "Global E-commerce Brand",
    title: "SEO strategy drove 1.2M+ organic visits in 8 months.",
    description: "Implemented AI-driven keyword targeting, technical SEO, and optimized content strategy for higher visibility.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800",
    tags: ["SEO Optimization", "E-commerce", "AI"],
  },
  {
    client: "B2B Software Firm",
    title: "SEO campaign increased lead generation by 3x.",
    description: "Focused on industry-specific keyword research, backlink building, and high-value content creation.",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800",
    tags: ["SEO", "B2B", "Lead Generation"],
  },
  {
    client: "Local Service Provider",
    title: "Local SEO boosted calls by 180% in 4 months.",
    description: "Optimized Google Business Profile, localized keywords, and customer reviews strategy for maximum reach.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
    tags: ["Local SEO", "SMB", "Marketing"],
  },

  // 📢 Paid Ads & Campaigns
  {
    client: "Retail Fashion Chain",
    title: "Ad campaign ROI improved by 3.5x.",
    description: "Created and managed paid ads across Google, Facebook, and Instagram with AI-based bidding strategies.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    tags: ["Paid Ads", "PPC", "Marketing"],
  },
  {
    client: "Luxury Real Estate Agency",
    title: "Facebook lead campaign generated $4.2M in sales.",
    description: "Designed hyper-targeted campaigns for high-net-worth individuals, generating premium property leads.",
    image: "https://images.unsplash.com/photo-1556742400-b5b7c5121f5f?q=80&w=800",
    tags: ["Paid Ads", "Real Estate", "Facebook Ads"],
  },
  {
    client: "SaaS Company",
    title: "Google Ads reduced CPC by 40% while increasing conversions.",
    description: "Optimized ad creatives, landing pages, and bidding to lower acquisition costs while improving lead quality.",
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=800",
    tags: ["PPC", "Google Ads", "Lead Generation"],
  },

  // 🤖 AI & Automation
  {
    client: "AI Content Platform",
    title: "AI-powered content engine tripled engagement.",
    description: "Built a custom AI system generating SEO-friendly blog posts, social captions, and email copy.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=800",
    tags: ["AI", "Content Marketing", "Automation"],
  },
  {
    client: "Customer Support SaaS",
    title: "Chatbot reduced support tickets by 55%.",
    description: "Created an AI-driven chatbot that handled FAQs, automated responses, and integrated with CRM tools.",
    image: "https://images.unsplash.com/photo-1601597111158-2f91852111ac?q=80&w=800",
    tags: ["AI", "Chatbot", "Customer Support"],
  },
  {
    client: "FinTech Firm",
    title: "AI fraud detection reduced false positives by 75%.",
    description: "Developed a machine learning model to detect fraudulent transactions in real-time with high accuracy.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800",
    tags: ["AI", "FinTech", "Security"],
  },
];


const ResultsPage = () => {
    const { toast } = useToast();
    const handleNotImplemented = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };
  
    return (
        <>
            <Helmet>
                <title>Our Results - Markefy</title>
                <meta name="description" content="See the tangible results and success stories we have delivered for our clients." />
            </Helmet>
            <div className="pt-20 bg-black text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16 md:py-24"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">Success Stories</h1>
                    <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
                        We don't just build products; we build partnerships that drive real-world impact.
                    </p>
                </motion.div>

                <TangibleResults />
                
                <div className="py-16 md:py-24 bg-[#111111]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                        {caseStudies.map((study, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className={`grid md:grid-cols-2 gap-12 items-center`}
                            >
                                <div className={`rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <img src={study.image} alt={study.title} className="w-full h-full object-cover"/>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-semibold text-blue-400">{study.client}</p>
                                    <h3 className="text-3xl font-bold">{study.title}</h3>
                                    <p className="text-gray-400">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {study.tags.map(tag => <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                    <Button onClick={handleNotImplemented} variant="link" className="text-blue-400 px-0">
                                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <LetsTalk onNotImplemented={handleNotImplemented} />
            </div>
        </>
    );
};

export default ResultsPage;