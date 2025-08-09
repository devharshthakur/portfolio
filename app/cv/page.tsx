import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { Home, FileText } from "lucide-react";
import Link from "next/link";
import { DownloadButton } from "@/components/custom/cv/DownloadButton";

export default function CvPage() {
	return (
		<div className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950">
			{/* Navigation */}
			<nav className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between p-6">
				<Button
					asChild
					variant="outline"
					size="default"
					className="border-2 border-indigo-300 bg-white text-indigo-700 shadow-sm hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md dark:border-indigo-700 dark:bg-slate-900 dark:text-indigo-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-950"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>
				<ModeToggle className="border-2 border-slate-300 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600" />
			</nav>

			{/* Main Content */}
			<main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
				<div className="mx-auto w-full max-w-2xl">
					{/* Centered Download CV Section - Cardless Design */}
					<div className="flex flex-col items-center space-y-8 text-center">
						{/* Icon with enhanced styling */}
						<div className="relative">
							<div className="absolute inset-0 scale-150 rounded-full bg-emerald-200/30 blur-2xl dark:bg-emerald-800/30"></div>
							<div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-200 bg-emerald-600 shadow-2xl dark:border-emerald-700 dark:bg-emerald-500">
								<FileText className="h-14 w-14 text-white drop-shadow-lg" />
							</div>
						</div>

						{/* Title */}
						<div className="space-y-4">
							<h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
								Download My CV
							</h1>
							<p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
								Get the complete PDF version of my curriculum vitae with all my professional
								details, experience, and achievements
							</p>
						</div>

						{/* Download Button */}
						<div className="pt-3">
							<DownloadButton />
						</div>

						{/* File Details */}
						<div className="flex flex-wrap items-center justify-center gap-7 pt-4 text-base">
							<span className="flex items-center gap-3 rounded-md bg-green-100 px-5 py-3 font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
								<FileText className="h-5 w-5" />
								PDF Format
							</span>
							<span className="flex items-center gap-3 rounded-md bg-blue-100 px-6 py-3 font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<rect x="6" y="4" width="12" height="16" rx="2" />
									<line x1="9" y1="8" x2="15" y2="8" />
								</svg>
								1 Page
							</span>
							<span className="flex items-center gap-3 rounded-md bg-purple-100 px-6 py-3 font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
								<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
								</svg>
								Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
							</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
