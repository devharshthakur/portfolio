import { FaGithub, FaLinkedin, FaDownload, FaCode, FaServer, FaGraduationCap } from 'react-icons/fa';
import { Mail, User, MapPin, BookOpen, Calendar, Award, Home, Send, Briefcase, ExternalLink, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from '@/components/mode-toogle';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-indigo-50/10 dark:to-indigo-950/10 overflow-hidden">
      {/* Fixed Navigation Bar */}
      <nav className="sticky top-0 left-0 right-0 flex justify-between items-center z-50 p-4 bg-background/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-md border-amber-200 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 hover:bg-amber-100/60 dark:hover:bg-amber-900/30 ml-2"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <div className="flex items-center gap-1.5 text-xl font-semibold text-slate-600 dark:text-slate-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            About
          </span>
          <span>Me</span>
        </div>

        <ModeToggle
          className="border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-100/60 dark:hover:bg-blue-900/30 mr-2"
          iconClassName="text-blue-700 dark:text-blue-400"
        />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Section with Background Elements */}
        <div className="relative">
          {/* Decorative circles */}
          <div className="absolute -right-64 -top-64 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-64 top-32 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {/* Profile Column */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky">
                <Card className="overflow-auto border-0 shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl">
                  <div className="relative h-32 bg-gradient-to-r rounded-t-xl">
                    <div className="absolute -bottom-16 inset-x-0 flex justify-center">
                      <div className="overflow-hidden h-32 w-32 border-4 border-white dark:border-slate-800 shadow-xl ring-2 ring-blue-500/30 dark:ring-blue-700/30">
                        <Avatar className="h-full w-full overflow-hidden rounded-none bg-transparent">
                          <AvatarImage src="dev-pfp.jpeg" alt="Harsh Thakur" className="h-full w-full object-cover" />
                          <AvatarFallback className="bg-transparent dark:bg-transparent text-blue-800 dark:text-blue-200 text-xl font-bold">
                            HT
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  <CardContent className="pt-20 px-6 pb-6">
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold mb-1">Harsh Thakur</h1>
                      <div className="text-slate-600 dark:text-slate-400 font-medium flex items-center justify-center gap-1.5 mb-3">
                        <Briefcase className="h-4 w-4" />
                        <span>Software Engineer</span>
                      </div>

                      <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-sm opacity-70"></div>
                        <Badge className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-1 text-xs font-medium shadow-sm flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></div>
                          Available for Hire
                        </Badge>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                          <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                          <div className="font-medium">Mumbai, India</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full">
                          <FaGraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Education</div>
                          <div className="font-medium">Final Year Student</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded-full">
                          <Mail className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                          <div className="font-medium truncate">workharshthakur2002@gmail.com</div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Connect with me</h3>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-yellow-300 dark:border-yellow-700 bg-yellow-50/50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-100/60 dark:hover:bg-yellow-900/30"
                          asChild
                        >
                          <a
                            href="https://github.com/devharshthakur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5"
                          >
                            <FaGithub className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100/60 dark:hover:bg-blue-900/30"
                          asChild
                        >
                          <a
                            href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5"
                          >
                            <FaLinkedin className="h-3.5 w-3.5" />
                            <span>LinkedIn</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100/60 dark:hover:bg-indigo-900/30"
                          asChild
                        >
                          <a href="mailto:workharshthakur2002@gmail.com" className="flex items-center justify-center gap-1.5">
                            <Send className="h-3.5 w-3.5" />
                            <span>Contact</span>
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-rose-300 dark:border-rose-700 bg-rose-50/50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 hover:bg-rose-100/60 dark:hover:bg-rose-900/30"
                          asChild
                        >
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
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">
              {/* Summary Section */}
              <section className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                <div className="border-l-4 border-blue-500 dark:border-blue-600">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                      <span>Professional Summary</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      I am a full stack web developer based in India and an undergraduate student at{' '}
                      <a
                        href="https://vit.edu.in/"
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vidyalankar Institute of Technology
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      , pursuing BE in Computer Engineering. I specialize in Next.js, React, and TypeScript development.
                    </p>

                    <div className="pt-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100/60 dark:hover:bg-blue-900/30"
                      >
                        <Link href="/skills" className="flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>View All Skills</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Journey Section */}
              <section className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                <div className="border-l-4 border-indigo-500 dark:border-indigo-600">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                      <Award className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                      <span>My Journey</span>
                    </h2>

                    <div className="space-y-6">
                      <div className="relative pl-8 pb-6 border-l-2 border-indigo-200 dark:border-indigo-800/50">
                        <div className="absolute -left-1.5 top-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-300 dark:border-indigo-700 flex items-center justify-center">
                          <BookOpen className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-400">My Background</h3>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I&apos;ve always been fascinated by the intersection of technology and design. My interest in understanding how frontend
                          interacts with backend in web applications, how it internally works, and how they are deployed led me to backend development
                          in JavaScript (Node.js). I&apos;m particularly interested in JavaScript/TypeScript and related technologies for web
                          development.
                        </p>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute -left-1.5 top-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-300 dark:border-indigo-700 flex items-center justify-center">
                          <Award className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-400">My Learning</h3>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          I develop applications in Next.js. During this time, I&apos;ve had the opportunity to work with a variety of popular
                          technologies and managed services on a wide range of projects. I&apos;ve learned to connect databases, create APIs, and
                          develop projects in monorepos using Turborepo. As a fresher, I&apos;m always eager to learn and grow in the field of web
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                  <div className="border-t-4 border-green-500 dark:border-green-600">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-100 dark:bg-green-900/40 p-2.5 rounded-full">
                          <FaCode className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Frontend Technologies</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS', 'Shadcn UI'].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-800/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/60 px-2.5 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                  <div className="border-t-4 border-purple-500 dark:border-purple-600">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-2.5 rounded-full">
                          <FaServer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Backend Technologies</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'MongoDB', 'Prisma', 'PostgreSQL', 'REST API', 'Auth.js'].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/60 px-2.5 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Current Learning Section */}
              <section className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                <div className="border-l-4 border-rose-500 dark:border-rose-600">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                        <span>Currently Learning</span>
                      </h2>

                      <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border border-rose-200 dark:border-rose-700">
                        In Progress
                      </Badge>
                    </div>

                    <div className="pl-8 relative">
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-rose-300 to-rose-300/0 dark:from-rose-700 dark:to-rose-700/0"></div>
                      <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-rose-400 dark:bg-rose-600 transform -translate-x-1.5"></div>

                      <div>
                        <h3 className="font-semibold text-rose-700 dark:text-rose-400 mb-2">Rust Programming Language</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          Exploring systems programming with Rust for performance-critical applications and gaining a deeper understanding of memory
                          management concepts.
                        </p>
                      </div>
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
