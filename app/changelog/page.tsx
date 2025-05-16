import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toogle';
import {
  Home,
  History,
  GitCommit,
  GitPullRequest,
  GitBranch,
  Github,
  ExternalLink,
  ArrowRight,
  Tag,
  Calendar,
  CheckCircle2,
  Star,
  Code,
  Book,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ChangelogPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-slate-100/30 dark:to-slate-900/30">
      {/* Fixed header with controls */}
      <header className="sticky top-0 z-50 w-full border-slate-200/80 dark:border-slate-800/80 bg-background/90 backdrop-blur-sm">
        <div className="w-full mx-auto px-4 sm:px-6 flex h-14 items-center justify-between">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="ml-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Link href="/">
              <Home className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>

          <ModeToggle
            className="mr-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            iconClassName="text-slate-700 dark:text-slate-300"
          />
        </div>
      </header>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/15 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-indigo-400/10 dark:bg-indigo-500/15 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/15 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        {/* Header Section with Title */}
        <section className="mb-20 md:mb-24 relative">
          <div className="absolute -top-10 -left-36 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-3.5 rounded-full">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3.5 rounded-full">
                <History className="h-8 w-8" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-slate-900 dark:text-slate-100 mb-8 tracking-tight">What's New</h1>

          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              A detailed log of all the latest updates, improvements, and refinements made to my portfolio website. Watch this space for ongoing
              enhancements!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge className="py-1.5 px-3.5 bg-blue-50 text-blue-700 border-2 border-blue-200 dark:bg-blue-900/40 dark:text-blue-200 dark:border-blue-700/50 text-sm font-medium">
                <Tag className="mr-1.5 h-4 w-4" />
                Version 2.0.0
              </Badge>

              <Badge className="py-1.5 px-3.5 bg-green-50 text-green-700 border-2 border-green-200 dark:bg-green-900/40 dark:text-green-200 dark:border-green-700/50 text-sm font-medium">
                <Calendar className="mr-1.5 h-4 w-4" />
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Badge>

              <Badge className="py-1.5 px-3.5 bg-zinc-50 text-zinc-700 border-2 border-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-200 dark:border-zinc-700/50 text-sm font-medium">
                <GitPullRequest className="mr-1.5 h-4 w-4" />
                Open Source
              </Badge>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <Separator className="bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent h-px" />
          </div>
        </section>

        {/* Main changelog content */}
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-16">
          {/* Timeline of changes */}
          <div className="xl:col-span-1 space-y-16">
            <section className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700">
                  <GitCommit className="h-5.5 w-5.5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Latest Updates & Improvements</h2>
              </div>

              <div className="relative pl-12 border-l-2 border-slate-200 dark:border-slate-800 space-y-20 max-w-4xl mx-auto">
                {/* Skills Updates */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-orange-100 dark:bg-orange-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 mb-3">
                      Content Update
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Skills Page Additions</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Updated the skills page with new technologies and refined learning goals. These additions better reflect current expertise and
                        future learning directions.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Added Rust programming language as a currently learning skill</li>
                        <li>Updated Figma's status to "plan to learn/future goal" to better reflect priorities</li>
                        <li>Ensured consistent styling across all skill indicators</li>
                        <li>Maintained balanced color distribution for improved visual hierarchy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tailwind Update */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 mb-3">
                      Framework Update
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Tailwind CSS v4 Upgrade</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Updated the project from Tailwind CSS v3 to v4, embracing the latest features and performance improvements offered by the
                        framework. This upgrade brings enhanced performance, improved developer experience, and access to the latest Tailwind
                        capabilities.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Improved build performance with faster compilation</li>
                        <li>Enhanced responsive utilities and new variants</li>
                        <li>Better dark mode implementation with improved contrast</li>
                        <li>Cleaner HTML output with optimized class generation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects Page Refinement */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-3">
                      UI Enhancement
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Projects Page Refinement</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Enhanced the projects page with a comprehensive redesign that focuses on maximizing screen real estate and improving content
                        presentation. The new layout offers a better showcase for project details while ensuring all content is perfectly visible in
                        both light and dark modes.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Expanded layout that utilizes the full width of the page</li>
                        <li>Improved color contrast for better text readability in dark mode</li>
                        <li>Enhanced project cards with optimized image display</li>
                        <li>Refined typography and spacing for cleaner information hierarchy</li>
                        <li>Better tech stack badges with consistent styling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills Page Redesign */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-3">
                      Complete Redesign
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Skills Page Redesign</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Complete overhaul of the skills page, transitioning from a traditional grid layout to a more streamlined row-based design.
                        This fundamental redesign creates a cleaner, more intuitive way to showcase technical competencies and professional skills.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Row-based design for better visual flow and content scanning</li>
                        <li>Improved categorization of technical skills and competencies</li>
                        <li>Enhanced visual representation with consistent styling</li>
                        <li>Better mobile responsiveness with adaptive layouts</li>
                        <li>Clearer skill proficiency indicators</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* About Me Page Redesign */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-rose-100 dark:bg-rose-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 mb-3">
                      Major Redesign
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">About Me Page Redesign</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Completely reimagined the About Me page with a fresh approach to personal branding and information presentation. The new
                        design features a modern grid layout with enhanced visual elements that create a more engaging and professional
                        representation.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Sophisticated grid layout with a sticky profile sidebar</li>
                        <li>Multi-color theme with coordinated accent colors for different sections</li>
                        <li>Timeline-style journey section with visual flow indicators</li>
                        <li>Enhanced visual hierarchy with subtle gradients and borders</li>
                        <li>Improved mobile responsiveness with adaptive content arrangements</li>
                        <li>Dedicated sections for professional summary, journey, and skills</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CV Page Refinements */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 mb-3">
                      UI Refinement
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">CV Page Refinements</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Refined the design of the CV page with a focus on enhancing the presentation of professional qualifications and experience.
                        These subtle yet impactful improvements create a more polished and professional representation of career achievements.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Optimized spacing and layout for better content flow</li>
                        <li>Improved typography with better readability</li>
                        <li>Enhanced visual structure with subtle separators</li>
                        <li>Better information grouping for skills and experience</li>
                        <li>Improved printability for physical CV copies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dark Mode Color Enhancement */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-zinc-100 dark:bg-zinc-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900/30 text-zinc-800 dark:text-zinc-300 mb-3">
                      Color System
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Dark Mode Enhancement</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Replaced slate colors with zinc for dark mode backgrounds to provide better contrast and a more consistent color palette
                        throughout the site. This change ensures better readability and visual hierarchy in dark mode.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Consistent zinc-based color palette for dark mode</li>
                        <li>Improved contrast for enhanced readability</li>
                        <li>Harmonized color system across all components</li>
                        <li>Balanced light and dark mode appearance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Project Details Enhancement */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-3">
                      Component Enhancement
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Project Details Visual Upgrade</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Enhanced the project details component with a more visually appealing design using gradient backgrounds, color-coded icons,
                        and interactive cards. These improvements create a more engaging user experience when viewing project information.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Gradient backgrounds for visual depth</li>
                        <li>Color-coded icons for better category recognition</li>
                        <li>Interactive card elements with hover effects</li>
                        <li>Improved information hierarchy</li>
                        <li>Better mobile responsiveness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scroll Area Fix */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 mb-3">
                      Bug Fix
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Scroll Area Optimization</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Fixed a scroll area height issue in the project card component to properly utilize available space and prevent unnecessary
                        scrollbars. This improvement ensures content is displayed optimally within its container.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Eliminated unnecessary scrollbars</li>
                        <li>Better space utilization within components</li>
                        <li>Improved content visibility</li>
                        <li>Enhanced reading experience for project descriptions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Code Organization */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-3">
                      Code Structure
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Code Organization Improvements</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Improved code organization by creating dedicated components and utility functions. This refactoring enhances code
                        maintainability, reusability, and readability for future development.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Created SVG components (HeaderPattern, ProjectGlow) in a dedicated folder</li>
                        <li>Implemented utility functions for tech colors and project display</li>
                        <li>Added comprehensive JSDoc documentation for all files</li>
                        <li>Improved folder structure for better code organization</li>
                        <li>Enhanced code reusability across the application</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Color Algorithm */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 mb-3">
                      Feature Improvement
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Tech Badge Color System</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Replaced manual color mappings for tech badges with a deterministic algorithm that generates consistent colors based on
                        technology names. This ensures new technologies automatically get unique, visually appealing colors.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Deterministic color generation based on technology names</li>
                        <li>Automatic color assignment for new technologies</li>
                        <li>Visual consistency across all tech badges</li>
                        <li>Balanced color distribution for improved aesthetics</li>
                        <li>Better dark mode compatibility for all generated colors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Prettier Configuration */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-0">
                    <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border-4 border-white dark:border-background flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>

                  <div className="pl-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-3">
                      Developer Experience
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Code Formatting Optimization</h3>
                    <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
                      <p>
                        Modified Prettier configuration to reduce vertical spacing and improve code readability. These changes ensure consistent code
                        formatting across the entire codebase.
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        <li>Installed prettier-plugin-organize-imports for automatic import sorting</li>
                        <li>Added bracket and spacing options for cleaner code appearance</li>
                        <li>Created EditorConfig to control spacing across different editors</li>
                        <li>Set import organization options for consistent structure</li>
                        <li>Improved developer experience with standardized formatting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Open Source Project Section - Full Width */}
        <section className="mt-24 mb-20 relative">
          <div className="absolute -z-10 top-0 left-1/4 w-64 h-64 bg-zinc-400/10 dark:bg-zinc-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 bg-zinc-400/10 dark:bg-zinc-400/5 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              {/* Left Column - Open Source Info */}
              <div className="flex-1 relative">
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 bg-gradient-to-br from-zinc-600 to-zinc-800 dark:from-zinc-500 dark:to-zinc-700 text-white rounded-xl shadow-md">
                    <Github className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Open Source Project</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium">Available for everyone</p>
                  </div>
                </div>

                <div className="prose dark:prose-invert prose-slate max-w-none mb-10">
                  <p className="text-lg">
                    This portfolio project is fully open-sourced and available for anyone to use as a template for their own portfolio websites. Feel
                    free to clone, modify, and make it your own!
                  </p>
                  <p className="text-lg">
                    The project is also open for contributions. If you find it helpful and would like to contribute improvements or new features, I'd
                    be incredibly grateful. Your contributions help make this project better for everyone in the developer community!
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-800 hover:to-zinc-950 text-white shadow-md dark:from-zinc-600 dark:to-zinc-800 dark:hover:from-zinc-500 dark:hover:to-zinc-700"
                    asChild
                  >
                    <a
                      href="https://github.com/devharshthakur/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Repository</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    asChild
                  >
                    <a
                      href="https://github.com/devharshthakur/portfolio/fork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
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
                      className="text-zinc-600 dark:text-zinc-400 hover:underline inline-flex items-center gap-1"
                    >
                      commit history <ArrowRight className="h-3 w-3" />
                    </a>
                  </span>
                </div>
              </div>

              {/* Right Column - Features */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
                  <div className="h-5 w-1.5 bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-full mr-2"></div>
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
                        className="h-6 w-6"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Modern Design</h4>
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
                        className="h-6 w-6"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Next.js Powered</h4>
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
                        className="h-6 w-6"
                      >
                        <path d="M16.5 9.4 7.55 4.24" />
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" x2="12" y1="22" y2="12" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Customizable</h4>
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
                        className="h-6 w-6"
                      >
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
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Dark Mode</h4>
                    <p className="text-slate-600 dark:text-slate-300">Thoughtful dark mode implementation with perfect contrast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} devharshthakur.in</p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100" asChild>
                <a href="https://github.com/devharshthakur" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
