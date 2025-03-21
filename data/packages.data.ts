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
    name: "create-my-ts-app",
    description: "A cli for creating typescript projects running via nodejs ",
    longDescription:
      "This cli creates a ts project with a pre-defined structure with some options on project structure",
    githubUrl: "https://github.com/devharshthakur/create-my-ts-app",
    npmUrl: "#",
    downloads: "5.2k",
    version: "1.2.0",
    tags: ["React", "UI Component", "Data Table", "TypeScript"],
  },
];

export default packages;
