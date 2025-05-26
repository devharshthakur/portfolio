/**
 * Skills Data
 *
 * Comprehensive collection of professional skills with metadata including:
 * - Skill identifiers, names, and descriptions
 * - Categorization and proficiency levels
 * - Experience metrics and learning status
 * - Visual identifiers (icons, colors, and thumbnails)
 * - Related project references
 *
 * This data drives the skills page, providing a structured representation
 * of technical abilities that can be filtered, sorted, and displayed.
 */
import { IconType } from 'react-icons';
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
  SiRust,
  SiNestjs,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { GiPolarBear } from 'react-icons/gi';

/**
 * Skill Interface
 * Defines the structure for each skill entry
 */
export interface Skill {
  id: string;
  name: string;
  description: string;
  shortDescription?: string; 
  category: SkillCategory; 
  icon: IconType;
  officialUrl: string;
  featured: boolean;
  relatedProjects?: string[];
  color: {
    light: string;
    dark: string;
  };
  learningStatus?: 'learning' | 'basics' | 'plan to learn' | null;
  relatedCategories?: SkillCategory[]; // Optional related categories for filtering
}

/**
 * Skill Categories
 * Defines all possible skill categories
 */
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'testing' | 'languages';

/**
 * Category Metadata
 * Provides display names and descriptions for each category
 */
export const skillCategories: Record<SkillCategory, { name: string; description: string }> = {
  frontend: {
    name: 'Frontend Development',
    description: 'Technologies for building user interfaces and client-side applications',
  },
  backend: {
    name: 'Backend Development',
    description: 'Server-side technologies powering application logic and APIs',
  },
  database: {
    name: 'Database Technologies',
    description: 'Solutions for data storage, retrieval, and management',
  },
  devops: {
    name: 'DevOps & Deployment',
    description: 'Tools and platforms for continuous integration, deployment, and operations',
  },
  design: {
    name: 'Design & UI/UX',
    description: 'Tools and frameworks for creating beautiful user experiences',
  },
  testing: {
    name: 'Testing & Quality Assurance',
    description: 'Technologies for ensuring application quality and reliability',
  },
  languages: {
    name: 'Programming Languages',
    description: "Core programming languages I'm learning and using",
  },
};

/**
 * Category Badge Colors
 * Colors for category badges
 */
export const categoryBadgeColors: Record<SkillCategory, string> = {
  frontend: 'border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300',
  backend: 'border-green-200 dark:border-green-700 text-green-700 dark:text-green-300',
  database: 'border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300',
  devops: 'border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300',
  design: 'border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300',
  testing: 'border-red-200 dark:border-red-700 text-red-700 dark:text-red-300',
  languages: 'border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300',
};

/**
 * Skills Collection
 * The complete list of skills with all metadata
 */
