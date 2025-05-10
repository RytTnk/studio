import { getPaintingBySlug, getArtistById, getPaintingsByArtistId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ImageZoomDialog } from '@/components/image-zoom-dialog';
import { PaintingCard } from '@/components/painting-card'; // For related works
import { ExternalLink, Palette } from 'lucide-react';

interface PaintingPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { getPaintings } = await import('@/lib/data');
  const paintings = getPaintings();
  return paintings.map((painting) => ({
    slug: painting.slug,
  }));
}

export default function PaintingPage({ params }: PaintingPageProps) {
  const painting = getPaintingBySlug(params.slug);

  if (!painting) {
    notFound();
  }

  const artist = getArtistById(painting.artistId);
  const relatedPaintings = artist ? getPaintingsByArtistId(artist.id).filter(p => p.id !== painting.id).slice(0, 3) : [];

  let mainImageAiHint = "art masterpiece";
  if (painting.title?.toLowerCase().includes("starry")) mainImageAiHint = "van gogh style";
  else if (painting.title?.toLowerCase().includes("mona lisa")) mainImageAiHint = "renaissance portrait";

  let artistImageAiHint = "artist photo";
  if (artist?.name.toLowerCase().includes("gogh")) artistImageAiHint = "male painter";
  if (artist?.name.toLowerCase().includes("vinci")) artistImageAiHint = "historic figure";


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Main Painting Image */}
        <div className="md:col-span-2">
          <ImageZoomDialog
            imageUrl={painting.imageUrl}
            altText={painting.title}
            aiHint={mainImageAiHint}
            trigger={
              <div className="relative aspect-[4/3] w-full cursor-zoom-in rounded-lg overflow-hidden shadow-2xl hover:shadow-accent/30 transition-shadow duration-300">
                <Image
                  src={painting.imageUrl}
                  alt={painting.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  data-ai-hint={mainImageAiHint}
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Palette className="w-16 h-16 text-white/70" />
                </div>
              </div>
            }
          />
        </div>

        {/* Painting and Artist Details */}
        <div className="md:col-span-1">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight text-primary">{painting.title}</CardTitle>
              {painting.year && (
                <Badge variant="secondary" className="mt-1 w-fit">{painting.year}</Badge>
              )}
            </CardHeader>
            <CardContent>
              {painting.description && (
                <p className="text-muted-foreground mb-4">{painting.description}</p>
              )}
              {painting.dimensions && (
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Dimensions:</strong> {painting.dimensions}
                </p>
              )}
              
              {artist && (
                <>
                  <Separator className="my-4" />
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/50">
                      <AvatarImage src={artist.profileImageUrl} alt={artist.name} data-ai-hint={artistImageAiHint} />
                      <AvatarFallback>{artist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">Artist</p>
                      <Link href={`/artists/${artist.slug}`} className="font-semibold text-lg text-primary hover:text-accent transition-colors">
                        {artist.name}
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-2">{artist.bio}</p>
                  <Link href={`/artists/${artist.slug}`} className="text-sm text-accent hover:underline flex items-center">
                    Learn more about {artist.name} <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Works by the Artist */}
      {relatedPaintings.length > 0 && artist && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6 text-primary">
            More from {artist.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPaintings.map(p => (
              <PaintingCard key={p.id} painting={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
