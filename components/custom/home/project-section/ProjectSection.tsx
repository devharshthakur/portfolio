import { Button } from "@/components/ui/button";
import projects from "@/data/projects.data";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { HomePageProjectCard } from "./components/HomePagProjectCard";

// Only show the top 4 projects
const topProjects = projects.slice(0, 4);

export default function Projects() {
	return (
		<section className="relative w-full overflow-hidden rounded-lg border-2 border-emerald-400/80 bg-emerald-50/80 py-8 shadow-sm backdrop-brightness-[1.02] backdrop-contrast-[1.05] backdrop-saturate-[1.2] dark:border-emerald-700/80 dark:bg-emerald-950/80">
			<div className="relative z-10 container max-w-full px-4 md:px-8 lg:px-12">
				<div className="mb-6 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Building2 className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
						<h2 className="font-mono text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-300">
							Projects
						</h2>
					</div>
					<Button
						variant="outline"
						className="border-2 border-emerald-500/90 bg-emerald-50/80 font-mono text-sm text-emerald-800 shadow-sm hover:bg-emerald-100/90 dark:border-emerald-600/80 dark:bg-emerald-900/60 dark:text-emerald-300 dark:hover:bg-emerald-800/60"
						asChild
					>
						<Link href="/projects">
							<Building2 />
							View All Projects
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
					{topProjects.map((project) => (
						<HomePageProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
