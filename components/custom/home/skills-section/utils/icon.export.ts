import { ComponentType, SVGProps } from "react";
import {
	FaGithub,
	FaLink,
	FaCalendarAlt,
	FaClock,
	FaNpm,
	FaDownload,
	FaTerminal,
	FaStar,
	FaCodeBranch,
	FaExclamationCircle,
	FaHistory,
	FaGlobe,
} from "react-icons/fa";

export const Icons = {
	FaGithub,
	FaLink,
	FaCalendarAlt,
	FaClock,
	FaNpm,
	FaDownload,
	FaTerminal,
	FaStar,
	FaCodeBranch,
	FaExclamationCircle,
	FaHistory,
	FaGlobe,
};

export type IconName = keyof typeof Icons;

export const getIcon = (
	name: IconName
): ComponentType<{ className?: string; [key: string]: unknown }> => Icons[name];
