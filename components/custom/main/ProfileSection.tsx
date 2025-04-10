import Image from "next/image";
import skills from "@/data/skills.data";
import { Badge } from "@/components/ui/badge";
import { SkillItem } from "./SkillItem";
import { Layers, Briefcase, User } from "lucide-react";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";

export function ProfileSection() {
  return (
    <section className="space-y-8" aria-labelledby="profile-heading">
      <Card className="border-2 border-slate-500 dark:border-slate-600 p-4 shadow-sm bg-slate-100/50 dark:bg-slate-800/30">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 sm:border-r border-slate-300 dark:border-slate-700 sm:pr-6">
            <Image
              src="/dev-pfp.jpeg"
              width={128}
              height={128}
              alt="Profile Picture of Harsh Thakur"
              className="rounded-full shadow-md border-2 border-slate-400 dark:border-slate-600"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
              priority
            />
          </div>

          <div className="flex flex-col justify-center space-y-3">
            <header>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1
                  id="profile-heading"
                  className="text-3xl font-bold text-slate-800 dark:text-slate-200"
                >
                  Harsh Thakur
                </h1>
                <AvailabilityBadge />
              </div>

              <Badge
                variant="default"
                className="text-xs px-2 py-0.5 shadow-sm flex items-center gap-1 w-fit bg-orange-600 hover:bg-orange-700 dark:bg-orange-700"
              >
                <Layers size={12} className="text-primary-foreground" />
                <span>Full Stack Web Developer</span>
              </Badge>
            </header>

            <p className="text-sm text-muted-foreground max-w-prose">
              Building efficient, scalable and maintainable web applications
              with modern technologies.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-indigo-400 dark:border-indigo-600 p-4 shadow-sm bg-indigo-50/30 dark:bg-indigo-950/10">
        <div className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
