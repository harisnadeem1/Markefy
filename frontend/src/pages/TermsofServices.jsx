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
import LetsTalk from '@/components/LetsTalk';

const TermsOfServicePage = () => {
  const sections = [
    {
      id: "acceptance-terms",
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing, browsing, or using our website (markefy.ai), mobile applications, or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms constitute a legally binding agreement between you and Markefy."
        },
        {
          subtitle: "Capacity to Enter Agreement",
          text: "You represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this agreement. If you are using our services on behalf of a company or organization, you represent that you have the authority to bind such entity to these terms."
        },
        {
          subtitle: "Modifications to Terms",
          text: "We reserve the right to modify, update, or replace these terms at any time at our sole discretion. Material changes will be communicated through email notification or prominent website notices. Your continued use of our services after such modifications constitutes acceptance of the updated terms."
        },
        {
          subtitle: "Effective Date",
          text: "These Terms of Service are effective as of the date last updated and remain in effect until terminated in accordance with the provisions outlined herein. By continuing to use our services, you agree to be bound by the most current version of these terms."
        }
      ]
    },
    {
      id: "services-description",
      title: "Description of Services",
      icon: Globe,
      content: [
        {
          subtitle: "Digital Services Portfolio",
          text: "Markefy provides comprehensive digital services including but not limited to: web design and development, software and application development, search engine optimization (SEO), pay-per-click (PPC) advertising campaigns, content marketing, brand development, social media management, and digital marketing consulting."
        },
        {
          subtitle: "Custom Solutions",
          text: "We offer tailored digital solutions designed to meet specific client requirements. Our services may include custom software development, enterprise applications, e-commerce platforms, content management systems, marketing automation tools, and strategic digital consulting services."
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our website or services. We may temporarily suspend services for maintenance, updates, or due to circumstances beyond our control, including but not limited to technical issues, natural disasters, or third-party service disruptions."
        },
        {
          subtitle: "Third-Party Integrations",
          text: "Our services may integrate with or rely upon third-party platforms, tools, and services. We are not responsible for the availability, functionality, or performance of such third-party services, and any disruptions may affect our ability to deliver certain aspects of our services."
        }
      ]
    },
    {
      id: "user-obligations",
      title: "User Obligations and Conduct",
      icon: Users,
      content: [
        {
          subtitle: "Lawful Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these terms. You shall not use our services in any way that violates applicable local, state, national, or international laws or regulations, or that could harm, disable, overburden, or impair our services or interfere with any other party's use of our services."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You are prohibited from: transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable; attempting to gain unauthorized access to our systems; distributing viruses, malware, or other harmful code; engaging in any form of automated data collection or scraping; or using our services for any fraudulent or deceptive purposes."
        },
        {
          subtitle: "Content Responsibility",
          text: "You are solely responsible for any content, materials, information, or data you provide to us or upload through our services. You warrant that you have all necessary rights, licenses, and permissions to provide such content and that it does not infringe upon any third-party rights or violate any laws."
        },
        {
          subtitle: "Account Security",
          text: "If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
        }
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms and Billing",
      icon: CreditCard,
      content: [
        {
          subtitle: "Payment Obligations",
          text: "Payment terms are specified in individual service agreements or project proposals. Unless otherwise agreed, payments are due within 30 days of invoice date. All fees are non-refundable unless specifically stated otherwise in writing. Late payments may incur additional charges as permitted by law."
        },
        {
          subtitle: "Pricing and Fees",
          text: "Our pricing is based on the scope of work, project complexity, timeline, and resources required. All quoted prices are valid for 30 days unless otherwise specified. Additional work beyond the original scope will be charged separately and requires written approval before commencement."
        },
        {
          subtitle: "Recurring Services",
          text: "For ongoing services such as SEO, maintenance, or marketing campaigns, billing will occur on the agreed frequency (monthly, quarterly, or annually). Automatic renewals may apply unless cancelled with appropriate notice as specified in the service agreement."
        },
        {
          subtitle: "Taxes and Additional Costs",
          text: "All fees are exclusive of applicable taxes, which you are responsible for paying. Any third-party costs, licensing fees, or expenses incurred on your behalf will be passed through at cost with prior approval. Currency exchange fluctuations may affect pricing for international clients."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: BookOpen,
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "All content, materials, software, designs, methodologies, and intellectual property used or developed by Markefy remain our exclusive property unless otherwise agreed in writing. This includes but is not limited to proprietary processes, templates, frameworks, and knowledge developed through our experience."
        },
        {
          subtitle: "Client Work Product",
          text: "Upon full payment, clients receive ownership of custom-developed deliverables specifically created for their project, excluding our proprietary methods, tools, and pre-existing intellectual property. We retain the right to use general knowledge, skills, and experience gained during the engagement for future projects."
        },
        {
          subtitle: "License to Use",
          text: "We grant you a limited, non-exclusive, non-transferable license to use our services and any deliverables in accordance with the agreed scope. This license does not include the right to modify, distribute, or create derivative works without explicit written permission."
        },
        {
          subtitle: "Third-Party Rights",
          text: "We respect third-party intellectual property rights and expect our clients to do the same. If you provide materials that infringe upon third-party rights, you agree to indemnify us against any resulting claims, damages, or expenses."
        }
      ]
    },
    {
      id: "service-limitations",
      title: "Service Limitations and Disclaimers",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Performance Disclaimers",
          text: "While we strive to deliver high-quality services, we cannot guarantee specific results, rankings, traffic levels, conversion rates, or business outcomes. Digital marketing and web performance are influenced by numerous factors beyond our control, including market conditions, competition, and algorithm changes."
        },
        {
          subtitle: "Service Availability",
          text: "Our services are provided 'as is' and 'as available.' We do not warrant that our services will be uninterrupted, error-free, or completely secure. We may suspend or discontinue services with reasonable notice for maintenance, upgrades, or business reasons."
        },
        {
          subtitle: "Technology Limitations",
          text: "Technology evolves rapidly, and we cannot guarantee compatibility with all devices, browsers, or platforms. We will make reasonable efforts to ensure broad compatibility but may not support outdated or non-standard technologies."
        },
        {
          subtitle: "External Dependencies",
          text: "Our services may depend on third-party platforms, APIs, or services. Changes to these external dependencies may affect our service delivery, and we are not liable for disruptions caused by third-party modifications or outages."
        }
      ]
    },
    {
      id: "liability-indemnification",
      title: "Liability and Indemnification",
      icon: Shield,
      content: [
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, Markefy's total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim in the 12 months preceding the incident. We shall not be liable for indirect, incidental, consequential, or punitive damages."
        },
        {
          subtitle: "Client Indemnification",
          text: "You agree to indemnify, defend, and hold harmless Markefy, its employees, contractors, and affiliates from any claims, damages, losses, or expenses arising from: your use of our services, violation of these terms, infringement of third-party rights, or any content you provide to us."
        },
        {
          subtitle: "Professional Liability",
          text: "We maintain professional liability insurance and follow industry best practices. However, our liability is limited to the remediation of defects in our work product or, at our option, refund of fees paid for the defective services. We are not liable for business losses, lost profits, or consequential damages."
        },
        {
          subtitle: "Force Majeure",
          text: "Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including natural disasters, government actions, labor disputes, internet outages, or other acts of God."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination and Cancellation",
      icon: XCircle,
      content: [
        {
          subtitle: "Termination Rights",
          text: "Either party may terminate ongoing services with 30 days written notice. We reserve the right to immediately terminate services if you breach these terms, fail to make required payments, or engage in conduct that we reasonably believe may harm our business or reputation."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, you remain liable for all fees incurred up to the termination date. We will provide you with completed work product and, where applicable, transfer necessary credentials and access. Ongoing services will cease, and recurring billing will stop after the current billing period."
        },
        {
          subtitle: "Data and Content",
          text: "Following termination, we will retain your data for a reasonable period to facilitate transition and comply with legal obligations. After this period, we may delete your data unless otherwise required by law. You are responsible for backing up any critical data or content."
        },
        {
          subtitle: "Survival of Terms",
          text: "Provisions regarding payment obligations, intellectual property, confidentiality, limitation of liability, and indemnification shall survive termination of this agreement. These surviving terms remain in effect as necessary to enforce their intended purpose."
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
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-1">Legal agreement governing our services</p>
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
                  These Terms of Service govern your use of Markefy's website, services, and digital solutions. Please read carefully before using our services.
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
                <Gavel className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Legal and Miscellaneous</h2>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law and Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction 
                  where Markefy is headquartered, without regard to conflict of law principles. Any legal proceedings arising 
                  from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction. Both 
                  parties consent to personal jurisdiction and venue in such courts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
                <p className="text-gray-700 leading-relaxed">
                  We encourage resolving disputes through direct communication. If informal resolution is unsuccessful, 
                  disputes may be subject to binding arbitration under the rules of a recognized arbitration association. 
                  Each party shall bear their own costs unless otherwise determined by the arbitrator. Class action waivers 
                  may apply where legally permissible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Severability and Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these terms is found to be unenforceable or invalid, the remaining provisions shall 
                  continue in full force and effect. These Terms of Service, together with our Privacy Policy and any 
                  executed service agreements, constitute the entire agreement between the parties and supersede all prior 
                  understandings or agreements, whether written or oral.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assignment and Third-Party Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign or transfer your rights under these terms without our prior written consent. We may 
                  assign our rights and obligations to any affiliate or successor entity. These terms do not create any 
                  third-party beneficiary rights except as expressly stated. Headings are for convenience only and do not 
                  affect the interpretation of these terms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Electronic Communications</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you consent to receive communications from us electronically, including emails, 
                  text messages, and notices posted on our website. You agree that electronic communications satisfy any 
                  legal requirement for written communications. You may withdraw consent to electronic communications by 
                  contacting us, but this may limit our ability to provide certain services.
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

export default TermsOfServicePage;