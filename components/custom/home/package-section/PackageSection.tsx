"use client";

import packages from "./data/packages";
import { PackageCard } from "./components/PackageCard";
import { Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Packages() {
  // Show only top packages on home page
  const topPackages = packages.slice(0, 4);

  return (
    <section className="w-full py-8 bg-zinc-100/90 dark:bg-zinc-900/90 border-2 border-zinc-300/80 dark:border-zinc-700/80 rounded-lg shadow-sm backdrop-saturate-[1.2] backdrop-brightness-[1.02] backdrop-contrast-[1.05] relative overflow-hidden">
      {/* Red tint overlay */}
      <div className="absolute inset-0 bg-red-600/5 dark:bg-red-800/20 mix-blend-multiply pointer-events-none"></div>

      <div className="container px-4 md:px-8 lg:px-12 max-w-full relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Archive className="h-6 w-6 text-red-700 dark:text-red-400" />
            <h2 className="text-3xl font-bold tracking-tight font-mono text-red-900 dark:text-red-300">
              NPM Packages
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-2 border-red-500/90 dark:border-red-600/80 text-red-800 dark:text-red-300 bg-red-50/80 dark:bg-red-900/60 hover:bg-red-100/90 dark:hover:bg-red-800/60 font-mono shadow-sm"
            asChild
          >
            <Link href="/packages">View All Packages</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {topPackages.map((pkg) => (
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
