"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Code, Sparkles, Briefcase, Palette, Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const CURRENT_VERSION = "1.0.1";

interface UpdateDetails {
  version: string;
  title: string;
  description: string;
  features: string[];
  date: string;
}

interface WelcomeDetails {
  title: string;
  description: string;
  keyPoints: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const updateDetails: UpdateDetails = {
  version: CURRENT_VERSION,
  title: "Portfolio Updates",
  description:
    "I've recently made some improvements to my portfolio website design.",
  date: `${Date.now.toString()}April 2025`,
  features: [
    "Added new projects to my showcase",
    "Improved site performance and accessibility",
    "Updated my skills and technologies section",
    "Redesigned project case studies with more details",
  ],
};

const welcomeDetails: WelcomeDetails = {
  title: "Welcome to My Portfolio!",
  description:
    "Thanks for visiting my digital workspace. Here you'll find my projects, skills, and professional journey.",
  keyPoints: [
    {
      title: "Browse My Projects",
      description:
        "Explore my latest work and case studies across various technologies and industries.",
      icon: <Briefcase className="h-3 w-3 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Technical Skills",
      description:
        "Discover my expertise in web development, design, and other technical domains.",
      icon: <Code className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Design Philosophy",
      description:
        "Learn about my approach to creating intuitive and visually appealing digital experiences.",
      icon: (
        <Palette className="h-3 w-3 text-purple-600 dark:text-purple-400" />
      ),
    },
  ],
};

type PopupType = "welcome" | "update" | null;

const UpdatePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState<PopupType>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
      const storedVersion = localStorage.getItem("portfolioVersion");

      if (!hasVisitedBefore) {
        // First time user
        setPopupType("welcome");
        setIsOpen(true);
      } else if (!storedVersion || storedVersion !== CURRENT_VERSION) {
        // Returning user with an update
        setPopupType("update");
        setIsOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    // Save the current version and visit status to localStorage
    localStorage.setItem("portfolioVersion", CURRENT_VERSION);
    localStorage.setItem("hasVisitedBefore", "true");
    setIsOpen(false);
  };

  if (!popupType) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-xs">
        {popupType === "welcome" ? (
          <>
            <div className="bg-blue-50/30 dark:bg-blue-950/10 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 border border-blue-200 dark:border-blue-800/50">
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <DialogTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  {welcomeDetails.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-sm text-slate-700 dark:text-slate-300">
                {welcomeDetails.description}
              </DialogDescription>
            </div>

            <div className="p-6 pt-4 space-y-4">
              {welcomeDetails.keyPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="rounded-full bg-slate-100 dark:bg-slate-800/40 p-1.5 h-fit mt-0.5 border border-slate-200 dark:border-slate-700/50">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-slate-800 dark:text-slate-200">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-orange-50/30 dark:bg-orange-950/10 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-2 border border-orange-200 dark:border-orange-800/50">
                  <Rocket className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <DialogTitle className="text-lg font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    {updateDetails.title}
                    <Badge
                      variant="outline"
                      className="h-fit bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700/50"
                    >
                      v{updateDetails.version}
                    </Badge>
                  </DialogTitle>
                  <DialogDescription className="text-sm text-slate-700 dark:text-slate-300">
                    {updateDetails.description}
                  </DialogDescription>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="rounded-md bg-slate-50 dark:bg-slate-800/40 p-4 border border-slate-200 dark:border-slate-700/50">
                <h3 className="font-medium text-sm mb-3 text-slate-800 dark:text-slate-200">
                  What's New
                </h3>
                <ul className="ml-5 list-disc text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  {updateDetails.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        <Separator className="border-slate-200 dark:border-slate-700/50" />

        <DialogFooter className="p-4 bg-slate-50/80 dark:bg-slate-800/30">
          <Button
            onClick={handleClose}
            className={`w-full ${
              popupType === "welcome"
                ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600"
            }`}
          >
            {popupType === "welcome"
              ? "Explore Portfolio"
              : "Continue to Portfolio"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePopup;
