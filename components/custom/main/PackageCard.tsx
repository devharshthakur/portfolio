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
  const isUnpublished = npmUrl === "#";

  return (
    <Card className="flex flex-col overflow-hidden border-2 hover:border-black shadow-md duration-300 hover:shadow-xl group w-full min-h-[240px]">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FaNpm className="h-4 w-4 text-black opacity-60 group-hover:opacity-100 transition-opacity" />
            <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors mb-2">
              {name}
            </CardTitle>
          </div>
          {version && !isUnpublished && (
            <Badge
              variant="outline"
              className="px-2 py-0.5 text-xs font-medium"
            >
              v{version}
            </Badge>
          )}
        </div>

        {/* Separator line between title and description */}
        <div className="w-full h-px bg-border my-2"></div>

        <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>

        {isUnpublished && (
          <Badge
            variant="outline"
            className="mt-2 w-fit bg-amber-500/10 text-amber-700 border-amber-300 text-xs font-medium"
          >
            Coming soon
          </Badge>
        )}
      </CardHeader>

      <CardContent className="px-4 py-3 flex-grow">
        {!isUnpublished ? (
          downloads ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icons.FaDownload className="h-3.5 w-3.5" />
              <span className="font-medium">{downloads}</span>
              <span>weekly downloads</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icons.FaDownload className="h-3.5 w-3.5" />
              <span>Download stats unavailable</span>
            </div>
          )
        ) : (
          <div className="text-sm text-muted-foreground">
            <p>This package is not yet published to NPM.</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-4 mt-auto bg-muted/50 border-t">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn transition-colors"
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
            className="w-full cursor-not-allowed"
            disabled
          >
            <Icons.FaNpm className="mr-1.5 h-4 w-4" aria-hidden="true" />
            <span>NPM (Soon)</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="w-full group/btn bg-black hover:bg-gray-800 text-white transition-colors"
            asChild
          >
            <Link
              href={npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5"
              prefetch={true}
            >
              <Icons.FaNpm
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
