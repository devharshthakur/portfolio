/**
 * This module exports the Skill interface and a list of skills.
 *
 * The Skill interface defines the structure of a skill object, which includes:
 * - `name` (string): The name of the skill.
 * - `icon` (string): The name of the icon representing the skill, which should correspond to an icon from a specific icon library.
 * - `url` (string | undefined): An optional URL that provides more information about the skill. If not provided, it defaults to undefined.
 *
 * The `skills` constant is an array of Skill objects, each representing a different technology or tool.
 *
 * Contributors are encouraged to add/remove  skills to the `skills` array by following the existing forma as per their needt.
 * Ensure that the icon names correspond to the icons available in the icon library being used.
 *
 * @module skills.data
 */

export interface Skill {
  name: string;
  icon: string;
  url?: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: 'FaHtml5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: 'FaCss3Alt',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: 'FaJsSquare',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { name: 'React', icon: 'FaReact', url: 'https://reactjs.org/' },
  { name: 'Tailwind', icon: 'SiTailwindcss', url: 'https://tailwindcss.com/' },
  { name: 'NextJs', icon: 'SiNextdotjs', url: 'https://nextjs.org/' },
  {
    name: 'Typescript',
    icon: 'SiTypescript',
    url: 'https://www.typescriptlang.org/',
  },
  { name: 'Prisma', icon: 'SiPrisma', url: 'https://www.prisma.io/' },
  { name: 'NestJs', icon: 'SiNestjs', url: 'https://nestjs.com/' },
  { name: 'Docker', icon: 'SiDocker', url: 'https://www.docker.com/' },
];

export default skills;
