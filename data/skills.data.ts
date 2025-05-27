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
  SiC,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
} from 'react-icons/si';

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
    id: 'css',
    name: 'CSS',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.',
    category: 'frontend',
    icon: SiCss3,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    featured: true,
    color: {
      light: 'text-blue-600',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
    category: 'frontend',
    icon: SiJavascript,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    featured: true,
    color: {
      light: 'text-yellow-500',
      dark: 'text-yellow-400',
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    category: 'frontend',
    icon: SiTailwindcss,
    officialUrl: 'https://tailwindcss.com/',
    featured: true,
    color: {
      light: 'text-teal-500',
      dark: 'text-teal-400',
    },
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'A React framework for building server-rendered or static websites and web applications.',
    category: 'frontend',
    icon: SiNextdotjs,
    officialUrl: 'https://nextjs.org/',
    featured: true,
    color: {
      light: 'text-pink-500',
      dark: 'text-pink-400',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.',
    category: 'frontend',
    icon: SiTypescript,
    officialUrl: 'https://www.typescriptlang.org/',
    featured: true,
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description: 'Prisma is an open-source database toolkit that makes databases easy.',
    category: 'backend',
    icon: SiPrisma,
    officialUrl: 'https://www.prisma.io/',
    featured: true,
    color: {
      light: 'text-purple-500',
      dark: 'text-purple-400',
    },
  },
  {
    id: 'nestjs',
    name: 'Nest.js',
    description: 'A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications.',
    category: 'backend',
    icon: SiNestjs,
    officialUrl: 'https://nestjs.com/',
    featured: true,
    color: {
      light: 'text-red-500',
      dark: 'text-red-400',
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    description:
      'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    category: 'devops',
    icon: SiDocker,
    officialUrl: 'https://www.docker.com/',
    featured: true,
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Vercel is a cloud platform for static sites and Serverless functions.',
    category: 'devops',
    icon: SiVercel,
    officialUrl: 'https://vercel.com/',
    featured: true,
    color: {
      light: 'text-black',
      dark: 'text-white',
    },
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    category: 'backend',
    icon: SiGraphql,
    officialUrl: 'https://graphql.org/',
    featured: true,
    learningStatus: 'plan to learn',
    color: {
      light: 'text-pink-500',
      dark: 'text-pink-400',
    },
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Python is an interpreted, high-level, general-purpose programming language.',
    category: 'languages',
    icon: SiPython,
    officialUrl: 'https://www.python.org/',
    featured: true,
    color: {
      light: 'text-yellow-500',
      dark: 'text-yellow-400',
    },
  },
  {
    id: 'go',
    name: 'Go',
    description: 'Go is a statically typed, compiled programming language designed at Google.',
    category: 'languages',
    icon: SiGo,
    officialUrl: 'https://golang.org/',
    featured: true,
    learningStatus: 'plan to learn',
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'rust',
    name: 'Rust',
    description: 'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.',
    category: 'languages',
    icon: SiRust,
    officialUrl: 'https://www.rust-lang.org/',
    featured: true,
    learningStatus: 'learning',
    color: {
      light: 'text-orange-500',
      dark: 'text-orange-400',
    },
  },
  {
    id: 'c',
    name: 'C',
    description:
      'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion.',
    category: 'languages',
    icon: SiC,
    officialUrl: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    featured: true,
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'express',
    name: 'Express',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    category: 'backend',
    icon: SiExpress,
    officialUrl: 'https://expressjs.com/',
    featured: true,
    color: {
      light: 'text-gray-500',
      dark: 'text-gray-400',
    },
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'MongoDB is a source-available cross-platform document-oriented database program.',
    category: 'database',
    icon: SiMongodb,
    officialUrl: 'https://www.mongodb.com/',
    featured: true,
    color: {
      light: 'text-green-500',
      dark: 'text-green-400',
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'PostgreSQL is a powerful, open source object-relational database system.',
    category: 'database',
    icon: SiPostgresql,
    officialUrl: 'https://www.postgresql.org/',
    featured: true,
    color: {
      light: 'text-blue-500',
      dark: 'text-blue-400',
    },
  },
  {
    id: 'git',
    name: 'Git',
    description:
      'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    category: 'devops',
    icon: SiGit,
    officialUrl: 'https://git-scm.com/',
    featured: true,
    color: {
      light: 'text-red-500',
      dark: 'text-red-400',
    },
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'GitHub is a web-based platform for version control and collaboration.',
    category: 'devops',
    icon: SiGithub,
    officialUrl: 'https://github.com/',
    featured: true,
    color: {
      light: 'text-gray-500',
      dark: 'text-gray-400',
    },
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based.',
    category: 'design',
    icon: SiFigma,
    officialUrl: 'https://www.figma.com/',
    featured: true,
    learningStatus: 'learning',
    color: {
      light: 'text-pink-500',
      dark: 'text-pink-400',
    },
  },
  {
    id: 'vitest',
    name: 'Vitest',
    description: 'Vitest is a blazing fast unit test framework powered by Vite.',
    category: 'testing',
    icon: SiVitest,
    officialUrl: 'https://vitest.dev/',
    featured: true,
    color: {
      light: 'text-green-500',
      dark: 'text-green-400',
    },
  },
];

export default skills;
