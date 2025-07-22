"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { AlertCircleIcon, AlertTriangleIcon, GitForkIcon, InfoIcon, StarIcon } from "lucide-react";
import { useState } from "react";

export function NoteDialog() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="h-7 w-7 border-blue-300 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-700 dark:hover:border-blue-600 dark:hover:bg-blue-900/20"
				>
					<InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
					<span className="sr-only">Project Stats Information</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="border-2 border-blue-300 shadow-xs sm:max-w-md dark:border-blue-700">
				<DialogHeader className="-m-6 mb-4 bg-blue-50/50 p-4 dark:bg-blue-950/10">
					<div className="flex items-center gap-2">
						<AlertCircleIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
						<DialogTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
							About Project Stats
						</DialogTitle>
					</div>
					<Separator className="my-2 border-blue-200 dark:border-blue-800/50" />
				</DialogHeader>

				<div className="space-y-4 py-2">
					<DialogDescription className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
						The project statistics (stars and forks) displayed on this page are randomly generated
						values created at runtime for demonstration purposes.
					</DialogDescription>

					<Card className="border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/40">
						<CardContent className="space-y-3 p-4">
							<div className="flex items-center gap-2">
								<StarIcon className="h-4 w-4 text-yellow-500" />
								<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
									Stars
								</span>
								<Badge
									variant="outline"
									className="ml-auto border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400"
								>
									Math.random() * 50
								</Badge>
							</div>

							<div className="flex items-center gap-2">
								<GitForkIcon className="h-4 w-4 text-blue-500" />
								<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
									Forks
								</span>
								<Badge
									variant="outline"
									className="ml-auto border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400"
								>
									Math.random() * 20
								</Badge>
							</div>
						</CardContent>
					</Card>
				</div>

				<DialogFooter className="mt-6 flex flex-col gap-4 rounded-b-lg border-t border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/50 dark:bg-slate-800/30">
					<div className="flex items-center gap-2">
						<AlertTriangleIcon className="h-4 w-4 text-amber-500" />
						<span className="text-xs font-medium text-slate-600 dark:text-slate-400">
							Real statistics integration is coming soon
						</span>
					</div>
					<Button
						variant="default"
						size="sm"
						className="w-full rounded-md bg-blue-600 px-6 py-1.5 transition-all hover:bg-blue-700 hover:shadow-md sm:w-auto dark:bg-blue-700 dark:hover:bg-blue-600"
						onClick={() => setOpen(false)}
					>
						Got it
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
