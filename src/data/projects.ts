export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  summary: string;
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    summary: "Multi-role enterprise back-office for devices, orders, and licenses",
    title: "MoboCheck",
    description: "Back-office dashboard for MoboCheck, built with React and TypeScript. Permissions for all roles—including admins—are managed in the backend via Casbin and sent dynamically to the frontend, ensuring each user sees only the features allowed for their role. The platform includes secure REST APIs, role-based authentication, real-time updates, database operations, notifications, activity logging, and a responsive dashboard for managing users, devices, orders, licenses, and organization settings according to assigned permissions.",
    techStack: ["React", "Node.js", "MySQL", "Casbin", "Tailwind CSS"],
    image: "/mobocheck.webp",
    githubUrl: "https://github.com/M-zohaib-developer/",
    liveUrl: "https://mobocheck.com",
  },
  {
    id: "2",
    role: "Full Stack Developer",
    summary: "AI-powered social media scheduling and publishing platform",
    title: "Postsiva",
    description: "Postsiva is a unified AI-powered social media management platform that lets users compose, schedule, and publish content across LinkedIn, Facebook, Instagram, TikTok, and YouTube from a single workspace. The platform features an integrated AI toolkit for text-to-image generation, caption and content editing, and automated thumbnail creation, alongside a unified inbox, live network previews, and multi-workspace support for managing multiple brands or clients from one dashboard.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "AI Integration", "Tailwind CSS"],
    image: "/postsiva.webp",
    githubUrl: "https://github.com/M-zohaib-developer/",
    liveUrl: "https://www.postsiva.com",
  },
  {
    id: "3",
    role: "Full Stack Developer",
    summary: "Marketing and portfolio website for an AI automation agency",
    title: "Automatev",
    description: "Automatev is the marketing and portfolio website for an AI and automation software agency. Built as a fast, animation-rich single-brand site, it showcases the team's work, capabilities, and people while funneling visitor interest into contact forms and call bookings—designed to turn traffic into qualified leads with smooth, high-performance motion design throughout.",
    techStack: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: "/automatev.webp",
    githubUrl: "https://github.com/M-zohaib-developer/",
    liveUrl: "https://automatev.com",
  },
  {
    id: "4",
    role: "React Native Developer",
    summary: "Cross-platform AI assistant with voice and chat",
    title: "Qyra AI Assistant",
    description: "AI assistant app that pairs with the Esqyra Watch, the application delivers complete information through fluid voice and chat interactions. It merges intelligent task management with proactive health and productivity insights, offering personalized recommendations, real-time location tracking, and local weather updates. The system also features a curated news aggregator—covering politics, social trends, and global events—all visualized within a sleek, fully responsive dashboard.",
    techStack: ["React Native", "TypeScript", "REST API","MySQL","Tailwind CSS"],
    image: "/qyra.webp",
    githubUrl: "https://github.com/M-zohaib-developer/",
    liveUrl: "https://app.esqyra.com",
  },
  {
    id: "5",
    role: "Solo — personal project",
    summary: "Freelance marketplace with Casbin-based RBAC",
    title: "FreelanceHub Marketplace",
    description: "Full-stack freelance marketplace platform connecting clients with freelancers. Features complete project lifecycle management from posting to payment, with advanced Casbin-based RBAC system for three user roles (CLIENT, FREELANCER, ADMIN). Includes project bidding workflow, proposal management, contract execution, secure JWT authentication, and role-specific dashboards. Built with MVC architecture, complex relational database with 8 models using Prisma ORM, and responsive UI for seamless user experience across all roles.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Prisma", "Casbin", "Tailwind CSS"],
    image: "/freelancer.webp",
    githubUrl: "https://github.com/M-zohaib-developer/",
  },
  {
    id: "6",
    role: "Solo — university project",
    summary: "Full-stack event planning and registration platform",
    title: "Events Management System",
    description: "Event Management System is a full-stack web application designed to simplify the process of planning and managing events. The platform allows organizers to create events, manage schedules, register participants, track attendees, and handle event-related operations in an efficient way. Users can browse upcoming events, register online, and receive real-time updates. Admins or organizers can manage event details, monitor registrations, and control permissions based on user roles. The system focuses on performance, usability, and scalability, making event coordination easier for both organizers and participants.",
    techStack: ["React", "Firebase", "Redux", "WebSocket", "Material UI"],
    image: "",
    githubUrl: "https://github.com/M-zohaib-developer/",
  },
];
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Redux" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Prisma ORM" },
      { name: "JWT Authentication" },
      { name: "REST APIs" },
      { name: "Socket.io" },
      { name: "Docker" },
      { name: "AWS" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git, GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "AWS, Digital Ocean" },
      {name: "Cursor"},
      {name: "Postman"}
     
    ],
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "MoboCheck Web Platform (Mobocheck)",
    role: "Full Stack Developer",
    period: "2025 — Present",
    description: "Working on the MoboCheck production platform with React, Node.js, and MySQL.",
    responsibilities: [
      "Build full-stack features using React.js for frontend and Node.js for backend services",
      "Set up Casbin-based authorization with RBAC/ABAC policies across platform modules",
      "Wrote a permission layer on the React side so components render based on the permissions the backend sends",
      "Structured app state with Redux Toolkit",
      "Build REST APIs in Node.js and work on the MySQL schema",
      "Work with the backend team on API contracts and integration",
    ],
  },
  {
    id: "2",
    company: "Postsiva — AI-Powered Social Media Management Platform (Automatev)",
    role: "Full Stack Developer",
    period: "2026",
    description: "Contributed to an AI-powered platform unifying social media scheduling and publishing across LinkedIn, Facebook, Instagram, TikTok, and YouTube from a single workspace.",
    responsibilities: [
      "Built AI-driven content features including text-to-image generation, AI caption/content editing, and automated thumbnail creation",
      "Implemented multi-platform API integrations to support unified scheduling and publishing across major social networks",
      "Developed responsive, high-performance UI using React.js and Next.js with SSR/SSG for optimal load times",
      "Collaborated within Agile workflows, contributing to sprint planning, code reviews, and technical documentation",
    ],
  },
  {
    id: "3",
    company: "Automatev — Agency Marketing & Portfolio Website (Automatev)",
    role: "Full Stack Developer",
    period: "2026",
    description: "Built the marketing and portfolio website for an AI and automation software agency — a fast, animation-rich site designed to convert visitors into leads.",
    responsibilities: [
      "Developed a single-brand, animation-rich website showcasing the agency's work, capabilities, and team",
      "Implemented lead-generation flows funneling visitor interest into contact forms and call bookings",
      "Optimized site performance and responsiveness for a polished, fast-loading user experience",
    ],
  },
  {
    id: "4",
    company: "QYRA AI Assistance (Mobocheck)",
    role: "React Native Developer",
    period: "2025 — 2026",
    description: "Built the mobile app for an AI assistant on iOS and Android.",
    responsibilities: [
      "Built the React Native app for iOS and Android, from architecture to release",
      "Built the AI assistant's conversational core using Retrieval-Augmented Generation (RAG) for context-aware responses",
      "Integrated ElevenLabs for natural, real-time voice interaction, powering the app's voice assistant capabilities",
      "Cut unnecessary re-renders with React.memo, useMemo, and useCallback",
      "Integrated AI-powered capabilities through RESTful APIs with comprehensive error handling and intelligent loading states",
      "Partnered with backend engineering teams to align API contracts and deliver fluid real-time user experiences",
    ],
  },
  {
    id: "5",
    company: "FreelanceHub Marketplace (Personal Project)",
    role: "Full Stack Developer",
    period: "2025",
    description: "Built full-stack freelance marketplace platform as a personal learning project to master advanced authentication, authorization, and complex database relationships.",
    responsibilities: [
      "Developed complete marketplace platform using React TypeScript, Node.js/Express, and MySQL with Prisma ORM",
      "Implemented advanced RBAC authorization system using Casbin with dynamic role and permission management",
      "Architected complex database schema with 8 models handling users, projects, proposals, payments, and permissions",
      "Built secure JWT authentication with bcrypt password hashing and multi-level route protection",
      "Created three distinct user workflows: client project posting, freelancer bidding system, and admin platform management",
      "Designed MVC architecture with organized controllers, models, and service layers for scalable code structure",
    ],
  },
  {
    id: "6",
    company: "Event Management System (University Project)",
    role: "Full Stack Developer",
    period: "2024 — 2025",
    description: "Built an event management platform on my own as a university project.",
    responsibilities: [
      "Built event creation and participant registration flows",
      "Designed the REST API and a normalized MySQL schema",
      "Built the frontend in React with TypeScript",
      "Handled everything from requirements to deployment",
    ],
  },
];
export const personalInfo = {
  name: "Muhammad Zohaib",
  role: "Full Stack Developer",
  bio: "Software developer with 1+ year of hands-on experience building modern web and mobile applications. Experienced in the React ecosystem including React, Next.js, React Native, along with backend development using Node.js. Most of my recent work is on role-based back-office systems and AI-powered products.",
  email: "mzohaibbhatti604@gmail.com",
  github: "https://github.com/M-zohaib-developer",
  linkedin: "https://www.linkedin.com/in/muhammad-zohaib-1a6972234/",
  location: "Lahore, Pakistan",
};
