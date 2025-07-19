/**
 * @file HeaderPattern.tsx
 * @description SVG component for the top header pattern with gradient
 * Used in the projects page header to provide a subtle decorative element
 *
 * @component HeaderPattern
 * @returns {JSX.Element} SVG element with linear gradient
 */

import React from "react";

export const HeaderPattern: React.FC = () => {
	return (
		<svg
			className="absolute top-0 right-0 left-0 w-full"
			height="24"
			viewBox="0 0 1200 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0H1200V24H0V0Z" fill="url(#paint0_linear)" />
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="600"
					y1="0"
					x2="600"
					y2="24"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#10B981" />
					<stop offset="1" stopColor="#10B981" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default HeaderPattern;
