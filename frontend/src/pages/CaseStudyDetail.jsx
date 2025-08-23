import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, Clock, ExternalLink, X } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudies';

const CaseStudyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Find the case study by ID
    const caseStudy = caseStudiesData.find(study => study.id === id);
    
    const openImagePopup = (image) => {
        setSelectedImage(image);
    };
    
    const closeImagePopup = () => {
        setSelectedImage(null);
    };
    
    if (!caseStudy) {
        return (
            <div className="pt-20 bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
                    <Button onClick={() => navigate('/results')} className="bg-blue-600 hover:bg-blue-700">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Results
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{caseStudy.title} - Case Study | Markefy</title>
                <meta name="description" content={caseStudy.description} />
            </Helmet>
            
            <div className="pt-20 bg-white text-black min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* <Button 
                                onClick={() => navigate('/results')} 
                                variant="ghost" 
                                className="mb-8 text-blue-600 hover:text-blue-700"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Results
                            </Button> */}
                            
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-blue-600 font-semibold text-lg mb-4">{caseStudy.client}</p>
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        {caseStudy.title}
                                    </h1>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        {caseStudy.longDescription}
                                    </p>
                                    
                                    {/* Project Info */}
                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        <div className="text-center">
                                            <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                            <p className="text-sm text-gray-500">Duration</p>
                                            <p className="font-semibold">{caseStudy.duration}</p>
                                        </div>
                                        <div className="text-center">
                                            <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                            <p className="text-sm text-gray-500">Team Size</p>
                                            <p className="font-semibold">{caseStudy.teamSize}</p>
                                        </div>
                                        <div className="text-center">
                                            <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                            <p className="text-sm text-gray-500">Timeline</p>
                                            <p className="font-semibold">{caseStudy.timeline}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.tags.map(tag => (
                                            <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        src={caseStudy.heroImage} 
                                        alt={caseStudy.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {caseStudy.challenge}
                                </p>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {caseStudy.solution}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {caseStudy.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                            <feature.icon className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
                            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
                                {caseStudy.techStack.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center w-24 md:w-28 lg:w-32 flex-shrink-0"
                                    >
                                        <img 
                                            src={tech.logo} 
                                            alt={tech.name} 
                                            className="w-12 h-12 mx-auto mb-3 object-contain"
                                        />
                                        <p className="font-medium text-gray-900 text-sm">{tech.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Project Images */}
                <div className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Gallery</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {caseStudy.projectImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                        onClick={() => openImagePopup(image)}
                                    >
                                        <img 
                                            src={image.url} 
                                            alt={image.title} 
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                                            <p className="text-gray-600">{image.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Results & Impact */}
                <div className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Results & Impact</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {caseStudy.results.map((result, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="text-center"
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                            {result.metric}
                                        </div>
                                        <div className="text-xl font-semibold text-gray-900 mb-2">
                                            {result.title}
                                        </div>
                                        <p className="text-gray-600">{result.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Call to Action
                <div className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Start Your Success Story?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8">
                                Let's discuss how we can help you achieve similar results for your business.
                            </p>
                            <Button 
                                onClick={() => navigate('/contact')}
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                            >
                                Start Your Project
                                <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div> */}

                {/* Image Popup Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                            onClick={closeImagePopup}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeImagePopup}
                                    className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                                
                                {/* Image */}
                                <img 
                                    src={selectedImage.url} 
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                                
                                {/* Image Info */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {selectedImage.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">
                                        {selectedImage.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CaseStudyDetail;