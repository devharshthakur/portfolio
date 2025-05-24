'use client';

/**
 * PackageCard Component
 *
 * This component represents a card that displays information about a package.
 * It includes details such as the package name, description, version,
 * download statistics, and links to the package's GitHub repository and NPM page.
 *
 * @component
 * @param {Object} props - The properties for the PackageCard component.
 * @param {string} props.name - The name of the package.
 * @param {string} props.description - A brief description of the package.
 * @param {string} props.githubUrl - The URL to the package's GitHub repository.
 * @param {string} props.npmUrl - The URL to the package's NPM page.
 * @param {number} [props.downloads] - The number of weekly downloads for the package.
 * @param {string} [props.version] - The version of the package.
 *
 * @example
 * <PackageCard
 *   name="my-awesome-package"
 *   description="This package does amazing things."
 *   githubUrl="https://github.com/my-awesome-package"
 *   npmUrl="https://www.npmjs.com/package/my-awesome-package"
 *   downloads={150}
 *   version="1.0.0"
 * />
 */

import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';
import { Icons } from '@/components/custom/home/skills-section/utils/icon.export';
import { FaNpm } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Package as PackageType } from '@/data/packages.data';
import { cn } from '@/lib/utils';

interface PackageCardProps extends Omit<PackageType, 'longDescription' | 'tags'> {
  // Props come from PackageType with omitted properties
}

