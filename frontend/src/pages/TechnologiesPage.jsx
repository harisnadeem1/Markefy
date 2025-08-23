import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
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

const techCategories = {
  frontend: {
    title: "Frontend Development",
    description: "Building beautiful, responsive, and interactive user interfaces",
    icon: Monitor,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    technologies: [
      {
        name: "React",
        description: "Component-based library for building user interfaces",
        level: "Expert",
        years: "5+",
        projects: "200+",
        iconPath: "/techicons/react.png", // Path to React icon in public folder
        features: ["Component Architecture", "Hooks & Context", "Performance Optimization", "State Management"]
      },
      {
        name: "Next.js",
        description: "Full-stack React framework with SSR and SSG",
        level: "Expert", 
        years: "3+",
        projects: "150+",
        iconPath: "/techicons/nextjs.svg", // Path to Next.js icon
        features: ["Server-Side Rendering", "Static Generation", "API Routes", "Image Optimization"]
      },
      {
        name: "Vue.js",
        description: "Progressive JavaScript framework for building UIs",
        level: "Advanced",
        years: "4+", 
        projects: "80+",
        iconPath: "/techicons/vuejs.png", // Path to Vue.js icon
        features: ["Composition API", "Reactive Data", "Single File Components", "Vue Router"]
      },
      {
        name: "TypeScript",
        description: "Strongly typed programming language built on JavaScript",
        level: "Expert",
        years: "4+",
        projects: "180+", 
        iconPath: "/techicons/typescript.png", // Path to TypeScript icon
        features: ["Type Safety", "IntelliSense", "Refactoring", "Error Prevention"]
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        level: "Expert",
        years: "3+",
        projects: "250+",
        iconPath: "/techicons/Tailwind.png", // Path to Tailwind CSS icon
        features: ["Utility Classes", "Responsive Design", "Custom Themes", "Component Extraction"]
      },
      {
        name: "Framer Motion",
        description: "Production-ready motion library for React",
        level: "Advanced",
        years: "2+",
        projects: "100+",
        iconPath: "/techicons/framer-motion.svg", // Path to Framer Motion icon
        features: ["Smooth Animations", "Gesture Recognition", "Layout Animations", "SVG Animation"]
      }
    ]
  },
  backend: {
    title: "Backend Development", 
    description: "Scalable server-side solutions and robust APIs",
    icon: Server,
    color: "gray",
    gradient: "from-gray-600 to-gray-700",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime for scalable network applications",
        level: "Expert",
        years: "5+",
        projects: "180+",
        iconPath: "/techicons/nodejs.png", // Path to Node.js icon
        features: ["Express.js", "Real-time Apps", "Microservices", "RESTful APIs"]
      },
      {
        name: "Python",
        description: "Versatile programming language for web and data science",
        level: "Expert", 
        years: "6+",
        projects: "200+",
        iconPath: "/techicons/python.webp", // Path to Python icon
        features: ["Django Framework", "Flask", "FastAPI", "Data Processing"]
      },
      {
        name: "Java",
        description: "Enterprise-grade programming language",
        level: "Advanced",
        years: "4+",
        projects: "90+",
        iconPath: "/techicons/java.webp", // Path to Java icon
        features: ["Spring Boot", "Microservices", "JPA/Hibernate", "Maven/Gradle"]
      },
      {
        name: ".NET",
        description: "Microsoft's platform for building modern applications",
        level: "Advanced",
        years: "3+", 
        projects: "70+",
        iconPath: "/techicons/dotnet.png", // Path to .NET icon
        features: ["ASP.NET Core", "Entity Framework", "Azure Integration", "C# Language"]
      },
      {
        name: "PHP",
        description: "Server-side scripting language for web development",
        level: "Advanced",
        years: "5+",
        projects: "120+",
        iconPath: "/techicons/php.png", // Path to PHP icon
        features: ["Laravel Framework", "Symfony", "WordPress", "Composer"]
      },
      {
        name: "Go",
        description: "Fast, statically typed language for modern applications",
        level: "Intermediate",
        years: "2+",
        projects: "40+",
        iconPath: "/techicons/go.png", // Path to Go icon
        features: ["Concurrency", "Microservices", "High Performance", "Docker Support"]
      }
    ]
  },
  mobile: {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    color: "blue",
    gradient: "from-blue-600 to-blue-700", 
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile apps using React",
        level: "Expert",
        years: "4+",
        projects: "80+",
        iconPath: "/techicons/react.png", // Path to React Native icon
        features: ["Cross-Platform", "Native Performance", "Hot Reloading", "Third-party Integration"]
      },
      {
        name: "Flutter",
        description: "Google's UI toolkit for building natively compiled applications",
        level: "Advanced",
        years: "3+",
        projects: "60+",
        iconPath: "/techicons/flutter.png", // Path to Flutter icon
        features: ["Single Codebase", "Widget-based", "Hot Reload", "Material Design"]
      },
      {
        name: "Swift",
        description: "Apple's programming language for iOS development",
        level: "Advanced",
        years: "4+",
        projects: "50+",
        iconPath: "/techicons/swift.svg", // Path to Swift icon
        features: ["iOS Native", "SwiftUI", "Core Data", "App Store Optimization"]
      },
      {
        name: "Kotlin",
        description: "Modern programming language for Android development",
        level: "Advanced", 
        years: "3+",
        projects: "45+",
        iconPath: "/techicons/kotlin.png", // Path to Kotlin icon
        features: ["Android Native", "Jetpack Compose", "Coroutines", "Google Play Store"]
      }
    ]
  },
  database: {
    title: "Database & Storage",
    description: "Robust data storage and management solutions", 
    icon: Database,
    color: "black",
    gradient: "from-gray-800 to-black",
    technologies: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
        level: "Expert",
        years: "5+",
        projects: "150+",
        iconPath: "/techicons/postgre.png", // Path to PostgreSQL icon
        features: ["ACID Compliance", "JSON Support", "Full-text Search", "Scalability"]
      },
      {
        name: "MongoDB",
        description: "Document-oriented NoSQL database",
        level: "Expert",
        years: "4+", 
        projects: "120+",
        iconPath: "/techicons/mongo.png", // Path to MongoDB icon
        features: ["Document Storage", "Horizontal Scaling", "Aggregation Pipeline", "Atlas Cloud"]
      },
      {
        name: "MySQL",
        description: "Popular open-source relational database",
        level: "Expert",
        years: "6+",
        projects: "200+",
        iconPath: "/techicons/mysql.svg", // Path to MySQL icon
        features: ["High Performance", "Replication", "Partitioning", "InnoDB Engine"]
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching",
        level: "Advanced",
        years: "3+",
        projects: "100+", 
        iconPath: "/techicons/redis.png", // Path to Redis icon
        features: ["Caching", "Session Storage", "Real-time Analytics", "Pub/Sub Messaging"]
      },
      {
        name: "Firebase",
        description: "Google's platform for building mobile and web applications",
        level: "Advanced",
        years: "3+",
        projects: "80+",
        iconPath: "/techicons/firebase.png", // Path to Firebase icon
        features: ["Real-time Database", "Authentication", "Cloud Functions", "Hosting"]
      }
    ]
  },
  devops: {
    title: "DevOps & Cloud",
    description: "Modern deployment, scaling, and infrastructure management",
    icon: Cloud,
    color: "blue",
    gradient: "from-blue-500 to-blue-700",
    technologies: [
      {
        name: "AWS",
        description: "Amazon's comprehensive cloud computing platform",
        level: "Expert", 
        years: "5+",
        projects: "180+",
        iconPath: "/techicons/aws.png", // Path to AWS icon
        features: ["EC2", "S3", "Lambda", "RDS", "CloudFront", "EKS"]
      },
      {
        name: "Docker",
        description: "Containerization platform for application deployment",
        level: "Expert",
        years: "4+",
        projects: "200+",
        iconPath: "/techicons/docker.webp", // Path to Docker icon
        features: ["Containerization", "Multi-stage Builds", "Docker Compose", "Image Optimization"]
      },
      {
        name: "Kubernetes",
        description: "Container orchestration platform",
        level: "Advanced",
        years: "3+",
        projects: "80+",
        iconPath: "/techicons/kubernetes.png", // Path to Kubernetes icon
        features: ["Container Orchestration", "Auto-scaling", "Service Discovery", "Rolling Updates"]
      },
      {
        name: "Google Cloud",
        description: "Google's cloud computing services",
        level: "Advanced",
        years: "3+", 
        projects: "90+",
        iconPath: "/techicons/google.png", // Path to Google Cloud Platform icon
        features: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"]
      },
      {
        name: "Terraform",
        description: "Infrastructure as Code (IaC) tool",
        level: "Advanced",
        years: "2+",
        projects: "60+",
        iconPath: "/techicons/tera.png", // Path to Terraform icon
        features: ["Infrastructure as Code", "Multi-cloud", "State Management", "Resource Graph"]
      },
      {
        name: "Jenkins",
        description: "Open-source automation server for CI/CD",
        level: "Advanced",
        years: "4+",
        projects: "120+",
        iconPath: "/techicons/jen.png", // Path to Jenkins icon
        features: ["CI/CD Pipelines", "Plugin Ecosystem", "Distributed Builds", "Integration"]
      }
    ]
  }
};

