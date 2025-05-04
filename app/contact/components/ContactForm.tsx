"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setIsAlertOpen(true);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center p-8 md:p-10 bg-gray-50 dark:bg-zinc-800/50 rounded-r-2xl shadow-xs border-2 border-yellow-300 dark:border-yellow-700/60">
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-mono text-zinc-800 dark:text-zinc-100">
            Send a Message
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Please provide details if its about job opportunity or internship
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-10">
            <div>
              <div className="flex items-center space-x-2">
                <User
                  className="h-5 w-5 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
                <Label
                  htmlFor="name"
                  className="text-zinc-800 dark:text-zinc-200"
                >
                  Name
                </Label>
              </div>
              <div className="mt-1.5">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 focus:border-slate-500 focus:ring-slate-500/20 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <Mail
                  className="h-5 w-5 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
                <Label
                  htmlFor="email"
                  className="text-zinc-800 dark:text-zinc-200"
                >
                  Email
                </Label>
              </div>
              <div className="mt-1.5">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 focus:border-slate-500 focus:ring-slate-500/20 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <MessageSquare
                  className="h-5 w-5 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
                <Label
                  htmlFor="message"
                  className="text-zinc-800 dark:text-zinc-200"
                >
                  Message
                </Label>
              </div>
              <div className="mt-1.5">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 focus:border-slate-500 focus:ring-slate-500/20 transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Your information is securely processed and never shared with third
              parties.
            </p>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="max-w-md bg-card border-border">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <AlertDialogHeader className="mt-4 text-center">
            <AlertDialogTitle className="text-2xl font-bold">
              Message Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-base">
              Thank you for reaching out. I&apos;ve received your message and
              will get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction
              className="px-8 py-2.5 rounded-lg"
              onClick={() => setIsAlertOpen(false)}
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Alert */}
      {status === "error" && (
        <Alert
          variant="destructive"
          className="fixed bottom-4 right-4 max-w-md animate-in fade-in slide-in-from-bottom-5"
        >
          <AlertTitle className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-destructive-foreground"></span>
            Error Sending Message
          </AlertTitle>
          <AlertDescription>
            There was a problem sending your message. Please try again or
            contact me directly via email.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
