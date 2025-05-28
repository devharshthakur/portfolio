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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from '@/data/packages.data';
import { ArrowUpRight, Calendar, Check, Clock, Copy, Download, Github, History, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FaNpm } from 'react-icons/fa';

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
      className="group border-border animate-fadeIn relative overflow-hidden border-2 bg-white/80 backdrop-blur-xs transition-all duration-300 hover:border-purple-300 hover:shadow-xl dark:bg-gray-900/80 dark:hover:border-purple-700"
      style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader className="pt-5 pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border-2 border-purple-200 bg-linear-to-br from-white to-purple-50 p-2.5 shadow-md transition-all duration-300 group-hover:shadow-lg dark:border-purple-700/70 dark:from-gray-800 dark:to-purple-900/50">
              <FaNpm className="h-6 w-6 text-red-500 dark:text-red-400" />
            </div>
            <div>
              <CardTitle className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-xl font-bold text-transparent dark:from-purple-300 dark:to-indigo-400">
                {pkg.name}
              </CardTitle>
              {pkg.version && (
                <Badge
                  variant="outline"
                  className="mt-1 border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-700/50 dark:bg-purple-900/40 dark:text-purple-300">
                  v{pkg.version}
                </Badge>
              )}
            </div>
          </div>

          {pkg.downloads && (
            <div className="flex items-center gap-1 rounded-md border border-blue-200 bg-linear-to-r from-blue-50 to-cyan-50 px-2.5 py-1.5 text-sm font-medium text-blue-600 shadow-xs dark:border-blue-700/50 dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300">
              <Download className="h-3.5 w-3.5" />
              {pkg.downloads} {parseInt(pkg.downloads) === 1 ? 'download' : 'downloads'}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-5">
        {/* Install Command */}
        <div className="flex items-center justify-between overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-2 dark:border-gray-700/50 dark:bg-gray-800/50">
          <div className="flex items-center space-x-2 pl-2">
            <FaNpm className="h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
            <code className="truncate font-mono text-sm text-gray-800 dark:text-gray-200">{installCommand}</code>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            className="h-8 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
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
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-linear-to-r from-slate-50 to-gray-50 p-3 dark:border-gray-700/50 dark:from-slate-800/30 dark:to-gray-800/30">
            <div className="mb-2 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <History className="mr-1.5 h-4 w-4 text-purple-500 dark:text-purple-400" />
              Package Timeline
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pkg.publishedDate && (
                <div className="flex items-center space-x-2 rounded border border-gray-200 bg-white/70 px-3 py-1.5 shadow-xs dark:border-gray-600/50 dark:bg-gray-700/50">
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75 dark:bg-green-500"></div>
                    <Calendar className="h-4 w-4 text-green-500 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Published</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{pkg.publishedDate}</span>
                  </div>
                </div>
              )}
              {pkg.lastUpdated && (
                <div className="flex items-center space-x-2 rounded border border-gray-200 bg-white/70 px-3 py-1.5 shadow-xs dark:border-gray-600/50 dark:bg-gray-700/50">
                  <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Last Updated</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{pkg.lastUpdated}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="rounded-lg border border-gray-200 bg-linear-to-br from-white to-purple-50/30 p-4 text-sm leading-relaxed text-gray-600 shadow-xs transition-all duration-300 group-hover:shadow-md dark:border-gray-700/50 dark:from-gray-800/50 dark:to-purple-900/20 dark:text-gray-300">
          {pkg.longDescription || pkg.description}
        </div>

        {/* Tags */}
        {pkg.tags && pkg.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pkg.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-gray-200 bg-gray-100 py-1 text-gray-700 transition-all duration-300 hover:border-purple-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-700">
                <Tag className="mr-1 h-3 w-3 text-purple-500 dark:text-purple-400" />
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
          className="border-gray-300 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
          <Link href={pkg.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>

        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-red-600 text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg">
          <Link href={pkg.npmUrl} target="_blank" rel="noopener noreferrer">
            <FaNpm className="mr-2 h-4 w-4" />
            npm
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
