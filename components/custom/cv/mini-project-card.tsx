import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface MiniProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function MiniProjectCard({
  title,
  description,
  link,
}: MiniProjectCardProps) {
  return (
    <div className="flex flex-col space-y-1 pb-4 border-b border-border/40">
      <h4 className="font-bold text-base">{title}</h4>
      <p className="text-muted-foreground mb-1">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary inline-flex items-center hover:underline font-medium"
        prefetch={true}
      >
        GitHub Repo
        <FaGithub className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
