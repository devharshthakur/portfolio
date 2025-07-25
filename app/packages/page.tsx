/**
 * Packages Page Component
 *
 * Displays a portfolio of npm packages developed and published by the author.
 * Each package is presented with details including name, description,
 * download statistics, version information, and links to GitHub and npm.
 */
"use client";

import { HeroSection } from "@/components/custom/packages/components/HeroSection";
import { PackageCard } from "@/components/custom/packages/components/PackageCard";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import packages from "@/data/packages.data";
import { Home } from "lucide-react";
import Link from "next/link";
export default function PackagesPage() {
	return (
		<div className="from-background relative min-h-screen w-full overflow-hidden bg-linear-to-b to-purple-50/20 dark:to-purple-950/10">
			{/* Navigation */}
			<nav className="bg-background/80 sticky top-0 right-0 left-0 z-50 flex items-center justify-between p-4 backdrop-blur-xs">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-purple-300 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/30"
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
				<div className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full bg-purple-100 opacity-20 blur-2xl dark:bg-purple-900/20"></div>
				<div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-2xl dark:bg-purple-800/20"></div>
			</div>

			{/* Main Content */}
			<main className="relative z-10 container mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-12">
				{/* Hero Section */}
				<HeroSection packages={packages} />

				{/* Packages Grid */}
				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
					{packages.map((pkg, index) => (
						<PackageCard key={pkg.name} pkg={pkg} index={index} />
					))}
				</div>

				{/* Footer */}
				<footer className="mt-16 border-t border-gray-200/50 pt-6 text-center md:mt-20 md:pt-8 dark:border-gray-700/50">
					<p className="text-sm text-gray-500 dark:text-gray-300">
						&copy; {new Date().getFullYear()} devharshthakur.in
					</p>
				</footer>
			</main>
		</div>
	);
}
