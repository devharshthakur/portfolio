/**
 * Skills Page Component
 *
 * Displays a comprehensive showcase of professional skills categorized by type.
 * Features include skill rows with proficiency indicators, experience details,
 * and links to official resources. The page is fully responsive with optimized
 * layouts for both desktop and mobile devices.
 */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toogle';
import { Home, Hammer, Layers, Award, BookOpen, FolderTree } from 'lucide-react';
import skills, { Skill, SkillCategory, skillCategories } from './data/skills.data';
import { SkillRow } from './components/SkillRow';

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce<Record<SkillCategory, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>,
  );

  // Calculate stats
  const featuredSkillsCount = skills.filter((skill) => skill.featured).length;
  const learningSkillsCount = skills.filter((skill) => skill.learningStatus === 'learning').length;

  return (
    <div className="relative min-h-screen w-full bg-linear-to-b from-background to-green-50/20 dark:to-green-950/20 overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 flex justify-between items-center z-50 p-4 bg-background/80 backdrop-blur-xs border-slate-200/50 dark:border-slate-800/50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-green-500 dark:border-green-500 hover:bg-green-100 dark:hover:bg-green-500/50 text-green-600 dark:text-green-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <ModeToggle
          className="border-green-500 dark:border-green-500 hover:bg-green-100 dark:hover:bg-green-500/50"
          iconClassName="text-green-600 dark:text-green-400"
        />
      </nav>

      {/* Main Content */}
      <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-12 relative z-10">
        {/* Hero Section */}
        <section className="relative p-5 sm:p-8 md:p-10 rounded-xl md:rounded-2xl bg-linear-to-br from-white to-green-50/70 dark:bg-linear-to-br dark:from-gray-800 dark:to-green-900/60 backdrop-blur-xs shadow-md overflow-hidden mb-8 md:mb-12 border-2 border-slate-200/70 dark:border-slate-700/70">
          <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
            <div className="space-y-5 md:space-y-6 max-w-3xl">
              {/* Title */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 dark:from-green-400 dark:to-emerald-400 shadow-md">
                    <Hammer className="w-4 h-4 text-white" />
                  </span>
                  <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gray-100/80 dark:bg-gray-700/80 text-green-600 dark:text-green-400">
                    Skills in detailed manner
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 dark:text-white mb-1">
                  <span className="inline-block">My</span>{' '}
                  <span className="inline-block relative bg-clip-text text-transparent bg-linear-to-r from-green-400 to-emerald-500 dark:from-green-400 dark:to-emerald-400">
                    Skills
                    <span
                      className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-green-400 to-emerald-500 dark:from-green-400 dark:to-emerald-400 rounded-full"
                      aria-hidden="true"
                    />
                  </span>
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Showcasing {skills.length} technologies and tools</p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
                A comprehensive overview of the technologies, frameworks, and tools that I've mastered throughout my development journey. Each skill
                is rated based on proficiency and years of experience.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
                {/* Total Skills */}
                <div className="col-span-1 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-3 border border-blue-200/50 dark:border-blue-600/50 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300">
                    <Layers className="h-4 w-4" />
                    Total Skills
                  </div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">{skills.length}</div>
                </div>

                {/* Featured */}
                <div className="col-span-1 bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-lg p-3 border border-amber-200/50 dark:border-amber-600/50 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-300">
                    <Award className="h-4 w-4" />
                    Featured
                  </div>
                  <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">{featuredSkillsCount}</div>
                </div>

                {/* Learning */}
                <div className="col-span-1 bg-linear-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/30 rounded-lg p-3 border border-purple-200/50 dark:border-purple-600/50 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-300">
                    <BookOpen className="h-4 w-4" />
                    Learning
                  </div>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">{learningSkillsCount}</div>
                </div>

                {/* Categories */}
                <div className="col-span-1 bg-linear-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg p-3 border border-emerald-200/50 dark:border-emerald-600/50 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                    <FolderTree className="h-4 w-4" />
                    Categories
                  </div>
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">{Object.keys(skillCategories).length}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Categories Sections */}
        <div className="space-y-10 md:space-y-14">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <section key={category} className="mb-8 animate-fadeIn">
              {/* Category Header */}
              <div className="relative mb-5 md:mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-linear-to-b ${
                    category === 'frontend'
                      ? 'from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400'
                      : category === 'backend'
                        ? 'from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400'
                        : category === 'database'
                          ? 'from-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-amber-400'
                          : category === 'devops'
                            ? 'from-purple-500 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400'
                            : category === 'design'
                              ? 'from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400'
                              : category === 'testing'
                                ? 'from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400'
                                : 'from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400'
                  }`}
                />

                <div className="pl-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{skillCategories[category as SkillCategory].name}</h2>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {skillCategories[category as SkillCategory].description} •{' '}
                    <span className="font-medium">
                      {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </p>
                </div>
              </div>

              {/* Skills Rows */}
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillRow key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
