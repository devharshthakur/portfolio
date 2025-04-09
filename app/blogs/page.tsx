import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { Home, ArrowRight, BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-zinc-200 dark:bg-zinc-800 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-zinc-300 dark:bg-zinc-700 rounded-full opacity-15 blur-2xl"></div>
      </div>
      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-5 text-zinc-600 dark:text-zinc-400" />
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
            Blog Coming Soon
          </h1>
          <div className="w-full max-w-lg mx-auto mb-8">
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              Blogs is planned to be developed soon. Check it out later when
              available
            </p>
            <div className="relative h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden max-w-xs mx-auto mb-8">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-700 animate-pulse rounded-full"></div>
            </div>
          </div>
          <Button
            variant="default"
            size="default"
            className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 transition-all px-4 py-2 text-sm shadow-sm border border-zinc-200 dark:border-zinc-700"
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
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} devharshthakur.in
          </p>
        </footer>
      </div>
    </div>
  );
}
