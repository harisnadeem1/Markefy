import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  TrendingUp, 
  Search, 
  Target, 
  Shield, 
  Info, 
  BarChart3, 
  BookOpen,
  Lightbulb,
  Calendar,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';

const DisclaimerPage = () => {
  const sections = [
    {
      id: "general-disclaimer",
      title: "General Disclaimer",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Information Purpose Only",
          text: "All information, content, materials, advice, and services provided by Markefy are for general informational and educational purposes only. This content is not intended as professional advice and should not be relied upon as the sole basis for making business, financial, or strategic decisions. We strongly recommend consulting with qualified professionals before implementing any strategies or making significant business decisions."
        },
        {
          subtitle: "No Professional Relationship",
          text: "The information provided on our website, in consultations, or through our services does not create a professional advisor-client relationship unless explicitly established through a formal service agreement. Casual advice, blog content, social media posts, or informal communications should not be considered professional consultation or binding recommendations."
        },
        {
          subtitle: "Use at Your Own Risk",
          text: "You acknowledge that any use of our information, strategies, or recommendations is entirely at your own risk. We are not responsible for any decisions you make based on the information we provide, nor for any consequences that may arise from implementing our suggestions or following our guidance."
        },
        {
          subtitle: "No Warranties",
          text: "We make no representations or warranties about the accuracy, reliability, completeness, or timeliness of any information provided. All content is provided 'as is' without any express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."
        }
      ]
    },
    {
      id: "marketing-seo-results",
      title: "Marketing & SEO Results Disclaimer",
      icon: TrendingUp,
      content: [
        {
          subtitle: "Results May Vary",
          text: "Marketing and SEO results vary significantly based on numerous factors including industry competition, market conditions, budget allocation, implementation quality, timing, and external factors beyond our control. Past performance of our campaigns or client results do not guarantee future results. What works for one business may not work for another due to unique circumstances, market positioning, and competitive landscapes."
        },
        {
          subtitle: "SEO Rankings Not Guaranteed",
          text: "We cannot and do not guarantee specific search engine rankings, traffic increases, or conversion improvements. Search engine algorithms change frequently and unpredictably, and rankings are influenced by hundreds of factors including competitor activities, algorithm updates, and market dynamics. While we use proven SEO strategies and best practices, we cannot control search engine results."
        },
        {
          subtitle: "Timeline Estimates",
          text: "Any timelines provided for seeing results from marketing or SEO efforts are estimates based on our experience and industry averages. Actual results may take longer or shorter periods to materialize. SEO results typically require 3-6 months to become apparent, but this can vary significantly based on website authority, competition level, and the specific strategies implemented."
        },
        {
          subtitle: "External Factors",
          text: "Marketing and SEO performance can be affected by factors beyond our control, including but not limited to: search engine algorithm changes, economic conditions, seasonal fluctuations, competitor actions, industry trends, regulatory changes, and global events. We are not liable for negative impacts caused by such external factors."
        }
      ]
    },
    {
      id: "business-advice-disclaimer",
      title: "Business Advice & Strategy Disclaimer",
      icon: Lightbulb,
      content: [
        {
          subtitle: "Not Professional Business Advice",
          text: "Any business strategies, recommendations, or advice provided by Markefy should not be considered as professional business, financial, legal, or investment advice. Our suggestions are based on general digital marketing best practices and our experience, but may not be suitable for your specific business situation, industry, or market conditions."
        },
        {
          subtitle: "Individual Circumstances",
          text: "Every business is unique with different goals, resources, challenges, and market conditions. Strategies that work for some businesses may not be appropriate for others. We recommend conducting thorough research, testing approaches on a small scale, and consulting with relevant professionals before implementing major business changes based on our recommendations."
        },
        {
          subtitle: "Market Research Responsibility",
          text: "You are responsible for conducting your own market research, competitor analysis, and due diligence before implementing any strategies we suggest. We provide general guidance based on our experience, but you must validate the appropriateness and feasibility of any recommendations for your specific market and business model."
        },
        {
          subtitle: "Implementation Responsibility",
          text: "The success of any strategy depends heavily on proper implementation, consistent execution, and ongoing optimization. We are not responsible for poor implementation of our recommendations or failure to adapt strategies based on changing circumstances and results."
        }
      ]
    },
    {
      id: "financial-disclaimers",
      title: "Financial Performance Disclaimers",
      icon: DollarSign,
      content: [
        {
          subtitle: "No Income Guarantees",
          text: "We do not guarantee any specific financial results, revenue increases, profit improvements, or return on investment from our services or recommendations. Any income claims, revenue figures, or financial results mentioned are examples and should not be interpreted as typical, expected, or guaranteed outcomes for your business."
        },
        {
          subtitle: "Investment Risk",
          text: "Marketing and business development activities involve financial risk. You may invest time, money, and resources in strategies that do not produce the desired results. We strongly recommend starting with modest budgets, testing approaches, and scaling gradually based on proven results rather than making large initial investments."
        },
        {
          subtitle: "Cost Considerations",
          text: "Implementing our recommendations may require additional investments in tools, software, advertising, personnel, or other resources. We are not responsible for additional costs you may incur while implementing our strategies. Always consider your budget constraints and financial capacity before proceeding with our recommendations."
        },
        {
          subtitle: "Economic Factors",
          text: "Economic conditions, market fluctuations, and industry changes can significantly impact business performance regardless of the quality of marketing strategies employed. We cannot control or predict economic factors that may affect your business results."
        }
      ]
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: Shield,
      content: [
        {
          subtitle: "No Liability for Indirect Damages",
          text: "Under no circumstances shall Markefy, its owners, employees, contractors, or affiliates be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our services, information, or recommendations. This includes but is not limited to lost profits, lost revenue, lost business opportunities, or business interruption."
        },
        {
          subtitle: "Maximum Liability Limitation",
          text: "Our total liability for any claims arising from our services shall not exceed the total amount paid by you to Markefy for the specific service giving rise to the claim in the 12 months preceding the incident. This limitation applies regardless of the legal theory under which liability is claimed."
        },
        {
          subtitle: "Third-Party Actions",
          text: "We are not liable for any damages, losses, or consequences resulting from actions taken by third parties, including but not limited to search engines, social media platforms, advertising networks, competitors, or government entities. Changes in third-party policies, algorithms, or terms of service are beyond our control."
        },
        {
          subtitle: "Client Implementation",
          text: "We are not liable for damages resulting from improper implementation of our recommendations, failure to follow our guidance, or modifications made to our strategies without our consultation. Our liability is limited to the quality of our advice and services as delivered, not the outcomes achieved through implementation."
        }
      ]
    },
    {
      id: "industry-specific",
      title: "Industry-Specific Disclaimers",
      icon: Target,
      content: [
        {
          subtitle: "Regulated Industries",
          text: "If you operate in a regulated industry (healthcare, finance, legal, pharmaceuticals, etc.), you are responsible for ensuring that any marketing strategies comply with industry-specific regulations and requirements. We are not experts in industry-specific regulations and cannot guarantee compliance with specialized legal requirements."
        },
        {
          subtitle: "Platform Policy Changes",
          text: "Digital marketing platforms (Google, Facebook, LinkedIn, etc.) frequently update their policies, algorithms, and terms of service. Strategies that are compliant and effective today may become less effective or prohibited in the future. We are not liable for negative impacts resulting from platform policy changes."
        },
        {
          subtitle: "Competitive Landscape",
          text: "Market competition can significantly impact the effectiveness of marketing strategies. Increased competition, new market entrants, or aggressive competitor tactics may reduce the effectiveness of previously successful strategies. We cannot control competitive actions or market dynamics."
        },
        {
          subtitle: "Technology Dependencies",
          text: "Our strategies may rely on various technologies, tools, and platforms that are subject to technical issues, service interruptions, or discontinuation. We are not liable for disruptions caused by technology failures or changes in third-party service availability."
        }
      ]
    },
    {
      id: "content-disclaimers",
      title: "Content and Information Disclaimers",
      icon: BookOpen,
      content: [
        {
          subtitle: "Accuracy of Information",
          text: "While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or currency of all content. Digital marketing best practices, platform policies, and industry standards evolve rapidly. Information may become outdated or inaccurate over time, and we are not obligated to update all content continuously."
        },
        {
          subtitle: "Third-Party Content",
          text: "Our website and materials may include references to third-party resources, tools, or information. We do not endorse or guarantee the accuracy, reliability, or quality of third-party content. You use third-party resources at your own risk, and we are not responsible for any issues arising from their use."
        },
        {
          subtitle: "Case Studies and Examples",
          text: "Any case studies, success stories, or examples provided are for illustrative purposes only and may not be representative of typical results. These examples may have involved unique circumstances, timing, or resources that may not be replicable in your situation."
        },
        {
          subtitle: "Educational Content",
          text: "Blog posts, guides, tutorials, and educational content are provided for general learning purposes. This content should not be considered comprehensive training or substitute for professional education. We recommend supplementing our content with additional research and professional development."
        }
      ]
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center mb-6"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Disclaimer</h1>
              <p className="text-gray-600 mt-1">Important limitations and disclosures</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-amber-50 border border-amber-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-900 font-medium">Last Updated: July 30, 2025</p>
                <p className="text-amber-700 text-sm mt-1">
                  This disclaimer outlines important limitations regarding our services, advice, and content. Please read carefully before using our services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Important Notice */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-8 px-4 sm:px-6 lg:px-8 bg-red-50 border-y border-red-200"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Important Notice</h3>
              <p className="text-red-800 leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. 
                Results are not guaranteed, and you assume full responsibility for any decisions made based on our recommendations. 
                This disclaimer is an integral part of our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.content.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Additional Legal Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Additional Legal Information</h2>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Relationship to Other Legal Documents</h3>
                <p className="text-gray-700 leading-relaxed">
                  This disclaimer should be read in conjunction with our Terms of Service and Privacy Policy. 
                  In case of conflicts between these documents, the most restrictive provisions shall apply. 
                  All legal documents together form the complete agreement between you and Markefy regarding 
                  the use of our services and the limitations of our liability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Consultation Recommendation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strongly recommend consulting with qualified professionals including attorneys, accountants, 
                  business advisors, and industry specialists before making significant business decisions based 
                  on our recommendations. Professional consultation can help ensure that strategies are appropriate 
                  for your specific circumstances and comply with applicable laws and regulations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modification and Updates</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this disclaimer at any time without prior notice. Changes will 
                  be effective immediately upon posting on our website. Your continued use of our services after 
                  changes constitutes acceptance of the updated disclaimer. We recommend reviewing this disclaimer 
                  periodically to stay informed of any changes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jurisdiction and Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  This disclaimer is governed by the same laws and jurisdiction specified in our Terms of Service. 
                  If any provision of this disclaimer is found to be unenforceable, the remaining provisions shall 
                  continue in full force and effect. The failure to enforce any right or provision of this disclaimer 
                  shall not constitute a waiver of such right or provision.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <LetsTalk />
    </div>
  );
};

export default DisclaimerPage;