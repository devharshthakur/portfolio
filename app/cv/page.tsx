import { ContactInfo } from '@/components/custom/cv/ContactInfo';
import { GitHubLink } from '@/components/custom/cv/GitHubLink';
import { ProfileSection } from '@/components/custom/cv/ProfileSection';
import { SectionTitle } from '@/components/custom/cv/SectionTitle';
import { AvailabilityBadge } from '@/components/custom/cv/util/AvailabilityBadge';
import { DownloadButton } from '@/components/custom/cv/util/DownloadButton';
import { EducationEntry } from '@/components/custom/cv/util/EducationEntry';
import { LanguageTableRow } from '@/components/custom/cv/util/LanguageTableRow';
import { ProjectTableRow } from '@/components/custom/cv/util/ProjectTableRow';
import { SkillsTableRow } from '@/components/custom/cv/util/SkillsTableRow';
import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody } from '@/components/ui/table';
import { profileBulletPoints, skills } from '@/data/cv.data';
import packages from '@/data/packages.data';
import projects from '@/data/projects.data';
import { Briefcase, FileText, GraduationCap, Home, Phone, Sparkles, User } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaProjectDiagram, FaTools } from 'react-icons/fa';
import { SiNpm, SiRust, SiVitest } from 'react-icons/si';

