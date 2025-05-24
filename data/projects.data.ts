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
  version?: string;
  stats?: {
    stars: number;
    forks: number;
    issues: number;
    lastUpdated: string;
  };
}

const projects: Project[] = [
  {
    title: 'Secure pass',
    description: 'It encrypts then stores the data, it has search features using keys',
    longDescription:
      'A secure password manager that uses encryption to protect sensitive data. Features include password storage, search functionality, and secure encryption.',
    githubUrl: 'https://github.com/devharshthakur/secure-pass.git',
    liveDemoUrl: 'local',
    date: '2024-03',
    duration: '1 week',
    tags: ['Next.js', 'TypeScript', 'Encryption', 'Security'],
    version: '1.0.0',
    stats: {
      stars: 12,
      forks: 3,
      issues: 2,
      lastUpdated: '3 days ago',
    },
  },
  {
    title: 'Npm Package Checker',
    description: 'A sleek, lightning-fast utility to check if an npm package name is available.',
    longDescription:
      'NPM Package Checker provides an elegant, intuitive interface to instantly verify if a package name is already taken on the npm registry. No more guessing or manual searching!',
    githubUrl: 'https://github.com/devharshthakur/ispub.git',
    liveDemoUrl: 'https://ispub.fun',
    date: '2024-02',
    duration: '3 weeks',
    tags: ['Next.js', 'TypeScript', 'npm', 'Package Checker'],
    imageUrl: 'https://upf2833czf.ufs.sh/f/5esi0CuHtzvb13Dt3MdlX0ewzUr8IgHD534qfWcJTGjdv7Ap',
    version: '1.2.0',
    stats: {
      stars: 25,
      forks: 5,
      issues: 1,
      lastUpdated: '1 week ago',
    },
  },
  {
    title: 'Legal AI Pdf',
    description: 'An AI based Legal Assistant (Final year major project )',
    longDescription: 'A comprehensive AI-driven legal assistant designed to streamline legal document processing and provide intelligent insights.',
    githubUrl: 'https://github.com/Anuragc123/LegalPDF.git',
    liveDemoUrl: '#',
    date: '2024-04',
    duration: '6 months',
    tags: ['AI', 'Legal Tech', 'Machine Learning'],
    isInDevelopment: true,
    version: '0.9.0',
    stats: {
      stars: 8,
      forks: 2,
      issues: 4,
      lastUpdated: '2 days ago',
    },
  },
  {
    title: 'Blockpredict',
    description: 'A Simple ML based prediction simulation using BlockChain',
    longDescription: 'An innovative tool that simulates the prediction done by ML models using blockchain for weight management.',
    githubUrl: 'https://github.com/devharshthakur/blockpredict.git',
    liveDemoUrl: 'local',
    date: '2024-05',
    duration: '1 month',
    tags: ['Machine Learning', 'Blockchain', 'Simulation'],
    version: '1.0.1',
    stats: {
      stars: 15,
      forks: 4,
      issues: 3,
      lastUpdated: '5 days ago',
    },
  },
];

export default projects;
