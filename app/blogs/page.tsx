import { ModeToggle } from '@/components/mode-toogle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Clock, Construction, Home, PenSquare, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div className="from-background relative min-h-screen w-full overflow-hidden bg-linear-to-b to-indigo-50/20 dark:to-indigo-950/10">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-900/30">
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-indigo-100 opacity-20 blur-2xl dark:bg-indigo-900/20"></div>
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-indigo-200 opacity-20 blur-2xl dark:bg-indigo-800/20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-indigo-200/50 blur-lg dark:bg-indigo-800/30"></div>
            <div className="relative z-10 rounded-full border border-indigo-200 bg-indigo-100 p-5 dark:border-indigo-700/50 dark:bg-indigo-900/40">
              <BookOpen className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-slate-800 md:text-5xl dark:text-slate-200">
            <span className="relative">
              Blog Coming Soon
              <span className="absolute right-0 -bottom-1 left-0 h-1 bg-indigo-300 opacity-50 dark:bg-indigo-700"></span>
            </span>
          </h1>

          <Badge className="mb-8 border border-indigo-300 bg-indigo-100 px-3 py-1.5 text-indigo-700 hover:bg-indigo-200 dark:border-indigo-700/60 dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-800/60">
            <Construction className="mr-1 h-3.5 w-3.5 animate-pulse" />
            Under Development
          </Badge>

          <Card className="mb-8 border-indigo-200 bg-white/80 p-6 shadow-md backdrop-blur-xs dark:border-indigo-800/50 dark:bg-zinc-900/80">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-lg border border-indigo-100 bg-indigo-50/50 p-4 text-center md:items-start md:text-left dark:border-indigo-800/30 dark:bg-indigo-900/20">
                <div className="mb-3 rounded-full border border-indigo-200 bg-white p-2 dark:border-indigo-700/40 dark:bg-zinc-800">
                  <PenSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-200">Technical Articles</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  In-depth tutorials and guides about web development, frameworks, and best practices.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-lg border border-indigo-100 bg-indigo-50/50 p-4 text-center md:items-start md:text-left dark:border-indigo-800/30 dark:bg-indigo-900/20">
                <div className="mb-3 rounded-full border border-indigo-200 bg-white p-2 dark:border-indigo-700/40 dark:bg-zinc-800">
                  <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-200">Weekly Updates</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Regular posts about my learning journey, new technologies, and project progress.
                </p>
              </div>

              <div className="flex flex-col items-center rounded-lg border border-indigo-100 bg-indigo-50/50 p-4 text-center md:col-span-2 md:items-start md:text-left dark:border-indigo-800/30 dark:bg-indigo-900/20">
                <div className="mb-3 rounded-full border border-indigo-200 bg-white p-2 dark:border-indigo-700/40 dark:bg-zinc-800">
                  <Tag className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-200">Categorized Content</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Easily browse articles by categories like JavaScript, React, NextJS, and more with filtering options.
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-8">
            <div className="mb-3 flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-indigo-300 dark:bg-indigo-700"></div>
              <span className="text-xs font-medium tracking-wider text-indigo-600 uppercase dark:text-indigo-400">Progress</span>
              <div className="h-px w-16 bg-indigo-300 dark:bg-indigo-700"></div>
            </div>
            <div className="relative mx-auto h-2.5 max-w-xs overflow-hidden rounded-full border border-indigo-200 bg-indigo-100 dark:border-indigo-800/50 dark:bg-indigo-900/30">
              <div className="absolute top-0 left-0 h-full w-1/3 animate-pulse rounded-full bg-linear-to-r from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700"></div>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">First articles expected soon</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">&copy; {new Date().getFullYear()} devharshthakur.in</p>
        </footer>
      </div>
    </div>
  );
}
