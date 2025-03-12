import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
      <Button variant="outline" asChild>
        <Link
          href="https://github.com/devharshthakur"
          className="flex items-center gap-2"
          prefetch={false}
        >
          <FaGithub className="h-5 w-5" />
          @devharshthakur
        </Link>
      </Button>
      <div className="flex items-center gap-4">
        <Button variant={"outline"} asChild>
          <Link href="/about" className="text-sm font-medium" prefetch={false}>
            About Me
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link href="/blogs">Blogs</Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
