import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Search, Lightbulb, Pencil, Code, Rocket, HeartHandshake as Handshake } from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';

const processSteps = [
  {
    icon: Lightbulb,
    title: "1. Discovery & Ideation",
    description: "We start by understanding your vision. Through collaborative workshops, we define project goals, scope, and success metrics."
  },
  {
    icon: Search,
    title: "2. Strategy & Research",
    description: "Our team conducts in-depth market research and analysis to formulate a robust strategy that ensures product-market fit."
  },
  {
    icon: Pencil,
    title: "3. Design & Prototyping",
    description: "We create wireframes, mockups, and interactive prototypes to visualize the user experience and gather early feedback."
  },
  {
    icon: Code,
    title: "4. Development & QA",
    description: "Following agile methodologies, our engineers bring the designs to life, with continuous testing to ensure quality and performance."
  },
  {
    icon: Rocket,
    title: "5. Deployment & Launch",
    description: "We handle the entire deployment process, ensuring a smooth and successful launch of your product to the market."
  },
  {
    icon: Handshake,
    title: "6. Support & Growth",
    description: "Our partnership doesn't end at launch. We provide ongoing support and work with you to scale and enhance your product."
  }
];

const ProcessPage = () => {
    const { toast } = useToast();
    const handleNotImplemented = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };
  
    return (
        <>
            <Helmet>
                <title>Our Process - Markefy.ai</title>
                <meta name="description" content="Discover our step-by-step process for turning great ideas into successful digital products." />
            </Helmet>
            <div className="pt-20 bg-white text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16 md:py-24"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">Our Proven Process</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        From a simple idea to a market-ready product, we've perfected a transparent and collaborative workflow.
                    </p>
                </motion.div>

                <div className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gray-300 hidden sm:block"></div>
                        
                        {processSteps.map((step, index) => (
                             <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: (index % 2 === 0) ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                             >
                                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-50"></div>
                                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}>
                                    <div className="bg-white p-8 rounded-lg shadow-lg border">
                                        <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                            <step.icon className="w-6 h-6"/>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center py-20">
                     <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
                     <Button onClick={handleNotImplemented} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Let's build together</Button>
                </div>
            </div>
        </>
    );
};

export default ProcessPage;