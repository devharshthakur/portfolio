import { Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

/**
 * EducationEntry Component
 *
 * @description A component that displays educational information in a structured format.
 * It shows degree information, time period, location, institution, and current status.
 * The component uses a visual left border and organized layout with appropriate icons.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.degree - The degree being pursued or obtained
 * @param {string} props.specialty - Specialization or honors information
 * @param {string} props.period - Time period of education (e.g., "2021 – 2025")
 * @param {string} props.location - Location of the institution
 * @param {string} props.institution - Name of the educational institution
 * @param {string} props.institutionUrl - Website URL of the institution
 * @param {string} [props.status="Pursuing"] - Current status of education
 *
 * @example
 * ```tsx
 * <EducationEntry
 *   degree="BE Software Engineering"
 *   specialty="Honors in Cyber Security"
 *   period="2021 – 2025"
 *   location="Mumbai, India"
 *   institution="Vidyalankar Institute of Technology"
 *   institutionUrl="https://www.vit.edu.in"
 *   status="Pursuing"
 * />
 * ```
 *
 * @returns {React.ReactElement} A structured education entry component
 */
export function EducationEntry({
  degree,
  specialty,
  period,
  location,
  institution,
  institutionUrl,
  status = 'Pursuing',
}: {
  degree: string;
  specialty: string;
  period: string;
  location: string;
  institution: string;
  institutionUrl: string;
  status?: string;
}): React.ReactElement {
  return (
    <div className="border-l-2 border-green-400 pl-4 dark:border-green-600">
      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
        <div>
          <h4 className="font-medium text-slate-800 dark:text-slate-200">{degree}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{specialty}</p>
        </div>
        <div className="text-sm md:text-right">
          <div className="flex items-center gap-1.5 text-green-700 dark:text-green-400">
            <Calendar size={14} />
            <span className="font-medium">{period}</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-green-700 dark:text-green-400">
            <MapPin size={14} />
            <span className="font-medium">{location}</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-1 text-sm">
          <LinkIcon size={14} className="text-slate-500 dark:text-slate-500" />
          <Link
            href={institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 hover:underline dark:text-green-400 dark:hover:text-green-300">
            {institution}
          </Link>
        </div>
        <p className="mt-1 text-xs text-slate-500 italic dark:text-slate-500">{status}</p>
      </div>
    </div>
  );
}
