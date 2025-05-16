/**
 * Packages Data
 *
 * Contains information about npm packages published by the author, including:
 * - Package name, version, and description
 * - GitHub and npm links
 * - Download statistics
 * - Technology tags
 */

export interface Package {
  name: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  npmUrl: string;
  downloads?: string;
  version?: string;
  tags?: string[];
  publishedDate?: string;
  lastUpdated?: string;
  installCommand?: string; // Custom installation command
}

const packages: Package[] = [
  {
    name: 'ht-create-tsapp',
    description: 'A cli for creating typescript projects running via nodejs',
    longDescription:
      'This cli creates a ts project with a pre-defined structure with some options on project structure. It helps developers quickly bootstrap TypeScript applications with best practices built-in.',
    githubUrl: 'https://github.com/devharshthakur/ht-create-tsapp.git',
    npmUrl: 'https://www.npmjs.com/package/ht-create-tsapp',
    downloads: '2',
    version: '1.2.0',
    tags: ['CLI', 'TypeScript', 'Node.js', 'Boilerplate', 'Scaffold'],
    publishedDate: '2023-10-15',
    lastUpdated: '2023-12-08',
    installCommand: 'npx ht-create-tsapp',
  },
  {
    name: 'trycatch-lib',
    description: 'A zero-dependency TypeScript utility for tuple-based error handling.',
    longDescription:
      'Simplifies synchronous and asynchronous error handling in JavaScript/TypeScript by replacing try...catch blocks with a consistent [result,error] tuple pattern, resulting in cleaner and more predictable code. Designed with type-safety as a primary concern.',
    githubUrl: 'https://github.com/devharshthakur/trycatch-lib.git',
    npmUrl: 'https://www.npmjs.com/package/trycatch-lib',
    downloads: '240',
    version: '0.1.0-alpha.2.1',
    tags: ['TypeScript', 'Error Handling', 'Async/Await', 'Utility', 'Promise'],
    publishedDate: '2023-08-27',
    lastUpdated: '2023-11-19',
  },
];

export default packages;
