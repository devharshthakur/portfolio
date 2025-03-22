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
import { Sparkles } from "lucide-react";

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
    <Card className="flex flex-col overflow-hidden border border-gray-200 transition-all hover:border-black hover:shadow-[0_0_0_2px_rgba(0,0,0,0.8)] group max-h-[280px] w-full">
      <CardHeader className="pb-0 pt-4 relative">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardTitle className="text-2xl font-extrabold tracking-tight group-hover:text-black transition-colors">
              {name}
            </CardTitle>
          </div>
          {version && !isUnpublished && (
            <Badge
              variant="outline"
              className="px-2 py-0 text-xs font-medium border-gray-300"
            >
              v{version}
            </Badge>
          )}
        </div>

        <div className="w-16 h-1 bg-black mb-3 mt-1 rounded-full opacity-80"></div>

        <CardDescription className="text-sm leading-snug">
          {description}
        </CardDescription>

        {isUnpublished && (
          <Badge
            variant="outline"
            className="mt-2 bg-amber-500/10 text-amber-600 border-amber-200 text-xs"
          >
            Coming soon
          </Badge>
        )}
      </CardHeader>

      <div className="w-full h-px bg-gray-100 my-2"></div>

      <CardContent className="py-2">
        {downloads && !isUnpublished && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icons.FaDownload className="h-3.5 w-3.5 text-gray-700" />
            <span className="font-medium">{downloads}</span>
            <span>weekly downloads</span>
          </div>
        )}
        {!downloads && !isUnpublished && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icons.FaDownload className="h-3.5 w-3.5 text-gray-700" />
            <span>Download stats unavailable</span>
          </div>
        )}
        {isUnpublished && (
          <div className="text-sm text-muted-foreground">
            <p>This package is not yet published to NPM.</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-3 mt-auto bg-gray-50 border-t border-gray-100">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn border-gray-300 hover:border-black hover:bg-gray-50"
          asChild
        >
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Icons.FaGithub
              className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110"
              aria-hidden="true"
            />
            <span>GitHub</span>
          </Link>
        </Button>

        {isUnpublished ? (
          <Button
            variant="secondary"
            size="sm"
            className="w-full opacity-80 cursor-not-allowed bg-gray-200 text-gray-600"
            disabled
          >
            <Icons.FaNpm className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>Coming Soon</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="w-full group/btn bg-black hover:bg-gray-800"
            asChild
          >
            <Link
              href={npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Icons.FaNpm
                className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110"
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
