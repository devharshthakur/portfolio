"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/data/icons/icon.export";
import Link from "next/link";
import { FaNpm } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Package, Tag } from "lucide-react";

interface PackageCardProps {
  name: string;
  description: string;
  githubUrl: string;
  npmUrl: string;
  downloads?: string;
  version?: string;
}

export function PackageCard({
  name,
  description,
  githubUrl,
  npmUrl,
  downloads,
  version,
}: PackageCardProps) {
  const isUnpublished: boolean = npmUrl === "#";
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-red-300 dark:border-red-700/60 shadow-md duration-300 hover:shadow-xl hover:border-red-500 dark:hover:border-red-500 group w-full min-h-[240px]">
      {/* Header Section with Package Name and Version */}
      <CardHeader className="p-4 bg-red-100/50 dark:bg-red-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-red-200/70 dark:bg-red-800/30 rounded-md">
              <Package
                className="h-4 w-4 text-red-700 dark:text-red-400"
                aria-hidden="true"
              />
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-red-800 dark:text-red-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {name}
            </CardTitle>
          </div>
          {version && !isUnpublished && (
            <div className="flex items-center gap-1.5">
              <Tag size={14} className="text-red-600 dark:text-red-400" />
              <Badge
                variant="outline"
                className="px-2 py-0.5 text-xs font-medium border-red-300 dark:border-red-700/40 text-red-800 dark:text-red-300 bg-background dark:bg-background/20"
              >
                v{version}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      {/* Description Section */}
      <CardContent className="p-4 flex-grow bg-card dark:bg-transparent border-t border-red-200/50 dark:border-red-800/20">
        <div className="space-y-3">
          <CardDescription className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
            {description}
          </CardDescription>

          {isUnpublished ? (
            <Badge
              variant="outline"
              className="mt-1 w-fit bg-amber-500/20 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-400 dark:border-amber-600/40 text-xs font-medium px-2.5 py-1"
            >
              Coming soon
            </Badge>
          ) : (
            <div className="flex items-center gap-2 mt-1 pt-2 border-t border-dashed border-red-200/50 dark:border-red-800/20">
              {downloads ? (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icons.FaDownload className="h-3 w-3 text-red-600/70 dark:text-red-500/70" />
                  <span className="font-medium text-foreground/80">
                    {downloads}
                  </span>
                  <span>weekly downloads</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                  <Icons.FaDownload className="h-3 w-3 text-red-600/70 dark:text-red-500/70" />
                  <span>Download stats unavailable</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>

      {/* Footer Section with Links */}
      <CardFooter className="grid grid-cols-2 gap-3 p-3 mt-auto bg-red-50/80 dark:bg-red-900/20 border-t border-red-200/50 dark:border-red-800/20">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn transition-colors bg-background/80 dark:bg-background/10 hover:bg-background/90 dark:hover:bg-background/20 border-red-300 dark:border-red-700/50 hover:border-red-500 dark:hover:border-red-500"
          asChild
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5"
            prefetch={true}
          >
            <Icons.FaGithub
              className="h-4 w-4 transition-transform group-hover/btn:scale-110"
              aria-hidden="true"
            />
            <span>GitHub</span>
          </Link>
        </Button>

        {isUnpublished ? (
          <Button
            variant="secondary"
            size="sm"
            className="w-full cursor-not-allowed bg-red-100/80 dark:bg-red-800/30 hover:bg-red-200 dark:hover:bg-red-800/40 text-red-800 dark:text-red-300"
            disabled
          >
            <FaNpm
              className={`mr-1.5 h-4 w-4 ${mounted && resolvedTheme === "dark" ? "text-red-300" : "text-red-700"}`}
              aria-hidden="true"
            />
            <span>NPM (Soon)</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="w-full group/btn bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white transition-colors shadow-sm"
            asChild
          >
            <Link
              href={npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5"
              prefetch={true}
            >
              <FaNpm
                className="h-4 w-4 transition-transform group-hover/btn:scale-110"
                aria-hidden="true"
              />
              <span>NPM</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
