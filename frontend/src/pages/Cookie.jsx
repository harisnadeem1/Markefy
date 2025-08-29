import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Shield, 
  Globe, 
  Eye,
  Calendar,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { useTranslation } from "react-i18next";
import LetsTalk from '@/components/LetsTalk';

const CookiePolicyPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "what-are-cookies",
      title: t("cookie.sections.what.title"),
      icon: Cookie,
      content: [
        {
          subtitle: t("cookie.sections.what.items.definition.subtitle"),
          text: t("cookie.sections.what.items.definition.text")
        },
        {
          subtitle: t("cookie.sections.what.items.how.subtitle"),
          text: t("cookie.sections.what.items.how.text")
        },
        {
          subtitle: t("cookie.sections.what.items.lifespan.subtitle"),
          text: t("cookie.sections.what.items.lifespan.text")
        },
        {
          subtitle: t("cookie.sections.what.items.security.subtitle"),
          text: t("cookie.sections.what.items.security.text")
        }
      ]
    },
    {
      id: "types-of-cookies",
      title: t("cookie.sections.types.title"),
      icon: Settings,
      content: [
        {
          subtitle: t("cookie.sections.types.items.essential.subtitle"),
          text: t("cookie.sections.types.items.essential.text")
        },
        {
          subtitle: t("cookie.sections.types.items.performance.subtitle"),
          text: t("cookie.sections.types.items.performance.text")
        },
        {
          subtitle: t("cookie.sections.types.items.functionality.subtitle"),
          text: t("cookie.sections.types.items.functionality.text")
        },
        {
          subtitle: t("cookie.sections.types.items.marketing.subtitle"),
          text: t("cookie.sections.types.items.marketing.text")
        }
      ]
    },
    {
      id: "specific-cookies",
      title: t("cookie.sections.specific.title"),
      icon: BarChart3,
      content: [
        {
          subtitle: t("cookie.sections.specific.items.analytics.subtitle"),
          text: t("cookie.sections.specific.items.analytics.text")
        },
        {
          subtitle: t("cookie.sections.specific.items.social.subtitle"),
          text: t("cookie.sections.specific.items.social.text")
        },
        {
          subtitle: t("cookie.sections.specific.items.marketingPlatform.subtitle"),
          text: t("cookie.sections.specific.items.marketingPlatform.text")
        },
        {
          subtitle: t("cookie.sections.specific.items.support.subtitle"),
          text: t("cookie.sections.specific.items.support.text")
        }
      ]
    },
    {
      id: "third-party-cookies",
      title: t("cookie.sections.thirdParty.title"),
      icon: Globe,
      content: [
        {
          subtitle: t("cookie.sections.thirdParty.items.providers.subtitle"),
          text: t("cookie.sections.thirdParty.items.providers.text")
        },
        {
          subtitle: t("cookie.sections.thirdParty.items.adNetworks.subtitle"),
          text: t("cookie.sections.thirdParty.items.adNetworks.text")
        },
        {
          subtitle: t("cookie.sections.thirdParty.items.social.subtitle"),
          text: t("cookie.sections.thirdParty.items.social.text")
        },
        {
          subtitle: t("cookie.sections.thirdParty.items.control.subtitle"),
          text: t("cookie.sections.thirdParty.items.control.text")
        }
      ]
    },
    {
      id: "cookie-management",
      title: t("cookie.sections.management.title"),
      icon: Eye,
      content: [
        {
          subtitle: t("cookie.sections.management.items.browser.subtitle"),
          text: t("cookie.sections.management.items.browser.text")
        },
        {
          subtitle: t("cookie.sections.management.items.optout.subtitle"),
          text: t("cookie.sections.management.items.optout.text")
        },
        {
          subtitle: t("cookie.sections.management.items.mobile.subtitle"),
          text: t("cookie.sections.management.items.mobile.text")
        },
        {
          subtitle: t("cookie.sections.management.items.consent.subtitle"),
          text: t("cookie.sections.management.items.consent.text")
        }
      ]
    },
    {
      id: "legal-basis",
      title: t("cookie.sections.legalBasis.title"),
      icon: Shield,
      content: [
        {
          subtitle: t("cookie.sections.legalBasis.items.consent.subtitle"),
          text: t("cookie.sections.legalBasis.items.consent.text")
        },
        {
          subtitle: t("cookie.sections.legalBasis.items.interest.subtitle"),
          text: t("cookie.sections.legalBasis.items.interest.text")
        },
        {
          subtitle: t("cookie.sections.legalBasis.items.contract.subtitle"),
          text: t("cookie.sections.legalBasis.items.contract.text")
        },
        {
          subtitle: t("cookie.sections.legalBasis.items.compliance.subtitle"),
          text: t("cookie.sections.legalBasis.items.compliance.text")
        }
      ]
    },
    {
      id: "data-retention",
      title: t("cookie.sections.retention.title"),
      icon: Trash2,
      content: [
        {
          subtitle: t("cookie.sections.retention.items.periods.subtitle"),
          text: t("cookie.sections.retention.items.periods.text")
        },
        {
          subtitle: t("cookie.sections.retention.items.automatic.subtitle"),
          text: t("cookie.sections.retention.items.automatic.text")
        },
        {
          subtitle: t("cookie.sections.retention.items.manual.subtitle"),
          text: t("cookie.sections.retention.items.manual.text")
        },
        {
          subtitle: t("cookie.sections.retention.items.minimization.subtitle"),
          text: t("cookie.sections.retention.items.minimization.text")
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("cookie.header.title")}
              </h1>
              <p className="text-gray-600 mt-1">{t("cookie.header.subtitle")}</p>
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
                <p className="text-blue-900 font-medium">
                  {t("cookie.header.lastUpdated", { date: "July 30, 2025" })}
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  {t("cookie.header.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {sections.map((section) => (
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-8">
                {section.content.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Additional Cookie Information */}
          <motion.section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t("cookie.sections.additional.title")}
              </h2>
            </div>

            <div className="space-y-8">
              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("cookie.sections.additional.items.updates.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("cookie.sections.additional.items.updates.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("cookie.sections.additional.items.vsPrivacy.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("cookie.sections.additional.items.vsPrivacy.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("cookie.sections.additional.items.transfers.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("cookie.sections.additional.items.transfers.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("cookie.sections.additional.items.compatibility.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("cookie.sections.additional.items.compatibility.text")}
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
