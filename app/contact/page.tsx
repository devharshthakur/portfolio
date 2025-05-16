import type React from 'react';
import { MapPin, Briefcase, GraduationCap, Mail, Home } from 'lucide-react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { socialLinks } from '@/components/custom/contact/data';
import { SocialIcon } from '@/components/custom/contact/components/SocialIcon';
import { ModeToggle } from '@/components/mode-toogle';
import { ContactForm } from '@/components/custom/contact/components/ContactForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-yellow-300 dark:border-yellow-700 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pt-12 pb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-green-100 dark:bg-green-900/40 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-200 mb-6 animate-fade-in cursor-pointer hover:bg-green-200 dark:hover:bg-green-800/60 transition-all border border-green-300 dark:border-green-700/60">
              <Briefcase className="h-4 w-4" />
              <span>Available for Opportunities</span>
            </div>

            <h1 className="bg-linear-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up font-mono relative">
              Eager to Learn & Gain Experience
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-3 w-1/2 bg-slate-500/20 dark:bg-slate-400/20 -z-10 rounded-full blur-xs mx-auto"></div>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 animate-fade-in-up animation-delay-200">
              I'm a final year engineering student seeking full-time positions or paid internships to kickstart my career in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Career Status Cards */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Education Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-yellow-300 dark:border-yellow-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50 dark:bg-yellow-900/40 transition-transform duration-300 group-hover:scale-110 border border-yellow-200 dark:border-yellow-700/60">
                <GraduationCap className="h-10 w-10 text-yellow-600 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">Education</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">Final Year / Last Semester</p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/30 px-4 py-1.5 text-sm font-medium text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/40">
                  Bachelor of Engineering (BE)
                </span>
              </div>
            </div>
          </div>

          {/* Career Status Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-indigo-300 dark:border-indigo-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/40 transition-transform duration-300 group-hover:scale-110 border border-indigo-200 dark:border-indigo-700/60">
                <Briefcase className="h-10 w-10 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">Career Status</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">Fresher with no industry experience</p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/40">
                  Seeking Full-time & Paid Internships
                </span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:bg-zinc-900 border-2 border-rose-300 dark:border-rose-700/60">
            <div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-900/40 transition-transform duration-300 group-hover:scale-110 border border-rose-200 dark:border-rose-700/60">
                <MapPin className="h-10 w-10 text-rose-600 dark:text-rose-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">Location Preference</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">Remote, Hybrid, or In-office</p>
              <div className="mt-auto">
                <span className="inline-flex items-center rounded-full bg-rose-50 dark:bg-rose-900/30 px-4 py-1.5 text-sm font-medium text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-700/40">
                  Prefer Mumbai, Pune, Delhi for in-office
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xs dark:bg-zinc-900">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Contact Information Section */}
            <div className="relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-l-2xl shadow-xs border-2 border-yellow-300 dark:border-yellow-700/60">
              <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 font-mono">Contact Me</h2>
                    <div className="mt-2 h-1.5 w-24 rounded-full bg-yellow-500/20"></div>
                  </div>

                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    I'm actively looking for full-time positions and paid internships as I complete my engineering degree. I'm eager to apply my
                    skills in a professional environment.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/40 shadow-xs border border-indigo-200 dark:border-indigo-700/60">
                      <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-800 dark:text-zinc-100">Email</p>
                      <a
                        href="mailto:workharshthakur2002@gmail.com"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
                      >
                        workharshthakur2002@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/40 shadow-xs border border-indigo-200 dark:border-indigo-700/60">
                      <FaSquareXTwitter className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-800 dark:text-zinc-100">X (Twitter)</p>
                      <a
                        href="https://twitter.com/Harshthakur2002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors"
                      >
                        @Harshthakur2002
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Profiles</h3>
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-xs transition-all border bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                      >
                        <SocialIcon iconType={link.iconType} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="rounded-xl bg-green-50 dark:bg-green-900/20 p-4 shadow-xs border border-green-200 dark:border-green-700/40">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">Available for Opportunities</p>
                  </div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 px-4">
                    Expected graduation: May end 2025
                    <p className="pt-1">Ready to join immediately after</p>
                  </div>
                </div>
              </div>
            </div>

            {/* the ContactForm component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
