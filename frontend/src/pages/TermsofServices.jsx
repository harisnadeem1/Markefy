import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Users, 
  CreditCard, 
  Shield, 
  Globe, 
  AlertTriangle, 
  BookOpen,
  Gavel,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useTranslation } from "react-i18next";
import LetsTalk from '@/components/LetsTalk';

const TermsOfServicePage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "acceptance-terms",
      title: t("terms.sections.acceptance.title"),
      icon: CheckCircle,
      content: [
        {
          subtitle: t("terms.sections.acceptance.items.agreement.subtitle"),
          text: t("terms.sections.acceptance.items.agreement.text")
        },
        {
          subtitle: t("terms.sections.acceptance.items.capacity.subtitle"),
          text: t("terms.sections.acceptance.items.capacity.text")
        },
        {
          subtitle: t("terms.sections.acceptance.items.modifications.subtitle"),
          text: t("terms.sections.acceptance.items.modifications.text")
        },
        {
          subtitle: t("terms.sections.acceptance.items.effectiveDate.subtitle"),
          text: t("terms.sections.acceptance.items.effectiveDate.text")
        }
      ]
    },
    {
      id: "services-description",
      title: t("terms.sections.services.title"),
      icon: Globe,
      content: [
        {
          subtitle: t("terms.sections.services.items.portfolio.subtitle"),
          text: t("terms.sections.services.items.portfolio.text")
        },
        {
          subtitle: t("terms.sections.services.items.custom.subtitle"),
          text: t("terms.sections.services.items.custom.text")
        },
        {
          subtitle: t("terms.sections.services.items.availability.subtitle"),
          text: t("terms.sections.services.items.availability.text")
        },
        {
          subtitle: t("terms.sections.services.items.thirdParty.subtitle"),
          text: t("terms.sections.services.items.thirdParty.text")
        }
      ]
    },
    {
      id: "user-obligations",
      title: t("terms.sections.user.title"),
      icon: Users,
      content: [
        {
          subtitle: t("terms.sections.user.items.lawful.subtitle"),
          text: t("terms.sections.user.items.lawful.text")
        },
        {
          subtitle: t("terms.sections.user.items.prohibited.subtitle"),
          text: t("terms.sections.user.items.prohibited.text")
        },
        {
          subtitle: t("terms.sections.user.items.content.subtitle"),
          text: t("terms.sections.user.items.content.text")
        },
        {
          subtitle: t("terms.sections.user.items.security.subtitle"),
          text: t("terms.sections.user.items.security.text")
        }
      ]
    },
    // ... repeat for all other sections (payment, IP, disclaimers, liability, termination)
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
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("terms.header.title")}
              </h1>
              <p className="text-gray-600 mt-1">{t("terms.header.subtitle")}</p>
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
                  {t("terms.header.lastUpdated", { date: "July 30, 2025" })}
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  {t("terms.header.description")}
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

          {/* Additional Legal Information */}
          <motion.section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Gavel className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t("terms.sections.legal.title")}
              </h2>
            </div>

            <div className="space-y-8">
              <motion.div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t("terms.sections.legal.items.governing.subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("terms.sections.legal.items.governing.text")}
                </p>
              </motion.div>
              {/* repeat for dispute, severability, assignment, electronic */}
            </div>
          </motion.section>
        </div>
      </div>

      <LetsTalk />
    </div>
  );
};

export default TermsOfServicePage;
