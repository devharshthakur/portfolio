import Link from "next/link";
import packages from "@/data/packages.data";
import { PackageCard } from "./PackageCard";
import { Button } from "@/components/ui/button";

export function PackageSection() {
  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="border-l-4 border-primary pl-3">
          <h2 className="text-2xl font-bold">NPM Packages</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Open-source packages published to NPM
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="https://www.npmjs.com/~devharshthakur" target="_blank">
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
    </section>
  );
}
