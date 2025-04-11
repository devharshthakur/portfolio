"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import UpdatePopup from "@/components/custom/update/update-popup";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps): React.ReactElement {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <UpdatePopup />
      {children}
    </NextThemesProvider>
  );
}
