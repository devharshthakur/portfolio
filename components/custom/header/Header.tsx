import { ModeToggle } from "@/components/mode-toogle";
import { ColoredButton } from "@/components/ui/colored-button";
import {
  HEADER_LEFT_NAV,
  HEADER_RIGHT_NAV,
} from "@/components/custom/header/lib/constants";

export function Header() {
  return (
    <header className="flex items-center justify-between py-3 sm:px-6 md:px-8">
      <div className="space-x-4">
        {HEADER_LEFT_NAV.map((item) => (
          <ColoredButton
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            colorScheme={item.colorScheme}
            variant="outline"
            isExternal={item.isExternal}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        {HEADER_RIGHT_NAV.map((item) => (
          <ColoredButton
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            colorScheme={item.colorScheme}
            variant={item.variant || "outline"}
          />
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
