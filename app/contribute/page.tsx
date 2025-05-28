import { ModeToggle } from '@/components/mode-toogle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  Code2,
  GitBranch,
  GitFork,
  GitPullRequest,
  Heart,
  Home,
  Sparkles,
  Star,
  Users,
  Zap,
  BookOpen,
  Rocket,
  Package,
  Scale,
} from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function ContributePage() {
  return (
    <div className="bg-background relative min-h-screen w-full">
      {/* Fixed header with controls */}
      <header className="bg-background/90 sticky top-2 z-50 w-full border-slate-200/80 backdrop-blur-sm dark:border-slate-800/80">
        <div className="mx-auto flex h-14 w-full items-center justify-between px-4 sm:px-6">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="ml-2 border-slate-300 p-2.5 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <Link href="/">
              <Home className="h-[1.3rem] w-[1.3rem]" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>

          <ModeToggle
            className="mr-2 border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            iconClassName="text-slate-700 dark:text-slate-300"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="relative mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Hero Section */}
        <section className="relative mb-20 md:mb-24">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-zinc-100/80 p-3.5 dark:bg-zinc-900/60">
              <div className="rounded-full bg-zinc-700/90 p-3.5 text-white dark:bg-zinc-600/90">
                <Code2 className="h-8 w-8" />
              </div>
            </div>
          </div>

          <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
            Open Source Portfolio
          </h1>

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              This portfolio is completely open source and available as a template for developers. Built with modern technologies and best practices,
              it's designed to be easily customizable for your personal brand.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge className="border-2 border-zinc-200 bg-zinc-100/80 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-900/60 dark:text-zinc-200">
                <Scale className="mr-1.5 h-4 w-4" />
                MIT License
              </Badge>

              <Badge className="border-2 border-green-200 bg-green-100/80 px-3.5 py-1.5 text-sm font-medium text-green-700 dark:border-green-700/50 dark:bg-green-900/60 dark:text-green-200">
                <Zap className="mr-1.5 h-4 w-4" />
                Next.js 15.3
              </Badge>

              <Badge className="border-2 border-blue-200 bg-blue-100/80 px-3.5 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-700/50 dark:bg-blue-900/60 dark:text-blue-200">
                <SiTypescript className="mr-1.5 h-4 w-4" />
                TypeScript
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mx-auto mb-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100/80 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/80"
              asChild>
              <a href="https://github.com/devharshthakur/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GitPullRequest className="h-5 w-5" />
                <span>View on Github</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-500 bg-amber-100/80 text-amber-700 hover:bg-amber-200/80 dark:border-amber-500 dark:bg-amber-900/40 dark:text-amber-400 dark:hover:bg-amber-900/60"
              asChild>
              <a href="https://github.com/devharshthakur/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Star Repository</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100/80 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/80"
              asChild>
              <a
                href="https://github.com/devharshthakur/portfolio/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <GitFork className="h-5 w-5" />
                <span>Fork Project</span>
              </a>
            </Button>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <Separator className="h-px bg-slate-300 dark:bg-slate-700" />
          </div>
        </section>

        {/* Why Use This Template Section */}
        <section className="mb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl dark:text-slate-100">Why Use This Template?</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                Built with modern web technologies and designed for developers who want a professional portfolio without starting from scratch.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600 dark:bg-blue-900/60 dark:text-blue-400">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Quick Setup</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Get your portfolio up and running in minutes with simple configuration and deployment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100/80 text-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-400">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Modern Stack</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Built with Next.js 14, TypeScript, Tailwind CSS, and other cutting-edge technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100/80 text-green-600 dark:bg-green-900/60 dark:text-green-400">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Fully Responsive</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Looks perfect on all devices with a mobile-first approach and fluid design system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100/80 text-amber-600 dark:bg-amber-900/60 dark:text-amber-400">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">SEO Optimized</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Built-in SEO best practices to help your portfolio rank better in search results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100/80 text-yellow-600 dark:bg-yellow-900/60 dark:text-yellow-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Performance First</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Optimized for speed with lazy loading, image optimization, and efficient bundling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-400">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">Clean Code</h3>
                  <p className="text-slate-600 dark:text-slate-300">Well-structured, documented code that's easy to understand and customize.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Contribute Section */}
        <section className="mb-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-100/80 p-8 md:p-12 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-700/90 text-white shadow-lg">
                  <GitPullRequest className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl dark:text-slate-100">How to Contribute</h2>
              </div>

              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
                    <Users className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                    For Contributors
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    I'm actively working on optimizing the code structure to make adoption as a template easier. Your contributions are welcome to
                    help improve this project for the developer community!
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                      <span>Submit bug fixes and improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                      <span>Add new features or components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                      <span>Improve documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600 dark:text-zinc-400" />
                      <span>Share your portfolio built with this template</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
                    <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    Getting Started
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">Follow these simple steps to use this portfolio as your template:</p>
                  <ol className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                        1
                      </span>
                      <span>Fork or clone the repository</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                        2
                      </span>
                      <span>Install dependencies with pnpm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                        3
                      </span>
                      <span>Customize content and styling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                        4
                      </span>
                      <span>Deploy to your preferred platform</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-zinc-700/90 text-white shadow-md hover:bg-zinc-800/90 dark:bg-zinc-600/90 dark:hover:bg-zinc-700/90" asChild>
                  <a
                    href="https://github.com/devharshthakur/portfolio/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <GitPullRequest className="h-4 w-4" />
                    <span>Create Issue</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  asChild>
                  <a
                    href="https://github.com/devharshthakur/portfolio/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Read Documentation</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-2xl border border-amber-200 bg-amber-100/80 p-8 md:p-12 dark:border-amber-800 dark:bg-amber-900/40">
              <Star className="mx-auto mb-4 h-12 w-12 text-amber-600 dark:text-amber-400" />
              <h2 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl dark:text-slate-100">Show Your Support</h2>
              <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                If you find this portfolio template helpful, please consider giving it a star on GitHub. It helps others discover the project and
                motivates me to keep improving it!
              </p>
              <Button
                size="lg"
                className="bg-amber-600/90 text-white shadow-lg hover:bg-amber-700/90 dark:bg-amber-600/90 dark:hover:bg-amber-700/90"
                asChild>
                <a href="https://github.com/devharshthakur/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Star on GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} devharshthakur.in - Open Source Portfolio Template
            </p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" asChild>
                <a href="https://github.com/devharshthakur" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
