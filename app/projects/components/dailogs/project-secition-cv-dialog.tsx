"use client";

import type React from "react";
import { useState } from "react";
import {
  InfoIcon,
  AlertCircleIcon,
  StarIcon,
  GitForkIcon,
  CircleAlertIcon,
  AlertTriangleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function ProjectNotesButton(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="ml-2 h-7 w-7 border-indigo-300 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-400 dark:hover:border-indigo-600"
        >
          <InfoIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="sr-only">Project Stats Information</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-2 border-indigo-300 dark:border-indigo-700 shadow-sm">
        <DialogHeader className="bg-indigo-50/50 dark:bg-indigo-950/10 p-4 -m-6 mb-4">
          <div className="flex items-center gap-2">
            <AlertCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <DialogTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              About Project Stats
            </DialogTitle>
          </div>
          <Separator className="my-2 border-indigo-200 dark:border-indigo-800/50" />
        </DialogHeader>

        <div className="space-y-4 py-2">
          <DialogDescription className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            The stats displayed in project cards are randomly generated values
            created in real time for demonstration purposes.
          </DialogDescription>

          <Card className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Stars
                </span>
                <Badge
                  variant="outline"
                  className="ml-auto border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                >
                  Math.random()
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <GitForkIcon className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Forks
                </span>
                <Badge
                  variant="outline"
                  className="ml-auto border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                >
                  Math.random()
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <CircleAlertIcon className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Issues
                </span>
                <Badge
                  variant="outline"
                  className="ml-auto border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                >
                  Math.random()
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center border-t border-slate-200 dark:border-slate-700/50 bg-slate-50/80 dark:bg-slate-800/30 p-4 rounded-b-lg">
          <div className="flex items-center gap-2">
            <AlertTriangleIcon className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Real statistics integration is coming soon
            </span>
          </div>
          <Button
            variant="default"
            size="sm"
            className="rounded-md px-6 py-1.5 transition-all hover:shadow-md w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            onClick={() => setOpen(false)}
          >
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
