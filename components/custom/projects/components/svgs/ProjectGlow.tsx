/**
 * @file ProjectGlow.tsx
 * @description SVG component for the subtle glow effect behind projects section
 * Creates a blurred, colored background to provide depth to the projects list
 *
 * @component ProjectGlow
 * @returns {JSX.Element} Span element with styling for glow effect
 */

import React from 'react';

export const ProjectGlow: React.FC = () => {
  return <span className="absolute -inset-1 bg-emerald-300/10 dark:bg-emerald-600/10 rounded-xl blur-xl opacity-50" aria-hidden="true" />;
};

export default ProjectGlow;
