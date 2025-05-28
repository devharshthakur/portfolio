'use client';

import { Button } from '@/components/ui/button';
import { saveAs } from 'file-saver';
import { Download } from 'lucide-react';

export function DownloadButton() {
  const downloadCV = () => {
    saveAs('/cv.pdf', 'harsh-thakur-cv.pdf');
  };

  return (
    <Button onClick={downloadCV} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
      <Download size={16} />
      Download CV
    </Button>
  );
}
