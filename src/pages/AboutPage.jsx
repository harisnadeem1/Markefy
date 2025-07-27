import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Globe, Users, Target, ArrowRight } from 'lucide-react';
import WhyChooseUs from '@/components/WhyChooseUs';

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To empower businesses with transformative technology, creating digital experiences that drive growth, innovation, and success in a rapidly evolving world.",
    },
    {
        icon: Globe,
        title: "Our Vision",
        description: "To be a leading global partner in digital innovation, recognized for our commitment to excellence, integrity, and building the future of technology, together.",
    },
    {
        icon: Users,
        title: "Our People",
        description: "We are a diverse team of creators, thinkers, and problem-solvers. Our culture is built on collaboration, curiosity, and a shared passion for technology.",
    }
];

const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300" },
    { name: "Maria Garcia", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300" },
    { name: "James Smith", role: "Head of Product", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" },
    { name: "Patricia Williams", role: "Lead UX Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300" },
];

const AboutPage = () => {
    const { toast } = useToast();
    const handleNotImplemented = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <>
            <Helmet>
                <title>About Us - Markefy.ai</title>
                <meta name="description" content="Learn about Markefy.ai, our mission, our team, and why we are a leader in digital transformation." />
            </Helmet>
            <div className="pt-20 bg-white text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16 md:py-24"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">We're Engineering the Future</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        A passionate team of innovators dedicated to building technology that matters.
                    </p>
                </motion.div>

                <div className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                             <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div className="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <WhyChooseUs onNotImplemented={handleNotImplemented} />

                <div className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold">Meet Our Leadership</h2>
                            <p className="text-lg text-gray-600 mt-4">The minds behind our innovation and success.</p>
                        </motion.div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                                        <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover shadow-lg" />
                                        <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    </div>
                                    <h4 className="text-xl font-bold">{member.name}</h4>
                                    <p className="text-blue-600 font-medium">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;