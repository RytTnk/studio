
import type { Painting, Artist } from '@/types';

// Sample artist data.
// Image paths are now relative to the /public directory.
// e.g., profileImageUrl: '/artists/vincent-van-gogh.jpg'
// For AI Hint: 'artist portrait', 'painter profile'
export const artists: Artist[] = [
  {
    id: '1',
    slug: 'vincent-van-gogh',
    name: 'Vincent van Gogh',
    profileImageUrl: '/artists/vincent-van-gogh.jpg', // Updated path
    bio: 'Vincent van Gogh (1853-1890) was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.',
    concept: 'His work is characterized by bold colors and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. He struggled with mental illness throughout his life and died by suicide at age 37.',
  },
  {
    id: '2',
    slug: 'leonardo-da-vinci',
    name: 'Leonardo da Vinci',
    profileImageUrl: '/artists/leonardo-da-vinci.jpg', // Updated path
    bio: 'Leonardo da Vinci (1452-1519) was an Italian polymath of the High Renaissance who is widely considered one of the greatest painters of all time. His areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, paleontology, and cartography.',
    concept: 'He is renowned for his mastery of techniques like sfumato (subtle gradation of tone) and chiaroscuro (strong contrast between light and dark). The Mona Lisa is the most famous of his works.',
  },
  {
    id: '3',
    slug: 'frida-kahlo',
    name: 'Frida Kahlo',
    profileImageUrl: '/artists/frida-kahlo.jpg', // Updated path
    bio: 'Frida Kahlo (1907-1954) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\'s popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.',
    concept: 'Her paintings often had strong autobiographical elements and mixed realism with fantasy. Many of her works are filled with symbolism, often related to her physical and emotional pain.',
  }
];

