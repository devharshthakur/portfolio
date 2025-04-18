/**
 * PackageStats Component
 *
 * Displays statistics about the packages collection including:
 * - Total number of packages
 * - Total downloads
 * - Number of technologies used
 */
import { Package } from "../data/packages";
import { PackageIcon, Download, Code } from "lucide-react";

interface PackageStatsProps {
  packages: Package[];
}

export function PackageStats({ packages }: PackageStatsProps) {
  // Calculate total downloads
  const totalDownloads = packages.reduce(
    (total: number, pkg: Package) =>
      total + (parseInt(pkg.downloads || "0") || 0),
    0,
  );

  // Calculate unique technologies
  const uniqueTechnologies = Array.from(
    new Set(packages.flatMap((pkg) => pkg.tags || [])),
  ).length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-2">
      {/* Total Packages */}
      <div className="col-span-1 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg p-3 border border-purple-200/50 dark:border-purple-600/50 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300">
          <PackageIcon className="h-4 w-4" />
          Total Packages
        </div>
        <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
          {packages.length}
        </div>
      </div>

      {/* Total Downloads */}
      <div className="col-span-1 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg p-3 border border-blue-200/50 dark:border-blue-600/50 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300">
          <Download className="h-4 w-4" />
          Total Downloads
        </div>
        <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
          {totalDownloads}
        </div>
      </div>

      {/* Technologies */}
      <div className="col-span-1 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg p-3 border border-amber-200/50 dark:border-amber-600/50 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-300">
          <Code className="h-4 w-4" />
          Technologies
        </div>
        <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
          {uniqueTechnologies}
        </div>
      </div>
    </div>
  );
}
