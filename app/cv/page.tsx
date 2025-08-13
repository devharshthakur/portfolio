import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { Home, FileText } from "lucide-react";
import { FaFileAlt, FaStar } from "react-icons/fa";
import Link from "next/link";
import { DownloadButton } from "@/components/custom/cv/DownloadButton";

export default function CvPage() {
	return (
		<div className="relative min-h-screen w-full bg-white dark:bg-neutral-900/80">
			{/* Navigation */}
			<nav className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between p-6">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-2 border-neutral-400 bg-white text-neutral-800 shadow-md hover:border-neutral-500 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-950"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>
				<ModeToggle className="border-2 border-neutral-400 text-neutral-800 shadow-md hover:border-neutral-500 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-950" />
			</nav>

			{/* Main Content */}
			<main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
				<div className="mx-auto w-full max-w-2xl">
					{/* Centered Download CV Section - Cardless Design */}
					<div className="flex flex-col items-center space-y-8 text-center">
						{/* Icon with enhanced styling */}
						<div className="relative">
							<div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-lg border-4 border-emerald-500 bg-emerald-600 shadow-2xl dark:border-emerald-700 dark:bg-emerald-500">
								<FileText className="h-14 w-14 text-white drop-shadow-lg" />
							</div>
						</div>

						{/* Title */}
						<div className="space-y-4">
							<h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-50">
								Download My CV
							</h1>
							<p className="z-20 mx-auto max-w-2xl text-xl leading-relaxed text-neutral-700 dark:text-neutral-400">
								Get the complete PDF version of my curriculum vitae with all my professional
								details, experience, and achievements
							</p>
						</div>

						{/* Download Button */}
						<div className="pt-1">
							<DownloadButton className="border-2 border-emerald-500 bg-emerald-50 text-emerald-600 shadow-lg hover:bg-emerald-700 hover:text-neutral-50 dark:border-emerald-500 dark:bg-emerald-600 dark:text-emerald-100 dark:hover:bg-emerald-700 dark:hover:text-white" />
						</div>

						{/* File Details */}
						<div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-base">
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-emerald-500 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 dark:border-green-500 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800"
							>
								<FileText className="mr-1 h-5 w-5" />
								PDF Format
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-blue-500 bg-blue-50 text-blue-800 hover:bg-blue-100 dark:border-blue-500 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
							>
								<FaFileAlt className="mr-1 h-5 w-5" />1 Page
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-purple-500 bg-purple-50 text-purple-800 hover:bg-purple-100 dark:border-purple-500 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800"
							>
								<FaStar className="mr-1 h-5 w-5" />
								Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
