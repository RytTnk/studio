import { getPaintings, getArtistById } from '@/lib/data';
import { PaintingCard } from '@/components/painting-card';
import type { Artist } from '@/types';

export default function HomePage() {
  const paintings = getPaintings();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center text-primary">
        Welcome to the Art Showcase
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Explore a curated collection of masterpieces from renowned artists. Click on any artwork to learn more.
      </p>
      {paintings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {paintings.map((painting) => {
            const artist = getArtistById(painting.artistId) as Artist | undefined; // Type assertion for simplicity
            return (
              <PaintingCard key={painting.id} painting={painting} />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No paintings to display at the moment. Please check back later.</p>
      )}
    </div>
  );
}
