import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
export function ContactInfo({ phone, email, address }: { phone: string; email: string; address: string }): React.ReactElement {
  return (
    <ul className="space-y-3">
      <li className="flex items-center gap-2 group">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-md text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
          <Phone size={14} />
        </div>
        <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {phone}
        </span>
      </li>
      <li className="flex items-center gap-2 group">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-md text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
          <Mail size={14} />
        </div>
        <a
          href={`mailto:${email}`}
          className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all"
        >
          {email}
        </a>
      </li>
      <li className="flex items-start gap-2 mt-2">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-md text-blue-600 dark:text-blue-400 mt-0.5 border border-blue-200 dark:border-blue-800/50">
          <MapPin size={14} />
        </div>
        <span className="text-xs text-slate-600 dark:text-slate-400 leading-tight">{address}</span>
      </li>
    </ul>
  );
}
