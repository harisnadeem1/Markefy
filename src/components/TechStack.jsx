import React from 'react';
import { motion } from 'framer-motion';

const techRow1 = [
  { name: 'Docker', logo: '/public/techstacks/docker.svg' },
  { name: 'Vue.js', logo: '/public/techstacks/vue.svg' },
  { name: 'AWS', logo: '/public/techstacks/aws.svg' },
  { name: 'Python', logo: '/public/techstacks/python.svg' },
  { name: 'TypeScript', logo: '/public/techstacks/typescript.svg' },
  { name: 'Node.js', logo: '/public/techstacks/node_js.svg' },
  { name: 'Django', logo: '/public/techstacks/django.svg' },
  { name: 'React', logo: '/public/techstacks/react.svg' },
  { name: 'Angular', logo: '/public/techstacks/angular.svg' },
  { name: 'Kubernetes', logo: '/public/techstacks/kubernetes.svg' }
];

const techRow2 = [
  { name: 'Swift', logo: '/public/techstacks/swift.svg' },
  { name: 'Kotlin', logo: '/public/techstacks/kotlin.svg' },
  { name: 'Flask', logo: '/public/techstacks/flask.svg' },
  { name: '.NET', logo: '/public/techstacks/dot_net.svg' },
  { name: 'Next.js', logo: '/public/techstacks/next_js.svg' },
  { name: 'Azure', logo: '/public/techstacks/microsoft_azure.svg' },
  { name: 'Firebase', logo: '/public/techstacks/firebase.svg' },
  { name: 'JavaScript', logo: '/public/techstacks/javascrypt.svg' },
  { name: 'PostgreSQL', logo: '/public/techstacks/postgres.svg' },
  { name: 'MySQL', logo: '/public/techstacks/my_sql.svg' }
];

const InfiniteScroller = ({ children, direction, speed = 30 }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-4 sm:space-x-6 md:space-x-8 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {/* First set of logos */}
        {children}
        {/* Duplicate set for seamless loop */}
        {children}
        {/* Third set to ensure seamless transition */}
        {children}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#111111] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            Technologies We Master
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            We've Got Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>{' '}
            Covered
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            With a proven record of solving challenges for over a decade, our experienced team can guide you to the best technological solutions and practices for your business needs.
          </p>
        </motion.div>
      </div>

      {/* Tech Logos Scrolling Rows - Only 2 Rows */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {/* First Row - Moving Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfiniteScroller direction="left" speed={25}>
            {techRow1.map((tech, index) => (
              <div key={index} className="group flex-shrink-0">
                <div className="flex items-center justify-center w-28 h-16 sm:w-32 sm:h-18 md:w-36 md:h-20 lg:w-40 lg:h-24">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        width: 'auto', 
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-xs sm:text-sm font-medium text-blue-300 group-hover:text-blue-200">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroller>
        </motion.div>

        {/* Second Row - Moving Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <InfiniteScroller direction="right" speed={30}>
            {techRow2.map((tech, index) => (
              <div key={index} className="group flex-shrink-0">
                <div className="flex items-center justify-center w-28 h-16 sm:w-32 sm:h-18 md:w-36 md:h-20 lg:w-40 lg:h-24">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        width: 'auto', 
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-xs sm:text-sm font-medium text-blue-300 group-hover:text-blue-200">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroller>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;