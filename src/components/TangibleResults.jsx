import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Star } from 'lucide-react';

const resultsData = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects",
    description: "Successful digital projects delivered for global brands"
  },
  {
    icon: Users,
    value: "1.8M+",
    label: "Leads",
    description: "Generated through powerful marketing campaigns"
  },
  {
    icon: Target,
    value: "92%",
    label: "Retention",
    description: "Client retention rate partners who trust us long term"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating",
    description: "Average customer satisfaction score across all services"
  }
];

const TangibleResults = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Proven Track Record
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              See{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Tangible Results
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Over the years, we've helped brands grow faster, rank higher, and perform better with strategies that deliver measurable success across every project.
            </p>
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((result, index) => {
            const IconComponent = result.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#1C1C1C] rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-800 hover:border-blue-500/30 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon + Value/Label in row for all screen sizes */}
                  <div className="flex items-center space-x-4 mb-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    {/* Value and Label */}
                    <div className="space-y-1">
                      <h3 className="text-4xl md:text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                        {result.value}
                      </h3>
                      <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                        {result.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {result.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default TangibleResults;