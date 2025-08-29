import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  TrendingUp, 
  Target, 
  Shield, 
  Info, 
  BookOpen,
  Lightbulb,
  Calendar,
  DollarSign
} from 'lucide-react';
import { useTranslation } from "react-i18next";
import LetsTalk from '@/components/LetsTalk';

const DisclaimerPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "general-disclaimer",
      title: t("disclaimer.sections.general.title"),
      icon: AlertTriangle,
      content: [
        {
          subtitle: t("disclaimer.sections.general.items.infoPurpose.subtitle"),
          text: t("disclaimer.sections.general.items.infoPurpose.text")
        },
        {
          subtitle: t("disclaimer.sections.general.items.noRelationship.subtitle"),
          text: t("disclaimer.sections.general.items.noRelationship.text")
        },
        {
          subtitle: t("disclaimer.sections.general.items.ownRisk.subtitle"),
          text: t("disclaimer.sections.general.items.ownRisk.text")
        },
        {
          subtitle: t("disclaimer.sections.general.items.noWarranties.subtitle"),
          text: t("disclaimer.sections.general.items.noWarranties.text")
        }
      ]
    },
    {
      id: "marketing-seo-results",
      title: t("disclaimer.sections.marketing.title"),
      icon: TrendingUp,
      content: [
        {
          subtitle: t("disclaimer.sections.marketing.items.results.subtitle"),
          text: t("disclaimer.sections.marketing.items.results.text")
        },
        {
          subtitle: t("disclaimer.sections.marketing.items.rankings.subtitle"),
          text: t("disclaimer.sections.marketing.items.rankings.text")
        },
        {
          subtitle: t("disclaimer.sections.marketing.items.timeline.subtitle"),
          text: t("disclaimer.sections.marketing.items.timeline.text")
        },
        {
          subtitle: t("disclaimer.sections.marketing.items.external.subtitle"),
          text: t("disclaimer.sections.marketing.items.external.text")
        }
      ]
    },
    {
      id: "business-advice-disclaimer",
      title: t("disclaimer.sections.business.title"),
      icon: Lightbulb,
      content: [
        {
          subtitle: t("disclaimer.sections.business.items.notAdvice.subtitle"),
          text: t("disclaimer.sections.business.items.notAdvice.text")
        },
        {
          subtitle: t("disclaimer.sections.business.items.individual.subtitle"),
          text: t("disclaimer.sections.business.items.individual.text")
        },
        {
          subtitle: t("disclaimer.sections.business.items.research.subtitle"),
          text: t("disclaimer.sections.business.items.research.text")
        },
        {
          subtitle: t("disclaimer.sections.business.items.implementation.subtitle"),
          text: t("disclaimer.sections.business.items.implementation.text")
        }
      ]
    },
    {
      id: "financial-disclaimers",
      title: t("disclaimer.sections.financial.title"),
      icon: DollarSign,
      content: [
        {
          subtitle: t("disclaimer.sections.financial.items.noIncome.subtitle"),
          text: t("disclaimer.sections.financial.items.noIncome.text")
        },
        {
          subtitle: t("disclaimer.sections.financial.items.investment.subtitle"),
          text: t("disclaimer.sections.financial.items.investment.text")
        },
        {
          subtitle: t("disclaimer.sections.financial.items.costs.subtitle"),
          text: t("disclaimer.sections.financial.items.costs.text")
        },
        {
          subtitle: t("disclaimer.sections.financial.items.economy.subtitle"),
          text: t("disclaimer.sections.financial.items.economy.text")
        }
      ]
    },
    {
      id: "limitation-of-liability",
      title: t("disclaimer.sections.liability.title"),
      icon: Shield,
      content: [
        {
          subtitle: t("disclaimer.sections.liability.items.indirect.subtitle"),
          text: t("disclaimer.sections.liability.items.indirect.text")
        },
        {
          subtitle: t("disclaimer.sections.liability.items.max.subtitle"),
          text: t("disclaimer.sections.liability.items.max.text")
        },
        {
          subtitle: t("disclaimer.sections.liability.items.thirdParty.subtitle"),
          text: t("disclaimer.sections.liability.items.thirdParty.text")
        },
        {
          subtitle: t("disclaimer.sections.liability.items.client.subtitle"),
          text: t("disclaimer.sections.liability.items.client.text")
        }
      ]
    },
    {
      id: "industry-specific",
      title: t("disclaimer.sections.industry.title"),
      icon: Target,
      content: [
        {
          subtitle: t("disclaimer.sections.industry.items.regulated.subtitle"),
          text: t("disclaimer.sections.industry.items.regulated.text")
        },
        {
          subtitle: t("disclaimer.sections.industry.items.policy.subtitle"),
          text: t("disclaimer.sections.industry.items.policy.text")
        },
        {
          subtitle: t("disclaimer.sections.industry.items.competition.subtitle"),
          text: t("disclaimer.sections.industry.items.competition.text")
        },
        {
          subtitle: t("disclaimer.sections.industry.items.technology.subtitle"),
          text: t("disclaimer.sections.industry.items.technology.text")
        }
      ]
    },
    {
      id: "content-disclaimers",
      title: t("disclaimer.sections.content.title"),
      icon: BookOpen,
      content: [
        {
          subtitle: t("disclaimer.sections.content.items.accuracy.subtitle"),
          text: t("disclaimer.sections.content.items.accuracy.text")
        },
        {
          subtitle: t("disclaimer.sections.content.items.thirdParty.subtitle"),
          text: t("disclaimer.sections.content.items.thirdParty.text")
        },
        {
          subtitle: t("disclaimer.sections.content.items.examples.subtitle"),
          text: t("disclaimer.sections.content.items.examples.text")
        },
        {
          subtitle: t("disclaimer.sections.content.items.education.subtitle"),
          text: t("disclaimer.sections.content.items.education.text")
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("disclaimer.header.title")}
              </h1>
              <p className="text-gray-600 mt-1">{t("disclaimer.header.subtitle")}</p>
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
                <p className="text-amber-900 font-medium">
                  {t("disclaimer.header.lastUpdated", { date: "July 30, 2025" })}
                </p>
                <p className="text-amber-700 text-sm mt-1">
                  {t("disclaimer.header.description")}
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
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                {t("disclaimer.notice.title")}
              </h3>
              <p className="text-red-800 leading-relaxed">
                {t("disclaimer.notice.text")}
              </p>
            </div>
          </div>
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

          {/* Additional Legal Information */}
          <motion.section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t("disclaimer.additional.title")}
              </h2>
            </div>

            <div className="space-y-8">
              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("disclaimer.additional.items.relationship.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("disclaimer.additional.items.relationship.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("disclaimer.additional.items.professional.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("disclaimer.additional.items.professional.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("disclaimer.additional.items.modification.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("disclaimer.additional.items.modification.text")}
                </p>
              </motion.div>

              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("disclaimer.additional.items.jurisdiction.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("disclaimer.additional.items.jurisdiction.text")}
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
