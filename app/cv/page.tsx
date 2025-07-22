import { ModeToggle } from "@/components/mode-toogle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";
import { TbFileCv } from "react-icons/tb";
import Link from "next/link";
import { DownloadButton } from "@/components/custom/cv/util/DownloadButton";

export default function CvPage() {
	return (
		<div className="from-background relative min-h-screen w-full overflow-hidden bg-linear-to-b to-indigo-50/20 dark:to-indigo-950/10">
			<div className="absolute top-4 right-4 z-50">
				<ModeToggle />
			</div>

			{/* Home Button */}
			<div className="absolute top-4 left-4 z-50">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-900/30"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem] transition-all" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>
			</div>

			{/* Main content */}
			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
				<div className="mx-auto w-full max-w-3xl text-center">
					<div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
						<div className="absolute inset-0 rounded-full bg-indigo-200/50 blur-lg dark:bg-indigo-800/30"></div>
						<div className="relative z-10">
							<TbFileCv className="h-20 w-20 text-indigo-600 dark:text-indigo-400" />
						</div>
					</div>

					<h1 className="mb-6 text-3xl font-bold text-slate-800 md:text-5xl dark:text-slate-200">
						<span className="relative">
							Download My CV
							<span className="absolute right-0 -bottom-1 left-0 h-1 bg-indigo-300 opacity-50 dark:bg-indigo-700"></span>
						</span>
					</h1>

					<Badge className="mt-2 mb-8 border border-indigo-300 bg-indigo-100 px-3 py-1.5 text-indigo-700 hover:bg-indigo-200 dark:border-indigo-700/60 dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-800/60">
						Showcasing my experience, skills, and education
					</Badge>

					<Card className="mb-8 border-indigo-200 bg-white/80 p-6 shadow-md backdrop-blur-xs dark:border-indigo-800/50 dark:bg-zinc-900/80">
						<div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
							<div className="flex-1 text-center md:text-left">
								<h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
									What you'll find in my CV
								</h3>
								<ul className="list-inside list-disc text-sm text-slate-600 dark:text-slate-400">
									<li>Professional Experience</li>
									<li>Technical Skills</li>
									<li>Education & Certifications</li>
									<li>Projects & Achievements</li>
									<li>Contact Information</li>
								</ul>
							</div>
							<div className="flex flex-col items-center justify-center">
								<DownloadButton />
								<span className="mt-2 text-xs text-slate-500 dark:text-slate-400">PDF, 1 page</span>
							</div>
						</div>
					</Card>

					<p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
						For a detailed overview of my background, skills, and accomplishments, download my CV
						using the button above. If you have any questions or would like to connect, feel free to
						reach out!
					</p>
				</div>

				{/* Footer */}
				<footer className="absolute bottom-4 w-full text-center">
					<p className="text-xs text-slate-500 dark:text-slate-500">
						&copy; {new Date().getFullYear()} devharshthakur.in
					</p>
				</footer>
			</div>
		</div>
	);
}
