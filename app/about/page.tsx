import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <div className="space-y-16">
        <div className="flex flex-col items-center space-y-14">
          <div className="relative">
            <Avatar className="h-48 w-48 border-4 border-black shadow-lg shadow-black">
              <AvatarImage src="dev-pfp.jpeg" alt="Harsh Thakur" />
              <AvatarFallback>HT</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Harsh Thakur</h1>
            <p className="text-xl text-muted-foreground">
              Fullstack Web Developer
            </p>
            <Badge variant="secondary" className="text-base px-4 py-1">
              Final Year Engineering Student
            </Badge>
          </div>
          <div className="space-y-8 text-center w-full">
            <p className="text-xl">
              From <span className="font-semibold">India</span>, based in{" "}
              <span className="font-semibold">Mumbai</span>
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto">
              <Button variant="outline" className="w-full h-12" asChild>
                <a
                  href="https://github.com/devharshthakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <FaGithub className="h-3 w-3" />
                  @devharshthakur
                </a>
              </Button>
              <Button variant="outline" className="w-full h-12" asChild>
                <a
                  href="https://www.linkedin.com/in/harsh-thakur-bb6b18231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <FaLinkedin className="h-3 w-3" />
                  Harsh Thakur
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 sm:col-span-2 lg:col-span-1"
                asChild
              >
                <a
                  href="mailto:workharshthakur2002@gmail.com"
                  className="flex items-center justify-center gap-3"
                >
                  <Mail className="h-3 w-3" />
                  <span>Send Email</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">
            <p className="text-lg leading-relaxed hover:cursor-pointer transition-colors hover:text-primary">
              I am a full stack web developer based in India and an
              undergraduate student at{" "}
              <Link
                href="https://vit.edu.in/"
                className="font-semibold hover:underline"
              >
                Vidyalankar Institute of Technology
              </Link>
              , pursuing BE in Computer Engineering.
            </p>
            <p className="text-lg leading-relaxed hover:cursor-pointer transition-colors hover:text-primary">
              I&apos;ve always been fascinated by the intersection of technology
              and design. My interest in understanding how frontend interacts
              with backend in web applications, how it internally works, and how
              they are deployed led me to backend development in JavaScript
              (Node.js). I&apos;m particularly interested in
              JavaScript/TypeScript and related technologies for web
              development.
            </p>
            <p className="text-lg leading-relaxed hover:cursor-pointer transition-colors hover:text-primary">
              I develop applications in Next.js. During this time, I&apos;ve had
              the opportunity to work with a variety of popular technologies and
              managed services on a wide range of projects. I&apos;ve learned to
              connect databases, create APIs, and develop projects in monorepos
              using Turborepo.
            </p>
            <p className="text-lg leading-relaxed hover:cursor-pointer transition-colors hover:text-primary">
              As a fresher, I&apos;m always eager to learn and grow in the field
              of web development.
            </p>
          </div>
          <Button variant="outline" size="lg" className="h-14 px-8" asChild>
            <a
              href="/cv.pdf"
              download="harsh_thakur_cv.pdf"
              rel="noopener"
              className="flex items-center gap-3"
            >
              <FaDownload className="h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
