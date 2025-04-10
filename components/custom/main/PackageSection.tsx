import Link from "next/link";
import packages from "@/data/packages.data";
import { PackageCard } from "./PackageCard";
import { Button } from "@/components/ui/button";
import { SiNpm } from "react-icons/si";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";

export function PackageSection() {
  return (
    <Card className="grid gap-6 border-2 border-purple-400 dark:border-purple-600 p-4 shadow-sm bg-purple-50/30 dark:bg-purple-950/10">
      <div className="flex items-center justify-between">
        <SectionTitle
          icon={
            <SiNpm className="text-purple-600 dark:text-purple-400 h-5 w-5" />
          }
        >
          Packages
        </SectionTitle>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-2 border-purple-400/50 hover:border-purple-500 dark:border-purple-600/30 dark:hover:border-purple-500/60 shadow-sm"
        >
          <Link href="/packages" target="_blank" prefetch={true}>
            View All Packages
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            name={pkg.name}
            description={pkg.description}
            githubUrl={pkg.githubUrl}
            npmUrl={pkg.npmUrl}
            downloads={pkg.downloads}
            version={pkg.version}
          />
        ))}
      </div>
    </Card>
  );
}
