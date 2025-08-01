import { 
  Briefcase, Users, FileText, Globe, Languages, Database, Clock, Shield, 
  Lock, BarChart3, CreditCard, Zap, LayoutDashboard, DollarSign ,TrendingUp,ShieldCheck,Filter,BookOpen
} from 'lucide-react';

export const caseStudiesData = [
  {
    id: "fst-trading",
    client: "FST Trading",
    title: "Multilingual Staffing & Job Matching Platform Delivered in 4 Days.",
    description: "Developed a fast, fully functional job portal connecting job seekers with businesses, complete with admin panel and bilingual support in Dutch & English.",
    longDescription: "We built FST Trading’s staffing platform to bridge the gap between job seekers and businesses in need of talent. The system features separate form flows for employers and candidates, job posting and application management, and a robust admin panel for complete control. The website supports both Dutch and English, catering to a wider audience in the Netherlands and beyond. Delivered in just 4 days, the platform is fully operational and user-friendly.",
    image: "/public/projects/fsttrading/Homepage.png",
    heroImage: "/public/projects/fsttrading/Homepage.png",
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
      { url: "/public/projects/fsttrading/joblisitngs.png", title: "Job Listings", description: "List of available jobs with search and filter options." },
      { url: "/public/projects/fsttrading/staffrequest.png", title: "Employer Form", description: "Dedicated form for businesses to submit staffing requests." },
      { url: "/public/projects/fsttrading/jobapplication form.png", title: "Employee Form", description: "Dedicated form for persons to apply to jobs" },

      { url: "/public/projects/fsttrading/admindahsboard.png", title: "Admin Dashboard", description: "Full control over job postings, applications, and user activity." },
      { url: "/public/projects/fsttrading/adminjobs.png", title: "Admin Jobs Dashboard", description: "Admin can handle jobs and applications from this page." },

    ],
    results: [
      { metric: "4 Days", title: "Rapid Delivery", description: "Full bilingual platform delivered in record time." },
      { metric: "100%", title: "Admin Control", description: "Complete content and application management from one place." },
      { metric: "2 Languages", title: "Bilingual", description: "Supports both Dutch and English users." }
    ]
  },
   {
    id: "defi-strategies",
    client: "DeFi Strategies",
    title: "Subscription-based platform for curated crypto investment strategies.",
    description: "Built a secure, subscription-based platform offering vetted DeFi investment strategies with admin management, user risk filters, and blockchain-specific opportunities.",
    longDescription: "We developed DeFi Strategies, a subscription-driven platform that simplifies Decentralized Finance for both beginners and experienced investors. Users can explore curated, step-by-step strategies, filter by risk level, and select opportunities across multiple blockchains like Ethereum, Polygon, and Solana. The platform includes a content management dashboard for admins, ensuring strategies remain updated and relevant.",
    image: "/public/projects/defi/homepage.png",
    heroImage: "/public/projects/defi/homepage.png",
    tags: ["DeFi", "Crypto", "Web Development", "Subscription Platform"],
    duration: "1 Week",
    teamSize: "3 people",
    timeline: "Q2 2025",
    challenge: "The DeFi space is filled with complex information and scattered resources, making it hard for users to find trustworthy, actionable strategies. The client wanted a central platform that could provide structured learning, risk-based filtering, and monetization via subscriptions.",
    solution: "We created a secure web platform with subscription management, blockchain-based strategy categorization, and an intuitive user interface. The admin panel allows for easy publishing and updating of strategies. Educational modules and DeFi basics are also provided for new users.",
    features: [
      {
        icon: BookOpen,
        title: "Curated DeFi Strategies",
        description: "Access a library of step-by-step strategies vetted for clarity and potential."
      },
      {
        icon: Filter,
        title: "Risk Level Filtering",
        description: "Find strategies that match your risk appetite, from low to high."
      },
      {
        icon: Globe,
        title: "Blockchain Coverage",
        description: "Opportunities across Ethereum, Polygon, Solana, and other blockchains."
      },
      {
        icon: FileText,
        title: "Step-by-Step Guides",
        description: "Clear instructions for each strategy — no more guesswork."
      },
      {
        icon: ShieldCheck,
        title: "Secure & Transparent",
        description: "Educational-first approach ensuring users understand before they invest."
      },
      {
        icon: TrendingUp,
        title: "Market Opportunity Alerts",
        description: "Stay updated with emerging DeFi opportunities as the market evolves."
      }
    ],
    techStack: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: "Supabase",
        logo: "/public/techicons/supa.png"
      }
    ],
   projectImages: [
  
  {
    url: "/public/projects/defi/community.png",
    title: "Community Page",
    description: "Dedicated space for DeFi enthusiasts to share insights, discuss strategies, and connect."
  },
  {
    url: "/public/projects/defi/learn.png",
    title: "Learn DeFi Page",
    description: "Step-by-step learning modules explaining key concepts, tools, and passive income methods."
  },
  {
    url: "/public/projects/defi/strategies.png",
    title: "Strategies Page",
    description: "Curated list of DeFi strategies with risk-level filters, blockchain selection, and detailed guides."
  },
  {
    url: "/public/projects/defi/adminpanel.png",
    title: "Admin Panel",
    description: "Full-featured dashboard for managing strategies, users, subscriptions, and content updates."
  }
],

   results: [
  {
    metric: "Beginner–Pro",
    title: "Skill Levels Supported",
    description: "Guides tailored for both newcomers and experienced DeFi users."
  },
  {
    metric: "Global",
    title: "Community Reach",
    description: "Our members come from diverse regions, sharing unique perspectives."
  },
  {
    metric: "Multi-Chain",
    title: "Blockchains Covered",
    description: "Ethereum, Polygon, Solana, and other top networks included."
  }
]

  }
];
