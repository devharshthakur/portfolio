# 🚀 My Personal Developer Portfolio

Welcome to my personal developer portfolio! This project showcases my skills, projects, and provides a platform to connect with me. Built with modern web technologies to ensure a responsive and engaging user experience.

<p align="center">
  <img src="public/dev-pfp.jpeg" alt="Profile Picture" width="180" height="180" style="border-radius: 50%;"/>
</p>

## 📖 Table of Contents

- [✨ About](#-about)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🌟 Features](#-features)
- [📫 Contact](#-contact)
- [📜 License](#-license)

## ✨ About

This portfolio showcases my work as a developer, highlighting my skills, projects, and providing a way for visitors to get in touch with me. Built with modern technologies to ensure performance, scalability, and an excellent user experience.

### 🔥 Key Projects

- **SecurePass**: A secure password manager with encryption and search capabilities.
- **Legal AI PDF**: An AI-driven legal assistant for document processing.
- **BlockPredict**: ML-based prediction simulation using Blockchain.
- **Orrbit**: A web-based PDF compression tool with client-side processing.

### 📦 Open Source NPM Packages

I've created and published several npm packages that are featured in the packages section:

- **ht-create-tsapp**: A CLI tool for creating TypeScript projects with pre-defined structure.
- **trycatch-lib**: A zero-dependency TypeScript utility for tuple-based error handling.

## 🛠️ Tech Stack

| Technology                                                | Purpose                                |
| --------------------------------------------------------- | -------------------------------------- |
| [Next.js 15](https://nextjs.org/)                         | React framework with server components |
| [TypeScript](https://www.typescriptlang.org/)             | Type-safe development                  |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first styling                  |
| [Radix UI](https://www.radix-ui.com/)                     | Accessible UI components               |
| [Sonner](https://sonner.vercel.app/)                      | Toast notifications                    |
| [Nodemailer](https://nodemailer.com/)                     | Email functionality                    |
| [Zod](https://zod.dev/)                                   | Schema validation                      |
| [React Hook Form](https://react-hook-form.com/)           | Form handling                          |
| [Lucide React](https://lucide.dev/)                       | Icon library                           |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme management                       |

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js app directory with routes
│   ├── about/              # About page
│   ├── api/                # API routes
│   ├── blogs/              # Blogs section
│   ├── changelog/          # Changelog section
│   ├── contact/            # Contact page
│   ├── cv/                 # CV/Resume page
│   ├── packages/           # Packages section
│   │   ├── components/     # Package-specific components
│   │   │   ├── HeroSection.tsx     # Hero section component
│   │   │   ├── PackageCard.tsx     # Individual package card
│   │   │   └── PackageStats.tsx    # Package statistics component
│   │   ├── data/           # Package data
│   │   │   └── packages.ts  # NPM packages information
│   │   └── page.tsx        # Main packages page
│   ├── projects/           # Projects section
│   ├── skills/             # Skills section
│   │   ├── components/     # Skill-specific components
│   │   ├── config/         # Skills configuration
│   │   ├── data/           # Skills data
│   │   └── page.tsx        # Main skills page
│   ├── globals.css         # Global CSS styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
│
├── components/             # Reusable UI components
│   ├── custom/             # Custom components
│   │   ├── home/           # Home page components
│   │   │   └── package-section/ # Package section for home page
│   ├── ui/                 # UI components
│   ├── mode-toogle.tsx     # Theme toggle component
│   ├── providers.tsx       # React context providers
│   └── theme-provider.tsx  # Theme provider component
│
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx      # Mobile detection hook
│
├── lib/                    # Utility functions and libraries
│   ├── colors.ts           # Color definitions
│   └── utils.ts            # Utility functions
│
├── public/                 # Static assets
│   ├── projects/           # Project images
│   ├── dev-pfp.jpeg        # Profile picture
│   ├── cv.pdf              # Resume/CV file
│   └── favicon.ico         # Site favicon
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── components.json         # Components configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── prettier.config.ts      # Prettier configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```
    EMAIL_ID=your_email@example.com
    EMAIL_PASSWORD=your_email_password
    RECEIVER_EMAIL=receiver_email@example.com
   ```

4. **Start the development server**

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Production Build

```bash
pnpm build
pnpm start
```

## 🌟 Features

- **Responsive Design**: Optimized for devices of all sizes
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Dynamic Project Display**: Projects displayed with detailed information
- **Skills Showcase**: Detailed skills section with proficiency levels and experience
- **NPM Packages Gallery**: Interactive display of published npm packages with installation commands
- **Contact Form**: Direct messaging functionality
- **Blog Section**: Share your thoughts and insights
- **CV/Resume Download**: Easy access to your professional resume
- **SEO Optimized**: Improved search engine visibility
- **Timeline Visualization**: Visual representation of package publication and update history
- **Copy-to-Clipboard**: One-click copying of npm installation commands

## 📫 Contact

- **Email**: [workharshthakur2002@gmail.com](mailto:workharshthakur2002@gmail.com)
- **GitHub**: [@devharshthakur](https://github.com/devharshthakur)
- **LinkedIn**: [Harsh Thakur](https://www.linkedin.com/in/harsh-thakur-bb6b18231)

## 📜 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made using Next.js and TypeScript
</p>

---

## 📊 Project Stats

| Metric     | Value                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Stars**  | ⭐ [![GitHub stars](https://img.shields.io/github/stars/devharshthakur/portfolio?style=social)](https://github.com/devharshthakur/portfolio/stargazers)      |
| **Forks**  | 🍴 [![GitHub forks](https://img.shields.io/github/forks/devharshthakur/portfolio?style=social)](https://github.com/devharshthakur/portfolio/network/members) |
| **Issues** | ❗ [![GitHub issues](https://img.shields.io/github/issues/devharshthakur/portfolio)](https://github.com/devharshthakur/portfolio/issues)                     |

---
