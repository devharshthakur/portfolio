"use client";

import { useState } from "react";
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
import {
  InfoIcon,
  AlertCircleIcon,
  StarIcon,
  GitForkIcon,
  AlertTriangleIcon,
} from "lucide-react";

export function NoteDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-7 w-7">
          <InfoIcon className="h-4 w-4" />
          <span className="sr-only">Project Stats Information</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <AlertCircleIcon className="h-5 w-5 text-amber-500" />
            <DialogTitle className="text-lg font-semibold">
              About Project Stats
            </DialogTitle>
          </div>
          <Separator className="my-2" />
        </DialogHeader>

        <div className="space-y-4 py-2">
          <DialogDescription className="text-sm leading-relaxed">
            The project statistics (stars and forks) displayed on this page are
            randomly generated values created at runtime for demonstration
            purposes.
          </DialogDescription>

          <Card className="bg-muted/50">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Stars</span>
                <Badge variant="outline" className="ml-auto">
                  Math.random() * 50
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <GitForkIcon className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Forks</span>
                <Badge variant="outline" className="ml-auto">
                  Math.random() * 20
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <DialogFooter className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center border-t bg-muted/30 p-4 rounded-b-lg">
          <div className="flex items-center gap-2">
            <AlertTriangleIcon className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Real statistics integration is coming soon
            </span>
          </div>
          <Button
            variant="default"
            size="sm"
            className="rounded-md px-6 py-1.5 transition-all hover:shadow-md w-full sm:w-auto"
            onClick={() => setOpen(false)}
          >
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
