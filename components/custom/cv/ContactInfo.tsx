import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

/**
 * ContactInfo Component
 *
 * @description A component that displays contact information with styled icons
 * and appropriate hover effects. Includes phone, email, and address information,
 * each with its own visual styling and interactive behavior.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.phone - Phone number
 * @param {string} props.email - Email address
 * @param {string} props.address - Physical address
 *
 * @example
 * ```tsx
 * <ContactInfo
 *   phone="+91 721-985-3301"
 *   email="workharshthakur2002@gmail.com"
 *   address="Vasai East, Maharashtra, India 401208"
 * />
 * ```
 *
 * @returns {React.ReactElement} A styled list of contact information
 */
export function ContactInfo({
	phone,
	email,
	address,
}: {
	phone: string;
	email: string;
	address: string;
}): React.ReactElement {
	return (
		<ul className="space-y-3">
			<li className="group flex items-center gap-2">
				<div className="rounded-md border border-blue-200 bg-blue-100 p-1.5 text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-400">
					<Phone size={14} />
				</div>
				<span className="text-sm text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400">
					{phone}
				</span>
			</li>
			<li className="group flex items-center gap-2">
				<div className="rounded-md border border-blue-200 bg-blue-100 p-1.5 text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-400">
					<Mail size={14} />
				</div>
				<a
					href={`mailto:${email}`}
					className="text-sm break-all text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400"
				>
					{email}
				</a>
			</li>
			<li className="mt-2 flex items-start gap-2">
				<div className="mt-0.5 rounded-md border border-blue-200 bg-blue-100 p-1.5 text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-400">
					<MapPin size={14} />
				</div>
				<span className="text-xs leading-tight text-slate-600 dark:text-slate-400">{address}</span>
			</li>
		</ul>
	);
}
