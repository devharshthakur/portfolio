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
import { Code, Sparkles, Briefcase, Palette } from "lucide-react";
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
      icon: <Briefcase className="h-3 w-3 text-primary" />,
    },
    {
      title: "Technical Skills",
      description:
        "Discover my expertise in web development, design, and other technical domains.",
      icon: <Code className="h-3 w-3 text-primary" />,
    },
    {
      title: "Design Philosophy",
      description:
        "Learn about my approach to creating intuitive and visually appealing digital experiences.",
      icon: <Palette className="h-3 w-3 text-primary" />,
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
      <DialogContent className="sm:max-w-md p-0 rounded-lg border border-border overflow-hidden">
        {popupType === "welcome" ? (
          <>
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/20 p-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <DialogTitle className="text-xl font-semibold">
                  {welcomeDetails.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-sm">
                {welcomeDetails.description}
              </DialogDescription>
            </div>

            <div className="p-6 pt-4 space-y-4">
              {welcomeDetails.keyPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-1.5 h-fit mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{point.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-primary/20 p-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <DialogTitle className="text-lg font-semibold flex items-center gap-2">
                    {updateDetails.title}
                    <Badge
                      variant="outline"
                      className="h-fit bg-primary/10 text-primary border-primary/20"
                    >
                      {updateDetails.date}
                    </Badge>
                  </DialogTitle>
                  <DialogDescription className="text-sm">
                    {updateDetails.description}
                  </DialogDescription>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium text-sm mb-3">What's New</h3>
                <ul className="ml-5 list-disc text-sm text-muted-foreground space-y-2">
                  {updateDetails.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        <Separator />

        <DialogFooter className="p-4 bg-muted/30">
          <Button onClick={handleClose} className="w-full">
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
