"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import skills from "@/data/skills.data";
import { Briefcase, Hammer } from "lucide-react";
import Link from "next/link";
import { SkillItem } from "./components/SkillItem";

export function Skills() {
	const featuredSkills = skills.filter((skill) => skill.featured);
	const nonFeaturedSkills = skills.filter((skill) => !skill.featured);
	const displayedSkills = [...featuredSkills, ...nonFeaturedSkills].slice(0, 8);

	return (
		<Card className="border-2 border-indigo-400 bg-indigo-50/30 p-4 shadow-xs dark:border-indigo-600 dark:bg-indigo-950/10">
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<SectionTitle
						icon={<Briefcase size={20} className="text-indigo-600 dark:text-indigo-400" />}
					>
						Skills & Technologies
					</SectionTitle>

					<Button
						asChild
						variant="outline"
						size="sm"
						className="border-indigo-600 text-indigo-600 hover:border-indigo-700 hover:text-indigo-700 dark:border-indigo-600 dark:text-indigo-400 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
					>
						<Link href="/skills" className="flex items-center gap-1.5">
							<Hammer className="h-3.5 w-3.5" />
							<span>View All Skills</span>
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
					{displayedSkills.map((skill, index) => (
						<SkillItem key={skill.id} skill={skill} />
					))}
				</div>
			</div>
		</Card>
	);
}
