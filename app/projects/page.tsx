/**
 * @file page.tsx
 * @description Projects page component that displays a list of all projects in the portfolio
 * Features a responsive header with statistics, project filtering, and detailed project cards
 *
 * @component ProjectsPage
 * @returns {JSX.Element} The complete projects page with header, stats, and project list
 */

import { ProjectCard } from "@/components/custom/projects/components/project-card";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects.data";
import { Building2, GitFork, Home, Star } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
	return (
		<main className="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-zinc-900">
			{/* Navigation */}
			<nav className="sticky top-0 right-0 left-0 z-50 flex items-center justify-between border-slate-200/50 bg-gray-50/90 p-4 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/90">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-200 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem] transition-all" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>

				<ModeToggle className="border-2 border-emerald-400 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/30" />
			</nav>

			<div className="relative z-10 container mx-auto max-w-6xl px-4 py-6 md:py-12">
				{/* Modern Header */}
				<header className="mb-8 md:mb-16">
					<div className="relative overflow-hidden rounded-2xl border-2 border-green-500 bg-neutral-100 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
						<div className="relative z-10 flex flex-col p-8 md:p-10">
							{/* Title and description */}
							<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
								<div className="max-w-2xl">
									<div className="mb-4 flex items-center gap-2">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
											<Building2 className="h-5 w-5" />
										</div>

										<span className="ml-2 text-lg font-bold text-emerald-700 underline text-shadow-emerald-100 dark:text-emerald-300">
											Portfolio Showcase
										</span>
									</div>

									<h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
										<span className="text-gray-900 dark:text-white">My </span>
										<span className="text-emerald-600 dark:text-emerald-400">Projects</span>
									</h1>

									<p className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
										A collection of my work showcasing various technologies and solutions. Each
										project reflects my problem-solving approach and technical expertise.
									</p>
								</div>
							</div>
						</div>
					</div>
				</header>

				<section className="mx-auto mb-6 w-full md:mb-10">
					<div className="flex flex-col justify-between gap-3 pb-4 sm:flex-row sm:items-center">
						<h2 className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-gray-200">
							<span className="h-8 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700"></span>
							Project Showcase
						</h2>
					</div>
					<hr className="h-px border-none bg-gradient-to-r from-emerald-400/60 via-emerald-300/30 to-transparent dark:from-emerald-600/60 dark:via-emerald-600/20 dark:to-transparent" />
				</section>

				<section className="relative mx-auto">
					<article className="relative z-10 overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-zinc-900">
						<ul className="relative z-10 divide-y-2 divide-gray-300 dark:divide-zinc-800">
							{projects.map((project, index) => (
								<li key={project.title}>
									<ProjectCard project={project} index={index} />
								</li>
							))}
						</ul>
					</article>
				</section>
			</div>
		</main>
	);
}
