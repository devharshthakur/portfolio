"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ModeToggle } from "@/components/mode-toogle";
import { MiniProjectCard } from "@/components/custom/cv/mini-project-card";
import { saveAs } from "file-saver";

export default function CVPage() {
  const downloadCV = () => {
    saveAs("/cv.pdf", "harsh-thakur-cv.pdf");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">CV</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button onClick={downloadCV} className="flex items-center gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </div>
        </header>

        <main className="cv-content space-y-8 px-1 sm:px-2 md:px-4">
          <section className="space-y-2">
            <h1 className="text-4xl font-bold">HARSH THAKUR</h1>
            <h2 className="text-2xl text-muted-foreground">
              SOFTWARE ENGINEER
            </h2>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-8 md:pr-4">
              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  PERSONAL PROFILE
                </h3>
                <p className="text-sm leading-relaxed">
                  A highly motivated and aspiring software engineer specializing
                  in full-stack web development. Mainly Intrested with Backend
                  Web devolpment but can do frontend with the help of libraries.
                  Proficient mainly in JavaScript. Know Decent C, Basic Java &
                  Python. Skilled in utilizing JavaScript-based technologies
                  such as React via Next Js, Node.js, and various other JS
                  libraries for web development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  CONTACT DETAILS
                </h3>
                <ul className="text-sm space-y-2">
                  <li>+91 721-985-3301</li>
                  <li>workharshthakur2002@gmail.com</li>
                  <li>
                    Badal C-001, Sector-3, Vasant Nagari, Vasai East, Vasai
                    Road. PIN: 401208
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  LANGUAGES
                </h3>
                <ul className="text-sm space-y-1">
                  <li>English</li>
                  <li>Hindi (Fluent)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  MY GITHUB
                </h3>
                <a
                  href="https://github.com/devharshthakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  https://github.com/devharshthakur
                </a>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8 md:pl-4">
              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  EDUCATION
                </h3>
                <div className="space-y-2">
                  <p className="text-sm">BE Software Engineering (Pursuing)</p>
                  <p className="text-sm">Honors Cyber Security (Pursuing)</p>
                  <p className="text-sm">
                    Vidyalankar Institute of Technology | 2021 – 2025
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-3">
                  SKILLS
                </h3>
                <ol className="list-decimal list-inside text-sm space-y-1 ml-2">
                  <li>JavaScript (Node.js)</li>
                  <li>React/Next.js (Frontend)</li>
                  <li>
                    Prisma, PostgreSQL, MongoDB, Cloudflare Workers (Basics)
                    (Backend)
                  </li>
                  <li>AWS (Basics)</li>
                  <li>NestJS</li>
                </ol>
                <div className="mt-4">
                  <h4 className="font-medium">Skills (Currently Studying)</h4>
                  <p className="text-sm">Rust Programming Language</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b border-border pb-2 mb-2">
                  MINI PROJECTS
                </h3>
                <ul className="text-sm space-y-2">
                  <MiniProjectCard
                    title="Portfolio Website"
                    description="Live personal portfolio"
                    link="https://devharshthakur.in"
                  />
                  <MiniProjectCard
                    title="Simple Password Manager"
                    description="Uses hashing for secure password storage"
                    link="https://github.com/devharshthakur/secure-pass.git"
                  />
                  <MiniProjectCard
                    title="BlockPredict"
                    description="Blockchain prediction application"
                    link="https://github.com/devharshthakur/blockpredict"
                  />
                  <MiniProjectCard
                    title="Advanced Calculator"
                    description="Built with TypeScript"
                    link="https://github.com/devharshthakur/advanced-calculator"
                  />
                  <MiniProjectCard
                    title="PDF Compressor"
                    description="Tool for compressing PDF files"
                    link="https://github.com/devharshthakur/orrbit.git"
                  />
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
