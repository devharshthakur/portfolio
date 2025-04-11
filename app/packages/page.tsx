import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import {
  Home,
  Package,
  Construction,
  GitPullRequest,
  Terminal,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaNpm } from "react-icons/fa";

export default function DevelopmentPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-purple-50/20 dark:to-purple-950/10 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-200 dark:bg-purple-800/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="relative mx-auto mb-8 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-lg"></div>
            <div className="bg-purple-100 dark:bg-purple-900/40 p-5 rounded-full relative z-10 border border-purple-200 dark:border-purple-700/50">
              <Package className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            <span className="relative">
              Packages Coming Soon
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-300 dark:bg-purple-700 opacity-50"></span>
            </span>
          </h1>

          <Badge className="mb-8 py-1.5 px-3 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700/60 hover:bg-purple-200 dark:hover:bg-purple-800/60">
            <Construction className="mr-1 h-3.5 w-3.5 animate-pulse" />
            Under Development
          </Badge>

          <Card className="p-6 mb-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-purple-200 dark:border-purple-800/50 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-purple-200 dark:border-purple-700/40">
                  <FaNpm className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  npm Packages
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  A collection of utility libraries and tools published on npm
                  registry.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-purple-200 dark:border-purple-700/40">
                  <Terminal className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Developer Tools
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Custom-built tools and utilities to enhance developer
                  workflows and productivity.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 md:col-span-2">
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full mb-3 border border-purple-200 dark:border-purple-700/40">
                  <GitPullRequest className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Contributions are welcome
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  You can contribute to the project, contributions are welcome
                  to my npm packages projects.
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-16 bg-purple-300 dark:bg-purple-700"></div>
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Progress
              </span>
              <div className="h-px w-16 bg-purple-300 dark:bg-purple-700"></div>
            </div>
            <div className="relative h-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden max-w-xs mx-auto border border-purple-200 dark:border-purple-800/50">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 animate-pulse rounded-full"></div>
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
