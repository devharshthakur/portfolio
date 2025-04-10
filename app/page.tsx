import { Header } from "@/components/custom/header/Header";
import { ProfileSection } from "@/components/custom/main/ProfileSection";
import { ProjectSection } from "@/components/custom/main/ProjectSection";
import { PackageSection } from "@/components/custom/main/PackageSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 px-4 py-6 sm:py-8 sm:px-6 md:px-8 lg:py-10 gap-2">
        <div className="mx-auto grid max-w-3xl gap-8">
          <ProfileSection />
          <ProjectSection />
          <PackageSection />
        </div>
      </main>
    </div>
  );
}
