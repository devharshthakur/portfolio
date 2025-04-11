import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import {
  Home,
  History,
  GitCommit,
  GitPullRequest,
  GitBranch,
  Construction,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ChangelogPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-[#404040]/5 dark:to-[#404040]/10 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle
          className="border-[#404040]/40 dark:border-[#404040]/60 hover:bg-[#404040]/10 dark:hover:bg-[#404040]/20"
          iconClassName="text-slate-700 dark:text-slate-300"
        />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-[#404040]/40 dark:border-[#404040]/60 hover:bg-[#404040]/10 dark:hover:bg-[#404040]/20 text-slate-700 dark:text-slate-300"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#404040]/10 dark:bg-[#404040]/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#404040]/15 dark:bg-[#404040]/25 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="relative mx-auto mb-6 w-22 h-22 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#404040]/20 dark:bg-[#404040]/30 rounded-full blur-lg"></div>
            <div className="bg-[#404040]/10 dark:bg-[#404040]/20 p-5 rounded-full relative z-10 border border-[#404040]/30 dark:border-[#404040]/40">
              <History className="h-11 w-11 text-slate-700 dark:text-slate-300" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            <span className="relative">
              Changelog Coming Soon
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#404040]/50 dark:bg-[#404040]/60 opacity-50"></span>
            </span>
          </h1>

          <Badge className="mb-7 py-1.5 px-3.5 bg-[#404040]/10 dark:bg-[#404040]/20 text-slate-700 dark:text-slate-300 border border-[#404040]/30 dark:border-[#404040]/40 hover:bg-[#404040]/20 dark:hover:bg-[#404040]/30">
            <Construction className="mr-1.5 h-3.5 w-3.5 animate-pulse" />
            Under Development
          </Badge>

          <Card className="p-7 mb-7 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-[#404040]/30 dark:border-[#404040]/40 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start text-center md:text-left p-5 rounded-lg bg-[#404040]/5 dark:bg-[#404040]/10 border border-[#404040]/20 dark:border-[#404040]/30">
                <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-full mb-3 border border-[#404040]/20 dark:border-[#404040]/40">
                  <GitCommit className="h-5.5 w-5.5 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2.5 text-slate-800 dark:text-slate-200">
                  Version History
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  A detailed log of all updates, improvements, and fixes made to
                  the portfolio website with each deployment.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-5 rounded-lg bg-[#404040]/5 dark:bg-[#404040]/10 border border-[#404040]/20 dark:border-[#404040]/30">
                <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-full mb-3 border border-[#404040]/20 dark:border-[#404040]/40">
                  <GitPullRequest className="h-5.5 w-5.5 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2.5 text-slate-800 dark:text-slate-200">
                  Feature Releases
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Highlights of major feature additions and enhancements with
                  visual before/after comparisons.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left p-5 rounded-lg bg-[#404040]/5 dark:bg-[#404040]/10 border border-[#404040]/20 dark:border-[#404040]/30 md:col-span-2">
                <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-full mb-3 border border-[#404040]/20 dark:border-[#404040]/40">
                  <GitBranch className="h-5.5 w-5.5 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2.5 text-slate-800 dark:text-slate-200">
                  Development Roadmap
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Upcoming features and improvements planned for future
                  releases, providing insight into the portfolio's evolution.
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-7">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <div className="h-px w-18 bg-[#404040]/50 dark:bg-[#404040]/60"></div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                Progress
              </span>
              <div className="h-px w-18 bg-[#404040]/50 dark:bg-[#404040]/60"></div>
            </div>
            <div className="relative h-2.5 bg-[#404040]/10 dark:bg-[#404040]/20 rounded-full overflow-hidden max-w-xs mx-auto border border-[#404040]/20 dark:border-[#404040]/30">
              <div className="absolute top-0 left-0 h-full w-2/5 bg-gradient-to-r from-[#404040]/60 to-[#404040]/80 dark:from-[#404040]/70 dark:to-[#404040]/90 animate-pulse rounded-full"></div>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              First changelog update coming with next deployment
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