const skills: Skill[] = [
  // Frontend skills
  {
    id: 'react',
    name: 'React',
    description:
      'A JavaScript library for building user interfaces with a component-based architecture that enables the creation of interactive UIs with efficient updates.',
    shortDescription:
      'A JavaScript library for building dynamic user interfaces with reusable components, virtual DOM, and unidirectional data flow.',
    category: 'frontend',
    icon: SiReact,
    officialUrl: 'https://reactjs.org/',
    featured: true,
    relatedProjects: ['portfolio', 'e-commerce-app'],
    color: {
      light: 'text-blue-600',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description:
      'A React framework that enables server-side rendering, static site generation, and other advanced features with minimal configuration.',
    shortDescription: 'React framework with server-side rendering, static site generation, and file-based routing for production-ready applications.',
    category: 'frontend',
    icon: SiNextdotjs,
    officialUrl: 'https://nextjs.org/',
    featured: true,
    relatedProjects: ['portfolio', 'blog-platform'],
    color: {
      light: 'text-slate-800',
      dark: 'text-slate-200',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description:
      'A strongly typed programming language that builds on JavaScript, providing better tooling at any scale and enhancing code quality and understandability.',
    shortDescription: 'Strongly typed superset of JavaScript adding static types, interfaces, and advanced type checking for robust applications.',
    category: 'languages',
    icon: SiTypescript,
    officialUrl: 'https://www.typescriptlang.org/',
    featured: true,
    relatedProjects: ['portfolio', 'task-manager'],
    color: {
      light: 'text-blue-700',
      dark: 'text-blue-400',
    },
    relatedCategories: ['frontend'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description:
      'A versatile programming language that conforms to the ECMAScript specification, enabling interactive web pages and being an essential part of web applications.',
    shortDescription: 'Core web programming language powering dynamic websites and applications across browsers with event-driven programming model.',
    category: 'frontend',
    icon: SiJavascript,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    featured: true,
    relatedProjects: ['weather-app', 'calculator'],
    color: {
      light: 'text-yellow-600',
      dark: 'text-yellow-400',
    },
    relatedCategories: ['languages'],
  },
  {
    id: 'html',
    name: 'HTML5',
    description: 'The standard markup language for documents designed to be displayed in a web browser, forming the foundation of web content.',
    shortDescription:
      'Standard markup language for web pages, providing semantic structure, embedded media support, and canvas for interactive graphics.',
    category: 'frontend',
    icon: SiHtml5,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    featured: false,
    color: {
      light: 'text-orange-600',
      dark: 'text-orange-400',
    },
  },
  {
    id: 'css',
    name: 'CSS3',
    description:
      'A style sheet language used for describing the presentation of a document written in HTML, allowing for responsive and attractive designs.',
    shortDescription: 'Styling language for web content with features like flexbox, grid, animations, and responsive design capabilities.',
    category: 'frontend',
    icon: SiCss3,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    featured: false,
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework that allows for rapidly building custom designs directly in your markup without leaving HTML.',
    shortDescription: 'Utility-first CSS framework enabling rapid UI development with composable classes and minimal CSS overhead.',
    category: 'frontend',
    icon: SiTailwindcss,
    officialUrl: 'https://tailwindcss.com/',
    featured: true,
    relatedProjects: ['portfolio', 'dashboard-ui'],
    color: {
      light: 'text-teal-500',
      dark: 'text-teal-400',
    },
  },
  {
    id: 'zustand',
    name: 'Zustand',
    description: 'A small, fast and scalable state-management solution for React, utilizing simplified flux principles with minimal boilerplate.',
    shortDescription: 'Minimalist state management for React with hooks-based API, built on flux principles with minimal boilerplate.',
    category: 'frontend',
    icon: GiPolarBear,
    officialUrl: 'https://github.com/pmndrs/zustand',
    featured: false,
    color: {
      light: 'text-amber-600',
      dark: 'text-amber-400',
    },
    learningStatus: 'learning',
  },

  // Backend skills
  {
    id: 'nodejs',
    name: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine that allows for executing JavaScript code server-side.",
    shortDescription: 'Server-side JavaScript runtime enabling non-blocking I/O operations for fast, scalable network applications.',
    category: 'backend',
    icon: SiNodedotjs,
    officialUrl: 'https://nodejs.org/',
    featured: true,
    relatedProjects: ['api-service', 'real-time-chat'],
    color: {
      light: 'text-green-600',
      dark: 'text-green-400',
    },
  },
  {
    id: 'express',
    name: 'Express.js',
    description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    shortDescription: 'Fast, minimalist web framework for Node.js with middleware system for building APIs and web applications.',
    category: 'backend',
    icon: SiExpress,
    officialUrl: 'https://expressjs.com/',
    featured: false,
    color: {
      light: 'text-gray-600',
      dark: 'text-gray-400',
    },
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    description:
      'A query language for APIs and a runtime for executing those queries with your existing data, providing a more efficient alternative to REST.',
    shortDescription: 'Query language and runtime for APIs enabling clients to request exactly the data they need, reducing network overhead.',
    category: 'backend',
    icon: SiGraphql,
    officialUrl: 'https://graphql.org/',
    featured: false,
    color: {
      light: 'text-pink-600',
      dark: 'text-pink-400',
    },
    learningStatus: 'plan to learn',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.',
    shortDescription: 'TypeScript-first Node.js framework for scalable and maintainable server-side applications.',
    category: 'backend',
    icon: SiNestjs,
    officialUrl: 'https://nestjs.com/',
    featured: false,
    color: {
      light: 'text-red-600',
      dark: 'text-red-400',
    },
  },

  // Database skills
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'A document-based, distributed NoSQL database designed for modern application developers and for the cloud era.',
    shortDescription: 'Document-oriented NoSQL database with flexible schema design and powerful query capabilities.',
    category: 'database',
    icon: SiMongodb,
    officialUrl: 'https://www.mongodb.com/',
    featured: true,
    relatedProjects: ['data-analytics', 'user-management'],
    color: {
      light: 'text-green-700',
      dark: 'text-green-500',
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description:
      'A powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability.',
    shortDescription: 'Advanced open-source relational database with strong reliability, extensibility, and SQL compliance.',
    category: 'database',
    icon: SiPostgresql,
    officialUrl: 'https://www.postgresql.org/',
    featured: false,
    color: {
      light: 'text-blue-700',
      dark: 'text-blue-500',
    },
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description:
      'Next-generation ORM for Node.js and TypeScript that helps developers build faster and make fewer errors with an intuitive data model and automated migrations.',
    shortDescription: 'Modern TypeScript ORM with type-safe database access, schema management, and migration tools.',
    category: 'database',
    icon: SiPrisma,
    officialUrl: 'https://www.prisma.io/',
    featured: true,
    color: {
      light: 'text-indigo-600',
      dark: 'text-indigo-400',
    },
  },

  // DevOps skills
  {
    id: 'git',
    name: 'Git',
    description:
      'A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    shortDescription: 'Distributed version control system for tracking code changes with branching, merging, and collaboration features.',
    category: 'devops',
    icon: SiGit,
    officialUrl: 'https://git-scm.com/',
    featured: false,
    color: {
      light: 'text-orange-600',
      dark: 'text-orange-400',
    },
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'A code hosting platform for version control and collaboration, allowing developers to work together on projects from anywhere.',
    shortDescription: 'Web-based platform for Git repositories with project management tools, CI/CD pipelines, and code review workflows.',
    category: 'devops',
    icon: SiGithub,
    officialUrl: 'https://github.com/',
    featured: false,
    color: {
      light: 'text-slate-800',
      dark: 'text-slate-200',
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    description:
      'A platform that enables developers to build, package, and run applications in lightweight, portable containers that can run anywhere.',
    shortDescription: 'Containerization platform for packaging applications with dependencies for consistent deployment across environments.',
    category: 'devops',
    icon: SiDocker,
    officialUrl: 'https://www.docker.com/',
    featured: false,
    color: {
      light: 'text-blue-600',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description:
      'A deployment and collaboration platform for frontend developers, providing the ideal workflow to develop, preview, and ship websites.',
    shortDescription: 'Frontend deployment platform with preview deployments, serverless functions, and global CDN distribution.',
    category: 'devops',
    icon: SiVercel,
    officialUrl: 'https://vercel.com/',
    featured: true,
    relatedProjects: ['portfolio', 'landing-page'],
    color: {
      light: 'text-slate-900',
      dark: 'text-slate-100',
    },
  },
  {
    id: 'aws',
    name: 'AWS',
    description: 'A comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.',
    shortDescription: 'Comprehensive cloud computing platform with services for computing, storage, databases, networking, and more.',
    category: 'devops',
    icon: FaAws,
    officialUrl: 'https://aws.amazon.com/',
    featured: false,
    color: {
      light: 'text-orange-500',
      dark: 'text-orange-400',
    },
    learningStatus: 'basics',
  },

  // Design skills
  {
    id: 'figma',
    name: 'Figma',
    description: 'A collaborative interface design tool that enables teams to design, prototype, and gather feedback in one place.',
    shortDescription: 'Browser-based design tool for UI/UX with real-time collaboration, prototyping, and component libraries.',
    category: 'design',
    icon: SiFigma,
    officialUrl: 'https://www.figma.com/',
    featured: true,
    color: {
      light: 'text-purple-500',
      dark: 'text-purple-400',
    },
    learningStatus: 'plan to learn',
  },

  // Testing skills
  {
    id: 'vitest',
    name: 'Vitest',
    description: 'A blazing fast unit test framework powered by Vite with first-class ESM, TypeScript, and JSX support.',
    shortDescription: 'Fast testing framework for Vite projects with ESM, TypeScript and JSX support out of the box.',
    category: 'testing',
    icon: SiVitest,
    officialUrl: 'https://vitest.dev/',
    featured: false,
    color: {
      light: 'text-green-600',
      dark: 'text-green-400',
    },
    learningStatus: 'learning',
  },

  // Programming languages
  {
    id: 'golang',
    name: 'Go (Golang)',
    description: 'An open source programming language supported by Google that makes it easy to build simple, reliable, and efficient software.',
    shortDescription: 'Statically typed, compiled language designed for simplicity, efficiency, and strong concurrency support.',
    category: 'languages',
    icon: SiGo,
    officialUrl: 'https://golang.org/',
    featured: true,
    color: {
      light: 'text-sky-600',
      dark: 'text-sky-400',
    },
    learningStatus: 'plan to learn',
  },
  {
    id: 'c-lang',
    name: 'C',
    description:
      'A general-purpose programming language that provides low-level memory access, simple set of keywords, and clean style, making it ideal for system programming.',
    shortDescription:
      'Low-level language with manual memory management, often used for system/embedded software and performance-critical applications.',
    category: 'languages',
    icon: SiC,
    officialUrl: 'https://en.cppreference.com/w/c',
    featured: false,
    color: {
      light: 'text-blue-600',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'java-lang',
    name: 'Java',
    description:
      "A class-based, object-oriented programming language designed for having fewer implementation dependencies, following the 'write once, run anywhere' approach.",
    shortDescription: 'Object-oriented language with strong typing, platform independence, and a rich ecosystem of libraries and frameworks.',
    category: 'languages',
    icon: FaJava,
    officialUrl: 'https://www.oracle.com/java/',
    featured: false,
    color: {
      light: 'text-red-600',
      dark: 'text-red-400',
    },
  },
  {
    id: 'python-lang',
    name: 'Python',
    description:
      'An interpreted, high-level programming language with dynamic semantics, focused on readability and simplicity, making it excellent for beginners and experts alike.',
    shortDescription:
      'Versatile, high-level language with clear syntax, ideal for data science, web development, automation, and AI/ML applications.',
    category: 'languages',
    icon: SiPython,
    officialUrl: 'https://www.python.org/',
    featured: false,
    color: {
      light: 'text-green-600',
      dark: 'text-green-400',
    },
    learningStatus: 'basics',
  },
  {
    id: 'rust-lang',
    name: 'Rust',
    description:
      'A systems programming language focused on safety, speed, and concurrency. Rust provides memory safety guarantees without using garbage collection.',
    shortDescription:
      'Modern systems language with memory safety without garbage collection, zero-cost abstractions, and powerful concurrency features.',
    category: 'languages',
    icon: SiRust,
    officialUrl: 'https://www.rust-lang.org/',
    featured: false,
    color: {
      light: 'text-orange-600',
      dark: 'text-orange-400',
    },
    learningStatus: 'learning',
  },
];

export default skills;
