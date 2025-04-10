import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { Home, ArrowRight, BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-indigo-50/20 dark:to-indigo-950/10 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-200 dark:bg-indigo-800/20 rounded-full opacity-20 blur-2xl"></div>
      </div>
      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-200/50 dark:bg-indigo-800/30 rounded-full blur-lg"></div>
            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-full relative z-10 border border-indigo-200 dark:border-indigo-700/50">
              <BookOpen className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            <span className="relative">
              Blog Coming Soon
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-indigo-300 dark:bg-indigo-700 opacity-50"></span>
            </span>
          </h1>

          <div className="w-full max-w-lg mx-auto mb-8">
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6">
              Blogs section is planned to be developed soon. Check back later to
              read insightful articles on web development.
            </p>

            <div className="relative h-2.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden max-w-xs mx-auto mb-8 border border-indigo-200 dark:border-indigo-800/50">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700 animate-pulse rounded-full"></div>
            </div>
          </div>

          <Button
            variant="default"
            size="default"
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:hover:bg-indigo-800/60 dark:text-indigo-300 transition-all px-5 py-2 text-sm shadow-sm border border-indigo-200 dark:border-indigo-700/50"
          >
            <Link
              href="/"
              prefetch={true}
              className="flex items-center justify-center"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
