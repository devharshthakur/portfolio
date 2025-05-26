/**
 * SkillRow Component
 *
 * A row-based component that displays an individual skill with:
 * - Thumbnail image on the left
 * - Skill name, description, and proficiency level
 * - Years of experience and learning status indicators
 * - Link to official resource
 */

import { Skill, categoryBadgeColors } from '../data/skills.data';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SkillRowProps {
  skill: Skill;
  index: number;
}

export function SkillRow({ skill, index }: SkillRowProps) {
  const Icon = skill.icon;

  const animationDelay = {
    animationDelay: `${index * 50}ms`,
  };

  // Helper to get learning status element
  const getLearningStatusBadge = () => {
    if (!skill.learningStatus) return null;

    if (skill.learningStatus === 'learning') {
      return (
        <Badge className="flex items-center text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50">
          <BookOpen className="mr-1 h-3 w-3" />
          Currently learning
        </Badge>
      );
    } else if (skill.learningStatus === 'plan to learn') {
      return (
        <Badge className="flex items-center text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
          <Calendar className="mr-1 h-3 w-3" />
          Plan to learn
        </Badge>
      );
    } else {
      return (
        <Badge className="flex items-center text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
          <GraduationCap className="mr-1 h-3 w-3" />
          Basic knowledge
        </Badge>
      );
    }
  };

  // Determine if this is a programming language skill by checking the category
  const isProgrammingLanguage = skill.category === 'languages';

  // Check if this is a dark-colored icon that needs special handling in dark mode
  const hasDarkIcon = ['nextjs', 'vercel', 'github', 'express'].includes(skill.id);

  // Function to get icon colors with special handling for dark icons
  const getIconColorClass = () => {
    // For dark icons, we'll keep their original colors instead of applying light/dark variants
    if (hasDarkIcon) {
      switch (skill.id) {
        case 'nextjs':
          return 'text-black dark:text-gray-900';
        case 'vercel':
          return 'text-black dark:text-gray-900';
        case 'github':
          return 'text-black dark:text-gray-900';
        case 'express':
          return 'text-gray-800 dark:text-gray-900';
        default:
          return `${skill.color.light} ${skill.color.dark}`;
      }
    }

    // For other icons, use normal light/dark colors
    if (isProgrammingLanguage) {
      // Extract the color and make it more vibrant for programming language icons
      const colorClass = skill.color.dark.replace('text-', '');
      return `${skill.color.light} dark:text-${colorClass}`;
    }

    return `${skill.color.light} ${skill.color.dark}`;
  };

  // Custom button colors based on skill category
  const getButtonColors = () => {
    switch (skill.category) {
      case 'frontend':
        return 'border-blue-500/80 dark:border-blue-600/80 text-blue-700 dark:text-blue-300 bg-blue-50/60 dark:bg-blue-900/60 hover:bg-blue-100/60 dark:hover:bg-blue-800/60';
      case 'backend':
        return 'border-green-500/80 dark:border-green-600/80 text-green-700 dark:text-green-300 bg-green-50/60 dark:bg-green-900/60 hover:bg-green-100/60 dark:hover:bg-green-800/60';
      case 'database':
        return 'border-amber-500/80 dark:border-amber-600/80 text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-900/60 hover:bg-amber-100/60 dark:hover:bg-amber-800/60';
      case 'devops':
        return 'border-purple-500/80 dark:border-purple-600/80 text-purple-700 dark:text-purple-300 bg-purple-50/60 dark:bg-purple-900/60 hover:bg-purple-100/60 dark:hover:bg-purple-800/60';
      case 'design':
        return 'border-pink-500/80 dark:border-pink-600/80 text-pink-700 dark:text-pink-300 bg-pink-50/60 dark:bg-pink-900/60 hover:bg-pink-100/60 dark:hover:bg-pink-800/60';
      case 'testing':
        return 'border-red-500/80 dark:border-red-600/80 text-red-700 dark:text-red-300 bg-red-50/60 dark:bg-red-900/60 hover:bg-red-100/60 dark:hover:bg-red-800/60';
      case 'languages':
        return 'border-teal-500/80 dark:border-teal-600/80 text-teal-700 dark:text-teal-300 bg-teal-50/60 dark:bg-teal-900/60 hover:bg-teal-100/60 dark:hover:bg-teal-800/60';
      default:
        return 'border-emerald-500/80 dark:border-emerald-600/80 text-emerald-700 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-900/60 hover:bg-emerald-100/60 dark:hover:bg-emerald-800/60';
    }
  };

  // Custom time badge colors based on skill category
  const getTimeBadgeColors = () => {
    switch (skill.category) {
      case 'frontend':
        return 'bg-blue-50 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-700/50';
      case 'backend':
        return 'bg-green-50 dark:bg-green-800/50 text-green-600 dark:text-green-300 border-green-200 dark:border-green-700/50';
      case 'database':
        return 'bg-amber-50 dark:bg-amber-800/50 text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-700/50';
      case 'devops':
        return 'bg-purple-50 dark:bg-purple-800/50 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-700/50';
      case 'design':
        return 'bg-pink-50 dark:bg-pink-800/50 text-pink-600 dark:text-pink-300 border-pink-200 dark:border-pink-700/50';
      case 'testing':
        return 'bg-red-50 dark:bg-red-800/50 text-red-600 dark:text-red-300 border-red-200 dark:border-red-700/50';
      case 'languages':
        return 'bg-teal-50 dark:bg-teal-800/50 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-700/50';
      default:
        return 'bg-emerald-50 dark:bg-emerald-800/50 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50';
    }
  };

  // Get background pattern based on skill category
  const getBackgroundPattern = () => {
    // For dark icons in dark mode, use a lighter background
    if (hasDarkIcon) {
      switch (skill.category) {
        case 'frontend':
          return 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-white dark:to-blue-50';
        case 'devops':
          return 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-white dark:to-purple-50';
        default:
          return 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-white dark:to-slate-50';
      }
    }

    // Normal backgrounds for other icons
    switch (skill.category) {
      case 'frontend':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20';
      case 'backend':
        return 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20';
      case 'database':
        return 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20';
      case 'devops':
        return 'bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20';
      case 'design':
        return 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20';
      case 'testing':
        return 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20';
      case 'languages':
        return 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20';
      default:
        return 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20';
    }
  };

  // Get icon background based on skill category
  const getIconBackground = () => {
    // For dark icons, add a special light background in dark mode
    if (hasDarkIcon) {
      return 'before:bg-white/90 before:dark:bg-white/90';
    }

    // Normal backgrounds for other icons
    switch (skill.category) {
      case 'frontend':
        return 'before:bg-blue-500/5 before:dark:bg-blue-500/10';
      case 'backend':
        return 'before:bg-green-500/5 before:dark:bg-green-500/10';
      case 'database':
        return 'before:bg-amber-500/5 before:dark:bg-amber-500/10';
      case 'devops':
        return 'before:bg-purple-500/5 before:dark:bg-purple-500/10';
      case 'design':
        return 'before:bg-pink-500/5 before:dark:bg-pink-500/10';
      case 'testing':
        return 'before:bg-red-500/5 before:dark:bg-red-500/10';
      case 'languages':
        return 'before:bg-teal-500/5 before:dark:bg-teal-500/10';
      default:
        return 'before:bg-emerald-500/5 before:dark:bg-emerald-500/10';
    }
  };

  return (
    <div
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-200/70 dark:border-emerald-800/70 rounded-lg mb-4"
      style={animationDelay}
    >
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail Section */}
        <div className="md:w-64 p-4 flex-shrink-0">
          <Link
            href={skill.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video md:aspect-square overflow-hidden rounded-lg border-2 border-emerald-100/80 dark:border-emerald-800/70 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
          >
            {/* Always use icons since images are not available */}
            <div
              className={`relative w-full h-full ${getBackgroundPattern()} before:content-[''] before:absolute before:inset-0 before:rounded-md ${getIconBackground()} before:opacity-70 before:z-0 flex items-center justify-center`}
            >
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <Icon className={`h-20 w-20 ${getIconColorClass()} drop-shadow-sm transition-transform duration-300 group-hover:scale-110`} />
              </div>

              {/* Subtle grid pattern */}
              <div
                className={`absolute inset-0 opacity-10 ${hasDarkIcon ? 'dark:opacity-5' : 'dark:opacity-20'}`}
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
            </div>
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header: Name, Experience */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">{skill.name}</h3>
                {getLearningStatusBadge()}
              </div>

              {/* Experience Badge */}
              <div>
                {skill.learningStatus === 'learning' ? (
                  <span
                    className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-800/50 text-amber-600 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 shadow-sm`}
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    Learning
                  </span>
                ) : skill.learningStatus === 'plan to learn' ? (
                  <span
                    className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-800/50 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50 shadow-sm`}
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Future Goal
                  </span>
                ) : null}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-200">{skill.shortDescription || skill.description}</p>

            {/* Categories */}
            <div className="flex flex-wrap gap-1">
              {/* Main category */}
              <Badge key={skill.category} variant="outline" className={`text-xs font-medium ${categoryBadgeColors[skill.category]}`}>
                {skill.category}
              </Badge>

              {/* Related categories if any */}
              {skill.relatedCategories?.map((relatedCategory) => (
                <Badge key={relatedCategory} variant="outline" className={`text-xs opacity-75 ${categoryBadgeColors[relatedCategory]}`}>
                  {relatedCategory}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-end">
            <Button size="sm" variant="outline" asChild className={`border-2 ${getButtonColors()} font-medium text-sm shadow-sm transition-colors`}>
              <Link href={skill.officialUrl} target="_blank" rel="noopener noreferrer">
                Visit Official Site
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
