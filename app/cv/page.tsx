import {
  Phone,
  GraduationCap,
  User,
  FileText,
  Briefcase,
  Home,
} from "lucide-react";
import { FaTools, FaProjectDiagram, FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import projects from "@/components/custom/home/project-section/data/projects.data";
import packages from "@/components/custom/home/package-section/data/packages";
import { skills } from "./data/cv.data";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { SectionTitle } from "./components/SectionTitle";
import { ProjectTableRow } from "./components/util/ProjectTableRow";
import { SkillsTableRow } from "./components/util/SkillsTableRow";
import { LanguageTableRow } from "./components/util/LanguageTableRow";
import { AvailabilityBadge } from "./components/util/AvailabilityBadge";
import { EducationEntry } from "./components/util/EducationEntry";
import { ProfileSection } from "./components/ProfileSection";
import { ContactInfo } from "./components/ContactInfo";
import { GitHubLink } from "./components/GitHubLink";
import { LearningBadge } from "./components/util/LearningBadge";
import { profileBulletPoints } from "./data/cv.data";
import { DownloadButton } from "./components/util/DownloadButton";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] text-slate-700 dark:text-slate-300" />
            <span className="sr-only">Go to home</span>
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 max-w-6xl">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8 md:mb-10 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-md border border-purple-200 dark:border-purple-800/50">
              <FileText
                size={20}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                Curriculum Vitae
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Professional Experience & Education
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DownloadButton />
          </div>
        </header>
        {/* Main section */}
        <main className="cv-content space-y-8">
          <section className="text-center md:text-left mb-6">
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-1 text-slate-800 dark:text-slate-200">
                  Harsh Thakur
                </h1>
                <div className="flex items-center text-purple-600 dark:text-purple-400 gap-2">
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

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pt-6">
            <div className="md:col-span-1 space-y-6">
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
                  <CardContent className="p-3">
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
                  <CardContent className="p-3">
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
                  <CardContent className="p-3">
                    <GitHubLink username="devharshthakur" />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <SectionTitle
                  icon={
                    <GraduationCap
                      size={16}
                      className="text-green-700 dark:text-green-400"
                    />
                  }
                  title="Education"
                  colorClassName="border-green-400 text-green-700 dark:border-green-600 dark:text-green-400"
                />
                <Card className="border-2 border-green-400 dark:border-green-600 bg-green-50/30 dark:bg-green-950/10">
                  <CardContent className="p-3">
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
                <div className="mt-3">
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
