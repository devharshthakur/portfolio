/**
 * SkillCard Component
 *
 * Renders an individual skill with details including:
 * - Skill name and icon
 * - Proficiency level visualization
 * - Years of experience
 * - Learning status indicators
 * - Skill description
 * - Link to official resource
 *
 * Using shadcn/ui Card components for a consistent design system.
 */
import { ProficiencyBar } from './ProficiencyBar';
import { Skill } from '../data/skills.data';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  const animationDelay = {
    animationDelay: `${index * 100}ms`,
  };

  // Helper to get learning status element
  const getLearningStatusElement = () => {
    if (!skill.learningStatus) return null;

    return skill.learningStatus === 'learning' ? (
      <span className="flex items-center text-xs font-medium text-amber-600 dark:text-amber-300">
        <BookOpen className="mr-1 h-3 w-3" />
        Currently learning
      </span>
    ) : (
      <span className="flex items-center text-xs font-medium text-blue-600 dark:text-blue-300">
        <GraduationCap className="mr-1 h-3 w-3" />
        Basic knowledge
      </span>
    );
  };

  // Helper to determine if icon needs special handling in dark mode
  const isDarkIcon = ['nextjs', 'vercel', 'github', 'express'].includes(skill.id);

  // Determine if this is a programming language skill by checking the categories array
  const isProgrammingLanguage = skill.category === 'languages' || (skill.relatedCategories?.includes('languages') ?? false);

  // Function to enhance colors for programming language icons in dark mode
  const getEnhancedIconColor = () => {
    if (isDarkIcon) return 'dark:text-gray-800';

    if (isProgrammingLanguage) {
      // Extract the color and make it more vibrant
      const colorClass = skill.color.dark.replace('text-', '');
      return `dark:text-${colorClass}`;
    }

    return skill.color.dark;
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg m-1 border-4 border-border" style={animationDelay}>
      <CardHeader className="pt-4 pb-0">
        {/* Header: Icon, Title and Experience */}
        <div className="flex flex-row justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2.5 rounded-lg ${isProgrammingLanguage ? 'bg-white dark:bg-gray-200' : 'bg-white dark:bg-white'} border-2 border-gray-100 dark:border-gray-300 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <Icon className={`h-6 w-6 ${skill.color.light} ${getEnhancedIconColor()}`} />
            </div>
            <div>
              <CardTitle className="text-xl">{skill.name}</CardTitle>
              {/* Learning Status */}
              {getLearningStatusElement()}
            </div>
          </div>

          {/* Years Experience or Learning Badge */}
          <div className="flex flex-col items-end">
            {skill.learningStatus === 'learning' ? (
              <span className="flex items-center gap-1 text-sm font-medium px-2.5 py-1.5 rounded-md bg-white dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 shadow-xs">
                <BookOpen className="h-4 w-4" />
              </span>
            ) : (
              <span
                className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1.5 rounded-md bg-white dark:bg-gray-700/60 ${skill.color.light} dark:text-white border border-gray-100 dark:border-gray-600 shadow-xs`}
              >
                <Clock className="h-3.5 w-3.5" />
                {skill.yearsExperience} {skill.yearsExperience === 1 ? 'year' : 'years'}
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        {/* Proficiency Bar */}
        <div className="mb-5">
          <ProficiencyBar proficiency={skill.proficiencyLevel} />
        </div>

        {/* Description */}
        <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-5 bg-card/50 dark:bg-gray-700/30 p-4 rounded-md border border-border h-auto shadow-xs">
          {skill.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-end pt-0">
        {/* Visit Link Only */}
        <Link
          href={skill.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex items-center gap-1 ${skill.color.light} dark:text-white transition-colors px-3.5 py-2 rounded-md bg-white dark:bg-gray-700/50 border border-current hover:bg-gray-50 dark:hover:bg-gray-700/80 font-medium shadow-xs`}
        >
          Visit
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
