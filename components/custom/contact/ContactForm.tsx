'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { CheckCircle2, Loader2, Mail, MessageSquare, Send, User } from 'lucide-react';
import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsAlertOpen(true);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center rounded-r-2xl border-2 border-zinc-300 bg-gray-50 p-8 shadow-xs md:p-10 dark:border-zinc-700 dark:bg-zinc-800/50">
        <div className="mb-8">
          <h3 className="font-mono text-2xl font-bold text-zinc-800 dark:text-zinc-100">Send a Message</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Please provide details if its about job opportunity or internship</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-10">
            <div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                <Label htmlFor="name" className="text-zinc-800 dark:text-zinc-200">
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
                  className="border-zinc-300 bg-white transition-colors focus:border-slate-500 focus:ring-slate-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                <Label htmlFor="email" className="text-zinc-800 dark:text-zinc-200">
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
                  className="border-zinc-300 bg-white transition-colors focus:border-slate-500 focus:ring-slate-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                <Label htmlFor="message" className="text-zinc-800 dark:text-zinc-200">
                  Message
                </Label>
              </div>
              <div className="mt-1.5">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={15}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-zinc-300 bg-white transition-colors focus:border-slate-500 focus:ring-slate-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-slate-800 transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
              disabled={status === 'loading'}>
              {status === 'loading' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Send Message
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-muted-foreground text-xs">Your information is securely processed and never shared with third parties.</p>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="bg-card max-w-md border-zinc-300 dark:border-zinc-700">
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <CheckCircle2 className="text-primary h-8 w-8" />
          </div>
          <AlertDialogHeader className="mt-4 text-center">
            <AlertDialogTitle className="text-2xl font-bold">Message Sent Successfully!</AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-base">
              Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction className="rounded-lg px-8 py-2.5" onClick={() => setIsAlertOpen(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Alert */}
      {status === 'error' && (
        <Alert variant="destructive" className="animate-in fade-in slide-in-from-bottom-5 fixed right-4 bottom-4 max-w-md">
          <AlertTitle className="flex items-center gap-2">
            <span className="bg-destructive-foreground h-2 w-2 rounded-full"></span>
            Error Sending Message
          </AlertTitle>
          <AlertDescription>There was a problem sending your message. Please try again or contact me directly via email.</AlertDescription>
        </Alert>
      )}
    </>
  );
}