export default function CVPage() {
  return (
    <div className="bg-background text-foreground relative min-h-screen">
      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <Button asChild variant="outline" size="icon" className="border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] text-slate-700 dark:text-slate-300" />
            <span className="sr-only">Go to home</span>
          </Link>
        </Button>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Header Section */}
        <header className="border-border mb-8 flex items-center justify-between border-b pb-4 md:mb-10">
          <div className="flex items-center gap-2">
            <div className="rounded-md border border-purple-200 bg-purple-100 p-2 dark:border-purple-800/50 dark:bg-purple-900/30">
              <FileText size={20} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Curriculum Vitae</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Professional Experience & Education</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DownloadButton />
          </div>
        </header>
        {/* Main section */}
        <main className="cv-content space-y-8">
          <section className="mb-6 text-center md:text-left">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h1 className="mb-1 font-mono text-4xl font-bold tracking-tight text-slate-800 md:text-5xl dark:text-slate-200">Harsh Thakur</h1>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <Briefcase size={18} />
                  <h2 className="text-xl font-medium md:text-2xl">Software Engineer</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <AvailabilityBadge />
              </div>
            </div>
          </section>

          <hr className="border-border" />

          <section className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:gap-10">
            <div className="space-y-6 md:col-span-1">
              <div>
                <SectionTitle
                  icon={<User size={16} className="text-yellow-700 dark:text-yellow-400" />}
                  title="Profile"
                  colorClassName="border-yellow-400 text-yellow-700 dark:border-yellow-600 dark:text-yellow-400"
                />
                <Card className="border-2 border-yellow-400 bg-yellow-50/30 dark:border-yellow-600 dark:bg-yellow-950/10">
                  <CardContent className="p-4 pt-0 pb-0">
                    <ProfileSection
                      introduction="Highly motivated software engineer specializing in full-stack web development, with a strong interest in backend systems. Aiming to build efficient, scalable, and maintainable applications."
                      bulletPoints={profileBulletPoints}
                    />
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={<Phone size={16} className="text-blue-700 dark:text-blue-400" />}
                  title="Contact"
                  colorClassName="border-blue-400 text-blue-700 dark:border-blue-600 dark:text-blue-400"
                />
                <Card className="border-2 border-blue-400 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/10">
                  <CardContent className="p-3">
                    <ContactInfo phone="+91 721-985-3301" email="workharshthakur2002@gmail.com" address="Vasai East, Maharashtra, India 401208" />
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={<span className="text-amber-700 dark:text-amber-400">🗣️</span>}
                  title="Languages"
                  colorClassName="border-amber-400 text-amber-700 dark:border-amber-600 dark:text-amber-400"
                />
                <Card className="border-2 border-amber-400 bg-amber-50/30 dark:border-amber-600 dark:bg-amber-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        <LanguageTableRow language="English" proficiency="Professional Working Proficiency" />
                        <LanguageTableRow language="Hindi" proficiency="Native/Bilingual Proficiency" />
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div>
                <SectionTitle
                  icon={<FaGithub size={16} className="text-purple-700 dark:text-purple-400" />}
                  title="GitHub"
                  colorClassName="border-purple-400 text-purple-700 dark:border-purple-600 dark:text-purple-400"
                />
                <div className="mt-2 ml-2 transition-all duration-200 hover:-translate-y-0.5">
                  <GitHubLink username="devharshthakur" />
                </div>
              </div>
            </div>

            <div className="space-y-6 md:col-span-2">
              <div>
                <SectionTitle
                  icon={<GraduationCap size={16} className="text-green-700 dark:text-green-400" />}
                  title="Education"
                  colorClassName="border-green-400 text-green-700 dark:border-green-600 dark:text-green-400"
                />
                <Card className="border-2 border-green-400 bg-green-50/30 dark:border-green-600 dark:bg-green-950/10">
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
                  icon={<FaTools size={16} className="text-indigo-700 dark:text-indigo-400" />}
                  title="Skills"
                  colorClassName="border-indigo-400 text-indigo-700 dark:border-indigo-600 dark:text-indigo-400"
                />
                <Card className="border-2 border-indigo-400 bg-indigo-50/30 dark:border-indigo-600 dark:bg-indigo-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {skills.map((skill, index) => (
                          <SkillsTableRow key={index} name={skill.name} description={skill.description} />
                        ))}
                        <tr className="border-border border-t">
                          <td colSpan={2} className="p-0">
                            <div className="p-3 pb-0">
                              <h4 className="mb-2 flex items-center text-xs font-medium tracking-wider text-indigo-700 uppercase dark:text-indigo-400">
                                <div className="mr-2 rounded-full bg-indigo-100 p-1 dark:bg-indigo-900/40">
                                  <Sparkles size={12} className="text-indigo-600 dark:text-indigo-400" />
                                </div>
                                Currently Learning
                              </h4>
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="flex items-center gap-2">
                                  <div className="rounded-full bg-indigo-100 p-1.5 dark:bg-indigo-900/40">
                                    <SiRust className="text-indigo-600 dark:text-indigo-400" size={12} />
                                  </div>
                                  <div className="text-sm text-slate-800 dark:text-slate-200">Rust Programming Language</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="rounded-full bg-indigo-100 p-1.5 dark:bg-indigo-900/40">
                                    <SiVitest className="text-indigo-600 dark:text-indigo-400" size={12} />
                                  </div>
                                  <div className="text-sm text-slate-800 dark:text-slate-200">Vitest/JS Testing</div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-border" />

              <div>
                <SectionTitle
                  icon={<FaProjectDiagram size={16} className="text-blue-700 dark:text-blue-400" />}
                  title="Projects"
                  colorClassName="border-blue-400 text-blue-700 dark:border-blue-600 dark:text-blue-400"
                />
                <Card className="border-2 border-blue-400 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {projects.map((project, index) => (
                          <ProjectTableRow
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.githubUrl || project.liveDemoUrl || '#'}
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
                  icon={<SiNpm className="h-5 w-5 text-rose-700 dark:text-rose-400" />}
                  title={
                    <div className="flex items-center gap-2 text-lg">
                      <span className="flex items-center">
                        <span className="ml-1">Packages</span>
                      </span>
                    </div>
                  }
                  colorClassName="border-rose-400 text-rose-700 dark:border-rose-600 dark:text-rose-400"
                />
                <Card className="border-2 border-rose-400 bg-rose-50/30 dark:border-rose-600 dark:bg-rose-950/10">
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {packages.map((pkg, index) => (
                          <ProjectTableRow key={index} title={pkg.name} description={pkg.description} link={pkg.npmUrl} />
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
