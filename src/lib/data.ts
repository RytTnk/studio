import type { Painting, Artist } from '@/types';

// Sample artist data.
// Replace profileImageUrl with actual paths to images in public/artists/
// e.g., profileImageUrl: '/artists/vincent-van-gogh.jpg'
// For AI Hint: 'artist portrait', 'painter profile'
export const artists: Artist[] = [
  {
    id: '1',
    slug: 'vincent-van-gogh',
    name: 'Vincent van Gogh',
    profileImageUrl: 'https://picsum.photos/seed/vangogh/200/200', // Replace with actual path e.g., /artists/van-gogh.jpg
    bio: 'Vincent van Gogh (1853-1890) was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.',
    concept: 'His work is characterized by bold colors and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. He struggled with mental illness throughout his life and died by suicide at age 37.',
  },
  {
    id: '2',
    slug: 'leonardo-da-vinci',
    name: 'Leonardo da Vinci',
    profileImageUrl: 'https://picsum.photos/seed/davinci/200/200', // Replace with actual path e.g., /artists/da-vinci.jpg
    bio: 'Leonardo da Vinci (1452-1519) was an Italian polymath of the High Renaissance who is widely considered one of the greatest painters of all time. His areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, paleontology, and cartography.',
    concept: 'He is renowned for his mastery of techniques like sfumato (subtle gradation of tone) and chiaroscuro (strong contrast between light and dark). The Mona Lisa is the most famous of his works.',
  },
  {
    id: '3',
    slug: 'frida-kahlo',
    name: 'Frida Kahlo',
    profileImageUrl: 'https://picsum.photos/seed/kahlo/200/200', // Replace with actual path e.g., /artists/frida-kahlo.jpg
    bio: 'Frida Kahlo (1907-1954) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\'s popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.',
    concept: 'Her paintings often had strong autobiographical elements and mixed realism with fantasy. Many of her works are filled with symbolism, often related to her physical and emotional pain.',
  }
];

// Sample painting data.
// Replace imageUrl with actual paths to images in public/paintings/
// e.g., imageUrl: '/paintings/starry-night.jpg'
// For AI Hint: 'impressionist landscape', 'renaissance portrait', 'surrealist art'
export const paintings: Painting[] = [
  {
    id: '1',
    slug: 'starry-night',
    title: 'Starry Night',
    imageUrl: 'https://picsum.photos/seed/starrynight/800/600', // Replace with e.g., /paintings/starry-night.jpg
    artistId: '1',
    description: 'The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.',
    year: 1889,
    dimensions: '73.7 cm × 92.1 cm (29 in × 36 1/4 in)',
  },
  {
    id: '2',
    slug: 'mona-lisa',
    title: 'Mona Lisa',
    imageUrl: 'https://picsum.photos/seed/monalisa/600/800', // Replace with e.g., /paintings/mona-lisa.jpg
    artistId: '2',
    description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".',
    year: 1503, // c. 1503–1506, perhaps continuing until c. 1517
    dimensions: '77 cm × 53 cm (30 in × 21 in)',
  },
  {
    id: '3',
    slug: 'the-two-fridas',
    title: 'The Two Fridas',
    imageUrl: 'https://picsum.photos/seed/twofridas/800/800', // Replace with e.g., /paintings/the-two-fridas.jpg
    artistId: '3',
    description: 'The Two Fridas (Las dos Fridas in Spanish) is an oil painting by Mexican artist Frida Kahlo. The painting was the first large-scale work done by Kahlo and is considered one of her most notable paintings. It is a double self-portrait, depicting two versions of Kahlo seated side by side.',
    year: 1939,
    dimensions: '173.5 cm × 173 cm (68.3 in × 68.1 in)',
  },
  {
    id: '4',
    slug: 'cafe-terrace-at-night',
    title: 'Café Terrace at Night',
    imageUrl: 'https://picsum.photos/seed/cafeterrace/800/1000', // Replace with e.g., /paintings/cafe-terrace.jpg
    artistId: '1',
    description: 'Café Terrace at Night is an 1888 oil painting by the Dutch artist Vincent van Gogh. It is also known as The Cafe Terrace on the Place du Forum, and, when first exhibited in 1891, was entitled Coffeehouse, in the evening (Café, le soir).',
    year: 1888,
    dimensions: '80.7 cm x 65.3 cm (31.8 in x 25.7 in)',
  },
];

export function getPaintings(): Painting[] {
  return paintings;
}

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

export function getPaintingsByArtistId(artistId: string): Painting[] {
  return paintings.filter((p) => p.artistId === artistId);
}

export function getArtists(): Artist[] {
  return artists;
}

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getArtistById(id: string): Artist | undefined {
  return artists.find((a) => a.id === id);
}
