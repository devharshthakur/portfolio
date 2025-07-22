/**
 * LiveDemoButton component renders a button that links to a live demo of a project if available.
 * If the project does not have a live demo, it shows a striked-through "See Live" button that,
 * when clicked, opens a dialog with information on how to run the project locally.
 * The dialog includes details about the project's status (e.g., "In Development") and instructions for local setup.
 *
 * @param {Object} props - The component props.
 * @param {Project} props.project - The project object containing details such as live demo URL, development status, and tags.
 */
"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data/projects.data";
import { Calendar, Clock, ExternalLink, Github, Terminal } from "lucide-react";
import { BsCpuFill } from "react-icons/bs";

interface LiveDemoButtonProps {
	project: Project;
}

export function LiveDemoButton({ project }: LiveDemoButtonProps) {
	const hasLiveDemo =
		project.liveDemoUrl && project.liveDemoUrl !== "local" && project.liveDemoUrl !== "#";

	if (hasLiveDemo) {
		return (
			<Button
				size="sm"
				asChild
				className="border-2 border-green-500 bg-green-600 hover:bg-green-700 dark:border-green-600 dark:bg-green-700 dark:hover:bg-green-600"
			>
				<a
					href={project.liveDemoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center"
				>
					<ExternalLink className="mr-1 h-4 w-4" />
					See Live
				</a>
			</Button>
		);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					size="sm"
					className="flex items-center border-2 border-purple-500 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:border-purple-600 dark:bg-purple-900/40 dark:text-purple-400 dark:hover:bg-purple-800/60"
				>
					<ExternalLink className="mr-1 h-4 w-4" />
					<span className="line-through decoration-1">See Live</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="rounded-md border-2 border-purple-300 p-0 shadow-xs sm:max-w-2xl dark:border-purple-700">
				<div className="grid grid-cols-[1fr_auto] gap-4 bg-purple-50/50 p-4 pb-2 dark:bg-purple-950/10">
					<div className="flex items-center gap-2">
						<div className="rounded-sm border border-purple-200 bg-purple-100 p-1.5 dark:border-purple-800/50 dark:bg-purple-900/30">
							<BsCpuFill className="h-4 w-4 text-purple-600 dark:text-purple-400" />
						</div>
						<div>
							<DialogTitle className="text-base text-slate-800 dark:text-slate-200">
								{project.isInDevelopment ? "In Development" : "Local Project"}
							</DialogTitle>
							<DialogDescription className="text-xs text-slate-600 dark:text-slate-400">
								{project.isInDevelopment
									? "This project is currently under development"
									: "This project is not deployed but can be run locally"}
							</DialogDescription>
						</div>
					</div>
					{project.isInDevelopment && (
						<Badge
							variant="outline"
							className="h-fit border-purple-300 bg-purple-100/80 text-purple-700 dark:border-purple-700/50 dark:bg-purple-900/30 dark:text-purple-300"
						>
							In Progress
						</Badge>
					)}
				</div>

				<div className="grid grid-cols-[2fr_1fr] gap-4 px-4 py-2">
					<div className="rounded-sm border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/40">
						<div className="mb-1.5 flex items-center gap-2">
							<Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
							<h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">
								Run locally instead
							</h3>
						</div>
						<ol className="ml-5 list-decimal space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
							<li>Clone the repository from GitHub</li>
							<li>Install dependencies using npm or yarn</li>
							<li>Follow setup instructions in the README</li>
							<li>
								Run the development server with{" "}
								<code className="rounded bg-purple-100/50 px-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
									npm run dev
								</code>
							</li>
						</ol>
					</div>

					<div className="space-y-2">
						<div className="flex flex-wrap items-center gap-1.5">
							{project.tags &&
								project.tags.slice(0, 3).map((tag, index) => (
									<Badge
										key={index}
										variant="secondary"
										className="h-5 bg-slate-100 px-1.5 py-0 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
									>
										{tag}
									</Badge>
								))}
						</div>

						<div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
							<div className="flex items-center gap-1">
								<Calendar className="h-3 w-3 text-slate-500 dark:text-slate-500" />
								<span>{project.date}</span>
							</div>
							<div className="flex items-center gap-1">
								<Clock className="h-3 w-3 text-slate-500 dark:text-slate-500" />
								<span>{project.duration}</span>
							</div>
						</div>
					</div>
				</div>

				<Separator className="border-slate-200 dark:border-slate-700/50" />

				<DialogFooter className="flex justify-between bg-slate-50/80 p-3 dark:bg-slate-800/30">
					<Button
						variant="outline"
						size="sm"
						asChild
						className="h-8 border-purple-300 text-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:border-purple-600 dark:hover:bg-purple-900/20"
					>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center"
						>
							<Github className="mr-1 h-3.5 w-3.5" />
							View Repository
						</a>
					</Button>
					<DialogTrigger asChild>
						<Button
							size="sm"
							className="h-8 border border-purple-500 bg-purple-600 hover:bg-purple-700 dark:border-purple-600 dark:bg-purple-700 dark:hover:bg-purple-600"
						>
							I Understand
						</Button>
					</DialogTrigger>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
