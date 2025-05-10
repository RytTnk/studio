"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import type { ReactNode } from 'react';

interface ImageZoomDialogProps {
  trigger: ReactNode;
  imageUrl: string;
  altText: string;
  aiHint?: string;
}

export function ImageZoomDialog({ trigger, imageUrl, altText, aiHint = "detailed art" }: ImageZoomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl p-2 sm:p-4 md:p-6 bg-background/80 backdrop-blur-md">
        <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-contain"
            data-ai-hint={aiHint}
            sizes="100vw"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
