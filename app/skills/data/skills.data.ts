/**
 * Skills Data
 *
 * Comprehensive collection of professional skills with metadata including:
 * - Skill identifiers, names, and descriptions
 * - Categorization and proficiency levels
 * - Experience metrics and learning status
 * - Visual identifiers (icons and colors)
 * - Related project references
 *
 * This data drives the skills page, providing a structured representation
 * of technical abilities that can be filtered, sorted, and displayed.
 */
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiGraphql,
  SiPrisma,
  SiFigma,
  SiVitest,
  SiGo,
  SiPython,
  SiC,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { GiPolarBear } from "react-icons/gi";

/**
 * Skill Interface
 * Defines the structure for each skill entry
 */
export interface Skill {
  id: string;
  name: string;
  description: string;
  categories: SkillCategory[];
  proficiencyLevel: number; // 1-5
  icon: IconType;
  officialUrl: string;
  featured: boolean;
  yearsExperience: number;
  relatedProjects?: string[];
  color: {
    light: string;
    dark: string;
  };
  learningStatus?: "learning" | "basics" | null;
}

/**
 * Skill Categories
 * Defines all possible skill categories
 */
export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "design"
  | "testing"
  | "languages";

/**
 * Category Metadata
 * Provides display names and descriptions for each category
 */
export const skillCategories: Record<
  SkillCategory,
  { name: string; description: string }
> = {
  frontend: {
    name: "Frontend Development",
    description:
      "Technologies for building user interfaces and client-side applications",
  },
  backend: {
    name: "Backend Development",
    description: "Server-side technologies powering application logic and APIs",
  },
  database: {
    name: "Database Technologies",
    description: "Solutions for data storage, retrieval, and management",
  },
  devops: {
    name: "DevOps & Deployment",
    description:
      "Tools and platforms for continuous integration, deployment, and operations",
  },
  design: {
    name: "Design & UI/UX",
    description: "Tools and frameworks for creating beautiful user experiences",
  },
  testing: {
    name: "Testing & Quality Assurance",
    description:
      "Technologies for ensuring application quality and reliability",
  },
  languages: {
    name: "Programming Languages",
    description: "Core programming languages I'm learning and using",
  },
};

/**
 * Skills Collection
 * The complete list of skills with all metadata
 */
