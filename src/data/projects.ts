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
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product management, cart functionality, Stripe payment integration, and order tracking. Built with responsive design and optimized for performance.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Role-based dashboard with real-time data visualization, authentication system, API integration, and responsive UI. Implemented chart components and data filtering capabilities.",
    techStack: ["React", "TypeScript", "Recharts", "REST API", "Tailwind CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop functionality, team workspaces, real-time updates, and notification system. Designed for team productivity.",
    techStack: ["React", "Firebase", "Redux", "WebSocket", "Material UI"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Content Management API",
    description: "RESTful API service for content management with authentication, file upload handling, caching layer, and comprehensive documentation. Built with scalability in mind.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    image: "/placeholder.svg",
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
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Vercel" },
      { name: "AWS" },
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
    company: "Tech Company",
    role: "Senior Frontend Developer",
    period: "2022 — Present",
    description: "Leading frontend development for enterprise applications.",
    responsibilities: [
      "Architected and implemented component library used across multiple products",
      "Reduced bundle size by 40% through code splitting and optimization",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with design team to improve UX consistency",
    ],
  },
  {
    id: "2",
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "2020 — 2022",
    description: "Built and maintained web applications from ground up.",
    responsibilities: [
      "Developed customer-facing dashboard with real-time data visualization",
      "Implemented REST API endpoints and database schema design",
      "Integrated third-party services including payment and analytics",
      "Participated in agile development cycles and sprint planning",
    ],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 — 2020",
    description: "Created responsive web applications for various clients.",
    responsibilities: [
      "Built responsive websites and web applications for diverse clients",
      "Collaborated with designers to translate mockups into functional interfaces",
      "Optimized website performance and accessibility compliance",
      "Maintained and updated existing client projects",
    ],
  },
];

export const personalInfo = {
  name: "Alex Johnson",
  role: "Full Stack Developer",
  bio: "Software developer with 6+ years of experience building web applications. Focused on creating efficient, maintainable code and intuitive user interfaces. Experienced in both frontend and backend development with a preference for React ecosystem and Node.js.",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "San Francisco, CA",
};
