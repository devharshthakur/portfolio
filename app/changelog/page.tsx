import { ChangelogTimeline } from '@/components/custom/changelog/changelog-timeline';
import { ModeToggle } from '@/components/mode-toogle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import changelog from '@/data/changelog.data';
import { ArrowRight, Book, Calendar, GitBranch, GitCommit, GitPullRequest, History, Home, Tag } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function ChangelogPage() {
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
        {/* Header Section with Title */}
        <section className="relative mb-20 md:mb-24">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-blue-100 p-3.5 dark:bg-blue-900/30">
              <div className="rounded-full bg-blue-600 p-3.5 text-white dark:bg-blue-500">
                <History className="h-8 w-8" />
              </div>
            </div>
          </div>

          <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">What's New</h1>

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              A detailed log of all the latest updates, improvements, and refinements made to my portfolio website. Watch this space for ongoing
              enhancements!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge className="border-2 border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-700/50 dark:bg-blue-900/40 dark:text-blue-200">
                <Tag className="mr-1.5 h-4 w-4" />
                Version 2.0.0
              </Badge>

              <Badge className="border-2 border-green-200 bg-green-50 px-3.5 py-1.5 text-sm font-medium text-green-700 dark:border-green-700/50 dark:bg-green-900/40 dark:text-green-200">
                <Calendar className="mr-1.5 h-4 w-4" />
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Badge>

              <Badge className="border-2 border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:text-zinc-200">
                <GitPullRequest className="mr-1.5 h-4 w-4" />
                Open Source
              </Badge>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <Separator className="h-px bg-slate-300 dark:bg-slate-700" />
          </div>
        </section>

        {/* Main changelog content */}
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-1">
          {/* Timeline of changes */}
          <div className="space-y-16 xl:col-span-1">
            <section className="mx-auto max-w-5xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30">
                  <GitCommit className="h-5.5 w-5.5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl dark:text-slate-100">Latest Updates & Improvements</h2>
              </div>

              <ChangelogTimeline entries={changelog} />
            </section>
          </div>
        </div>

        {/* Open Source Project Section - Full Width */}
        <section className="relative mt-24 mb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
              {/* Left Column - Open Source Info */}
              <div className="relative flex-1">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-700 text-white shadow-md dark:bg-zinc-600">
                    <FaGithub className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl dark:text-slate-100">Open Source Project</h2>
                    <p className="font-medium text-zinc-600 dark:text-zinc-400">Available for everyone</p>
                  </div>
                </div>

                <div className="prose dark:prose-invert prose-slate mb-10 max-w-none">
                  <p className="text-lg">
                    This portfolio project is fully open-sourced and available for anyone to use as a template for their own portfolio websites. Feel
                    free to clone, modify, and make it your own!
                  </p>
                  <p className="text-lg">
                    The project is also open for contributions. If you find it helpful and would like to contribute improvements or new features, I'd
                    be incredibly grateful. Your contributions help make this project better for everyone in the developer community!
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap gap-4">
                  <Button size="lg" className="bg-zinc-800 text-white shadow-md hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600" asChild>
                    <a
                      href="https://github.com/devharshthakur/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2">
                      <FaGithub className="h-5 w-5" />
                      <span>View Repository</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    asChild>
                    <a
                      href="https://github.com/devharshthakur/portfolio/fork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5" />
                      <span>Fork Project</span>
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <Book className="h-4 w-4" />
                  <span>
                    For historical changes, view the{' '}
                    <a
                      href="https://github.com/devharshthakur/portfolio/commits/main"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-600 hover:underline dark:text-zinc-400">
                      commit history <ArrowRight className="h-3 w-3" />
                    </a>
                  </span>
                </div>
              </div>

              {/* Right Column - Features */}
              <div className="flex-1">
                <h3 className="mb-8 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100">
                  <div className="mr-2 h-5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-500"></div>
                  Why Use This Project?
                </h3>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div className="text-zinc-600 dark:text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Modern Design</h4>
                    <p className="text-slate-600 dark:text-slate-300">Responsive layout using Tailwind CSS with clean, professional aesthetics</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-zinc-600 dark:text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Next.js Powered</h4>
                    <p className="text-slate-600 dark:text-slate-300">Built with Next.js for optimal performance and SEO-friendly pages</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-zinc-600 dark:text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6">
                        <path d="M16.5 9.4 7.55 4.24" />
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" x2="12" y1="22" y2="12" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Customizable</h4>
                    <p className="text-slate-600 dark:text-slate-300">Fully customizable components and layouts to fit your personal brand</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-zinc-600 dark:text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Dark Mode</h4>
                    <p className="text-slate-600 dark:text-slate-300">Thoughtful dark mode implementation with perfect contrast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} devharshthakur.in</p>

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
