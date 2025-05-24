/**
 * HeroSection Component
 *
 * Displays the hero section of the packages page, including:
 * - Title and subtitle
 * - Description
 * - Package statistics
 */
import { Package } from '@/data/packages.data';
import { PackageStats } from './PackageStats';
import { PackageIcon } from 'lucide-react';

interface HeroSectionProps {
  packages: Package[];
}

export function HeroSection({ packages }: HeroSectionProps) {
  return (
    <section className="relative p-5 sm:p-8 md:p-10 rounded-xl md:rounded-2xl bg-linear-to-br from-white to-purple-50/70 dark:from-gray-800 dark:to-purple-900/60 backdrop-blur-xs shadow-md overflow-hidden mb-8 md:mb-12 border-2 border-slate-200/70 dark:border-slate-700/70">
      <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
        <div className="space-y-5 md:space-y-6 max-w-3xl">
          {/* Title */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 shadow-md">
                <PackageIcon className="w-4 h-4 text-white" />
              </span>
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gray-100/80 dark:bg-gray-700/80 text-purple-600 dark:text-purple-400">
                npm packages
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 dark:text-white mb-1">
              <span className="inline-block">My</span>{' '}
              <span className="inline-block relative bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-indigo-500 dark:from-purple-400 dark:to-indigo-400">
                Packages
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-purple-400 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 rounded-full" />
              </span>
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Showing {packages.length} published npm packages</p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
            A collection of TypeScript/JavaScript libraries and tools I've developed and published to the npm registry. Each package is designed with
            type-safety, performance, and developer experience in mind.
          </p>

          {/* Stats */}
          <PackageStats packages={packages} />
        </div>
      </div>
    </section>
  );
}
