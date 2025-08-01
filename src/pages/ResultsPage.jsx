import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import TangibleResults from '@/components/TangibleResults';
import LetsTalk from '@/components/LetsTalk';
import { caseStudiesData } from '@/data/caseStudies';

const ResultsPage = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    
    const handleNotImplemented = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    const handleCaseStudyClick = (caseStudyId) => {
        navigate(`/case-study/${caseStudyId}`);
    };
  
    return (
        <>
            <Helmet>
                <title>Our Results - Markefy</title>
                <meta name="description" content="See the tangible results and success stories we have delivered for our clients." />
            </Helmet>
            <div className="pt-20 bg-white text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16 md:py-24"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-600">Success Stories</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        We don't just build products; we build partnerships that drive real-world impact.
                    </p>
                </motion.div>

                <TangibleResults />
                
                <div className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                        {caseStudiesData.map((study, index) => (
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
                                    <p className="font-semibold text-blue-600">{study.client}</p>
                                    <h3 className="text-3xl font-bold text-black">{study.title}</h3>
                                    <p className="text-gray-600">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {study.tags.map(tag => <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                    <Button 
                                        onClick={() => handleCaseStudyClick(study.id)} 
                                        variant="link" 
                                        className="text-blue-600 px-0 hover:text-blue-700"
                                    >
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