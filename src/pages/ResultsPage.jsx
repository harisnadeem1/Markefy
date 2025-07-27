import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import TangibleResults from '@/components/TangibleResults';
import LetsTalk from '@/components/LetsTalk';

const caseStudies = [
  {
    client: "Global FinTech",
    title: "Scaled payment infrastructure to handle 10x traffic.",
    description: "Engineered a robust, cloud-native platform that improved transaction speed by 200% and reduced operational costs by 40%.",
    image: "https://images.unsplash.com/photo-1601597111158-2f91852111ac?q=80&w=800",
    tags: ["Cloud", "FinTech", "Scalability"],
  },
  {
    client: "E-commerce Leader",
    title: "AI-powered recommendation engine increased sales by 35%.",
    description: "Developed a custom machine learning model for personalized product recommendations, leading to higher user engagement and conversion rates.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?q=80&w=800",
    tags: ["AI/ML", "E-commerce", "Personalization"],
  },
  {
    client: "HealthTech Startup",
    title: "Launched HIPAA-compliant mobile app in just 6 months.",
    description: "Designed and built a cross-platform mobile application for patient data management, ensuring top-tier security and user experience.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    tags: ["Mobile Dev", "HealthTech", "Security"],
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
                <title>Our Results - Markefy.ai</title>
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