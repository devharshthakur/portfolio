/**
 * HeroSection Component
 *
 * Displays the hero section of the packages page, including:
 * - Title and subtitle
 * - Description
 * - Package statistics
 */
import { Package } from "@/data/packages.data";
import { PackageIcon } from "lucide-react";
import { PackageStats } from "./PackageStats";

interface HeroSectionProps {
	packages: Package[];
}

export function HeroSection({ packages }: HeroSectionProps) {
	return (
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
						A collection of TypeScript/JavaScript libraries and tools I've developed and published
						to the npm registry. Each package is designed with type-safety, performance, and
						developer experience in mind.
					</p>

					{/* Stats */}
					<PackageStats packages={packages} />
				</div>
			</div>
		</section>
	);
}
