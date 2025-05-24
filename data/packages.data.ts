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
  installCommand?: string;
}

const packages: Package[] = [
  {
    name: 'nodetsp',
    description: 'A cli for creating typescript project which uses nodejs as runtime with configured by default ',
    longDescription:
      'This cli creates a ts project with a pre-defined structure with some options on project structure and some config setupe by default like prettier ,eslint etc',
    githubUrl: 'https://github.com/devharshthakur/nodetsp',
    npmUrl: 'https://www.npmjs.com/package/nodetsp',
    downloads: '2',
    version: '1.2.0',
    tags: ['React', 'UI Component', 'Data Table', 'TypeScript'],
    publishedDate: '2023-10-15',
    lastUpdated: '2023-12-08',
    installCommand: 'pnpm create nodetsp',
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
