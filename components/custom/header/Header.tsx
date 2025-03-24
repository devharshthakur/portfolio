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
        <Button
          variant="outline"
          asChild
          className="border-dashed border-2 border-muted-foreground"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2"
            prefetch={false}
          >
            <MdContactPage className="h-7 w-7" />
            Contact Me
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant={"default"} asChild>
          <Link href="/about" className="text-sm font-medium" prefetch={false}>
            About Me
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link href="/blogs">Blogs</Link>
        </Button>
        <Button
          variant={"outline"}
          className="border-dashed border-2 border-muted-foreground"
        >
          <Link
            href="/cv"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={false}
          >
            <FileText className="h-5 w-5" />
            CV
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
