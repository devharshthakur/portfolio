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
  return <span className="absolute -inset-1 rounded-xl bg-emerald-300/10 opacity-50 blur-xl dark:bg-emerald-600/10" aria-hidden="true" />;
};

export default ProjectGlow;
