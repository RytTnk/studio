import { getArtistBySlug, getPaintingsByArtistId } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PaintingCard } from '@/components/painting-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface ArtistPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { getArtists } = await import('@/lib/data');
  const artists = getArtists();
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist = getArtistBySlug(params.slug);

  if (!artist) {
    notFound();
  }

  const paintingsByArtist = getPaintingsByArtistId(artist.id);

  let artistImageAiHint = "artist headshot";
  if (artist.name.toLowerCase().includes("gogh") || artist.name.toLowerCase().includes("ゴッホ")) artistImageAiHint = "impressionist painter";
  if (artist.name.toLowerCase().includes("vinci") || artist.name.toLowerCase().includes("ヴィンチ")) artistImageAiHint = "renaissance man";
  if (artist.name.toLowerCase().includes("kahlo") || artist.name.toLowerCase().includes("カーロ")) artistImageAiHint = "female artist";


  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-12 shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
            {artist.profileImageUrl ? (
              <Image
                src={artist.profileImageUrl}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                data-ai-hint={artistImageAiHint}
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <Avatar className="w-32 h-32 text-4xl border-4 border-primary/20">
                  <AvatarFallback>{artist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-6">
              <CardTitle className="text-4xl font-extrabold tracking-tight text-primary">{artist.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-primary/80 mb-1">経歴</h3>
                  <p className="text-muted-foreground leading-relaxed">{artist.bio}</p>
                </div>
                {artist.concept && (
                  <div>
                    <h3 className="font-semibold text-lg text-primary/80 mb-1">芸術的コンセプト</h3>
                    <p className="text-muted-foreground leading-relaxed">{artist.concept}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      <Separator className="my-8" />

      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-primary">
        {artist.name}の作品
      </h2>
      {paintingsByArtist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {paintingsByArtist.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">このアーティストの特定の作品は現在リストされていません。</p>
      )}
    </div>
  );
}
