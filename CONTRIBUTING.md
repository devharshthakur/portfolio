# How to Contribute to Portfolio 🚀

Thank you for considering contributing to this portfolio template! This document outlines the process for contributing to the project and helps to make the contribution process easy and effective for everyone involved.

## 📋 Table of Contents

- [How to Contribute to Portfolio 🚀](#how-to-contribute-to-portfolio-)
  - [📋 Table of Contents](#-table-of-contents)
  - [🤝 Code of Conduct](#-code-of-conduct)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Available Scripts](#available-scripts)
  - [🔄 Development Workflow](#-development-workflow)
  - [📝 Submitting Changes](#-submitting-changes)
  - [💻 Style Guidelines](#-style-guidelines)
    - [TypeScript](#typescript)
    - [React \& Next.js](#react--nextjs)
    - [CSS](#css)
    - [💬 Commit Messages](#-commit-messages)
      - [Commit Message Format](#commit-message-format)
      - [Types](#types)
      - [Examples](#examples)
      - [Guidelines](#guidelines)
  - [🤔 Need Help?](#-need-help)

## 🤝 Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (preferred package manager)

### Setup

1. **Fork the repository**:

   - Click the Fork button in the top right of the [repository page](https://github.com/devharshthakur/portfolio)

2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory:

   ```env
   EMAIL_ID=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   RECEIVER_EMAIL=receiver_email@example.com
   ```

   > **Note**: For development, you can use placeholder values or set up a test email account.

5. **Start the development server**:

   ```bash
   pnpm dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the nextjs application.

6. **Set up remote**:
   ```bash
   git remote add upstream https://github.com/devharshthakur/portfolio.git
   ```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🔄 Development Workflow

1. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

   Use prefixes like:

   - `feature/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation
   - `refactor/` for code refactoring
   - `style/` for formatting/style changes
   - `test/` for adding tests

2. **Make your changes**:

   - Write clean, maintainable, and tested code
   - Keep commits small and focused
   - Write clear commit messages

3. **Stay up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## 📝 Submitting Changes

1. **Push your changes to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**:

   - Go to the original repository
   - Click "New Pull Request"
   - Choose your fork and branch
   - Fill in the PR template with relevant details

3. **Code Review**:
   - Wait for review from maintainers
   - Make any requested changes
   - Once approved, your PR will be merged

## 💻 Style Guidelines

### TypeScript

- [x] Avoid using `any` type unless absolutely necessary
- [x] Ensure the codebase remains type-safe
- [x] Use interfaces for object shapes
- [x] Use meaningful variable names

### React & Next.js

- [x] Follow functional component patterns
- [x] Use proper hooks for state management
- [x] Follow the Next.js routing conventions

### CSS

- [x] Use TailwindCSS classes appropriately
- [x] Follow the project's existing design patterns
- [x] Use responsive design principles

### 💬 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This helps with automated changelog generation and semantic versioning.

#### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types

- `feat/` - A new feature
- `fix/` - A bug fix
- `perf/` - A performance improvement
- `chore/` - Changes to build process or auxiliary tools
- `docs/` - Documentation only changes
- `style/` - Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor/` - A code change that neither fixes a bug nor adds a feature
- `test/` - Adding missing tests or correcting existing tests
- `ci/` - Changes to CI configuration files and scripts
- `build/` - Changes that affect the build system or external dependencies

#### Examples

```bash
# Feature
git commit -m "feat: add dark mode toggle component"

# Bug fix
git commit -m "fix: resolve navigation menu overflow issue"

# Performance improvement
git commit -m "perf: optimize image loading with lazy loading"

# Documentation
git commit -m "docs: update README with new installation steps"

# Style changes
git commit -m "style: format code with prettier"

# Refactoring
git commit -m "refactor: extract reusable button component"

# Tests
git commit -m "test: add unit tests for contact form validation"

# Chores
git commit -m "chore: update dependencies to latest versions"
```

#### Guidelines

- [x] Use the present tense ("Add feature" not "Added feature")
- [x] Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- [x] Limit the first line to 72 characters or less
- [x] Reference issues and pull requests as appropriate
- [x] Use the appropriate type prefix for your changes

## 🤔 Need Help?

Feel free to open an issue if you have questions or need clarification on any aspect of the project!

Thank you for contributing! 🙌
