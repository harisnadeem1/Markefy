import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Star,
  Award,
  TrendingUp,
  Users,
  Globe,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Gauge,
  Target,
  Heart,
  Eye,
  Settings
} from 'lucide-react';
import TechStack from '@/components/TechStack';

// Icon mappings for technology categories
const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  mobile: Smartphone,
  database: Database,
  devops: Cloud
};

// Icon mappings for stats and principles
const statIcons = [Code2, Rocket, Shield, Eye];
const principleIcons = [Rocket, Shield, Gauge, Heart];

// Gradient mappings
const categoryGradients = {
  frontend: "from-blue-500 to-blue-600",
  backend: "from-gray-600 to-gray-700",
  mobile: "from-blue-600 to-blue-700",
  database: "from-gray-800 to-black",
  devops: "from-blue-500 to-blue-700"
};

// Technology icon paths
const techIconPaths = {
  "React": "/techicons/react.png",
  "Next.js": "/techicons/nextjs.svg",
  "Vue.js": "/techicons/vuejs.png",
  "TypeScript": "/techicons/typescript.png",
  "Tailwind CSS": "/techicons/Tailwind.png",
  "Framer Motion": "/techicons/framer-motion.svg",
  "Node.js": "/techicons/nodejs.png",
  "Python": "/techicons/python.webp",
  "Java": "/techicons/java.webp",
  ".NET": "/techicons/dotnet.png",
  "PHP": "/techicons/php.png",
  "Go": "/techicons/go.png",
  "React Native": "/techicons/react.png",
  "Flutter": "/techicons/flutter.png",
  "Swift": "/techicons/swift.svg",
  "Kotlin": "/techicons/kotlin.png",
  "PostgreSQL": "/techicons/postgre.png",
  "MongoDB": "/techicons/mongo.png",
  "MySQL": "/techicons/mysql.svg",
  "Redis": "/techicons/redis.png",
  "Firebase": "/techicons/firebase.png",
  "AWS": "/techicons/aws.png",
  "Docker": "/techicons/docker.webp",
  "Kubernetes": "/techicons/kubernetes.png",
  "Google Cloud": "/techicons/google.png",
  "Terraform": "/techicons/tera.png",
  "Jenkins": "/techicons/jen.png"
};

const TechnologiesPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('frontend');
  
  const handleGetStarted = () => {
    toast({
      title: t('technologiesPage.toast.notImplemented') || t('servicesPage.toast.notImplemented'),
    });
  };

  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'expert': return 'text-blue-600 bg-blue-100';
      case 'advanced': return 'text-gray-700 bg-gray-100'; 
      case 'intermediate': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Get translated data
  const stats = t('technologiesPage.stats', { returnObjects: true });
  const categories = t('technologiesPage.categories', { returnObjects: true });
  const principles = t('technologiesPage.principles.items', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('technologiesPage.meta.title')}</title>
        <meta name="description" content={t('technologiesPage.meta.description')} />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full mb-8 shadow-lg">
                {t('technologiesPage.hero.badge')}
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                {t('technologiesPage.hero.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {t('technologiesPage.hero.titleHighlight')}
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('technologiesPage.hero.description')}
            </motion.p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 bg-white border-b border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const StatIcon = statIcons[index];
                return (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <StatIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Technology Categories */}
        <motion.section 
          className="py-20 md:py-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('technologiesPage.arsenal.title')}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('technologiesPage.arsenal.description')}
              </p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-12 bg-gray-100 p-2 rounded-2xl h-auto gap-2">
                {Object.entries(categories).map(([key, category]) => {
                  const CategoryIcon = categoryIcons[key];
                  return (
                    <TabsTrigger 
                      key={key} 
                      value={key}
                      className="flex flex-col sm:flex-row items-center justify-center px-3 py-4 rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 text-gray-600 hover:text-gray-900 min-h-[60px] sm:min-h-[50px]"
                    >
                      <CategoryIcon className="w-5 h-5 mb-1 sm:mb-0 sm:mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                        {category.title.replace(' &', ' &')}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {Object.entries(categories).map(([key, category]) => {
                const CategoryIcon = categoryIcons[key];
                const gradient = categoryGradients[key];

                return (
                  <TabsContent key={key} value={key} className="mt-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Category Header */}
                      <div className="text-center mb-12">
                        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                          <CategoryIcon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.technologies.map((tech, index) => (
                          <motion.div 
                            key={tech.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                          >
                            {/* Tech Header */}
                            <div className="flex items-center mb-6">
                              <div className="w-12 h-12 mr-4 flex-shrink-0">
                                <img 
                                  src={techIconPaths[tech.name]} 
                                  alt={`${tech.name} icon`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                                <div 
                                  className="w-12 h-12 bg-gray-200 rounded-lg items-center justify-center text-gray-500 text-xs font-bold hidden"
                                  style={{ display: 'none' }}
                                >
                                  {tech.name.charAt(0)}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-1">{tech.name}</h4>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(tech.level)}`}>
                                  {t(`technologiesPage.levels.${tech.level.toLowerCase()}`)}
                                </span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="text-center p-3 bg-gray-50 rounded-xl">
                                <div className="text-lg font-bold text-blue-600">{tech.years}</div>
                                <div className="text-sm text-gray-600">{t('technologiesPage.labels.experience')}</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 rounded-xl">
                                <div className="text-lg font-bold text-gray-800">{tech.projects}</div>
                                <div className="text-sm text-gray-600">{t('technologiesPage.labels.projects')}</div>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-3">{t('technologiesPage.labels.keyCapabilities')}</h5>
                              <div className="space-y-2">
                                {tech.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </motion.section>

        {/* Principles Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('technologiesPage.principles.title')}
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('technologiesPage.principles.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => {
                const PrincipleIcon = principleIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <PrincipleIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <TechStack />
      </div>
    </>
  );
};

export default TechnologiesPage;