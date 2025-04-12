import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import {
  Home,
  ArrowRight,
  Lightbulb,
  Code,
  PenTool,
  Brain,
  Construction,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-green-50/20 dark:to-green-950/10 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/30 text-green-700 dark:text-green-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-100 dark:bg-green-900/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-200 dark:bg-green-800/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="relative mx-auto mb-8 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-green-200/50 dark:bg-green-800/30 rounded-full blur-lg"></div>
            <div className="bg-green-100 dark:bg-green-900/40 p-5 rounded-full relative z-10 border border-green-200 dark:border-green-700/50">
              <Lightbulb className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            <span className="relative">
              Detailed Skills Coming Soon
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-green-300 dark:bg-green-700 opacity-50"></span>
            </span>
          </h1>

          <Badge className="mb-8 py-1.5 px-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700/60 hover:bg-green-200 dark:hover:bg-green-800/60">
            <Construction className="mr-1 h-3.5 w-3.5 animate-pulse" />
            Under Development
          </Badge>

          <Card className="p-6 mb-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-green-200 dark:border-green-800/50 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-green-200 dark:border-green-700/40">
                  <Brain className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Comprehensive Skillset
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  A detailed breakdown of frontend, backend, and other web
                  technologies I've learned.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-green-200 dark:border-green-700/40">
                  <PenTool className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Proficiency Metrics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Visual indicators showing my experience and confidence level
                  with each technology.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 md:col-span-2">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-green-200 dark:border-green-700/40">
                  <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Application in Projects
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Examples of how I've applied each skill in real-world projects
                  with direct links to relevant code repositories.
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-16 bg-green-300 dark:bg-green-700"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                Progress
              </span>
              <div className="h-px w-16 bg-green-300 dark:bg-green-700"></div>
            </div>
            <div className="relative h-2.5 bg-green-100 dark:bg-green-900/30 rounded-full overflow-hidden max-w-xs mx-auto border border-green-200 dark:border-green-800/50">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 animate-pulse rounded-full"></div>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              This page is under development
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} devharshthakur.in
          </p>
        </footer>
      </div>
    </div>
  );
}
