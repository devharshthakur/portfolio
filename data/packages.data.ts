interface Package {
  name: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  npmUrl: string;
  downloads?: string;
  version?: string;
  tags?: string[];
}

const packages: Package[] = [
  {
    name: "ht-create-tsapp",
    description: "A cli for creating typescript projects running via nodejs ",
    longDescription:
      "This cli creates a ts project with a pre-defined structure with some options on project structure",
    githubUrl: "https://github.com/devharshthakur/ht-create-tsapp.git",
    npmUrl: "https://www.npmjs.com/package/ht-create-tsapp",
    downloads: "0",
    version: "1.2.0",
    tags: ["React", "UI Component", "Data Table", "TypeScript"],
  },
  {
    name: "trycatch-lib",
    description:
      "A zero-dependency TypeScript utility for tuple-based error handling.",
    longDescription:
      "Simplifies synchronous and asynchronous error handling in JavaScript/TypeScript by replacing try...catch blocks with a consistent [error, result] tuple pattern, resulting in cleaner and more predictable code.",
    githubUrl: "https://github.com/devharshthakur/trycatch-lib.git",
    npmUrl: "https://www.npmjs.com/package/trycatch-lib",
    downloads: "0",
    version: "0.1.0-alpha.1",
    tags: ["TypeScript", "Error Handling", "Async/Await", "Utility", "Promise"],
  },
];

export default packages;
