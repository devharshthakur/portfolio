/**
 * Packages Page Component
 *
 * Displays a portfolio of npm packages developed and published by the author.
 * Each package is presented with details including name, description,
 * download statistics, version information, and links to GitHub and npm.
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { Home, ExternalLink, BookOpen } from "lucide-react";
import packages from "./data/packages";
import { HeroSection } from "./components/HeroSection";
import { PackageCard } from "./components/PackageCard";

export default function PackagesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-purple-50/20 dark:to-purple-950/10 overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 flex justify-between items-center z-50 p-4 bg-background/80 backdrop-blur-sm">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <ModeToggle />
      </nav>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-200 dark:bg-purple-800/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 relative z-10">
        {/* Hero Section */}
        <HeroSection packages={packages} />

        {/* Documentation Coming Soon Banner */}
        <div className="mb-10 p-4 rounded-lg border-2 border-indigo-200 dark:border-indigo-800/50 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                <BookOpen className="h-5 w-5 text-indigo-500 dark:text-indigo-300" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Detailed documentation coming soon!
                </h3>
                <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70">
                  Comprehensive guides, API references, and examples will be
                  available.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link
                href="https://htpkgs.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit htpkgs.info
                <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            &copy; {new Date().getFullYear()} devharshthakur.in
          </p>
        </footer>
      </main>
    </div>
  );
}
