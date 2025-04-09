import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { FaGithub } from "react-icons/fa";
import { FileText } from "lucide-react";
import { MdContactPage } from "react-icons/md";
export function Header() {
  return (
    <header className="flex items-center justify-between py-3 sm:px-6 md:px-8">
      <div className="space-x-4">
        <Button
          variant="outline"
          asChild
          className="border-slate-300 hover:border-slate-500 dark:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
        >
          <Link
            href="https://github.com/devharshthakur"
            className="flex items-center gap-2"
            prefetch={true}
          >
            <FaGithub className="h-5 w-5" />
            @devharshthakur
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-orange-300 hover:border-orange-500 dark:border-orange-700 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100/50 dark:hover:bg-orange-900/30"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2"
            prefetch={true}
          >
            <MdContactPage className="h-7 w-7 text-orange-600 dark:text-orange-400" />
            Contact Me
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          asChild
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          <Link href="/about" className="text-sm font-medium" prefetch={true}>
            About Me
          </Link>
        </Button>
        <Button
          variant="outline"
          className="border-indigo-300 hover:border-indigo-500 dark:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30"
        >
          <Link href="/blogs">Blogs</Link>
        </Button>
        <Button
          variant="outline"
          className="border-purple-300 hover:border-purple-500 dark:border-purple-700 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30"
        >
          <Link
            href="/cv"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={true}
          >
            <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            CV
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
