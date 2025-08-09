"use client";

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

export function DownloadButton() {
	const [isDownloading, setIsDownloading] = useState(false);

	const downloadCV = async () => {
		setIsDownloading(true);
		try {
			// Add a small delay to show the loading state
			await new Promise((resolve) => setTimeout(resolve, 500));
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
			className="relative overflow-hidden border-2 border-emerald-400 bg-emerald-600 px-8 py-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-700 hover:shadow-xl disabled:scale-100 disabled:opacity-75 dark:border-emerald-600 dark:bg-emerald-500 dark:hover:border-emerald-500 dark:hover:bg-emerald-600"
		>
			<div className="flex items-center gap-3">
				{isDownloading ? (
					<>
						<div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
						<span className="font-medium">Downloading...</span>
					</>
				) : (
					<>
						<Download className="h-4 w-4" />
						<span className="font-medium">Download CV</span>
						<FileText className="h-4 w-4 opacity-70" />
					</>
				)}
			</div>
		</Button>
	);
}
