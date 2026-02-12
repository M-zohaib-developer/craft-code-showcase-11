export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "MOBOCHECK_PLATFORM",
    description: "Mobocheck Backoffice is a full-stack, multi-role enterprise dashboard built with React and TypeScript. Permissions for all roles—including admins—are managed in the backend via Casbin and sent dynamically to the frontend, ensuring each user sees only the features allowed for their role. The platform includes secure REST APIs, role-based authentication, real-time updates, database operations, notifications, activity logging, and a responsive dashboard for managing users, devices, orders, licenses, and organization settings according to assigned permissions.",
    techStack: ["React", "Node.js", "My_SQL", "Casbin", "Tailwind CSS"],
    image: "/Mobo.png",
    githubUrl: "https://github.com",
    liveUrl: "https://mobocheck.com",
  },
  {
    id: "2",
    title: "QYRA_AI_ASSISTENCE",
    description: "A comprehensive AI-driven ecosystem designed to streamline daily life. Seamlessly integrated with the Esqyra Watch, the application delivers complete information through fluid voice and chat interactions. It merges intelligent task management with proactive health and productivity insights, offering personalized recommendations, real-time location tracking, and local weather updates. The system also features a curated news aggregator—covering politics, social trends, and global events—all visualized within a sleek, fully responsive dashboard.",
    techStack: ["React_Native", "TS", "REST API","My_SQL","Tailwind CSS"],
    image: "/Qyra.png",
    githubUrl: "https://github.com",
    liveUrl: "https://app.esqyra.com",
  },
  {
    id: "3",
    title: "Events Management System",
    description: "Event Management System is a full-stack web application designed to simplify the process of planning and managing events. The platform allows organizers to create events, manage schedules, register participants, track attendees, and handle event-related operations in an efficient way. Users can browse upcoming events, register online, and receive real-time updates. Admins or organizers can manage event details, monitor registrations, and control permissions based on user roles. The system focuses on performance, usability, and scalability, making event coordination easier for both organizers and participants.",
    techStack: ["React", "Firebase", "Redux", "WebSocket", "Material UI"],
    image: "/Events.png",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "FreelanceHub Marketplace",
    description: "Full-stack freelance marketplace platform connecting clients with freelancers. Features complete project lifecycle management from posting to payment, with advanced Casbin-based RBAC system for three user roles (CLIENT, FREELANCER, ADMIN). Includes project bidding workflow, proposal management, contract execution, secure JWT authentication, and role-specific dashboards. Built with MVC architecture, complex relational database with 8 models using Prisma ORM, and responsive UI for seamless user experience across all roles.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Prisma", "Casbin", "Tailwind CSS"],
    image: "/freelancer.png",
    githubUrl: "https://github.com",
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
    period: "2026 — Present",
    description: "Spearheading production web platform development with cutting-edge enterprise features using React.js, Node.js, and MySQL.",
    responsibilities: [
      "Engineered high-performance full-stack web applications using React.js for frontend and Node.js for backend services",
      "Architected and deployed Casbin-based authorization framework enforcing granular RBAC/ABAC policies across mission-critical platform modules",
      "Pioneered custom permission middleware layer on React frontend, enabling real-time access control and dynamic component rendering",
      "Designed scalable UI architecture with Redux Toolkit, achieving predictable state management and measurable performance gains",
      "Crafted robust RESTful APIs with Node.js and optimized MySQL schemas for high-traffic production workloads",
      "Drove cross-functional collaboration with backend teams, ensuring seamless API integration and enterprise-grade data security",
    ],
  },
  {
    id: "2",
    company: "QYRA AI Assistance (Mobocheck)",
    role: "React Native Developer",
    period: "2025 — 2026",
    description: "Led end-to-end mobile development for innovative AI-powered cross-platform application.",
    responsibilities: [
      "Orchestrated React Native development for iOS and Android, overseeing architecture design through production deployment",
      "Maximized runtime performance by strategically implementing React.memo, useMemo, and useCallback, eliminating unnecessary re-renders",
      "Implemented sophisticated API-driven state management using advanced React hooks for seamless real-time data synchronization",
      "Integrated AI-powered capabilities through RESTful APIs with comprehensive error handling and intelligent loading states",
      "Partnered with backend engineering teams to align API contracts and deliver fluid real-time user experiences",
    ],
  },
  {
    id: "3",
    company: "Event Management System (University Project)",
    role: "Full Stack Developer",
    period: "2024 — 2025",
    description: "Independently developed comprehensive full-stack platform for streamlined event operations.",
    responsibilities: [
      "Built feature-rich event management system with intuitive event creation and participant registration workflows",
      "Developed scalable REST API architecture and normalized MySQL database schema from ground up",
      "Delivered responsive, type-safe frontend using React.js with TypeScript for enhanced code reliability",
      "Owned complete SDLC from requirements gathering through successful production deployment",
    ],
  },
  {
    id: "4",
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
  }
];
export const personalInfo = {
  name: "Muhammad Zohaib",
  role: "Full Stack Developer",
  bio: "Software developer with 1+ year of hands-on experience building modern web and mobile applications. Focused on writing clean, maintainable code and creating intuitive user interfaces. Experienced in the React ecosystem including React, Next.js, React Native, along with backend development using Node.js. Passionate about delivering scalable and user-friendly solutions..",
  email: "mzohaibbhatti604@gmail.com",
  github: "https://github.com/M-zohaib-developer",
  linkedin: "https://www.linkedin.com/in/muhammad-zohaib-1a6972234/",
  location: "Lahore, Pakistan",
};
