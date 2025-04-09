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
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  FileText,
  Briefcase,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toogle";
import { saveAs } from "file-saver";
import Link from "next/link";
import { FaTools, FaProjectDiagram, FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import projects from "@/data/projects.data";
import packages from "@/data/packages.data";
import { skills } from "./data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// Import custom components
import { SectionTitle } from "./components/SectionTitle";
import { ProjectTableRow } from "./components/helper/ProjectTableRow";
import { SkillsTableRow } from "./components/helper/SkillsTableRow";
import { LanguageTableRow } from "./components/helper/LanguageTableRow";
import { AvailabilityBadge } from "./components/helper/AvailabilityBadge";
import { EducationEntry } from "./components/helper/EducationEntry";
import { ProfileSection } from "./components/ProfileSection";
import { ContactInfo } from "./components/ContactInfo";
import { GitHubLink } from "./components/GitHubLink";
import { LearningBadge } from "./components/helper/LearningBadge";
import { profileBulletPoints } from "./data";

export default function CVPage() {
  const downloadCV = () => {
    saveAs("/cv.pdf", "harsh-thakur-cv.pdf");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 max-w-6xl">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10 md:mb-12 border-b border-border pb-5">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-md">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Curriculum Vitae
              </h1>
              <p className="text-sm text-muted-foreground">
                Professional Experience & Education
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              onClick={downloadCV}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </header>
        {/* Main section */}
        <main className="cv-content space-y-10">
          <section className="text-center md:text-left mb-8">
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-1">
                  Harsh Thakur
                </h1>
                <div className="flex items-center text-primary gap-2">
                  <Briefcase size={18} />
                  <h2 className="text-xl md:text-2xl font-medium">
                    Software Engineer
                  </h2>
                </div>
              </div>
              <div className="hidden md:block">
                <AvailabilityBadge />
              </div>
            </div>
          </section>

          <hr className="border-border" />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
            <div className="md:col-span-1 space-y-8">
              <div>
                <SectionTitle
                  icon={
                    <User
                      size={16}
                      className="text-yellow-700 dark:text-yellow-400"
                    />
                  }
                  title="Profile"
                  colorClassName="border-yellow-400 text-yellow-700 dark:border-yellow-600 dark:text-yellow-400"
                />
                <Card className="border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50/30 dark:bg-yellow-950/10">
                  <CardContent className="p-4">
                    <ProfileSection
                      introduction="Highly motivated software engineer specializing in full-stack web development, with a strong interest in backend systems. Aiming to build efficient, scalable, and maintainable applications."
                      bulletPoints={profileBulletPoints}
                    />
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={
                    <Phone
                      size={16}
                      className="text-blue-700 dark:text-blue-400"
                    />
                  }
                  title="Contact"
                  colorClassName="border-blue-400 text-blue-700 dark:border-blue-600 dark:text-blue-400"
                />
                <Card className="border-2 border-blue-400 dark:border-blue-600 bg-blue-50/30 dark:bg-blue-950/10">
                  <CardContent className="p-4">
                    <ContactInfo
                      phone="+91 721-985-3301"
                      email="workharshthakur2002@gmail.com"
                      address="Vasai East, Maharashtra, India 401208"
                    />
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={
                    <span className="text-amber-700 dark:text-amber-400">
                      🗣️
                    </span>
                  }
                  title="Languages"
                  colorClassName="border-amber-400 text-amber-700 dark:border-amber-600 dark:text-amber-400"
                />
                <Card className="border-2 border-amber-400 dark:border-amber-600 bg-amber-50/30 dark:bg-amber-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        <LanguageTableRow
                          language="English"
                          proficiency="Professional Working Proficiency"
                        />
                        <LanguageTableRow
                          language="Hindi"
                          proficiency="Native/Bilingual Proficiency"
                        />
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={
                    <FaGithub
                      size={16}
                      className="text-purple-700 dark:text-purple-400"
                    />
                  }
                  title="GitHub"
                  colorClassName="border-purple-400 text-purple-700 dark:border-purple-600 dark:text-purple-400"
                />
                <Card className="border-2 border-purple-400 dark:border-purple-600 bg-purple-50/30 dark:bg-purple-950/10">
                  <CardContent className="p-4">
                    <GitHubLink username="devharshthakur" />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <SectionTitle
                  icon={
                    <GraduationCap
                      size={16}
                      className="text-yellow-700 dark:text-yellow-400"
                    />
                  }
                  title="Education"
                  colorClassName="border-yellow-400 text-yellow-700 dark:border-yellow-600 dark:text-yellow-400"
                />
                <Card className="border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50/30 dark:bg-yellow-950/10">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <EducationEntry
                        degree="BE Software Engineering"
                        specialty="Honors in Cyber Security"
                        period="2021 – 2025"
                        location="Mumbai, India"
                        institution="Vidyalankar Institute of Technology"
                        institutionUrl="https://www.vit.edu.in"
                        status="Pursuing"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-border" />

              <div>
                <SectionTitle
                  icon={
                    <FaTools
                      size={16}
                      className="text-indigo-700 dark:text-indigo-400"
                    />
                  }
                  title="Skills"
                  colorClassName="border-indigo-400 text-indigo-700 dark:border-indigo-600 dark:text-indigo-400"
                />
                <Card className="border-2 border-indigo-400 dark:border-indigo-600 bg-indigo-50/30 dark:bg-indigo-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {skills.map((skill, index) => (
                          <SkillsTableRow
                            key={index}
                            name={skill.name}
                            description={skill.description}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <div className="mt-4">
                  <LearningBadge skill="Rust Programming Language" />
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <SectionTitle
                  icon={
                    <FaProjectDiagram
                      size={16}
                      className="text-blue-700 dark:text-blue-400"
                    />
                  }
                  title="Projects"
                  colorClassName="border-blue-400 text-blue-700 dark:border-blue-600 dark:text-blue-400"
                />
                <Card className="border-2 border-blue-400 dark:border-blue-600 bg-blue-50/30 dark:bg-blue-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {projects.map((project, index) => (
                          <ProjectTableRow
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={
                              project.githubUrl || project.liveDemoUrl || "#"
                            }
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-border" />

              <div>
                <SectionTitle
                  icon={
                    <SiNpm className="text-rose-700 dark:text-rose-400 h-5 w-5" />
                  }
                  title={
                    <div className="flex items-center gap-2 text-lg">
                      <span className="flex items-center">
                        <span className="ml-1">Packages</span>
                      </span>
                    </div>
                  }
                  colorClassName="border-rose-400 text-rose-700 dark:border-rose-600 dark:text-rose-400"
                />
                <Card className="border-2 border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {packages.map((pkg, index) => (
                          <ProjectTableRow
                            key={index}
                            title={pkg.name}
                            description={pkg.description}
                            link={pkg.npmUrl}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
