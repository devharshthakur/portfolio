import skills from "./data/skills.data";
import { SkillItem } from "./components/SkillItem";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Skills() {
  return (
    <Card className="border-2 border-indigo-400 dark:border-indigo-600 p-4 shadow-xs bg-indigo-50/30 dark:bg-indigo-950/10">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SectionTitle
            icon={
              <Briefcase
                size={20}
                className="text-indigo-600 dark:text-indigo-400"
              />
            }
          >
            Skills & Technologies
          </SectionTitle>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-indigo-600 hover:text-indigo-700 border-indigo-600 hover:border-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 dark:border-indigo-600 dark:hover:border-indigo-500"
          >
            <Link href="/skills">View All Skills</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </Card>
  );
}
