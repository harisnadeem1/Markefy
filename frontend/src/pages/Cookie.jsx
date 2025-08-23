import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Target, 
  Shield, 
  Smartphone, 
  Globe, 
  AlertCircle,
  Eye,
  Calendar,
  Trash2,
  RefreshCw
} from 'lucide-react';
import LetsTalk from '@/components/LetsTalk';

const CookiePolicyPage = () => {
  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies",
      icon: Cookie,
      content: [
        {
          subtitle: "Definition and Purpose",
          text: "Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit our website. These files contain information that helps our website remember your preferences, improve your browsing experience, and analyze how our site is used. Cookies are widely used across the internet and are essential for many website functionalities."
        },
        {
          subtitle: "How Cookies Work",
          text: "When you visit our website, your browser downloads and stores cookies on your device. These cookies contain unique identifiers and data that allow our website to recognize your browser on subsequent visits. The information stored can include your language preferences, login status, shopping cart contents, and other personalization settings."
        },
        {
          subtitle: "Cookie Lifespan",
          text: "Cookies have different lifespans depending on their type and purpose. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a specified period or until you manually delete them. The lifespan of each cookie type is determined by its specific function and legal requirements."
        },
        {
          subtitle: "Data Security",
          text: "Cookies themselves cannot harm your device or contain viruses. They are simple text files that cannot execute programs or carry malware. However, the information they contain can be used to track your browsing behavior, which is why we are transparent about our cookie usage and provide you with control over cookie preferences."
        }
      ]
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      icon: Settings,
      content: [
        {
          subtitle: "Essential/Necessary Cookies",
          text: "These cookies are absolutely necessary for our website to function properly and cannot be disabled. They enable core functionality such as security, network management, and accessibility. Essential cookies include authentication cookies that keep you logged in, security cookies that prevent fraudulent activity, and load-balancing cookies that ensure our website operates efficiently across multiple servers."
        },
        {
          subtitle: "Performance and Analytics Cookies",
          text: "We use performance cookies to collect anonymous information about how visitors use our website. These cookies help us understand which pages are most popular, how long visitors spend on our site, and where they encounter problems. This data is aggregated and anonymous, helping us improve our website's performance and user experience without identifying individual users."
        },
        {
          subtitle: "Functionality Cookies",
          text: "Functionality cookies remember your preferences and choices to provide enhanced, personalized features. They may remember your language preference, region, username, or customized page layouts. These cookies enable us to provide enhanced functionality and personalization, such as remembering your contact form information or preferred communication settings."
        },
        {
          subtitle: "Marketing and Advertising Cookies",
          text: "These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. They help us understand your interests based on your browsing behavior and show you personalized content and advertisements. Marketing cookies also prevent the same ad from being shown repeatedly and measure the effectiveness of advertising campaigns across different websites and platforms."
        }
      ]
    },
    {
      id: "specific-cookies",
      title: "Specific Cookies We Use",
      icon: BarChart3,
      content: [
        {
          subtitle: "Google Analytics",
          text: "We use Google Analytics to understand how visitors interact with our website. These cookies collect anonymous information about page views, session duration, bounce rates, and traffic sources. The data helps us optimize our content and improve user experience. Google Analytics cookies include _ga, _gid, and _gat, which have varying expiration periods from session-based to up to 2 years."
        },
        {
          subtitle: "Social Media Cookies",
          text: "Our website includes social media sharing buttons and embedded content from platforms like Facebook, Twitter, LinkedIn, and YouTube. These platforms may set cookies on your device to track your interaction with their content and provide personalized experiences across their networks. We do not control these third-party cookies and recommend reviewing the respective platforms' privacy policies."
        },
        {
          subtitle: "Marketing Platform Cookies",
          text: "We use various marketing and advertising platforms such as Google Ads, Facebook Pixel, and LinkedIn Insight Tag. These cookies help us track conversions, retarget visitors with relevant advertisements, and measure the effectiveness of our marketing campaigns across different channels. They enable us to show you personalized content based on your interests and previous interactions with our website."
        },
        {
          subtitle: "Customer Support Cookies",
          text: "Our customer support systems, including live chat widgets and help desk tools, may use cookies to maintain conversation history, remember your preferences, and provide personalized support experiences. These cookies help our support team provide better assistance by remembering your previous interactions and support requests."
        }
      ]
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      icon: Globe,
      content: [
        {
          subtitle: "External Service Providers",
          text: "Our website uses services from various third-party providers who may set their own cookies. These include analytics providers (Google Analytics, Hotjar), advertising networks (Google Ads, Facebook), content delivery networks (Cloudflare), and customer support tools (Intercom, Zendesk). Each of these services has its own privacy policy and cookie usage practices."
        },
        {
          subtitle: "Advertising Networks",
          text: "We work with advertising networks and partners to display relevant advertisements to our visitors. These networks may use cookies to track your browsing behavior across multiple websites to build a profile of your interests. This enables them to show you more relevant advertisements both on our website and on other sites you visit."
        },
        {
          subtitle: "Social Media Integration",
          text: "Our website integrates with social media platforms to enable easy sharing of content and to display social media feeds. When you interact with these social media features, the respective platforms may set cookies on your device. These cookies are governed by the privacy policies of the social media platforms, not by our cookie policy."
        },
        {
          subtitle: "Third-Party Control",
          text :"We do not have direct control over third-party cookies set by external services. These cookies are governed by the privacy policies and cookie practices of the respective third parties. We recommend reviewing the privacy policies of these services to understand how they use cookies and how you can manage your preferences with them directly."
        }
      ]
    },
    {
      id: "cookie-management",
      title: "Managing Your Cookie Preferences",
      icon: Eye,
      content: [
        {
          subtitle: "Browser Settings",
          text: "Most web browsers allow you to control cookies through their settings. You can typically find cookie settings in the privacy or security section of your browser preferences. You can choose to block all cookies, allow only first-party cookies, or be notified when cookies are being set. However, blocking certain cookies may impact your browsing experience and limit website functionality."
        },
        {
          subtitle: "Opt-Out Tools",
          text: "Many advertising networks provide opt-out tools that allow you to prevent them from collecting and using your data for advertising purposes. You can visit the Digital Advertising Alliance's opt-out page, the Network Advertising Initiative's opt-out page, or the European Interactive Digital Advertising Alliance's opt-out page to manage your advertising cookie preferences across multiple networks."
        },
        {
          subtitle: "Mobile Device Settings",
          text: "If you're using a mobile device, you can manage cookie preferences through your device's browser settings or through specific app settings. Mobile operating systems also provide advertising identifier controls that limit ad tracking across apps. These settings are typically found in the privacy or advertising sections of your device settings."
        },
        {
          subtitle: "Cookie Consent Management",
          text: "We provide a cookie consent banner when you first visit our website, allowing you to choose which types of cookies you accept. You can modify your cookie preferences at any time by accessing our cookie settings, which may be available through a link in our website footer or through your account settings if you have registered with us."
        }
      ]
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Cookie Processing",
      icon: Shield,
      content: [
        {
          subtitle: "Consent",
          text: "For non-essential cookies, we rely on your explicit consent as our legal basis for processing. When you visit our website, we present you with clear information about our cookie usage and request your consent before setting non-essential cookies. You have the right to withdraw your consent at any time, and we provide easy-to-use tools for managing your cookie preferences."
        },
        {
          subtitle: "Legitimate Interest",
          text: "For certain cookies, we may rely on legitimate interest as our legal basis, particularly for analytics cookies that help us improve our website performance and user experience. We balance our legitimate business interests with your privacy rights and ensure that our cookie usage is proportionate and not overly intrusive."
        },
        {
          subtitle: "Contractual Necessity",
          text: "Some cookies are necessary for the performance of our contract with you or to provide services you have requested. These essential cookies enable basic website functionality, security features, and service delivery. These cookies are necessary and cannot be disabled while using our services."
        },
        {
          subtitle: "Compliance with Regulations",
          text: "Our cookie practices comply with applicable privacy laws, including the EU General Data Protection Regulation (GDPR), the ePrivacy Directive, the California Consumer Privacy Act (CCPA), and other relevant privacy legislation. We regularly review and update our cookie practices to maintain compliance with evolving privacy laws and regulations."
        }
      ]
    },
    {
      id: "data-retention",
      title: "Cookie Data Retention and Deletion",
      icon: Trash2,
      content: [
        {
          subtitle: "Retention Periods",
          text: "Different cookies have different retention periods based on their purpose and legal requirements. Session cookies are automatically deleted when you close your browser, while persistent cookies may remain on your device for periods ranging from days to years. We set retention periods to be proportionate to the purpose of the cookie and regularly review these periods to ensure they remain appropriate."
        },
        {
          subtitle: "Automatic Deletion",
          text: "Many cookies are automatically deleted after their specified expiration period. Session cookies expire when you close your browser, while persistent cookies have set expiration dates. Some cookies may be refreshed or renewed during your browsing session to maintain functionality, but they will still expire according to their designated lifespan."
        },
        {
          subtitle: "Manual Deletion",
          text: "You can manually delete cookies at any time through your browser settings. Most browsers provide options to delete all cookies, cookies from specific websites, or cookies from specific time periods. You can also set your browser to automatically delete cookies when you close the browser or after a specific period of inactivity."
        },
        {
          subtitle: "Data Minimization",
          text: "We follow data minimization principles and only collect and retain cookie data that is necessary for the specified purposes. We regularly review our cookie usage to ensure we are not collecting excessive data and that retention periods are appropriate for each cookie's purpose. Unnecessary or expired cookie data is automatically purged from our systems."
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
              <Cookie className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600 mt-1">How we use cookies and tracking technologies</p>
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
                  This Cookie Policy explains how Markefy uses cookies and similar tracking technologies on our website and services.
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

          {/* Additional Cookie Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <RefreshCw className="w-5 h-5 text-blue-600" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Cookie Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our cookie practices, 
                  technology updates, or legal requirements. When we make material changes, we will notify you by 
                  updating the "Last Updated" date at the top of this policy and, where appropriate, provide 
                  additional notice through our website or email communications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Policy vs Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Cookie Policy should be read in conjunction with our Privacy Policy, which provides 
                  comprehensive information about how we collect, use, and protect your personal data. 
                  While this policy focuses specifically on cookie usage, our Privacy Policy covers broader 
                  data processing activities and your privacy rights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">International Data Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some of the third-party services we use may transfer and process cookie data in countries 
                  outside your jurisdiction. These transfers are conducted in accordance with applicable 
                  data protection laws and include appropriate safeguards such as Standard Contractual Clauses 
                  or adequacy decisions to protect your data.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Compatibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website is designed to work with modern browsers that support current cookie standards. 
                  If you are using an older browser version, some cookie functionality may not work as expected. 
                  We recommend keeping your browser updated to the latest version for the best security and 
                  functionality experience.
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

export default CookiePolicyPage;