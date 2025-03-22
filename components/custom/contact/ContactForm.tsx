"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 mb-0">
      <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">
        Contact Me
      </h1>
      <p className="text-xl text-muted-foreground max-w-md">Have a question.</p>
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        Click below to get in touch.
      </p>
      <Button size="lg" className="group" asChild>
        <Link href="/contact">
          Go to Contact Form
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}
