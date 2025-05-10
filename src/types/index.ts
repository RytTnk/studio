export interface Painting {
  id: string;
  slug: string; // For URL generation, e.g., "starry-night"
  title: string;
  imageUrl: string; // Placeholder URL or path like "/paintings/starry-night.jpg"
  artistId: string;
  description?: string;
  year?: number;
  dimensions?: string; // e.g., "100cm x 75cm"
}

export interface Artist {
  id: string;
  slug: string; // For URL generation, e.g., "vincent-van-gogh"
  name: string;
  profileImageUrl?: string; // Placeholder URL or path like "/artists/van-gogh.jpg"
  bio: string;
  concept?: string;
}
