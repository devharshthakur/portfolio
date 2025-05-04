/**
 * PackageCard Component
 *
 * Displays individual npm package information in a card format, including:
 * - Package name and version
 * - Download statistics
 * - Detailed description
 * - Technology tags
 * - Links to GitHub and npm
 */
import Link from "next/link";
import { useState } from "react";
import { Package } from "../data/packages";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ArrowUpRight,
  Tag,
  Github,
  Calendar,
  Clock,
  Copy,
  Check,
  History,
} from "lucide-react";
import { FaNpm } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const [copied, setCopied] = useState(false);
  const installCommand = pkg.installCommand || `npm install ${pkg.name}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-border animate-fadeIn relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xs hover:border-purple-300 dark:hover:border-purple-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-0 pt-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-linear-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/50 border-2 border-purple-200 dark:border-purple-700/70 shadow-md transition-all duration-300 group-hover:shadow-lg">
              <FaNpm className="h-6 w-6 text-red-500 dark:text-red-400" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-400">
                {pkg.name}
              </CardTitle>
              {pkg.version && (
                <Badge
                  variant="outline"
                  className="mt-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50"
                >
                  v{pkg.version}
                </Badge>
              )}
            </div>
          </div>

          {pkg.downloads && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 shadow-xs text-sm font-medium">
              <Download className="h-3.5 w-3.5" />
              {pkg.downloads}{" "}
              {parseInt(pkg.downloads) === 1 ? "download" : "downloads"}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        {/* Install Command */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-800/50 p-2 overflow-hidden">
          <div className="flex items-center space-x-2 pl-2">
            <FaNpm className="h-4 w-4 text-red-500 dark:text-red-400 shrink-0" />
            <code className="text-sm font-mono text-gray-800 dark:text-gray-200 truncate">
              {installCommand}
            </code>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 h-8"
          >
            {copied ? (
              <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                <Check className="h-3.5 w-3.5" />
                <span className="text-xs">Copied!</span>
              </div>
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        {/* Package Timeline */}
        {(pkg.publishedDate || pkg.lastUpdated) && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-700/50 bg-linear-to-r from-slate-50 to-gray-50 dark:from-slate-800/30 dark:to-gray-800/30 p-3 overflow-hidden">
            <div className="flex items-center mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <History className="h-4 w-4 mr-1.5 text-purple-500 dark:text-purple-400" />
              Package Timeline
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pkg.publishedDate && (
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/70 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600/50 shadow-xs">
                  <div className="relative">
                    <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-green-400 dark:bg-green-500 animate-ping opacity-75"></div>
                    <Calendar className="h-4 w-4 text-green-500 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                      Published
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {pkg.publishedDate}
                    </span>
                  </div>
                </div>
              )}
              {pkg.lastUpdated && (
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/70 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600/50 shadow-xs">
                  <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                      Last Updated
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {pkg.lastUpdated}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 bg-linear-to-br from-white to-purple-50/30 dark:from-gray-800/50 dark:to-purple-900/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-xs transition-all duration-300 group-hover:shadow-md">
          {pkg.longDescription || pkg.description}
        </div>

        {/* Tags */}
        {pkg.tags && pkg.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pkg.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700 py-1"
              >
                <Tag className="h-3 w-3 mr-1 text-purple-500 dark:text-purple-400" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-2 pb-5">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
        >
          <Link href={pkg.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Link>
        </Button>

        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Link href={pkg.npmUrl} target="_blank" rel="noopener noreferrer">
            <FaNpm className="h-4 w-4 mr-2" />
            npm
            <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
