import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Database, 
  Globe, 
  Mail, 
  AlertCircle,
  FileText,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';

const PrivacyPolicyPage = () => {
  const handleContact = () => {
    alert("Contact form will be implemented in the next update! 📧");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you interact with our services, we may collect personal information that you voluntarily provide, including but not limited to: your name, email address, phone number, company name, job title, billing address, and any other information you choose to provide when contacting us, requesting services, or subscribing to our newsletters."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit our website, including: IP address, browser type and version, operating system, referral URLs, pages viewed, time spent on pages, click-through data, device information, and general geographic location based on IP address."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences."
        },
        {
          subtitle: "Third-Party Information",
          text: "We may receive information about you from third-party sources, such as social media platforms, business partners, marketing vendors, and publicly available sources, which we may combine with information we collect directly from you."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, including website development, software solutions, SEO optimization, marketing campaigns, and ongoing support. This includes communicating with you about projects, sending updates, and delivering requested services."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to inquiries, send service-related notifications, provide customer support, send newsletters and marketing communications (with your consent), and inform you about new services, features, or important updates."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns and user behavior to improve our website functionality, enhance user experience, develop new features and services, conduct market research, and optimize our marketing efforts."
        },
        {
          subtitle: "Legal and Security",
          text: "We may use your information to comply with legal obligations, protect our rights and property, prevent fraud and abuse, ensure security of our systems, resolve disputes, and enforce our terms and conditions."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Globe,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the acquiring entity. We will notify you via email or prominent notice on our website before your information becomes subject to a different privacy policy."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, in response to legal process, to protect our rights or property, to ensure user safety, or when we believe disclosure is necessary to comply with judicial proceedings, court orders, or legal processes."
        },
        {
          subtitle: "Consent-Based Sharing",
          text: "We may share your information with your explicit consent for specific purposes, such as featuring your testimonial on our website or sharing your success story in our marketing materials."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, firewalls, access controls, regular security audits, and employee training on data protection best practices."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it."
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during international transfers, including standard contractual clauses and adequacy decisions."
        },
        {
          subtitle: "Breach Notification",
          text: "In the unlikely event of a data breach that may affect your personal information, we will notify affected users promptly and take immediate steps to mitigate the impact and prevent future breaches."
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access your personal information we hold and request corrections to inaccurate or incomplete data. You can update your information by contacting us directly or through your account settings if applicable."
        },
        {
          subtitle: "Data Portability and Deletion",
          text: "You may request a copy of your personal information in a portable format or request deletion of your personal information, subject to legal and contractual obligations. We will respond to such requests within reasonable timeframes as required by applicable law."
        },
        {
          subtitle: "Communication Preferences",
          text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails, adjusting your account preferences, or contacting us directly. Note that you may still receive service-related communications."
        },
        {
          subtitle: "Cookie Controls",
          text: "You can control cookie preferences through your browser settings, including blocking or deleting cookies. Please note that disabling certain cookies may affect website functionality and your user experience."
        }
      ]
    },
    {
      id: "special-categories",
      title: "Special Categories and Sensitive Data",
      icon: AlertCircle,
      content: [
        {
          subtitle: "Sensitive Information",
          text: "We do not intentionally collect sensitive personal information such as health data, financial information, biometric data, or information about political opinions, religious beliefs, or sexual orientation unless specifically required for our services and with your explicit consent."
        },
        {
          subtitle: "Children's Privacy",
          text: "Our services are not directed to children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to promptly delete such information."
        },
        {
          subtitle: "Employment Information",
          text: "If you apply for employment with us, we may collect additional information such as resume details, employment history, references, and background check information, which we use solely for recruitment and employment purposes."
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
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Your privacy and data protection rights</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-medium">Last Updated: July 30, 2025</p>
                <p className="text-blue-700 text-sm mt-1">
                  This privacy policy describes how Markefy ("we," "us," or "our") collects, uses, and protects your personal information when you use our website and services.
                </p>
              </div>
            </div>
          </motion.div>
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

          {/* Additional Important Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Additional Information</h2>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Links and Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites or services that are not owned or controlled by Markefy. 
                  We have no control over and assume no responsibility for the content, privacy policies, or practices of any 
                  third-party websites or services. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices, technology, 
                  legal requirements, or other factors. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last Updated" date. We encourage you to review this policy 
                  periodically to stay informed about how we protect your information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  This privacy policy is governed by and construed in accordance with applicable data protection laws, 
                  including but not limited to the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), 
                  and other relevant privacy legislation. Any disputes arising from this policy will be resolved in accordance 
                  with the jurisdiction specified in our Terms of Service.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
      <LetsTalk  />

     
    </div>
  );
};

export default PrivacyPolicyPage;