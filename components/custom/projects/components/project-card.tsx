/**
 * @file project-card.tsx
 * @description A reusable component for displaying project information in a card format.
 * This component is used in the projects page to showcase individual projects with their details,
 * including title, description, tech stack, and statistics.
 *
 * @component ProjectCard
 * @param {Object} props - The component props
 * @param {Project} props.project - The project data object containing title, description, and other details
 * @param {number} props.index - The index of the project in the list
 * @param {number} props.totalProjects - Total number of projects
 * @param {boolean} props.mounted - Whether the component is mounted
 * @param {string | undefined} props.resolvedTheme - The current theme (light/dark)
 *
 * @features
 * - Responsive design with different layouts for mobile and desktop
 * - Dynamic image loading with fallback placeholder
 * - Theme-aware styling using raw Tailwind CSS classes
 * - Interactive elements (links, buttons)
 * - Tech stack display with custom badges
 * - Development status indicator
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects.data";
import { Building2, Calendar, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	formatDate,
	getLinkButtonText,
	shouldShowRunLocallyButton,
} from "../util/project-display-utils";
import { getTechColor } from "../util/tech-color-utils";
import { FaGithub } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	const projectUrl = project.liveDemoUrl || project.githubUrl;
	const isLocalProject = project.liveDemoUrl === "local";
	const shouldShowRunLocally = shouldShowRunLocallyButton(isLocalProject, project.title);

	const { tags } = project;
	const limitedTech = tags.slice(0, 6);

	// Only show at most 6 technologies initially
	const hasTechOverflow = tags.length > 6;

	// Inline row background logic - enhanced contrast for light mode
	const isEven = index % 2 === 0;
	const rowBackground = isEven
		? "bg-white dark:bg-zinc-900/30"
		: "bg-gray-50/90 dark:bg-zinc-900/60";

	return (
		<article className="animate-fadeIn">
			<div
				className={`${rowBackground} transition-colors duration-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20`}
			>
				{/* Project Card Layout */}
				<div className="bg-linear-to-r from-emerald-50/80 via-white to-transparent px-6 py-4 md:px-8 md:py-6 dark:bg-linear-to-r dark:from-emerald-900/30 dark:via-emerald-900/10 dark:to-transparent">
					<div className="flex flex-col gap-6 lg:gap-8 xl:flex-row">
						{/* Content Column */}
						<div className="flex-1 space-y-4 lg:space-y-6">
							{/* Header with Title */}
							<div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
								<div>
									{/* Title */}
									<h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">
										{project.title}
										{project.isInDevelopment && (
											<span className="ml-2 inline-flex items-center rounded bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
												In Development
											</span>
										)}
									</h3>
								</div>

								{/* GitHub Link */}
								{project.githubUrl && (
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
										<Button
											size="icon"
											className="border-2 border-emerald-500 bg-white text-emerald-600 shadow-md hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-600 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-800 dark:hover:text-emerald-200"
										>
											<FaGithub className="h-4 w-4" />
										</Button>
									</a>
								)}
							</div>

							{/* Image for small screens */}
							<div className="bg-card group relative block aspect-video overflow-hidden rounded-lg border-2 border-emerald-200 shadow-md transition-colors hover:border-emerald-500 dark:border-emerald-800/60 dark:hover:border-emerald-600">
								{project.imageUrl ? (
									<Link
										href={projectUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="block h-full w-full"
									>
										<div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/0 transition-colors group-hover:bg-slate-900/30">
											<span className="flex items-center rounded-full bg-slate-900/70 px-3 py-1.5 font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
												<ExternalLink className="mr-1.5 h-3.5 w-3.5" />
												{getLinkButtonText(shouldShowRunLocally, !!project.liveDemoUrl)}
											</span>
										</div>
										<Image
											src={project.imageUrl}
											alt={project.title}
											className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
											width={600}
											height={338}
											priority={index < 2}
										/>
									</Link>
								) : (
									<div className="flex h-full items-center justify-center bg-gradient-to-br from-white to-emerald-50 p-4 text-center text-emerald-600 dark:from-emerald-900/20 dark:to-emerald-800/30 dark:text-emerald-300">
										<div className="flex flex-col items-center">
											<div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 shadow-sm dark:bg-emerald-700/50">
												<Building2 className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
											</div>
											<span className="text-sm font-medium">{project.title}</span>
										</div>
									</div>
								)}
							</div>

							<div className="flex flex-wrap gap-3 sm:flex-nowrap">
								{shouldShowRunLocally ? (
									<Button
										size="sm"
										variant="outline"
										asChild
										className="border-2 border-emerald-300 bg-emerald-50 font-medium text-emerald-700 shadow-sm hover:bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 dark:hover:bg-emerald-800/40"
									>
										<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
											<BsCpu className="mr-1.5 h-4 w-4" />
											Run Locally
										</Link>
									</Button>
								) : (
									<Button
										size="sm"
										variant="outline"
										asChild
										className="border-emerald-300 font-medium text-emerald-700 shadow-sm hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
									>
										<Link href={projectUrl} target="_blank" rel="noopener noreferrer">
											{project.liveDemoUrl !== "#" ? (
												<>
													<IoIosLink />
													View Demo
												</>
											) : (
												<>
													<FaGithub className="mr-1.5 h-4 w-4" />
													View Project
												</>
											)}
										</Link>
									</Button>
								)}

								{/* Technologies */}
								<div className="flex flex-1 flex-wrap items-center gap-1.5">
									{limitedTech.map((tech) => (
										<Badge
											key={tech}
											variant="outline"
											className={`border text-xs ${getTechColor(tech)}`}
										>
											{tech}
										</Badge>
									))}
									{hasTechOverflow && (
										<Badge
											variant="outline"
											className="border-gray-200 bg-gray-50 text-gray-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-gray-300"
										>
											+{tags.length - 6} more
										</Badge>
									)}
								</div>
							</div>
						</div>

						{/* Long description (for large screens only) */}
						<div className="hidden h-full w-96 xl:block">
							<div className="relative flex flex-col border-l-2 border-emerald-200 pl-6 text-left dark:border-emerald-800">
								<h4 className="mb-2 flex items-center text-2xl font-bold font-medium text-neutral-800 dark:text-neutral-100">
									About this project
								</h4>
								<div className="space-y-3 text-sm text-neutral-900 dark:text-neutral-400">
									<p className="leading-relaxed">{project.longDescription}</p>

									{/* Project details */}
									<div className="mt-4 rounded-lg border border-neutral-200 bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm dark:border-zinc-700/50 dark:from-zinc-900/80 dark:to-zinc-800/50">
										<h5 className="mb-3 flex items-center font-medium text-neutral-700 dark:text-neutral-200">
											<span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
												<Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
											</span>
											Project Details
										</h5>

										<div className="grid grid-cols-1 gap-3">
											<div className="group flex items-center rounded-md border border-neutral-100 bg-white/80 p-2 transition-colors hover:bg-emerald-50/50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:bg-emerald-900/10">
												<span className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-900/20 dark:group-hover:bg-blue-900/30">
													<Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
												</span>
												<div>
													<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
														Release Date
													</p>
													<p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
														{formatDate(project.date)}
													</p>
												</div>
											</div>

											<div className="group flex items-center rounded-md border border-neutral-100 bg-white/80 p-2 transition-colors hover:bg-emerald-50/50 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:bg-emerald-900/10">
												<span className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-purple-50 transition-colors group-hover:bg-purple-100 dark:bg-purple-900/20 dark:group-hover:bg-purple-900/30">
													<Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
												</span>
												<div>
													<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
														Development Time
													</p>
													<p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
														{project.duration}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