// Sample painting data.
// Image paths are now relative to the /public directory.
// e.g., imageUrl: '/paintings/starry-night.jpg'
// For AI Hint: 'impressionist landscape', 'renaissance portrait', 'surrealist art'
export const paintings: Painting[] = [
  {
    id: '1',
    slug: 'starry-night',
    title: 'Starry Night',
    imageUrl: '/paintings/4b99e8420a8b6f9ef103c56c1a798115.jpg', // Updated
    artistId: '1',
    description: 'The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.',
    year: 1889,
    dimensions: '73.7 cm × 92.1 cm (29 in × 36 1/4 in)',
  },
  {
    id: '2',
    slug: 'mona-lisa',
    title: 'Mona Lisa',
    imageUrl: '/paintings/baa021a3abb9d20c75bb277fd15433b6.jpg', // Updated
    artistId: '2',
    description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".',
    year: 1503, // c. 1503–1506, perhaps continuing until c. 1517
    dimensions: '77 cm × 53 cm (30 in × 21 in)',
  },
  {
    id: '3',
    slug: 'the-two-fridas',
    title: 'The Two Fridas',
    imageUrl: '/paintings/ea567df5b239ba9aac8b0742fa8be534.jpg', // Updated
    artistId: '3',
    description: 'The Two Fridas (Las dos Fridas in Spanish) is an oil painting by Mexican artist Frida Kahlo. The painting was the first large-scale work done by Kahlo and is considered one of her most notable paintings. It is a double self-portrait, depicting two versions of Kahlo seated side by side.',
    year: 1939,
    dimensions: '173.5 cm × 173 cm (68.3 in × 68.1 in)',
  },
  {
    id: '4',
    slug: 'cafe-terrace-at-night',
    title: 'Café Terrace at Night',
    imageUrl: '/paintings/1131fd008c09056324287d02f95642a0.jpg', // Updated
    artistId: '1',
    description: 'Café Terrace at Night is an 1888 oil painting by the Dutch artist Vincent van Gogh. It is also known as The Cafe Terrace on the Place du Forum, and, when first exhibited in 1891, was entitled Coffeehouse, in the evening (Café, le soir).',
    year: 1888,
    dimensions: '80.7 cm x 65.3 cm (31.8 in x 25.7 in)',
  },
  // Added new paintings
  {
    id: '5',
    slug: 'van-gogh-impression-1',
    title: 'Impressionist Field',
    imageUrl: '/paintings/80a813da09da725767b596e74289afa8.jpg',
    artistId: '1',
    description: 'A vibrant depiction of a field under the Provencal sun, showcasing Van Gogh\'s characteristic brushwork.',
    year: 1889,
    dimensions: '60 cm x 80 cm',
  },
  {
    id: '6',
    slug: 'da-vinci-study-1',
    title: 'Anatomical Study',
    imageUrl: '/paintings/d7eaa36dbb0e07e8479ffc53461db23a.jpg',
    artistId: '2',
    description: 'A detailed study of human anatomy, reflecting Da Vinci\'s scientific curiosity.',
    year: 1490,
    dimensions: '30 cm x 45 cm',
  },
  {
    id: '7',
    slug: 'kahlo-self-portrait-1',
    title: 'Self-Portrait with Thorns',
    imageUrl: '/paintings/f0769b8da7d39b52708519c7818be090.jpg',
    artistId: '3',
    description: 'An intense self-portrait exploring themes of pain and resilience, typical of Kahlo\'s work.',
    year: 1940,
    dimensions: '61 cm x 47 cm',
  },
  {
    id: '8',
    slug: 'van-gogh-portrait-1',
    title: 'Portrait of Dr. Gachet',
    imageUrl: '/paintings/30e8f995e60cad60c9c4104ecdde854d.jpg',
    artistId: '1',
    description: 'One of Van Gogh\'s most revered portraits, capturing the melancholic nature of his subject.',
    year: 1890,
    dimensions: '67 cm x 56 cm',
  },
  {
    id: '9',
    slug: 'da-vinci-lady-ermine',
    title: 'Lady with an Ermine',
    imageUrl: '/paintings/868b73f1ace30438d6cd977b5f03aac7.jpg',
    artistId: '2',
    description: 'A masterful portrait by Leonardo da Vinci, known for its psychological depth and exquisite detail.',
    year: 1490,
    dimensions: '54 cm x 39 cm',
  },
  {
    id: '10',
    slug: 'kahlo-roots',
    title: 'Roots (Raíces)',
    imageUrl: '/paintings/e170dfcd2bfbc70b6c43af5e18d3d581.jpg',
    artistId: '3',
    description: 'A symbolic painting where Kahlo depicts herself as a source of life for a vine growing from her torso.',
    year: 1943,
    dimensions: '30.5 cm x 49.8 cm',
  },
  {
    id: '11',
    slug: 'van-gogh-sunflowers',
    title: 'Sunflowers',
    imageUrl: '/paintings/fb0fd2671c6df52954bb9e7ab176ae57.jpg',
    artistId: '1',
    description: 'Part of a series of still life paintings, Van Gogh\'s Sunflowers are iconic for their vibrant yellows.',
    year: 1888,
    dimensions: '92.1 cm x 73 cm',
  },
  {
    id: '12',
    slug: 'da-vinci-last-supper-detail',
    title: 'The Last Supper (Detail Study)',
    imageUrl: '/paintings/32b0ce914059f9afd41c091ab97f36eb.jpg',
    artistId: '2',
    description: 'A study or detail from the iconic mural painting by Leonardo da Vinci.',
    year: 1495,
    dimensions: '50 cm x 70 cm',
  },
  {
    id: '13',
    slug: 'kahlo-broken-column',
    title: 'The Broken Column',
    imageUrl: '/paintings/a25cb308d7e35edd49ffe11a0c923ba5.jpg',
    artistId: '3',
    description: 'A powerful depiction of Kahlo\'s physical suffering after her accident.',
    year: 1944,
    dimensions: '40 cm x 30.7 cm',
  },
  {
    id: '14',
    slug: 'van-gogh-irises',
    title: 'Irises',
    imageUrl: '/paintings/e55e9fa43d9d9ca433efbb1d28c268e6.jpg',
    artistId: '1',
    description: 'Painted while Van Gogh was in an asylum, this work shows his continued interest in nature.',
    year: 1889,
    dimensions: '71 cm x 93 cm',
  },
  {
    id: '15',
    slug: 'da-vinci-vitruvian-man-study',
    title: 'Vitruvian Man (Study)',
    imageUrl: '/paintings/fd364dec71734d9b676799b2d15c4854.jpg',
    artistId: '2',
    description: 'A drawing that correlates the ideal human proportions with geometry.',
    year: 1490,
    dimensions: '34.4 cm × 25.5 cm',
  },
  {
    id: '16',
    slug: 'kahlo-wounded-deer',
    title: 'The Wounded Deer',
    imageUrl: '/paintings/3c456a7117b60aa06bb0f4d4f61a9051.jpg',
    artistId: '3',
    description: 'Kahlo portrays herself as a young deer struck by arrows, symbolizing her pain and disappointment.',
    year: 1946,
    dimensions: '22.4 cm x 30 cm',
  },
  {
    id: '17',
    slug: 'van-gogh-bedroom-arles',
    title: 'Bedroom in Arles',
    imageUrl: '/paintings/b3dba77e7d6bdd1f415d48f88c37fbe8.jpg',
    artistId: '1',
    description: 'Van Gogh\'s depiction of his bedroom in the Yellow House in Arles.',
    year: 1888,
    dimensions: '72 cm x 90 cm',
  },
  {
    id: '18',
    slug: 'kahlo-my-grandparents',
    title: 'My Grandparents, My Parents, and I (Family Tree)',
    imageUrl: '/paintings/ea23d6ad2fbf68f86b708a283b14238e.jpg',
    artistId: '3',
    description: 'A painting depicting Frida Kahlo\'s family lineage and heritage.',
    year: 1936,
    dimensions: '30.7 cm x 34.5 cm',
  }
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

