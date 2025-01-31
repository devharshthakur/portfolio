import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Coming Soon
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          Our blog is under construction. Stay tuned for amazing content!
        </p>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
