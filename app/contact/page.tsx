"use client";

import type React from "react";
import { useState, useEffect } from "react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import axios from "axios";
import { socialLinks } from "./data";
import { SocialIcon } from "./components/SocialIcon";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pt-12 pb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-6 animate-fade-in cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200 dark:border-zinc-700">
                  <Briefcase className="h-4 w-4" />
                  <span>Available for Opportunities</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0 bg-white border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-lg animate-in fade-in-0 zoom-in-95">
                <div className="p-4">
                  <h4 className="font-medium text-sm text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
                    Available for opportunities
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-md bg-zinc-100 dark:bg-zinc-900">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
                      </div>
                      <span className="text-sm">Full-time Roles</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md bg-zinc-100 dark:bg-zinc-900">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
                      </div>
                      <span className="text-sm">Paid Internships</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-md bg-zinc-100 dark:bg-zinc-900">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-zinc-800 dark:text-zinc-200" />
                      </div>
                      <span className="text-sm">New Opportunities</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-zinc-200 dark:border-zinc-700 text-xs text-muted-foreground text-center">
                    Expected graduation: June 2025
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <h1 className="bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up font-mono relative">
              Eager to Learn & Gain Experience
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-3 w-1/2 bg-blue-500/20 dark:bg-blue-400/20 -z-10 rounded-full blur-sm mx-auto"></div>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 animate-fade-in-up animation-delay-200">
              I'm a final year engineering student seeking full-time positions
              or paid internships to kickstart my career in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Career Status Cards */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Education Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-blue-200 dark:border-blue-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/40 transition-transform duration-300 group-hover:scale-110 border border-blue-200 dark:border-blue-700/60">
                <GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                Education
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Final Year / Last Semester
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/40">
                  Bachelor of Engineering (BE)
                </span>
              </div>
            </div>
          </div>

          {/* Career Status Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-amber-200 dark:border-amber-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/40 transition-transform duration-300 group-hover:scale-110 border border-amber-200 dark:border-amber-700/60">
                <Briefcase className="h-10 w-10 text-amber-600 dark:text-amber-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                Career Status
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Fresher with no industry experience
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-900/30 px-4 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700/40">
                  Seeking Full-time & Paid Internships
                </span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-emerald-200 dark:border-emerald-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/40 transition-transform duration-300 group-hover:scale-110 border border-emerald-200 dark:border-emerald-700/60">
                <MapPin className="h-10 w-10 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                Location Preference
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Remote, Hybrid, or In-office
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/40">
                  Prefer Mumbai, Pune, Delhi for in-office
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Contact Information Section */}
            <div className="relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-10 border-r border-zinc-100 dark:border-zinc-800">
              <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 font-mono">
                      Contact Me
                    </h2>
                    <div className="mt-2 h-1.5 w-24 rounded-full bg-blue-500/20"></div>
                  </div>

                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    I'm actively looking for full-time positions and paid
                    internships as I complete my engineering degree. I'm eager
                    to apply my skills in a professional environment.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/40 shadow-sm border border-purple-200 dark:border-purple-700/60">
                      <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-800 dark:text-zinc-100">
                        Email
                      </p>
                      <a
                        href="mailto:workharshthakur2002@gmail.com"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                      >
                        workharshthakur2002@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/40 shadow-sm border border-blue-200 dark:border-blue-700/60">
                      <FaSquareXTwitter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-800 dark:text-zinc-100">
                        X (Twitter)
                      </p>
                      <a
                        href="https://twitter.com/Harshthakur2002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                      >
                        @Harshthakur2002
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Professional Profiles
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all border
                          ${
                            link.name === "GitHub"
                              ? "border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-300"
                              : link.name === "LinkedIn"
                                ? "border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-300"
                                : "border-emerald-200 dark:border-emerald-700 bg-emerald-100 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-800 text-emerald-800 dark:text-emerald-300"
                          }`}
                      >
                        <SocialIcon iconType={link.iconType} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="rounded-xl bg-green-50 dark:bg-zinc-800 p-4 shadow-sm border border-green-200 dark:border-green-700/40">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">
                      Available for Opportunities
                    </p>
                  </div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 px-4">
                    Expected graduation: May end 2025
                    <p className="pt-1">Ready to join immediately after</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center p-8 md:p-10 bg-gray-50 dark:bg-zinc-800/50 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-700">
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-mono text-zinc-800 dark:text-zinc-100">
                  Send a Message
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Please provide details about your job opportunity or
                  internship position.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 border border-zinc-200 dark:border-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary/30 dark:text-zinc-200 transition-colors rounded-lg"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 border border-zinc-200 dark:border-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary/30 dark:text-zinc-200 transition-colors rounded-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] pl-10 border border-zinc-200 dark:border-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary/30 dark:text-zinc-200 transition-colors rounded-lg"
                      placeholder="Describe your job opportunity or internship position..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full group relative overflow-hidden rounded-lg py-6 transition-all hover:bg-primary/90 border border-zinc-200 dark:border-zinc-700 shadow-sm"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Your information is securely processed and never shared with
                  third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
