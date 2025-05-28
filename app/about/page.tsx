import { ModeToggle } from '@/components/mode-toogle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Briefcase, Calendar, ExternalLink, Hammer, Home, Mail, MapPin, Send, User } from 'lucide-react';
import Link from 'next/link';
import { FaDownload, FaGithub, FaGraduationCap, FaLinkedin, FaReact, FaServer } from 'react-icons/fa';
import { SiRust, SiVitest } from 'react-icons/si';

export default function AboutPage() {
  return (
    <div className="min-h-screen to-indigo-50/10 dark:to-indigo-950/10">
      <nav className="bg-background/80 sticky top-0 right-0 left-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="ml-2 rounded-md border-amber-200 bg-amber-50/50 text-amber-700 hover:bg-amber-100/60 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/30">
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <div className="flex items-center gap-1.5 text-xl font-semibold text-slate-600 dark:text-slate-300">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            About
          </span>
          <span>Me</span>
        </div>

        <ModeToggle
          className="mr-2 border-blue-300 bg-blue-50/50 hover:bg-blue-100/60 dark:border-blue-700 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
          iconClassName="text-blue-700 dark:text-blue-400"
        />
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Main Content */}
        <div className="relative">
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Profile Column */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24">
                <Card className="relative overflow-hidden rounded-xl border-2 border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900/90">
                  <div className="absolute top-0 left-0 z-0 h-34 w-full bg-gradient-to-r from-blue-500/80 to-indigo-600/80" />
                  <div className="relative z-10 -mb-16 flex justify-center">
                    <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-xl ring-2 ring-blue-500/30 dark:border-slate-800 dark:ring-blue-700/30">
                      <Avatar className="h-full w-full overflow-hidden rounded-none bg-transparent">
                        <AvatarImage src="/dev-pfp.jpeg" alt="Harsh Thakur" className="h-full w-full object-cover" />
                        <AvatarFallback className="bg-transparent text-xl font-bold text-blue-800 dark:bg-transparent dark:text-blue-200">
                          HT
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <CardContent className="relative z-10 px-6 pt-20 pb-6">
                    <div className="mb-6 text-center">
                      <h1 className="mb-1 text-2xl font-bold tracking-tight">Harsh Thakur</h1>
                      <div className="mb-3 flex items-center justify-center gap-1.5 font-medium text-slate-600 dark:text-slate-400">
                        <Briefcase className="h-4 w-4" />
                        <span>Software Engineer</span>
                      </div>

                      <div className="relative inline-block">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-70 blur-sm"></div>
                        <Badge className="relative flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-sm hover:from-green-600 hover:to-emerald-700">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></div>
                          Available for Hire
                        </Badge>
                      </div>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-slate-600">
                        <div className="rounded-full bg-blue-100 p-2.5 shadow-sm dark:bg-blue-900/50">
                          <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-mono text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">Location</div>
                          <div className="font-medium">Mumbai, India</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-slate-600">
                        <div className="rounded-full bg-purple-100 p-2.5 shadow-sm dark:bg-purple-900/50">
                          <FaGraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <div className="font-mono text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">Education</div>
                          <div className="font-medium">Final Year Student</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-slate-600">
                        <div className="rounded-full bg-rose-100 p-2.5 shadow-sm dark:bg-rose-900/50">
                          <Mail className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">Email</div>
                          <div className="max-w-[180px] truncate font-medium sm:max-w-[220px]">workharshthakur2002@gmail.com</div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-sm tracking-wider text-slate-500 uppercase dark:text-slate-400">Connect with me</h3>

                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-yellow-300 bg-yellow-50/50 text-yellow-700 shadow-sm transition-all hover:bg-yellow-100/60 dark:border-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30"
                          asChild>
                          <a
                            href="https://github.com/devharshthakur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5">
                            <FaGithub className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-blue-300 bg-blue-50/50 text-blue-700 shadow-sm transition-all hover:bg-blue-100/60 dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                          asChild>
                          <a
                            href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5">
                            <FaLinkedin className="h-3.5 w-3.5" />
                            <span>LinkedIn</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-indigo-300 bg-indigo-50/50 text-indigo-700 shadow-sm transition-all hover:bg-indigo-100/60 dark:border-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/30"
                          asChild>
                          <a href="mailto:workharshthakur2002@gmail.com" className="flex items-center justify-center gap-1.5">
                            <Send className="h-3.5 w-3.5" />
                            <span>Contact</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-rose-300 bg-rose-50/50 text-rose-700 shadow-sm transition-all hover:bg-rose-100/60 dark:border-rose-700 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/30"
                          asChild>
                          <a href="/cv" className="flex items-center justify-center gap-1.5">
                            <FaDownload className="h-3.5 w-3.5" />
                            <span>View CV</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content Columns */}
            <div className="space-y-8 lg:col-span-7 xl:col-span-8">
              {/* Summary Section */}
              <section className="overflow-hidden rounded-xl border-2 border-blue-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-blue-300/80 hover:shadow-lg dark:border-blue-800/40 dark:bg-slate-900/90 dark:hover:border-blue-700/40">
                <div className="p-6">
                  <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                    <User className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    <span>Professional Summary</span>
                  </h2>

                  <div className="mb-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-800/40 dark:bg-blue-900/20">
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      I am a full stack web developer based in India and an undergraduate student at{' '}
                      <a
                        href="https://vit.edu.in/"
                        className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer">
                        Vidyalankar Institute of Technology
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      , pursuing BE in Computer Engineering. I specialize in Next.js, React, and TypeScript development.
                    </p>
                  </div>

                  <div className="pt-1">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-2 border-blue-300 bg-blue-50/50 text-blue-700 shadow-sm transition-all hover:bg-blue-100/60 dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30">
                      <Link href="/skills" className="flex items-center gap-1.5">
                        <Hammer className="h-3.5 w-3.5" />
                        <span>View All Skills</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Journey Section */}
              <section className="overflow-hidden rounded-xl border-2 border-indigo-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-indigo-300/80 hover:shadow-lg dark:border-indigo-800/40 dark:bg-slate-900/90 dark:hover:border-indigo-700/40">
                <div className="p-6">
                  <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                    <Award className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
                    <span>My Journey</span>
                  </h2>

                  <div className="space-y-8">
                    <div className="relative rounded-xl border border-indigo-100 bg-indigo-50/30 p-4 pb-8 pl-10 dark:border-indigo-800/30 dark:bg-indigo-900/10">
                      <div className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-300 bg-indigo-100 shadow-sm dark:border-indigo-700 dark:bg-indigo-900/50">
                        <BookOpen className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                      </div>

                      <h3 className="mb-3 ml-2 text-lg font-semibold tracking-tight text-indigo-700 dark:text-indigo-400">My Background</h3>

                      <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        I&apos;ve always been fascinated by the intersection of technology and design. My interest in understanding how frontend
                        interacts with backend in web applications, how it internally works, and how they are deployed led me to backend development
                        in JavaScript (Node.js). I&apos;m particularly interested in JavaScript/TypeScript and related technologies for web
                        development.
                      </p>
                    </div>

                    <div className="relative rounded-xl border border-indigo-100 bg-indigo-50/30 p-4 pl-10 dark:border-indigo-800/30 dark:bg-indigo-900/10">
                      <div className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-300 bg-indigo-100 shadow-sm dark:border-indigo-700 dark:bg-indigo-900/50">
                        <Award className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                      </div>

                      <h3 className="mb-3 ml-2 text-lg font-semibold tracking-tight text-indigo-700 dark:text-indigo-400">My Learning</h3>

                      <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        I develop applications in Next.js. During this time, I&apos;ve had the opportunity to work with a variety of popular
                        technologies and managed services on a wide range of projects. I&apos;ve learned to connect databases, create APIs, and
                        develop projects in monorepos using Turborepo. As a fresher, I&apos;m always eager to learn and grow in the field of web
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Frontend Skills */}
                <div className="overflow-hidden rounded-xl border-2 border-green-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-green-300/80 hover:shadow-lg dark:border-green-800/40 dark:bg-slate-900/90 dark:hover:border-green-700/40">
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl border border-green-200 bg-green-100 p-2.5 shadow-sm dark:border-green-800/40 dark:bg-green-900/40">
                        <FaReact className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-green-700 dark:text-green-400">Frontend Technologies</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS', 'Shadcn UI'].map(skill => (
                        <Badge
                          key={skill}
                          className="border-2 border-green-200 bg-green-50 px-2.5 py-1 font-mono text-green-700 shadow-sm hover:bg-green-100 dark:border-green-700/60 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-800/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="overflow-hidden rounded-xl border-2 border-purple-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-purple-300/80 hover:shadow-lg dark:border-purple-800/40 dark:bg-slate-900/90 dark:hover:border-purple-700/40">
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl border border-purple-200 bg-purple-100 p-2.5 shadow-sm dark:border-purple-800/40 dark:bg-purple-900/40">
                        <FaServer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-purple-700 dark:text-purple-400">Backend Technologies</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'MongoDB', 'Prisma', 'PostgreSQL', 'REST API', 'Auth.js'].map(skill => (
                        <Badge
                          key={skill}
                          className="border-2 border-purple-200 bg-purple-50 px-2.5 py-1 font-mono text-purple-700 shadow-sm hover:bg-purple-100 dark:border-purple-700/60 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Current Learning Section */}
              <section className="overflow-hidden rounded-xl border-2 border-rose-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-rose-300/80 hover:shadow-lg dark:border-rose-800/40 dark:bg-slate-900/90 dark:hover:border-rose-700/40">
                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-800 dark:text-slate-200">
                      <Calendar className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                      <span>Currently Learning</span>
                    </h2>

                    <Badge className="border-2 border-rose-200 bg-rose-100 px-2.5 py-1 font-mono text-rose-700 shadow-sm dark:border-rose-700/60 dark:bg-rose-900/30 dark:text-rose-300">
                      In Progress
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    {/* Rust */}
                    <div className="rounded-xl border border-rose-100 bg-rose-50/30 p-4 transition-all duration-200 hover:border-rose-200 hover:shadow-md dark:border-rose-800/30 dark:bg-rose-900/10 dark:hover:border-rose-700/30">
                      <h3 className="mb-3 flex items-center gap-2 font-semibold tracking-tight text-rose-700 dark:text-rose-400">
                        <SiRust className="h-4 w-4" /> Rust Programming Language
                      </h3>
                      <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        Learning Rust for its memory safety, zero-cost abstractions, and powerful concurrency model. Exploring systems programming and
                        high-performance web applications using WebAssembly.
                      </p>
                    </div>

                    {/* Vitest/JS Testing */}
                    <div className="rounded-xl border border-rose-100 bg-rose-50/30 p-4 transition-all duration-200 hover:border-rose-200 hover:shadow-md dark:border-rose-800/30 dark:bg-rose-900/10 dark:hover:border-rose-700/30">
                      <h3 className="mb-3 flex items-center gap-2 font-semibold tracking-tight text-rose-700 dark:text-rose-400">
                        <SiVitest className="h-4 w-4" /> Vitest/JS Testing
                      </h3>
                      <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        Diving into JavaScript testing with Vitest, focusing on writing effective unit and integration tests for frontend and backend
                        applications to improve code quality and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
