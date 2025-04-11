import packages from "./data/packages";
import { PackageCard } from "./components/PackageCard";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Archive } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Packages() {
  // Show only top packages on home page
  const topPackages = packages.slice(0, 4);

  return (
    <Card className="border-2 border-red-400 dark:border-red-600 p-4 shadow-sm bg-red-50/30 dark:bg-red-950/10">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle
            icon={
              <Archive size={20} className="text-red-600 dark:text-red-400" />
            }
          >
            NPM Packages
          </SectionTitle>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700 border-red-600 hover:border-red-700 dark:text-red-400 dark:hover:text-red-300 dark:border-red-600 dark:hover:border-red-500"
          >
            <Link href="/packages">View All Packages</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {topPackages.map((pkg) => (
            <PackageCard
              key={pkg.name}
              name={pkg.name}
              description={pkg.description}
              githubUrl={pkg.githubUrl}
              npmUrl={pkg.npmUrl}
              downloads={pkg.downloads}
              version={pkg.version}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
