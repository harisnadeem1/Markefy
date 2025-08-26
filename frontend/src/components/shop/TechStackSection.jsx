import React, { useState } from 'react';

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      id: 'html',
      name: 'HTML5',
      description: 'Modern semantic markup providing solid foundation and structure',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.345 2L4.72 20.637l7.272 2.02 7.291-2.02L20.655 2H3.345zm14.575 6.312H8.538l.193 2.174h9.004l-.581 6.493-4.147 1.15v.014h-.034l-4.147-1.164-.286-3.201h2.031l.144 1.615 2.258.606 2.258-.606.235-2.637H7.692l-.577-6.468h10.77l-.165 2.024z"/>
        </svg>
      ),
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverBg: 'hover:bg-orange-100',
      features: ['Semantic Structure', 'Accessibility Ready', 'SEO Optimized', 'Form Elements']
    },
    {
      id: 'css',
      name: 'CSS3',
      description: 'Beautiful styling with animations and responsive layouts',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.345 2L4.72 20.637l7.272 2.02 7.291-2.02L20.655 2H3.345zm11.495 6.5l-.232 2.607h-6.471l.195 2.174h6.083l-.696 7.756-4.712 1.307v.014h-.034l-4.712-1.321L7.7 14.546h2.031l.144 1.615 2.564.691 2.564-.691.267-2.998H7.7l-.577-6.468h9.77l-.165 2.024H14.84z"/>
        </svg>
      ),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBg: 'hover:bg-blue-100',
      features: ['Modern Layouts', 'Smooth Animations', 'Responsive Design', 'Custom Properties']
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Interactive functionality bringing your components to life',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-.998l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.007-1.533 0-3.036 0-4.613l.003-.064z"/>
        </svg>
      ),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      hoverBg: 'hover:bg-yellow-100',
      features: ['Event Handling', 'Dynamic Content', 'User Interactions', 'API Integration']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ color: "#0071bc" }}>
            Complete Solutions in Every Snippet
          </h2>
          <div className="w-20 h-0.5 bg-[#0071bc] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every code snippet includes HTML, CSS, and JavaScript working together as a complete, ready-to-use solution
          </p>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className={`group relative ${tech.bgColor} ${tech.borderColor} border-2 rounded-2xl p-8 transition-all duration-300 ${tech.hoverBg} hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Icon */}
              <div className={`${tech.color} mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                {tech.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                <div className="space-y-2 pt-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${tech.color}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Three Technologies, One Perfect Solution
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each snippet is a complete package combining HTML structure, CSS styling, and JavaScript functionality. 
              No missing pieces, no additional dependencies - just copy, paste, and customize.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "#0071bc" }}>100%</div>
              <div className="text-gray-600">Complete Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2"style={{ color: "#0071bc" }}>0</div>
              <div className="text-gray-600">External Dependencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2"style={{ color: "#0071bc" }}>Ready</div>
              <div className="text-gray-600">To Use</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2"style={{ color: "#0071bc" }}>All</div>
              <div className="text-gray-600">Browsers Supported</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-[#0071bc] text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            Explore All Snippets
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
