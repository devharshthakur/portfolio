/**
 * Skills Page Component
 *
 * Displays a comprehensive showcase of professional skills categorized by type.
 * Features include skill rows with proficiency indicators, experience details,
 * and links to official resources. The page is fully responsive with optimized
 * layouts for both desktop and mobile devices.
 */

import { SkillRow } from "@/components/custom/skills/components/SkillRow";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import skills, { type Skill, type SkillCategory, skillCategories } from "@/data/skills.data";
import { Award, BookOpen, FolderTree, Hammer, Home, Layers } from "lucide-react";
import Link from "next/link";
export default function SkillsPage() {
	// Group skills by category
	const skillsByCategory = skills.reduce<Record<SkillCategory, Skill[]>>(
		(acc, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{} as Record<SkillCategory, Skill[]>
	);

	return (
		<div className="bg-background relative min-h-screen w-full overflow-hidden">
			{/* Navigation */}
			<nav className="bg-background/80 sticky top-0 right-0 left-0 z-50 flex items-center justify-between border-slate-200/50 p-4 backdrop-blur-xs dark:border-slate-800/50">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-2 border-green-500 text-green-600 hover:bg-green-100 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/50"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>

				<ModeToggle className="border-2 border-green-500 text-green-600 hover:bg-green-100 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/50" />
			</nav>

			{/* Main Content */}
			<main className="relative z-10 container mx-auto max-w-5xl px-4 py-6 sm:px-6 md:py-12">
				{/* Hero Section */}
				<section className="relative mb-8 overflow-hidden rounded-xl border-2 border-green-200/90 bg-emerald-50/10 p-5 shadow-md backdrop-blur-xs sm:p-8 md:mb-12 md:rounded-2xl md:p-10 dark:border-slate-700/70">
					<div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start">
						<div className="max-w-3xl space-y-5 md:space-y-6">
							{/* Title */}
							<div className="relative">
								<div className="mb-2 flex items-center gap-2">
									<span className="hidden h-8 w-8 items-center justify-center rounded-full bg-green-500 shadow-md sm:flex dark:bg-green-400">
										<Hammer className="h-4 w-4 text-white" />
									</span>
									<span className="inline-block rounded-full bg-gray-100/80 px-3 py-1 text-sm font-medium text-green-600 dark:bg-gray-700/80 dark:text-green-400">
										Skills in detailed manner
									</span>
								</div>

								<h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
									<span className="inline-block">My</span>{" "}
									<span className="relative inline-block text-green-600 dark:text-green-400">
										Skills
										<span
											className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-green-500 dark:bg-green-400"
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
						</div>
					</div>
				</section>

				{/* Skills Categories Sections */}
				<div className="space-y-10 md:space-y-14">
					{Object.entries(skillsByCategory).map(([category, categorySkills]) => (
						<section key={category} className="animate-fadeIn mb-8">
							{/* Category Header */}
							<div className="relative mb-6 rounded-lg border-2 border-emerald-300 bg-emerald-100/10 p-4 md:mb-8 dark:border-emerald-700 dark:bg-gray-800/20">
								<div className="flex items-center gap-3 pl-3">
									<div className="flex-1">
										<h2 className="text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
											{skillCategories[category as SkillCategory].name}
										</h2>
										<p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
											{skillCategories[category as SkillCategory].description} •{" "}
											<span className="font-medium text-green-600 dark:text-green-400">
												{categorySkills.length} {categorySkills.length === 1 ? "skill" : "skills"}
											</span>
										</p>
									</div>
									<div className="hidden rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 sm:block dark:bg-green-900/30 dark:text-green-300">
										{categorySkills.length}
									</div>
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