export function PackageCard({ name, description, githubUrl, npmUrl, downloads, version }: PackageCardProps) {
  const isUnpublished: boolean = npmUrl === '#';
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden border-2 border-red-300/80 dark:border-red-700/80 bg-white dark:bg-red-900/40 shadow-md transition-all duration-300 hover:shadow-xl hover:border-red-400 dark:hover:border-red-600">
      {/* Header section - lighter red */}
      <div className="p-3 flex items-center justify-between border-b border-red-200/80 dark:border-red-700/60 bg-red-100/60 dark:bg-red-800/50">
        <h3 className="text-xl font-semibold tracking-tight font-mono text-red-900 dark:text-red-100">{name}</h3>
        <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-transparent text-amber-700 dark:text-amber-300 border-2 border-amber-500 dark:border-amber-400 font-mono">
          {version || 'v1.0.0'}
        </span>
      </div>

      {/* Tab buttons section - medium red */}
      <div className="p-3 border-b border-red-200/80 dark:border-red-700/60 bg-red-50/80 dark:bg-red-800/30">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className={cn(
              'w-full font-mono border-2 border-red-300/70 dark:border-red-700/60 bg-red-50/70 dark:bg-red-900/40 hover:bg-red-100/60 dark:hover:bg-red-800/40 text-sm tracking-tight',
              activeTab === 'info'
                ? 'bg-red-100/70 dark:bg-red-700/60 text-red-900 dark:text-red-100 border-2 border-red-400/70 dark:border-red-500/70 shadow-sm'
                : 'text-red-800 dark:text-red-300',
            )}
            onClick={() => setActiveTab('info')}
          >
            <span className="mr-1.5">📝</span> Info
          </Button>
          <Button
            variant="outline"
            className={cn(
              'w-full font-mono border-2 border-red-300/70 dark:border-red-700/60 bg-red-50/70 dark:bg-red-900/40 hover:bg-red-100/60 dark:hover:bg-red-800/40 text-sm tracking-tight',
              activeTab === 'stats'
                ? 'bg-red-100/70 dark:bg-red-700/60 text-red-900 dark:text-red-100 border-2 border-red-400/70 dark:border-red-500/70 shadow-sm'
                : 'text-red-800 dark:text-red-300',
            )}
            onClick={() => setActiveTab('stats')}
          >
            <span className="mr-1.5">📊</span> Stats
          </Button>
        </div>
      </div>

      {/* Content section - darker red */}
      <div className="bg-white/90 dark:bg-red-900/30 p-3 h-[180px] overflow-auto">
        {activeTab === 'info' ? (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold tracking-tight font-mono text-red-900 dark:text-red-100">{name}</h4>
            <p className="text-red-800 dark:text-red-200 font-mono text-sm leading-relaxed">{description}</p>

            {!isUnpublished && (
              <div className="mt-2 inline-flex items-center px-1.5 py-0.5 bg-transparent rounded-md text-[10px] text-amber-700 dark:text-amber-300 font-mono border-2 border-amber-500 dark:border-amber-400">
                <Icons.FaDownload className="h-2.5 w-2.5 mr-1 text-amber-700 dark:text-amber-300" />
                <span className="font-medium">{downloads || 'N/A'}</span>
                <span className="ml-1">weekly downloads</span>
              </div>
            )}

            {isUnpublished && (
              <div className="mt-2 inline-flex items-center px-1.5 py-0.5 bg-transparent rounded-md text-[10px] text-amber-700 dark:text-amber-300 font-mono border-2 border-amber-500 dark:border-amber-400">
                <span className="font-medium">Coming soon</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {/* Removed the stats title heading to give more space */}

            {/* Package Stats Card */}
            <div className="bg-red-50/80 dark:bg-red-800/40 rounded-lg border-2 border-red-200/80 dark:border-red-700/70 p-2 shadow-sm">
              <h5 className="text-xs uppercase tracking-wider text-red-700 dark:text-red-200 font-mono mb-1 flex items-center">
                <FaNpm className="mr-1.5 h-3 w-3" /> NPM Metrics
              </h5>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="flex items-center space-x-2 p-1.5 rounded-md bg-red-50/90 dark:bg-red-700/50 border-2 border-red-200/80 dark:border-red-600/60">
                  <div className="bg-amber-400/90 dark:bg-amber-500/90 p-1.5 rounded-full">
                    <Icons.FaDownload className="h-3 w-3 text-amber-800 dark:text-amber-200" />
                  </div>
                  <div>
                    <p className="text-red-700 dark:text-red-200 text-xs">Downloads</p>
                    <p className="font-bold text-amber-900 dark:text-amber-100 text-sm">{downloads || 'N/A'}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-1.5 rounded-md bg-red-50/90 dark:bg-red-700/50 border-2 border-red-200/80 dark:border-red-600/60">
                  <div className="bg-amber-100 dark:bg-amber-700/80 p-1.5 rounded-full">
                    <Tag className="h-3 w-3 text-amber-700 dark:text-amber-200" />
                  </div>
                  <div>
                    <p className="text-red-700 dark:text-red-200 text-xs">Version</p>
                    <p className="font-bold text-amber-900 dark:text-amber-100 text-sm">{version || 'v1.0.0'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-1 pt-1 border-t border-red-200/80 dark:border-red-700/70 text-xs text-red-700 dark:text-red-300 font-mono text-center">
                Last synced with NPM {Math.floor(Math.random() * 24)} hours ago
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer section - medium-dark red */}
      <div className="mt-auto grid grid-cols-2 gap-2 p-3 border-t border-red-200/80 dark:border-red-700/60 bg-red-50/80 dark:bg-red-800/30">
        <Button
          variant="outline"
          className="flex items-center gap-2 font-mono border-2 border-red-500/80 dark:border-red-600/80 text-red-800 dark:text-red-300 bg-red-50/70 dark:bg-red-900/50 hover:bg-red-100/70 dark:hover:bg-red-800/60 shadow-sm text-sm tracking-tight"
          onClick={() => window.open(githubUrl, '_blank')}
        >
          <Icons.FaGithub className="h-4 w-4" />
          <span>$ git clone</span>
        </Button>

        {isUnpublished ? (
          <Button
            variant="outline"
            className="flex items-center gap-2 font-mono opacity-80 cursor-not-allowed border-2 border-red-300/80 dark:border-red-700/60 bg-red-50/50 dark:bg-red-800/40 text-red-600/80 dark:text-red-400/80 text-sm tracking-tight"
            disabled
          >
            <FaNpm className="h-4 w-4" />
            <span>Coming Soon</span>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="flex items-center gap-2 font-mono bg-red-600/90 dark:bg-red-600/80 text-white hover:bg-red-700/90 dark:hover:bg-red-500/80 border-2 border-red-500/90 dark:border-red-600/80 shadow-sm text-sm tracking-tight"
            onClick={() => window.open(npmUrl, '_blank')}
          >
            <FaNpm className="h-4 w-4" />
            <span>Install Package</span>
          </Button>
        )}
      </div>
    </div>
  );
}
