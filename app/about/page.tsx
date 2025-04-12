import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  Mail,
  User,
  MapPin,
  BookOpen,
  Calendar,
  Award,
  Home,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toogle";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 pb-16">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-yellow-300 dark:border-yellow-700 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-12 md:px-8">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            About Me
          </h1>
          <div className="h-1.5 w-24 bg-yellow-400 dark:bg-yellow-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Get to know more about my background, skills, and interests
          </p>
        </header>

        {/* Profile Section */}
        <Card className="mb-12 overflow-hidden border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50/30 dark:bg-yellow-950/10">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center justify-center p-8 md:border-r border-yellow-200 dark:border-yellow-800/40 bg-yellow-100/30 dark:bg-yellow-900/20">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-yellow-300 dark:border-yellow-700 mb-6 shadow-lg">
                  <AvatarImage src="dev-pfp.jpeg" alt="Harsh Thakur" />
                  <AvatarFallback className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xl font-bold">
                    HT
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold mb-2">Harsh Thakur</h2>
                <div className="relative mb-5">
                  <Badge className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 font-medium shadow-sm flex items-center gap-2 border border-teal-400/50">
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                    Available for Hire
                  </Badge>
                  <div className="absolute -inset-0.5 bg-teal-500/20 blur-sm rounded-full -z-10"></div>
                </div>

                <div className="w-full max-w-[220px] border-2 border-yellow-300 dark:border-yellow-700/60 rounded-md overflow-hidden bg-yellow-50/50 dark:bg-yellow-900/10 shadow-sm">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 text-center border-b border-yellow-200 dark:border-yellow-800/40">
                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-700 dark:text-yellow-300">
                      Personal Info
                    </span>
                  </div>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-yellow-200 dark:border-yellow-800/40">
                        <td className="px-4 py-2 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <div className="bg-yellow-100 dark:bg-yellow-900/40 p-1.5 rounded-full flex items-center justify-center">
                              <MapPin
                                size={12}
                                className="text-yellow-600 dark:text-yellow-400"
                              />
                            </div>
                            <span className="text-xs font-medium text-foreground">
                              Mumbai, India
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <div className="bg-yellow-100 dark:bg-yellow-900/40 p-1.5 rounded-full flex items-center justify-center">
                              <Calendar
                                size={12}
                                className="text-yellow-600 dark:text-yellow-400"
                              />
                            </div>
                            <span className="text-xs font-medium text-foreground">
                              Final Year Student
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Details Section */}
              <div className="md:col-span-2 flex items-center">
                <div className="p-6 md:p-8 w-full">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <span>Professional Summary</span>
                  </h3>
                  <p className="text-base leading-relaxed mb-6">
                    I am a full stack web developer based in India and an
                    undergraduate student at{" "}
                    <a
                      href="https://vit.edu.in/"
                      className="font-semibold text-yellow-600 dark:text-yellow-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vidyalankar Institute of Technology
                    </a>
                    , pursuing BE in Computer Engineering. I specialize in
                    Next.js, React, and TypeScript development.
                  </p>

                  <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">
                    Connect with me
                  </h4>
                  <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-zinc-800 border-yellow-300 dark:border-yellow-700/60 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 h-9"
                      asChild
                    >
                      <a
                        href="https://github.com/devharshthakur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-zinc-800 border-blue-300 dark:border-blue-700/60 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 h-9"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <FaLinkedin className="h-3.5 w-3.5" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-zinc-800 border-indigo-300 dark:border-indigo-700/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 h-9"
                      asChild
                    >
                      <a
                        href="mailto:workharshthakur2002@gmail.com"
                        className="flex items-center gap-1.5"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-zinc-800 border-rose-300 dark:border-rose-700/60 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-rose-700 dark:text-rose-400 h-9"
                      asChild
                    >
                      <a href="/cv" className="flex items-center gap-1.5">
                        <FaDownload className="h-3.5 w-3.5" />
                        View CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bio Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold">About My Journey</h2>
            <div className="h-1.5 flex-1 bg-indigo-400/30 dark:bg-indigo-600/30 rounded-full"></div>
          </div>

          <Card className="border-2 border-indigo-400 dark:border-indigo-600 bg-indigo-50/30 dark:bg-indigo-950/10 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1.5 bg-indigo-100 dark:bg-indigo-900/40 p-2.5 rounded-full flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
                    My Background
                  </h3>
                  <p className="text-base leading-relaxed">
                    I&apos;ve always been fascinated by the intersection of
                    technology and design. My interest in understanding how
                    frontend interacts with backend in web applications, how it
                    internally works, and how they are deployed led me to
                    backend development in JavaScript (Node.js). I&apos;m
                    particularly interested in JavaScript/TypeScript and related
                    technologies for web development.
                  </p>
                </div>
              </div>

              <Separator className="my-6 bg-indigo-200 dark:bg-indigo-800/40" />

              <div className="flex items-start gap-4">
                <div className="mt-1.5 bg-indigo-100 dark:bg-indigo-900/40 p-2.5 rounded-full flex-shrink-0">
                  <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
                    My learning
                  </h3>
                  <p className="text-base leading-relaxed">
                    I develop applications in Next.js. During this time,
                    I&apos;ve had the opportunity to work with a variety of
                    popular technologies and managed services on a wide range of
                    projects. I&apos;ve learned to connect databases, create
                    APIs, and develop projects in monorepos using Turborepo. As
                    a fresher, I&apos;m always eager to learn and grow in the
                    field of web development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold mr-4">Technical Skills</h2>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mr-4 text-green-600 hover:text-green-700 border-green-600 hover:border-green-700 dark:text-green-400 dark:hover:text-green-300 dark:border-green-600 dark:hover:border-green-500"
            >
              <Link href="/skills">View All Skills</Link>
            </Button>
            <div className="h-1.5 flex-1 bg-slate-400/30 dark:bg-slate-600/30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-400 dark:border-green-600 bg-green-50/30 dark:bg-green-950/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/40 p-2.5 rounded-full flex-shrink-0">
                    <FaCode className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
                    Frontend Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "TailwindCSS",
                    "HTML/CSS",
                    "Shadcn UI",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-100 hover:bg-green-200 dark:bg-green-900/40 dark:hover:bg-green-800/60 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700/60"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400 dark:border-purple-600 bg-purple-50/30 dark:bg-purple-950/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-2.5 rounded-full flex-shrink-0">
                    <FaServer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
                    Backend Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Prisma",
                    "PostgreSQL",
                    "REST API",
                    "Auth.js",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700/60"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
