import React from "react";

/**
 * ProfileSection Component
 *
 * @description A component that displays the profile/about section with a mix of paragraph text
 * and bullet points. It uses proper visual formatting with small circular indicators for list items
 * and semantic structure to present professional information clearly.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.introduction - The introductory paragraph text
 * @param {Array<{label: string, content: string}>} props.bulletPoints - Array of labeled bullet points
 *
 * @example
 * ```tsx
 * <ProfileSection
 *   introduction="Highly motivated software engineer specializing in full-stack web development..."
 *   bulletPoints={[
 *     { label: "Proficient in", content: "JavaScript (Node.js, React/Next.js)..." },
 *     { label: "Familiar with", content: "C, Java, Python basics..." },
 *     { label: "Currently exploring", content: "Rust programming language" }
 *   ]}
 * />
 * ```
 *
 * @returns {React.ReactElement} A formatted profile section with introduction and bullet points
 */
export function ProfileSection({
	introduction,
	bulletPoints,
}: {
	introduction: string;
	bulletPoints: Array<{
		label: string;
		content: string;
	}>;
}): React.ReactElement {
	return (
		<div className="space-y-3">
			<p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{introduction}</p>

			<div className="pt-1">
				<h4 className="mb-2 text-xs font-medium tracking-wider text-yellow-700 uppercase dark:text-yellow-400">
					Core Competencies
				</h4>
				<div className="grid gap-2">
					{bulletPoints.map((point, index) => (
						<div key={index} className="flex items-start gap-2">
							<div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-600 dark:bg-yellow-500"></div>
							<p className="text-sm text-slate-600 dark:text-slate-400">
								<span className="font-medium text-slate-800 dark:text-slate-200">
									{point.label}:
								</span>{" "}
								{point.content}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
