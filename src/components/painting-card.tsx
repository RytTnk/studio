import type { Painting } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface PaintingCardProps {
  painting: Painting;
}

export function PaintingCard({ painting }: PaintingCardProps) {
  // Determine AI hint based on title or description if available
  let aiHint = "art painting"; // Default hint
  if (painting.title?.toLowerCase().includes("night") || painting.title?.toLowerCase().includes("夜")) aiHint = "night scene";
  else if (painting.title?.toLowerCase().includes("lisa") || painting.title?.toLowerCase().includes("portrait") || painting.title?.toLowerCase().includes("肖像")) aiHint = "portrait art";
  else if (painting.title?.toLowerCase().includes("frida") || painting.title?.toLowerCase().includes("フリーダ")) aiHint = "folk art";


  return (
    <Link href={`/paintings/${painting.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-accent">
        <CardHeader className="p-0">
          <div className="aspect-[3/2] relative w-full overflow-hidden">
            <Image
              src={painting.imageUrl}
              alt={painting.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={aiHint} // AI hint for image generation
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold leading-tight truncate group-hover:text-accent transition-colors">
            {painting.title}
          </CardTitle>
          {painting.year && (
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {painting.year}
            </CardDescription>
          )}
          <div className="mt-3 flex items-center text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
