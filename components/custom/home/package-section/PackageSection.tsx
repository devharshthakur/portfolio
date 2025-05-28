import { Button } from '@/components/ui/button';
import packages from '@/data/packages.data';
import { Archive } from 'lucide-react';
import Link from 'next/link';
import { RiNpmjsLine } from 'react-icons/ri';
import { PackageCard } from './components/PackageCard';

export function Packages() {
  // Show only top packages on home page
  const topPackages = packages.slice(0, 4);

  return (
    <section className="relative w-full overflow-hidden rounded-lg border-2 border-zinc-300/80 bg-zinc-100/90 py-8 shadow-sm backdrop-brightness-[1.02] backdrop-contrast-[1.05] backdrop-saturate-[1.2] dark:border-zinc-700/80 dark:bg-zinc-900/90">
      {/* Red tint overlay */}
      <div className="pointer-events-none absolute inset-0 bg-red-600/5 mix-blend-multiply dark:bg-red-800/20"></div>

      <div className="relative z-10 container max-w-full overflow-x-hidden px-4 md:px-8 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RiNpmjsLine className="h-8 w-8 text-red-700 dark:text-red-400" />
            <h2 className="font-mono text-3xl font-bold tracking-[-0.02em] text-red-900 dark:text-red-300">NPM Packages</h2>
          </div>
          <Button
            variant="outline"
            className="border-2 border-red-500/90 bg-red-50/80 font-mono text-sm text-red-800 shadow-sm hover:bg-red-100/90 dark:border-red-600/80 dark:bg-red-900/60 dark:text-red-300 dark:hover:bg-red-800/60"
            asChild>
            <Link href="/packages">
              <Archive />
              View All Packages
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {topPackages.map(pkg => (
            <PackageCard
              key={pkg.name}
              name={pkg.name}
              description={pkg.description}
              githubUrl={pkg.githubUrl}
              npmUrl={pkg.npmUrl}
              downloads={pkg.downloads}
              version={pkg.version}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
