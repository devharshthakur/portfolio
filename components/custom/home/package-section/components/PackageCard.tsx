"use client";

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

import { Icons } from "@/components/custom/home/skills-section/utils/icon.export";
import { Button } from "@/components/ui/button";
import { Package as PackageType } from "@/data/packages.data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaNpm } from "react-icons/fa";

interface PackageCardProps extends Omit<PackageType, "longDescription" | "tags"> {
	// Props come from PackageType with omitted properties
}

export function PackageCard({
	name,
	description,
	githubUrl,
	npmUrl,
	downloads,
	version,
}: PackageCardProps) {
	const isUnpublished: boolean = npmUrl === "#";
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex flex-col overflow-hidden rounded-lg border-2 border-red-300/80 bg-white shadow-md transition-all duration-300 hover:border-red-400 hover:shadow-xl dark:border-red-700/80 dark:bg-red-900/40 dark:hover:border-red-600">
			{/* Header section - lighter red */}
			<div className="flex items-center justify-between border-b border-red-200/80 bg-red-100/60 p-3 dark:border-red-700/60 dark:bg-red-800/50">
				<h3 className="font-mono text-xl font-semibold tracking-tight text-red-900 dark:text-red-100">
					{name}
				</h3>
				<span className="rounded-md border-2 border-amber-500 bg-transparent px-1.5 py-0.5 font-mono text-[10px] text-amber-700 dark:border-amber-400 dark:text-amber-300">
					{version || "v1.0.0"}
				</span>
			</div>

			{/* Content section - darker red */}
			<div className="h-[180px] overflow-auto bg-white/90 p-3 dark:bg-red-900/30">
				<div className="space-y-2">
					<h4 className="font-mono text-lg font-semibold tracking-tight text-red-900 dark:text-red-100">
						{name}
					</h4>
					<p className="font-mono text-sm leading-relaxed text-red-800 dark:text-red-200">
						{description}
					</p>

					{!isUnpublished && (
						<div className="mt-2 inline-flex items-center rounded-md border-2 border-amber-500 bg-transparent px-1.5 py-0.5 font-mono text-[10px] text-amber-700 dark:border-amber-400 dark:text-amber-300">
							<Icons.FaDownload className="mr-1 h-2.5 w-2.5 text-amber-700 dark:text-amber-300" />
							<span className="font-medium">{downloads || "N/A"}</span>
							<span className="ml-1">weekly downloads</span>
						</div>
					)}

					{isUnpublished && (
						<div className="mt-2 inline-flex items-center rounded-md border-2 border-amber-500 bg-transparent px-1.5 py-0.5 font-mono text-[10px] text-amber-700 dark:border-amber-400 dark:text-amber-300">
							<span className="font-medium">Coming soon</span>
						</div>
					)}
				</div>
			</div>

			{/* Footer section - medium-dark red */}
			<div className="mt-auto grid grid-cols-2 gap-2 border-t border-red-200/80 bg-red-50/80 p-3 dark:border-red-700/60 dark:bg-red-800/30">
				<Button
					variant="outline"
					className="flex items-center gap-2 border-2 border-red-500/80 bg-red-50/70 font-mono text-sm tracking-tight text-red-800 shadow-sm hover:bg-red-100/70 dark:border-red-600/80 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-800/60"
					onClick={() => window.open(githubUrl, "_blank")}
				>
					<Icons.FaGithub className="h-4 w-4" />
					<span>$ git clone</span>
				</Button>

				{isUnpublished ? (
					<Button
						variant="outline"
						className="flex cursor-not-allowed items-center gap-2 border-2 border-red-300/80 bg-red-50/50 font-mono text-sm tracking-tight text-red-600/80 opacity-80 dark:border-red-700/60 dark:bg-red-800/40 dark:text-red-400/80"
						disabled
					>
						<FaNpm className="h-4 w-4" />
						<span>Coming Soon</span>
					</Button>
				) : (
					<Button
						variant="outline"
						className="flex items-center gap-2 border-2 border-red-500/90 bg-red-600/90 font-mono text-sm tracking-tight text-white shadow-sm hover:bg-red-700/90 dark:border-red-600/80 dark:bg-red-600/80 dark:hover:bg-red-500/80"
						onClick={() => window.open(npmUrl, "_blank")}
					>
						<FaNpm className="h-4 w-4" />
						<span>Install Package</span>
					</Button>
				)}
			</div>
		</div>
	);
}
