import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const handleContact = () => {
    alert("Contact form will be implemented in the next update! 📧");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  // Icon mappings for sections
  const sectionIcons = [
    Database,
    UserCheck,
    Globe,
    Lock,
    Eye,
    AlertCircle
  ];

  // Get all section data from translations
  const sectionsConfig = [
    {
      id: "information-collection",
      title: t('privacyPolicy.sections.informationCollection.title'),
      icon: Database,
      content: [
        {
          subtitle: t('privacyPolicy.sections.informationCollection.personalInfo.subtitle'),
          text: t('privacyPolicy.sections.informationCollection.personalInfo.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationCollection.automaticInfo.subtitle'),
          text: t('privacyPolicy.sections.informationCollection.automaticInfo.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationCollection.cookies.subtitle'),
          text: t('privacyPolicy.sections.informationCollection.cookies.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationCollection.thirdParty.subtitle'),
          text: t('privacyPolicy.sections.informationCollection.thirdParty.text')
        }
      ]
    },
    {
      id: "information-use",
      title: t('privacyPolicy.sections.informationUse.title'),
      icon: UserCheck,
      content: [
        {
          subtitle: t('privacyPolicy.sections.informationUse.serviceProvision.subtitle'),
          text: t('privacyPolicy.sections.informationUse.serviceProvision.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationUse.communication.subtitle'),
          text: t('privacyPolicy.sections.informationUse.communication.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationUse.analytics.subtitle'),
          text: t('privacyPolicy.sections.informationUse.analytics.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationUse.legal.subtitle'),
          text: t('privacyPolicy.sections.informationUse.legal.text')
        }
      ]
    },
    {
      id: "information-sharing",
      title: t('privacyPolicy.sections.informationSharing.title'),
      icon: Globe,
      content: [
        {
          subtitle: t('privacyPolicy.sections.informationSharing.serviceProviders.subtitle'),
          text: t('privacyPolicy.sections.informationSharing.serviceProviders.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationSharing.businessTransfers.subtitle'),
          text: t('privacyPolicy.sections.informationSharing.businessTransfers.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationSharing.legalRequirements.subtitle'),
          text: t('privacyPolicy.sections.informationSharing.legalRequirements.text')
        },
        {
          subtitle: t('privacyPolicy.sections.informationSharing.consentBased.subtitle'),
          text: t('privacyPolicy.sections.informationSharing.consentBased.text')
        }
      ]
    },
    {
      id: "data-security",
      title: t('privacyPolicy.sections.dataSecurity.title'),
      icon: Lock,
      content: [
        {
          subtitle: t('privacyPolicy.sections.dataSecurity.securityMeasures.subtitle'),
          text: t('privacyPolicy.sections.dataSecurity.securityMeasures.text')
        },
        {
          subtitle: t('privacyPolicy.sections.dataSecurity.dataRetention.subtitle'),
          text: t('privacyPolicy.sections.dataSecurity.dataRetention.text')
        },
        {
          subtitle: t('privacyPolicy.sections.dataSecurity.internationalTransfers.subtitle'),
          text: t('privacyPolicy.sections.dataSecurity.internationalTransfers.text')
        },
        {
          subtitle: t('privacyPolicy.sections.dataSecurity.breachNotification.subtitle'),
          text: t('privacyPolicy.sections.dataSecurity.breachNotification.text')
        }
      ]
    },
    {
      id: "user-rights",
      title: t('privacyPolicy.sections.userRights.title'),
      icon: Eye,
      content: [
        {
          subtitle: t('privacyPolicy.sections.userRights.accessCorrection.subtitle'),
          text: t('privacyPolicy.sections.userRights.accessCorrection.text')
        },
        {
          subtitle: t('privacyPolicy.sections.userRights.dataPortabilityDeletion.subtitle'),
          text: t('privacyPolicy.sections.userRights.dataPortabilityDeletion.text')
        },
        {
          subtitle: t('privacyPolicy.sections.userRights.communicationPreferences.subtitle'),
          text: t('privacyPolicy.sections.userRights.communicationPreferences.text')
        },
        {
          subtitle: t('privacyPolicy.sections.userRights.cookieControls.subtitle'),
          text: t('privacyPolicy.sections.userRights.cookieControls.text')
        }
      ]
    },
    {
      id: "special-categories",
      title: t('privacyPolicy.sections.specialCategories.title'),
      icon: AlertCircle,
      content: [
        {
          subtitle: t('privacyPolicy.sections.specialCategories.sensitiveInfo.subtitle'),
          text: t('privacyPolicy.sections.specialCategories.sensitiveInfo.text')
        },
        {
          subtitle: t('privacyPolicy.sections.specialCategories.childrenPrivacy.subtitle'),
          text: t('privacyPolicy.sections.specialCategories.childrenPrivacy.text')
        },
        {
          subtitle: t('privacyPolicy.sections.specialCategories.employmentInfo.subtitle'),
          text: t('privacyPolicy.sections.specialCategories.employmentInfo.text')
        }
      ]
    }
  ];

  const additionalSections = [
    {
      subtitle: t('privacyPolicy.sections.additionalInfo.thirdPartyLinks.subtitle'),
      text: t('privacyPolicy.sections.additionalInfo.thirdPartyLinks.text')
    },
    {
      subtitle: t('privacyPolicy.sections.additionalInfo.policyChanges.subtitle'),
      text: t('privacyPolicy.sections.additionalInfo.policyChanges.text')
    },
    {
      subtitle: t('privacyPolicy.sections.additionalInfo.governingLaw.subtitle'),
      text: t('privacyPolicy.sections.additionalInfo.governingLaw.text')
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <Helmet>
        <title>{t('privacyPolicy.meta.title')}</title>
        <meta name="description" content={t('privacyPolicy.meta.description')} />
      </Helmet>

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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t('privacyPolicy.header.title')}
              </h1>
              <p className="text-gray-600 mt-1">
                {t('privacyPolicy.header.subtitle')}
              </p>
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
                  {t('privacyPolicy.header.lastUpdated')}
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  {t('privacyPolicy.header.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {sectionsConfig.map((section, sectionIndex) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t('privacyPolicy.sections.additionalInfo.title')}
              </h2>
            </div>

            <div className="space-y-8">
              {additionalSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.subtitle}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      <LetsTalk />
    </div>
  );
};

export default PrivacyPolicyPage;