const skills: Skill[] = [
  // Frontend skills
  {
    id: "react",
    name: "React",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture that enables the creation of interactive UIs with efficient updates.",
    categories: ["frontend"],
    proficiencyLevel: 5,
    icon: SiReact,
    officialUrl: "https://reactjs.org/",
    featured: true,
    yearsExperience: 3,
    relatedProjects: ["portfolio", "e-commerce-app"],
    color: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "A React framework that enables server-side rendering, static site generation, and other advanced features with minimal configuration.",
    categories: ["frontend"],
    proficiencyLevel: 4,
    icon: SiNextdotjs,
    officialUrl: "https://nextjs.org/",
    featured: true,
    yearsExperience: 2,
    relatedProjects: ["portfolio", "blog-platform"],
    color: {
      light: "text-slate-800",
      dark: "text-slate-200",
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript, providing better tooling at any scale and enhancing code quality and understandability.",
    categories: ["frontend", "languages"],
    proficiencyLevel: 4,
    icon: SiTypescript,
    officialUrl: "https://www.typescriptlang.org/",
    featured: true,
    yearsExperience: 2,
    relatedProjects: ["portfolio", "task-manager"],
    color: {
      light: "text-blue-700",
      dark: "text-blue-400",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "A versatile programming language that conforms to the ECMAScript specification, enabling interactive web pages and being an essential part of web applications.",
    categories: ["frontend", "languages"],
    proficiencyLevel: 5,
    icon: SiJavascript,
    officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    featured: true,
    yearsExperience: 4,
    relatedProjects: ["weather-app", "calculator"],
    color: {
      light: "text-yellow-600",
      dark: "text-yellow-400",
    },
  },
  {
    id: "html",
    name: "HTML5",
    description:
      "The standard markup language for documents designed to be displayed in a web browser, forming the foundation of web content.",
    categories: ["frontend"],
    proficiencyLevel: 5,
    icon: SiHtml5,
    officialUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    featured: false,
    yearsExperience: 5,
    color: {
      light: "text-orange-600",
      dark: "text-orange-400",
    },
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "A style sheet language used for describing the presentation of a document written in HTML, allowing for responsive and attractive designs.",
    categories: ["frontend"],
    proficiencyLevel: 5,
    icon: SiCss3,
    officialUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    featured: false,
    yearsExperience: 5,
    color: {
      light: "text-blue-500",
      dark: "text-blue-400",
    },
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework that allows for rapidly building custom designs directly in your markup without leaving HTML.",
    categories: ["frontend"],
    proficiencyLevel: 3,
    icon: SiTailwindcss,
    officialUrl: "https://tailwindcss.com/",
    featured: true,
    yearsExperience: 2,
    relatedProjects: ["portfolio", "dashboard-ui"],
    color: {
      light: "text-teal-500",
      dark: "text-teal-400",
    },
  },
  {
    id: "zustand",
    name: "Zustand",
    description:
      "A small, fast and scalable state-management solution for React, utilizing simplified flux principles with minimal boilerplate.",
    categories: ["frontend"],
    proficiencyLevel: 1,
    icon: GiPolarBear,
    officialUrl: "https://github.com/pmndrs/zustand",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-amber-600",
      dark: "text-amber-400",
    },
    learningStatus: "learning",
  },

  // Backend skills
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine that allows for executing JavaScript code server-side.",
    categories: ["backend"],
    proficiencyLevel: 3,
    icon: SiNodedotjs,
    officialUrl: "https://nodejs.org/",
    featured: true,
    yearsExperience: 3,
    relatedProjects: ["api-service", "real-time-chat"],
    color: {
      light: "text-green-600",
      dark: "text-green-400",
    },
  },
  {
    id: "express",
    name: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    categories: ["backend"],
    proficiencyLevel: 3,
    icon: SiExpress,
    officialUrl: "https://expressjs.com/",
    featured: false,
    yearsExperience: 3,
    color: {
      light: "text-gray-600",
      dark: "text-gray-400",
    },
  },
  {
    id: "graphql",
    name: "GraphQL",
    description:
      "A query language for APIs and a runtime for executing those queries with your existing data, providing a more efficient alternative to REST.",
    categories: ["backend"],
    proficiencyLevel: 0,
    icon: SiGraphql,
    officialUrl: "https://graphql.org/",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-pink-600",
      dark: "text-pink-400",
    },
    learningStatus: "learning",
  },

  // Database skills
  {
    id: "mongodb",
    name: "MongoDB",
    description:
      "A document-based, distributed NoSQL database designed for modern application developers and for the cloud era.",
    categories: ["database"],
    proficiencyLevel: 3,
    icon: SiMongodb,
    officialUrl: "https://www.mongodb.com/",
    featured: true,
    yearsExperience: 3,
    relatedProjects: ["data-analytics", "user-management"],
    color: {
      light: "text-green-700",
      dark: "text-green-500",
    },
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "A powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability.",
    categories: ["database"],
    proficiencyLevel: 3,
    icon: SiPostgresql,
    officialUrl: "https://www.postgresql.org/",
    featured: false,
    yearsExperience: 2,
    color: {
      light: "text-blue-700",
      dark: "text-blue-500",
    },
  },
  {
    id: "prisma",
    name: "Prisma",
    description:
      "Next-generation ORM for Node.js and TypeScript that helps developers build faster and make fewer errors with an intuitive data model and automated migrations.",
    categories: ["database"],
    proficiencyLevel: 3,
    icon: SiPrisma,
    officialUrl: "https://www.prisma.io/",
    featured: true,
    yearsExperience: 1,
    color: {
      light: "text-indigo-600",
      dark: "text-indigo-400",
    },
  },

  // DevOps skills
  {
    id: "git",
    name: "Git",
    description:
      "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    categories: ["devops"],
    proficiencyLevel: 4,
    icon: SiGit,
    officialUrl: "https://git-scm.com/",
    featured: false,
    yearsExperience: 4,
    color: {
      light: "text-orange-600",
      dark: "text-orange-400",
    },
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "A code hosting platform for version control and collaboration, allowing developers to work together on projects from anywhere.",
    categories: ["devops"],
    proficiencyLevel: 5,
    icon: SiGithub,
    officialUrl: "https://github.com/",
    featured: false,
    yearsExperience: 4,
    color: {
      light: "text-slate-800",
      dark: "text-slate-200",
    },
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "A platform that enables developers to build, package, and run applications in lightweight, portable containers that can run anywhere.",
    categories: ["devops"],
    proficiencyLevel: 3,
    icon: SiDocker,
    officialUrl: "https://www.docker.com/",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    description:
      "A deployment and collaboration platform for frontend developers, providing the ideal workflow to develop, preview, and ship websites.",
    categories: ["devops"],
    proficiencyLevel: 4,
    icon: SiVercel,
    officialUrl: "https://vercel.com/",
    featured: true,
    yearsExperience: 2,
    relatedProjects: ["portfolio", "landing-page"],
    color: {
      light: "text-slate-900",
      dark: "text-slate-100",
    },
  },
  {
    id: "aws",
    name: "AWS",
    description:
      "A comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.",
    categories: ["devops"],
    proficiencyLevel: 0,
    icon: FaAws,
    officialUrl: "https://aws.amazon.com/",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-orange-500",
      dark: "text-orange-400",
    },
    learningStatus: "basics",
  },

  // Design skills
  {
    id: "figma",
    name: "Figma",
    description:
      "A collaborative interface design tool that enables teams to design, prototype, and gather feedback in one place.",
    categories: ["design"],
    proficiencyLevel: 3,
    icon: SiFigma,
    officialUrl: "https://www.figma.com/",
    featured: true,
    yearsExperience: 1,
    color: {
      light: "text-purple-500",
      dark: "text-purple-400",
    },
    learningStatus: "learning",
  },

  // Testing skills
  {
    id: "vitest",
    name: "Vitest",
    description:
      "A blazing fast unit test framework powered by Vite with first-class ESM, TypeScript, and JSX support.",
    categories: ["testing"],
    proficiencyLevel: 2,
    icon: SiVitest,
    officialUrl: "https://vitest.dev/",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-green-600",
      dark: "text-green-400",
    },
    learningStatus: "learning",
  },

  // Programming languages
  {
    id: "golang",
    name: "Go (Golang)",
    description:
      "An open source programming language supported by Google that makes it easy to build simple, reliable, and efficient software.",
    categories: ["languages"],
    proficiencyLevel: 2,
    icon: SiGo,
    officialUrl: "https://golang.org/",
    featured: true,
    yearsExperience: 0,
    color: {
      light: "text-sky-600",
      dark: "text-sky-400",
    },
    learningStatus: "learning",
  },
  {
    id: "c-lang",
    name: "C",
    description:
      "A general-purpose programming language that provides low-level memory access, simple set of keywords, and clean style, making it ideal for system programming.",
    categories: ["languages"],
    proficiencyLevel: 3,
    icon: SiC,
    officialUrl: "https://en.cppreference.com/w/c",
    featured: false,
    yearsExperience: 2,
    color: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: "java-lang",
    name: "Java",
    description:
      "A class-based, object-oriented programming language designed for having fewer implementation dependencies, following the 'write once, run anywhere' approach.",
    categories: ["languages"],
    proficiencyLevel: 3,
    icon: FaJava,
    officialUrl: "https://www.oracle.com/java/",
    featured: false,
    yearsExperience: 2,
    color: {
      light: "text-red-600",
      dark: "text-red-400",
    },
  },
  {
    id: "python-lang",
    name: "Python",
    description:
      "An interpreted, high-level programming language with dynamic semantics, focused on readability and simplicity, making it excellent for beginners and experts alike.",
    categories: ["languages"],
    proficiencyLevel: 2,
    icon: SiPython,
    officialUrl: "https://www.python.org/",
    featured: false,
    yearsExperience: 1,
    color: {
      light: "text-green-600",
      dark: "text-green-400",
    },
    learningStatus: "basics",
  },
];

export default skills;
