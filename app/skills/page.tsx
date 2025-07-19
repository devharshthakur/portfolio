/**
 * Skills Page Component
 *
 * Displays a comprehensive showcase of professional skills categorized by type.
 * Features include skill rows with proficiency indicators, experience details,
 * and links to official resources. The page is fully responsive with optimized
 * layouts for both desktop and mobile devices.
 */
"use client";

import { SkillRow } from "@/components/custom/skills/components/SkillRow";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import skills, { Skill, SkillCategory, skillCategories } from "@/data/skills.data";
import { Award, BookOpen, FolderTree, Hammer, Home, Layers } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SkillsPage() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Group skills by category
	const skillsByCategory = skills.reduce<Record<SkillCategory, Skill[]>>(
		(acc, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{} as Record<SkillCategory, Skill[]>,
	);

	// Calculate stats
	const featuredSkillsCount = skills.filter((skill) => skill.featured).length;
	const learningSkillsCount = skills.filter((skill) => skill.learningStatus === "learning").length;

	return (
		<div className="from-background relative min-h-screen w-full overflow-hidden bg-linear-to-b to-green-50/20 dark:to-green-950/20">
			{/* Navigation */}
			<nav className="bg-background/80 sticky top-0 right-0 left-0 z-50 flex items-center justify-between border-slate-200/50 p-4 backdrop-blur-xs dark:border-slate-800/50">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-green-500 text-green-600 hover:bg-green-100 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/50"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>

				<ModeToggle
					className="border-green-500 hover:bg-green-100 dark:border-green-500 dark:hover:bg-green-500/50"
					iconClassName="text-green-600 dark:text-green-400"
				/>
			</nav>

			{/* Main Content */}
			<main className="relative z-10 container mx-auto max-w-5xl px-4 py-6 sm:px-6 md:py-12">
				{/* Hero Section */}
				<section className="relative mb-8 overflow-hidden rounded-xl border-2 border-slate-200/70 bg-linear-to-br from-white to-green-50/70 p-5 shadow-md backdrop-blur-xs sm:p-8 md:mb-12 md:rounded-2xl md:p-10 dark:border-slate-700/70 dark:bg-linear-to-br dark:from-gray-800 dark:to-green-900/60">
					<div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start">
						<div className="max-w-3xl space-y-5 md:space-y-6">
							{/* Title */}
							<div className="relative">
								<div className="mb-2 flex items-center gap-2">
									<span className="hidden h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-emerald-500 shadow-md sm:flex dark:from-green-400 dark:to-emerald-400">
										<Hammer className="h-4 w-4 text-white" />
									</span>
									<span className="inline-block rounded-full bg-gray-100/80 px-3 py-1 text-sm font-medium text-green-600 dark:bg-gray-700/80 dark:text-green-400">
										Skills in detailed manner
									</span>
								</div>

								<h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
									<span className="inline-block">My</span>{" "}
									<span className="relative inline-block bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
										Skills
										<span
											className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-green-400 to-emerald-500 dark:from-green-400 dark:to-emerald-400"
											aria-hidden="true"
										/>
									</span>
								</h1>

								<p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
									Showcasing {skills.length} technologies and tools
								</p>
							</div>

							{/* Description */}
							<p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-white">
								A comprehensive overview of the technologies, frameworks, and tools that I've
								mastered throughout my development journey. Each skill is rated based on proficiency
								and years of experience.
							</p>

							{/* Stats */}
							<div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 sm:gap-3">
								{/* Total Skills */}
								<div className="col-span-1 rounded-lg border border-blue-200/50 bg-linear-to-br from-blue-50 to-indigo-50 p-3 shadow-xs dark:border-blue-600/50 dark:from-blue-900/30 dark:to-indigo-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300">
										<Layers className="h-4 w-4" />
										Total Skills
									</div>
									<div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
										{skills.length}
									</div>
								</div>

								{/* Featured */}
								<div className="col-span-1 rounded-lg border border-amber-200/50 bg-linear-to-br from-amber-50 to-yellow-50 p-3 shadow-xs dark:border-amber-600/50 dark:from-amber-900/30 dark:to-yellow-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-300">
										<Award className="h-4 w-4" />
										Featured
									</div>
									<div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
										{featuredSkillsCount}
									</div>
								</div>

								{/* Learning */}
								<div className="col-span-1 rounded-lg border border-purple-200/50 bg-linear-to-br from-purple-50 to-fuchsia-50 p-3 shadow-xs dark:border-purple-600/50 dark:from-purple-900/30 dark:to-fuchsia-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300">
										<BookOpen className="h-4 w-4" />
										Learning
									</div>
									<div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
										{learningSkillsCount}
									</div>
								</div>

								{/* Categories */}
								<div className="col-span-1 rounded-lg border border-emerald-200/50 bg-linear-to-br from-emerald-50 to-green-50 p-3 shadow-xs dark:border-emerald-600/50 dark:from-emerald-900/30 dark:to-green-900/30">
									<div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">
										<FolderTree className="h-4 w-4" />
										Categories
									</div>
									<div className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
										{Object.keys(skillCategories).length}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Skills Categories Sections */}
				<div className="space-y-10 md:space-y-14">
					{Object.entries(skillsByCategory).map(([category, categorySkills]) => (
						<section key={category} className="animate-fadeIn mb-8">
							{/* Category Header */}
							<div className="relative mb-5 border-b border-gray-200 pb-2 md:mb-6 dark:border-gray-700">
								<div
									className={`absolute top-0 bottom-0 left-0 w-1.5 rounded-full bg-linear-to-b ${
										category === "frontend"
											? "from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"
											: category === "backend"
												? "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400"
												: category === "database"
													? "from-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-amber-400"
													: category === "devops"
														? "from-purple-500 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400"
														: category === "design"
															? "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400"
															: category === "testing"
																? "from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400"
																: "from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400"
									}`}
								/>

								<div className="pl-5">
									<h2 className="text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
										{skillCategories[category as SkillCategory].name}
									</h2>

									<p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
										{skillCategories[category as SkillCategory].description} •{" "}
										<span className="font-medium">
											{categorySkills.length} {categorySkills.length === 1 ? "skill" : "skills"}
										</span>
									</p>
								</div>
							</div>

							{/* Skills Rows */}
							<div className="space-y-4">
								{categorySkills.map((skill, index) => (
									<SkillRow key={skill.id} skill={skill} index={index} />
								))}
							</div>
						</section>
					))}
				</div>
			</main>
		</div>
	);
}
