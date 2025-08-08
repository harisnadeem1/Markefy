import { 
  Briefcase, Users, FileText, Globe, Languages, Database, Clock, Shield, 
  Lock, BarChart3, CreditCard, Zap, LayoutDashboard, DollarSign ,TrendingUp,ShieldCheck,Filter,BookOpen ,LineChart, BadgeDollarSign, FileStack, UserCheck, ClipboardList,
  ShoppingCart,  PackageCheck,  SlidersHorizontal
} from 'lucide-react';

export const caseStudiesData = [
  {
    id: "fst-trading",
    client: "FST Trading",
    title: "Multilingual Staffing & Job Matching Platform Delivered in 4 Days.",
    description: "Developed a fast, fully functional job portal connecting job seekers with businesses, complete with admin panel and bilingual support in Dutch & English.",
    longDescription: "We built FST Trading’s staffing platform to bridge the gap between job seekers and businesses in need of talent. The system features separate form flows for employers and candidates, job posting and application management, and a robust admin panel for complete control. The website supports both Dutch and English, catering to a wider audience in the Netherlands and beyond. Delivered in just 4 days, the platform is fully operational and user-friendly.",
    image: "/projects/fsttrading/Homepage.png",
    heroImage: "/projects/fsttrading/Homepage.png",
    tags: ["Web Development", "Job Portal", "Multilingual"],
    duration: "4 days",
    teamSize: "3 people",
    timeline: "Q2 2025",
    challenge: "FST Trading needed a bilingual staffing platform ready in less than a week, with separate flows for employers and candidates, an admin dashboard, and complete backend control over job postings and applications.",
    solution: "We designed and developed a responsive web app with React, Node.js, Express, and PostgreSQL. It includes a powerful admin panel to manage job postings, employer requests, and job applications, with multilingual support and user-friendly UI for both desktop and mobile.",
    features: [
      {
        icon: Briefcase,
        title: "Job Management",
        description: "Post, edit, and manage job listings directly from the admin dashboard."
      },
      {
        icon: Users,
        title: "Employer & Candidate Portals",
        description: "Separate form pages for employers and job seekers for tailored experiences."
      },
      {
        icon: FileText,
        title: "Application Handling",
        description: "Track and manage applications in real-time with filtering and export options."
      },
      {
        icon: Globe,
        title: "Responsive & Accessible",
        description: "Fully optimized for desktop, tablet, and mobile devices."
      },
      {
        icon: Languages,
        title: "Multilingual Support",
        description: "Available in both Dutch and English to serve a diverse audience."
      },
      {
        icon: LayoutDashboard,
        title: "Admin Control Panel",
        description: "Centralized admin panel to manage all site content and user activity."
      }
    ],
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
    projectImages: [
      { url: "/projects/fsttrading/joblisitngs.png", title: "Job Listings", description: "List of available jobs with search and filter options." },
      { url: "/projects/fsttrading/staffrequest.png", title: "Employer Form", description: "Dedicated form for businesses to submit staffing requests." },
      { url: "/projects/fsttrading/jobapplication form.png", title: "Employee Form", description: "Dedicated form for persons to apply to jobs" },

      { url: "/projects/fsttrading/admindahsboard.png", title: "Admin Dashboard", description: "Full control over job postings, applications, and user activity." },
      { url: "/projects/fsttrading/adminjobs.png", title: "Admin Jobs Dashboard", description: "Admin can handle jobs and applications from this page." },

    ],
    results: [
      { metric: "4 Days", title: "Rapid Delivery", description: "Full bilingual platform delivered in record time." },
      { metric: "100%", title: "Admin Control", description: "Complete content and application management from one place." },
      { metric: "2 Languages", title: "Bilingual", description: "Supports both Dutch and English users." }
    ]
  }
//   ,
//    {
//     id: "defi-strategies",
//     client: "DeFi Strategies",
//     title: "Subscription-based platform for curated crypto investment strategies.",
//     description: "Built a secure, subscription-based platform offering vetted DeFi investment strategies with admin management, user risk filters, and blockchain-specific opportunities.",
//     longDescription: "We developed DeFi Strategies, a subscription-driven platform that simplifies Decentralized Finance for both beginners and experienced investors. Users can explore curated, step-by-step strategies, filter by risk level, and select opportunities across multiple blockchains like Ethereum, Polygon, and Solana. The platform includes a content management dashboard for admins, ensuring strategies remain updated and relevant.",
//     image: "/projects/defi/homepage.png",
//     heroImage: "/projects/defi/homepage.png",
//     tags: ["DeFi", "Crypto", "Web Development", "Subscription Platform"],
//     duration: "1 Week",
//     teamSize: "3 people",
//     timeline: "Q2 2025",
//     challenge: "The DeFi space is filled with complex information and scattered resources, making it hard for users to find trustworthy, actionable strategies. The client wanted a central platform that could provide structured learning, risk-based filtering, and monetization via subscriptions.",
//     solution: "We created a secure web platform with subscription management, blockchain-based strategy categorization, and an intuitive user interface. The admin panel allows for easy publishing and updating of strategies. Educational modules and DeFi basics are also provided for new users.",
//     features: [
//       {
//         icon: BookOpen,
//         title: "Curated DeFi Strategies",
//         description: "Access a library of step-by-step strategies vetted for clarity and potential."
//       },
//       {
//         icon: Filter,
//         title: "Risk Level Filtering",
//         description: "Find strategies that match your risk appetite, from low to high."
//       },
//       {
//         icon: Globe,
//         title: "Blockchain Coverage",
//         description: "Opportunities across Ethereum, Polygon, Solana, and other blockchains."
//       },
//       {
//         icon: FileText,
//         title: "Step-by-Step Guides",
//         description: "Clear instructions for each strategy — no more guesswork."
//       },
//       {
//         icon: ShieldCheck,
//         title: "Secure & Transparent",
//         description: "Educational-first approach ensuring users understand before they invest."
//       },
//       {
//         icon: TrendingUp,
//         title: "Market Opportunity Alerts",
//         description: "Stay updated with emerging DeFi opportunities as the market evolves."
//       }
//     ],
//     techStack: [
//       {
//         name: "React",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//       },
//       {
//         name: "Node.js",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
//       },
//       {
//         name: "Express.js",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
//       },
//       {
//         name: "Supabase",
//         logo: "/techicons/supa.png"
//       }
//     ],
//    projectImages: [
  
//   {
//     url: "/projects/defi/community.png",
//     title: "Community Page",
//     description: "Dedicated space for DeFi enthusiasts to share insights, discuss strategies, and connect."
//   },
//   {
//     url: "/projects/defi/learn.png",
//     title: "Learn DeFi Page",
//     description: "Step-by-step learning modules explaining key concepts, tools, and passive income methods."
//   },
//   {
//     url: "/projects/defi/strategies.png",
//     title: "Strategies Page",
//     description: "Curated list of DeFi strategies with risk-level filters, blockchain selection, and detailed guides."
//   },
//   {
//     url: "/projects/defi/adminpanel.png",
//     title: "Admin Panel",
//     description: "Full-featured dashboard for managing strategies, users, subscriptions, and content updates."
//   }
// ],

//    results: [
//   {
//     metric: "Beginner–Pro",
//     title: "Skill Levels Supported",
//     description: "Guides tailored for both newcomers and experienced DeFi users."
//   },
//   {
//     metric: "Global",
//     title: "Community Reach",
//     description: "Our members come from diverse regions, sharing unique perspectives."
//   },
//   {
//     metric: "Multi-Chain",
//     title: "Blockchains Covered",
//     description: "Ethereum, Polygon, Solana, and other top networks included."
//   }
// ]

//   }



,

{
  id: "treasury-management",
  client: "FinEdge Solutions",
  title: "End-to-End Treasury Management System with Hierarchical Approval & Real-Time Automation.",
  description: "Delivered a secure, enterprise-grade financial management platform that automates payroll, bill tracking, and internal approvals with real-time dashboards and role-based access.",
  longDescription: "We developed a powerful treasury management solution for FinEdge Solutions, designed to centralize all financial operations within the organization. The system streamlines tasks like payroll processing, bill approvals, real-time expense tracking, and task delegation—all within a secure and easy-to-use interface. With a built-in hierarchical approval system, every transaction and financial decision goes through the right chain of command. The platform is scalable, multilingual-ready, and tailored for finance and HR teams. Built on the robust MERN stack, it provides high performance and security for enterprise-grade usage.",
  image: "/projects/treasury/dashboard.png",
  heroImage: "/projects/treasury/dashboard.png",
  tags: ["Finance Automation", "Enterprise App", "MERN Stack"],
  duration: "2 weeks",
  teamSize: "2 people",
  timeline: "Q1 2025",
  challenge: "FinEdge Solutions needed a scalable platform to manage treasury operations efficiently. They were dealing with delays in approvals, scattered expense tracking, and manual payroll processing—leading to operational inefficiencies and data loss risks.",
  solution: "We engineered a centralized treasury management system using the MERN stack. The platform brings together real-time dashboards, automated payroll calculations, bill approvals, and task delegation. With granular user permissions and hierarchical role control, every action is tracked, authorized, and recorded. We also implemented alerts, audit logs, and export-ready reports for financial transparency.",
  features: [
    {
      icon: LineChart,
      title: "Real-Time Financial Dashboard",
      description: "Live visualization of cash flow, pending approvals, and expense distribution."
    },
    {
      icon: BadgeDollarSign,
      title: "Automated Payroll Engine",
      description: "Auto-generate salaries based on attendance, role, advances, and allowances."
    },
    {
      icon: FileStack,
      title: "Bill Submission & Approval",
      description: "Submit bills, upload receipts, and get approvals through role-based workflows."
    },
    {
      icon: UserCheck,
      title: "Hierarchical Role-Based Approvals",
      description: "Multi-level approval system based on user roles and departments."
    },
    {
      icon: ClipboardList,
      title: "Task Delegation System",
      description: "Assign and track financial and operational tasks department-wise."
    },
    {
      icon: ShieldCheck,
      title: "Security & Audit Logs",
      description: "All actions logged and tracked for accountability and auditing."
    }
  ],
  techStack: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  projectImages: [
    { url: "/projects/treasury/dashboard.png", title: "Live Dashboard", description: "Track all financial operations and KPIs in one place." },
    
    { url: "/projects/treasury/tasks.png", title: "Task Management", description: "Assign and monitor treasury-related tasks across teams." }
  ],
  results: [
    { metric: "100%", title: "Digital Transformation", description: "Replaced spreadsheets and manual approvals with a modern web system." },
    { metric: "Real-Time", title: "Instant Insights", description: "No more waiting for monthly summaries—live data at a glance." },
    { metric: "5+", title: "Departments Connected", description: "HR, Finance, and Admin now operate on a single shared system." }
  ]
},

{
  id: "sklepoll-ecommerce",
  client: "Sklepoll",
  title: "Custom PHP-Based eCommerce Platform with Admin Dashboard and Shopify Payment Integration.",
  description: "Developed a full-featured eCommerce site with complete backend control over products, categories, and orders—built using raw PHP and designed for scalability.",
  longDescription: "We created a tailor-made eCommerce platform for Sklepoll, a retail business looking for a flexible, self-hosted alternative to Shopify. Built entirely with PHP, the platform features a clean storefront and a robust admin dashboard to manage products, inventory, orders, categories, and customers. The system supports dynamic pricing, stock status, and promotional settings. It also features optional Shopify Checkout integration, enabling a seamless payment experience with trusted providers like iDEAL and Bancontact while keeping full control over product management within the native system.",
  image: "/projects/polsky/homepage.png",
  heroImage: "/projects/polsky/homepage.png",
  tags: ["eCommerce", "PHP", "Admin Dashboard", "Shopify Integration"],
  duration: "10 days",
  teamSize: "2 people",
  timeline: "Q1 2025",
  challenge: "The client needed a complete eCommerce website without relying on third-party CMS platforms. They also wanted a way to integrate Shopify Checkout as a secure and user-friendly payment gateway, all while maintaining full control over the product catalog and admin functions.",
  solution: "We built a lightweight yet powerful eCommerce platform in core PHP, with a custom admin dashboard for product, category, and order management. The frontend is optimized for smooth browsing, and the backend includes analytics, inventory management, and integration options. Shopify Checkout was integrated via a dynamic redirect and webhook system to handle secure payments externally and update order status internally.",
  features: [
    {
      icon: ShoppingCart,
      title: "Full eCommerce Functionality",
      description: "Product listings, filtering, cart, checkout, and dynamic pricing—all built from scratch in PHP."
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Manage products, categories, orders, and settings with a secure login panel."
    },
    {
      icon: PackageCheck,
      title: "Inventory & Order Management",
      description: "Track stock, process orders, and update delivery status easily."
    },
    {
      icon: CreditCard,
      title: "Shopify Payment Integration",
      description: "Seamless checkout via Shopify for iDEAL, Bancontact, and other payment methods."
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Pricing & Promotions",
      description: "Manage discounts, special offers, and product visibility in real-time."
    },
    {
      icon: Shield,
      title: "Secure & Lightweight",
      description: "Built with security best practices and optimized for fast performance."
    }
  ],
  techStack: [
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
projectImages: [
  {
    url: "/projects/polsky/homepage.png",
    title: "Homepage ",
    description: "Displays featured products, promotional banners, and category navigation."
  },
  {
    url: "/projects/polsky/products-catalog.png",
    title: "Product Listing Page",
    description: "Users can browse and filter products by category, price, and availability."
  },
  {
    url: "/projects/polsky/cart.png",
    title: "Shopping Cart",
    description: "Clean and intuitive cart interface with product summary and checkout options."
  },
  {
    url: "/projects/polsky/admin-panel.png",
    title: "Admin Dashboard",
    description: "Central hub for managing products, orders, categories, cloaking, and reports."
  },

  {
    url: "/projects/polsky/category.png",
    title: "Category Management",
    description: "Create and organize product categories for better frontend filtering."
  },
  {
    url: "/projects/polsky/cloacking.png",
    title: "Cloaking Management",
    description: "Manage cloaking rules and redirections for marketing or tracking purposes."
  },
  {
    url: "/projects/polsky/monitiring.png",
    title: "Live Monitoring Panel",
    description: "Real-time overview of user sessions, cart activity, and page visits."
  }
]
,
  results: [
    { metric: "100%", title: "Ownership", description: "No monthly fees or platform lock-in—full source code ownership." },
    { metric: "Shopify+", title: "Hybrid Model", description: "Native control with the flexibility of Shopify payment processing." },
    { metric: "Fast", title: "Optimized", description: "Minimalist backend built for speed and SEO." }
  ]
}


];
