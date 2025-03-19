"use client";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-h-screen max-w-4xl px-6 py-12 md:px-8 md:py-16 font-mono">
      <div className="space-y-10 py-24">
        {/* Header Section with Avatar and Intro */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="relative flex-shrink-0 mx-auto md:mx-0 order-1 md:order-2">
            <Avatar className="h-36 w-36 md:h-40 md:w-40 border-2 border-primary/10 shadow-md">
              <AvatarImage src="dev-pfp.jpeg" alt="Harsh Thakur" />
              <AvatarFallback>HT</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3 order-2 md:order-1 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Harsh Thakur
            </h1>
            <p className="text-xl text-muted-foreground">
              Fullstack Web Developer
            </p>
            <Badge variant="secondary" className="text-sm px-3 py-0.5 mt-1">
              Final Year Engineering Student
            </Badge>
            <p className="text-base mt-1">
              From <span className="font-semibold">India</span>, based in{" "}
              <span className="font-semibold">Mumbai</span>
            </p>

            {/* Social Links - Moved inside the intro section */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              <Button
                variant="outline"
                size="sm"
                className="h-9 text-xs"
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
                className="h-9 text-xs"
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
                className="h-9 text-xs"
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
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/60"></div>

        {/* Bio Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-5">
          <p className="text-base md:text-lg leading-relaxed">
            I am a full stack web developer based in India and an undergraduate
            student at{" "}
            <Link
              href="https://vit.edu.in/"
              className="font-semibold text-primary hover:underline"
            >
              Vidyalankar Institute of Technology
            </Link>
            , pursuing BE in Computer Engineering.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I&apos;ve always been fascinated by the intersection of technology
            and design. My interest in understanding how frontend interacts with
            backend in web applications, how it internally works, and how they
            are deployed led me to backend development in JavaScript (Node.js).
            I&apos;m particularly interested in JavaScript/TypeScript and
            related technologies for web development.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I develop applications in Next.js. During this time, I&apos;ve had
            the opportunity to work with a variety of popular technologies and
            managed services on a wide range of projects. I&apos;ve learned to
            connect databases, create APIs, and develop projects in monorepos
            using Turborepo.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            As a fresher, I&apos;m always eager to learn and grow in the field
            of web development.
          </p>
        </div>
      </div>
    </div>
  );
}
