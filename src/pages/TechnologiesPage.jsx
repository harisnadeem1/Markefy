import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechStack from '@/components/TechStack';

const techData = {
  frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'Django', 'Flask', '.NET', 'Java', 'PHP', 'Go'],
  mobile: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Objective-C'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'],
  devops: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'Jenkins', 'Terraform'],
};

const TechnologiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Technology Stack - Markefy.ai</title>
        <meta name="description" content="Explore the powerful technologies we use to build scalable, secure, and high-performance applications." />
      </Helmet>
      <div className="pt-20 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 md:py-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Our Technology Expertise</h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We leverage a modern, robust, and scalable tech stack to build solutions that stand the test of time.
          </p>
        </motion.div>

        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8">
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                        <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        <TabsTrigger value="database">Databases</TabsTrigger>
                        <TabsTrigger value="devops">DevOps</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(techData).map(([key, techs]) => (
                        <TabsContent key={key} value={key}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
                            >
                                {techs.map((tech, index) => (
                                    <motion.div 
                                        key={tech}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="p-6 bg-white rounded-lg shadow border hover:shadow-md transition-shadow"
                                    >
                                        <p className="font-semibold">{tech}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
        
        <TechStack />
      </div>
    </>
  );
};

export default TechnologiesPage;