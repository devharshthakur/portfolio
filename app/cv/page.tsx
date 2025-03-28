"use client";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Phone,
  Link as LinkIcon,
  GraduationCap,
  Package,
  User,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toogle";
import { saveAs } from "file-saver";
import Link from "next/link";
import { FaTools, FaProjectDiagram, FaGithub } from "react-icons/fa";
import projects from "@/data/projects.data";
import packages from "@/data/packages.data";
import { skills } from "./data";

export default function CVPage() {
  const downloadCV = () => {
    saveAs("/cv.pdf", "harsh-thakur-cv.pdf");
  };

  type ListItemLinkProps = {
    title: string;
    description: string;
    link: string;
  };

  const ListItemLink = ({ title, description, link }: ListItemLinkProps) => (
    <li className="mb-3">
      <div className="flex items-center gap-2 mb-0.5">
        <LinkIcon size={14} className="text-muted-foreground" />
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline"
          prefetch={true}
        >
          {title}
        </Link>
      </div>
      <p className="text-sm text-muted-foreground ml-6">{description}</p>
    </li>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 max-w-6xl">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 md:mb-12">
          <h1 className="text-2xl font-semibold text-muted-foreground">CV</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button onClick={downloadCV} className="flex items-center gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </header>
        {/* Main section */}
        <main className="cv-content space-y-10">
          <section className="text-center md:text-left mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-1">
              Harsh Thakur
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer
            </h2>
          </section>

          <hr className="border-border" />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <User size={16} /> Profile
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Highly motivated software engineer specializing in full-stack
                  web development, with a strong interest in backend systems.
                  Proficient in JavaScript (Node.js, React/Next.js) and related
                  ecosystem tools (Prisma, NestJS). Familiar with C, Java,
                  Python basics, PostgreSQL, MongoDB, Cloudflare Workers, and
                  AWS basics. Currently expanding skills with Rust.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Phone size={16} /> Contact
                </h3>
                <ul className="text-sm space-y-2.5 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>+91 721-985-3301</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={14} />
                    <a
                      href="mailto:workharshthakur2002@gmail.com"
                      className="hover:text-primary transition-colors break-all"
                    >
                      workharshthakur2002@gmail.com
                    </a>
                  </li>
                  <li className="text-xs leading-snug">
                    Vasai East, Maharashtra, India 401208
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider">
                  🗣️ Languages
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>English (Professional Working Proficiency)</li>
                  <li>Hindi (Native/Bilingual Proficiency)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <FaGithub size={16} /> GitHub
                </h3>
                <a
                  href="https://github.com/devharshthakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline break-all"
                >
                  github.com/devharshthakur
                </a>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap size={16} /> Education
                </h3>
                <div className="text-sm space-y-1.5 text-muted-foreground">
                  <p>BE Software Engineering (Pursuing)</p>
                  <p>Honors Cyber Security (Pursuing)</p>
                  <p className="font-medium text-foreground flex items-center gap-1">
                    <LinkIcon size={14} className="text-muted-foreground" />
                    <Link
                      href="https://www.vit.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Vidyalankar Institute of Technology
                    </Link>
                  </p>
                  <p>Mumbai | 2021 – 2025</p>
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                  <FaTools size={16} /> Skills{" "}
                </h3>
                <div className="text-sm space-y-3">
                  <ul className="list-disc list-outside pl-5 space-y-1.5 text-muted-foreground">
                    {skills.map((skill, index) => (
                      <li key={index}>
                        <span className="font-medium text-foreground">
                          {skill.name}:
                        </span>
                        {skill.description}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 mt-3 border-t border-dashed border-border/50">
                    <h4 className="font-medium text-foreground text-xs uppercase tracking-wider mb-1">
                      Currently Learning:
                    </h4>
                    <p className="text-muted-foreground">
                      Rust Programming Language
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                  <FaProjectDiagram size={16} /> Projects{" "}
                </h3>
                <ul className="space-y-4">
                  {projects.map((project, index) => (
                    <ListItemLink
                      key={index}
                      title={project.title}
                      description={project.description}
                      link={project.githubUrl || project.liveDemoUrl || "#"}
                    />
                  ))}
                </ul>
              </div>

              <hr className="border-border" />

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Package size={16} /> NPM Packages
                </h3>
                <ul className="space-y-4">
                  {packages.map((pkg, index) => (
                    <ListItemLink
                      key={index}
                      title={pkg.name}
                      description={pkg.description}
                      link={pkg.npmUrl}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
