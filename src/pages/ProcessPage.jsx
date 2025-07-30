import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Search, Lightbulb, Pencil, Code, Rocket, HeartHandshake as Handshake } from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';
import Process from '@/components/Process';

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
                <title>Our Process - Markefy</title>
                <meta name="description" content="Discover our step-by-step process for turning great ideas into successful digital products." />
            </Helmet>
            <div className="pt-20 bg-white text-black">
               <Process  />
                     <LetsTalk  />
            </div>
        </>
    );
};

export default ProcessPage;