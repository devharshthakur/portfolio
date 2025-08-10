"use client";

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

export function DownloadButton() {
	const [isDownloading, setIsDownloading] = useState<boolean>(false);

	const downloadCV = async () => {
		setIsDownloading(true);
		try {
			saveAs("/cv.pdf", "harsh-thakur-cv.pdf");
		} catch (error) {
			console.error("Download failed:", error);
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<Button
			onClick={downloadCV}
			disabled={isDownloading}
			className="relative overflow-hidden border-2 border-lime-800 bg-emerald-400 px-9 py-5 text-white shadow-lg hover:bg-emerald-400 hover:text-white disabled:scale-100 disabled:opacity-75 dark:border-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white"
		>
			<div className="flex items-center gap-3">
				{isDownloading ? (
					<>
						<span className="font-medium">Downloading...</span>
					</>
				) : (
					<>
						<Download className="h-4 w-4 text-neutral-600 dark:text-neutral-100" />
						<span className="font-medium text-neutral-600 dark:text-neutral-100">Download CV</span>
						<FileText className="h-4 w-4 text-neutral-600 opacity-70 dark:text-neutral-100" />
					</>
				)}
			</div>
		</Button>
	);
}