const stats = [
  { number: "50+", label: "Technologies Mastered", icon: Code2 },
  { number: "500+", label: "Projects Delivered", icon: Rocket },
  { number: "99.9%", label: "Uptime Achieved", icon: Shield },
  { number: "24/7", label: "Support & Monitoring", icon: Eye }
];

const principles = [
  {
    icon: Rocket,
    title: "Performance First",
    description: "We optimize every line of code for speed, efficiency, and scalability."
  },
  {
    icon: Shield,
    title: "Security by Design", 
    description: "Security isn't an afterthought - it's built into everything we create."
  },
  {
    icon: Gauge,
    title: "Scalable Architecture",
    description: "Our solutions grow with your business, handling increased load seamlessly."
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Technology should enhance user experience, not complicate it."
  }
];

const TechnologiesPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('frontend');
  
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-gray-700 bg-gray-100'; 
      case 'Intermediate': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Technology Stack - Markefy | Advanced Development Tools & Expertise</title>
        <meta name="description" content="Explore our comprehensive technology expertise. From React and Node.js to AWS and Kubernetes - discover the advanced tools we use to build exceptional digital solutions." />
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
                Technology Expertise
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Cutting-Edge{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Technology Stack
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We leverage the most advanced, robust, and scalable technologies to build solutions that 
              don't just meet today's needs – they're future-ready and built to evolve with your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            
            </motion.div>
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
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Technology Arsenal</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Deep expertise across the entire technology spectrum - from frontend frameworks to cloud infrastructure
              </p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-12 bg-gray-100 p-2 rounded-2xl h-auto gap-2">
                {Object.entries(techCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex flex-col sm:flex-row items-center justify-center px-3 py-4 rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 text-gray-600 hover:text-gray-900 min-h-[60px] sm:min-h-[50px]"
                  >
                    <category.icon className="w-5 h-5 mb-1 sm:mb-0 sm:mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                      {category.title.replace(' &', ' &')}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(techCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Category Header */}
                    <div className="text-center mb-12">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                        <category.icon className="w-10 h-10 text-white" />
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
                                src={tech.iconPath} 
                                alt={`${tech.name} icon`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  // Fallback to a default icon if image fails to load
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
                                {tech.level}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-lg font-bold text-blue-600">{tech.years}</div>
                              <div className="text-sm text-gray-600">Experience</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-lg font-bold text-gray-800">{tech.projects}</div>
                              <div className="text-sm text-gray-600">Projects</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h5>
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
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Development Principles</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide every technical decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <TechStack />
      </div>
    </>
  );
};

export default TechnologiesPage;