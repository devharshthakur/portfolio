import { ModeToggle } from "@/components/mode-toogle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitFork, GitPullRequest, Home, Star, Zap, Scale } from "lucide-react";
import Link from "next/link";
import { SiTypescript } from "react-icons/si";

export default function ContributePage() {
	return (
		<div className="relative min-h-screen w-full bg-neutral-900">
			{/* Fixed header with controls */}
			<header className="sticky top-2 z-50 w-full border-slate-200/80 backdrop-blur-sm dark:border-slate-800/80">
				<div className="mx-auto flex h-14 w-full items-center justify-between px-4 sm:px-6">
					<Button
						asChild
						variant="outline"
						size="icon"
						className="ml-2 border-slate-300 p-2.5 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
					>
						<Link href="/">
							<Home className="h-[1.3rem] w-[1.3rem]" />
							<span className="sr-only">Back to home</span>
						</Link>
					</Button>

					<ModeToggle className="mr-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800" />
				</div>
			</header>

			{/* Main content */}
			<main className="relative mx-auto my-24 max-w-screen-2xl px-4 sm:px-6 md:py-16 lg:px-8">
				{/* Hero Section */}
				<section className="relative mb-20 md:mb-24">
					<div className="mb-6 flex items-center justify-center">
						<div className="rounded-full bg-zinc-100/80 p-3.5 dark:bg-zinc-900/60">
							<div className="rounded-full bg-zinc-700/90 p-3.5 text-white dark:bg-zinc-600/90">
								<GitPullRequest className="h-8 w-8" />
							</div>
						</div>
					</div>

					<h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
						Open Source Portfolio
					</h1>

					<div className="mx-auto mb-10 max-w-3xl text-center">
						<p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
							This portfolio is completely open source and available as a template for developers.
							Built with modern technologies and best practices, it's designed to be easily
							customizable for your personal brand.
						</p>

						<div className="flex flex-wrap items-center justify-center gap-4">
							<Badge className="border-2 border-zinc-200 bg-zinc-100/80 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-900/60 dark:text-zinc-200">
								<Scale className="mr-1.5 h-4 w-4" />
								MIT License
							</Badge>

							<Badge className="border-2 border-green-200 bg-green-100/80 px-3.5 py-1.5 text-sm font-medium text-green-700 dark:border-green-700/50 dark:bg-green-900/60 dark:text-green-200">
								<Zap className="mr-1.5 h-4 w-4" />
								Next.js 15.4
							</Badge>

							<Badge className="border-2 border-blue-200 bg-blue-100/80 px-3.5 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-700/50 dark:bg-blue-900/60 dark:text-blue-200">
								<SiTypescript className="mr-1.5 h-4 w-4" />
								TypeScript
							</Badge>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="mx-auto mb-12 flex flex-wrap items-center justify-center gap-4">
						<Button
							variant="outline"
							size="lg"
							className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100/80 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/80"
							asChild
						>
							<a
								href="https://github.com/devharshthakur/portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<GitPullRequest className="h-5 w-5" />
								<span>View on Github</span>
							</a>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="border-2 border-amber-500 bg-amber-100/80 text-amber-700 hover:bg-amber-200/80 dark:border-amber-500 dark:bg-amber-900/40 dark:text-amber-400 dark:hover:bg-amber-900/60"
							asChild
						>
							<a
								href="https://github.com/devharshthakur/portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<Star className="h-5 w-5" />
								<span>Star Repository</span>
							</a>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100/80 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/80"
							asChild
						>
							<a
								href="https://github.com/devharshthakur/portfolio/fork"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<GitFork className="h-5 w-5" />
								<span>Fork Project</span>
							</a>
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
