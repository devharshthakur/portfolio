/**
 * Packages Page Component
 *
 * Displays a portfolio of npm packages developed and published by the author.
 * Each package is presented with details including name, description,
 * download statistics, version information, and links to GitHub and npm.
 */
"use client";

import { PackageCard } from "@/components/custom/packages/components/PackageCard";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import packages from "@/data/packages.data";
import type { Package } from "@/data/packages.data";
import { Home, PackageIcon, Download } from "lucide-react";
import Link from "next/link";
export default function PackagesPage() {
	return (
		<div className="from-background relative min-h-screen overflow-hidden bg-linear-to-b to-purple-50/20 dark:to-purple-950/10">
			{/* Navigation */}
			<nav className="bg-background/80 sticky top-0 right-0 left-0 z-50 flex items-center justify-between p-4 backdrop-blur-xs">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-2 border-purple-300 text-purple-700 hover:bg-purple-100 dark:border-2 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/30"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>

				<ModeToggle className="border-2 border-purple-300 bg-purple-50 text-purple-500 hover:border-purple-400 hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900 dark:hover:border-purple-600" />
			</nav>
			{/* Main Content */}
			<main className="relative z-10 container mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-12">
				{/* Hero Section */}
				<section className="relative mb-8 overflow-hidden rounded-xl border-2 border-slate-200/70 bg-linear-to-br from-white to-purple-50/70 p-5 shadow-md backdrop-blur-xs sm:p-8 md:mb-12 md:rounded-2xl md:p-10 dark:border-slate-700/70 dark:from-gray-800 dark:to-purple-900/60">
					<div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start">
						<div className="max-w-3xl space-y-5 md:space-y-6">
							{/* Title */}
							<div className="relative">
								<div className="mb-2 flex items-center gap-2">
									<span className="hidden h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-400 to-indigo-500 shadow-md sm:flex dark:from-purple-400 dark:to-indigo-400">
										<PackageIcon className="h-4 w-4 text-white" />
									</span>
									<span className="inline-block rounded-full bg-gray-100/80 px-3 py-1 text-sm font-medium text-purple-600 dark:bg-gray-700/80 dark:text-purple-400">
										npm packages
									</span>
								</div>

								<h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
									<span className="inline-block">My</span>{" "}
									<span className="relative inline-block bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
										Packages
										<span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-purple-400 to-indigo-500 dark:from-purple-400 dark:to-indigo-400" />
									</span>
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Showing {packages.length} published npm packages
								</p>
							</div>

							{/* Description */}
							<p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-white">
								A collection of TypeScript/JavaScript libraries and tools I've developed and
								published to the npm registry. Each package is designed with type-safety,
								performance, and developer experience in mind.
							</p>

							{/* Stats */}
							<div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-3 sm:gap-3">
								{/* Total Packages */}
								<div className="col-span-1 rounded-lg border border-purple-200/50 bg-linear-to-br from-purple-50 to-indigo-50 p-3 shadow-xs dark:border-purple-600/50 dark:from-purple-900/30 dark:to-indigo-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300">
										<PackageIcon className="h-4 w-4" />
										Total Packages
									</div>
									<div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
										{packages.length}
									</div>
								</div>

								{/* Total Downloads */}
								<div className="col-span-1 rounded-lg border border-blue-200/50 bg-linear-to-br from-blue-50 to-cyan-50 p-3 shadow-xs dark:border-blue-600/50 dark:from-blue-900/30 dark:to-cyan-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300">
										<Download className="h-4 w-4" />
										Total Downloads
									</div>
									<div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
										{packages.reduce(
											(total: number, pkg: Package) =>
												total + (parseInt(pkg.downloads || "0") || 0),
											0
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Packages Grid */}
				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
					{packages.map((pkg, index) => (
						<PackageCard key={pkg.name} pkg={pkg} index={index} />
					))}
				</div>
			</main>
		</div>
	);
}
