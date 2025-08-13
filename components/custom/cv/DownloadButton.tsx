"use client";

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import * as React from "react";

interface DownloadButtonProps {
	className?: string;
}

export function DownloadButton({ className }: DownloadButtonProps) {
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
			className={`relative overflow-hidden border-2 border-neutral-400 bg-neutral-100 px-9 py-5 text-neutral-900 shadow-lg hover:bg-neutral-200 hover:text-neutral-900 disabled:scale-100 disabled:opacity-75 dark:border-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 ${className || ""}`}
		>
			<div className="flex items-center gap-3">
				{isDownloading ? (
					<>
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
