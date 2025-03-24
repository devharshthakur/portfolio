"use client";

import type React from "react";
import { useState } from "react";
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
  X,
} from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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
    <div className="pt-60 max-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 flex justify-center">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary">
                Get in Touch
              </h2>
              <div className="mt-2 h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Have a question or want to work together? Fill out the form and
              I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    workharshthakur2002@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FaSquareXTwitter className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">X(twitter)</p>
                  <p className="text-sm text-muted-foreground">
                    @Harshthakur2002
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l pl-8">
            <div className="pb-4">
              <h3 className="text-xl font-bold">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I&apos;ll respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="pl-10 border-muted-foreground/20 focus:border-primary transition-colors"
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
                    className="pl-10 border-muted-foreground/20 focus:border-primary transition-colors"
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
                    className="min-h-[150px] pl-10 border-muted-foreground/20 focus:border-primary transition-colors"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full group relative overflow-hidden"
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
                Thank you for contacting me. I will get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="max-w-md">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <AlertDialogHeader className="mt-3 text-center">
            <AlertDialogTitle className="text-xl">
              Message Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2">
              Thank you for reaching out. I&apos;ve received your message and
              will get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction
              className="px-6"
              onClick={() => setIsAlertOpen(false)}
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {status === "error" && (
        <Alert variant="destructive" className="mt-6 max-w-md mx-auto">
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
    </div>
  );
};

export default ContactForm;
