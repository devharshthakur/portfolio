export interface Project {
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  date: string;
  duration: string;
  tags: string[];
  isInDevelopment?: boolean;
}

const projects: Project[] = [
  {
    title: "Secure pass",
    description:
      "It encrypts then stores the data, it has search features using keys",
    longDescription:
      "A secure password manager that uses encryption to protect sensitive data. Features include password storage, search functionality, and secure encryption.",
    githubUrl: "https://github.com/devharshthakur/secure-pass.git",
    liveDemoUrl: "local",
    date: "2024-03",
    duration: "1 week",
    tags: ["Next.js", "TypeScript", "Encryption", "Security"],
  },
  {
    title: "NPM Package Checker",
    description:
      "A sleek, lightning-fast utility to check if an npm package name is available.",
    longDescription:
      "NPM Package Checker provides an elegant, intuitive interface to instantly verify if a package name is already taken on the npm registry. No more guessing or manual searching!",
    githubUrl: "https://github.com/devharshthakur/ispub.git",
    liveDemoUrl: "https://ispub.fun",
    date: "2024-02",
    duration: "3 weeks",
    tags: ["Next.js", "TypeScript", "npm", "Package Checker"],
    imageUrl:
      "https://upf2833czf.ufs.sh/f/5esi0CuHtzvb13Dt3MdlX0ewzUr8IgHD534qfWcJTGjdv7Ap",
  },
  {
    title: "Legal AI PDF",
    description: "An AI based Legal Assistant (FINAL YEAR MAJOR PROJECT)",
    longDescription:
      "A comprehensive AI-driven legal assistant designed to streamline legal document processing and provide intelligent insights.",
    githubUrl: "https://github.com/Anuragc123/LegalPDF.git",
    liveDemoUrl: "#",
    date: "2024-04",
    duration: "6 months",
    tags: ["AI", "Legal Tech", "Machine Learning"],
    isInDevelopment: true,
  },
  {
    title: "BlockPredict",
    description: "A Simple ML based prediction simulation using BlockChain",
    longDescription:
      "An innovative tool that simulates the prediction done by ML models using blockchain for weight management.",
    githubUrl: "https://github.com/devharshthakur/blockpredict.git",
    liveDemoUrl: "local",
    date: "2024-05",
    duration: "1 month",
    tags: ["Machine Learning", "Blockchain", "Simulation"],
  },
  {
    title: "Orrbit",
    description:
      "A modern web-based PDF compression tool with secure client-side processing",
    longDescription:
      "A full-stack web application that enables users to compress PDF files efficiently without compromising quality, featuring real-time compression progress and secure file handling where files never leave the user's device.",
    githubUrl: "https://github.com/devharshthakur/orrbit.git",
    liveDemoUrl: "local",
    date: "2024-03",
    duration: "2 months",
    tags: ["Next.js", "NestJS", "TypeScript", "PDF Processing", "Prisma"],
  },
];

export default projects;
