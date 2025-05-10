
import type { Painting, Artist } from '@/types';

// Sample artist data.
// Image paths are now relative to the /public directory.
// e.g., profileImageUrl: '/artists/vincent-van-gogh.jpg'
// For AI Hint: 'artist portrait', 'painter profile'
export const artists: Artist[] = [
  {
    id: '1',
    slug: 'vincent-van-gogh',
    name: 'フィンセント・ファン・ゴッホ',
    profileImageUrl: '/artists/vincent-van-gogh.jpg',
    bio: 'フィンセント・ファン・ゴッホ（1853-1890）は、オランダのポスト印象派の画家であり、死後、西洋美術史において最も有名で影響力のある人物の一人となりました。10年間で約2,100点の作品を制作し、その中には約860点の油絵が含まれており、そのほとんどが人生の最後の2年間のものです。',
    concept: '彼の作品は、大胆な色彩とドラマチックで衝動的かつ表現力豊かな筆致が特徴であり、現代美術の基礎に貢献しました。生涯を通じて精神疾患に苦しみ、37歳で自ら命を絶ちました。',
  },
  {
    id: '2',
    slug: 'leonardo-da-vinci',
    name: 'レオナルド・ダ・ヴィンチ',
    profileImageUrl: '/artists/leonardo-da-vinci.jpg',
    bio: 'レオナルド・ダ・ヴィンチ（1452-1519）は、盛期ルネサンスのイタリアの博学者であり、史上最高の画家の一人と広く考えられています。彼の関心の分野には、発明、素描、絵画、彫刻、建築、科学、音楽、数学、工学、文学、解剖学、地質学、天文学、植物学、古生物学、地図作成が含まれていました。',
    concept: '彼は、スフマート（色調の微妙なグラデーション）やキアロスクーロ（光と闇の強いコントラスト）などの技法の熟達で有名です。「モナ・リザ」は彼の最も有名な作品です。',
  },
  {
    id: '3',
    slug: 'frida-kahlo',
    name: 'フリーダ・カーロ',
    profileImageUrl: '/artists/frida-kahlo.jpg',
    bio: 'フリーダ・カーロ（1907-1954）は、メキシコの画家であり、多くの肖像画、自画像、そしてメキシコの自然や工芸品に触発された作品で知られています。国の人気文化に触発され、メキシコ社会におけるアイデンティティ、ポストコロニアリズム、ジェンダー、階級、人種の問題を探求するために、素朴なフォークアートスタイルを採用しました。',
    concept: '彼女の絵画はしばしば強い自伝的要素を持ち、リアリズムとファンタジーを混ぜ合わせていました。彼女の作品の多くは、しばしば彼女の肉体的および感情的な痛みに関連する象徴で満たされています。',
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
    title: '星月夜',
    imageUrl: '/paintings/4b99e8420a8b6f9ef103c56c1a798115.jpg',
    artistId: '1',
    description: '「星月夜」は、オランダのポスト印象派の画家フィンセント・ファン・ゴッホによる油絵です。1889年6月に描かれ、サン＝レミ＝ド＝プロヴァンスの療養所の東向きの窓からの眺めを、日の出直前に、架空の村を加えて描いています。',
    year: 1889,
    dimensions: '73.7 cm × 92.1 cm (29 in × 36 1/4 in)',
  },
  {
    id: '2',
    slug: 'mona-lisa',
    title: 'モナ・リザ',
    imageUrl: '/paintings/baa021a3abb9d20c75bb277fd15433b6.jpg',
    artistId: '2',
    description: '「モナ・リザ」は、イタリアの芸術家レオナルド・ダ・ヴィンチによる半身像の肖像画です。イタリアルネサンスの典型的な傑作と見なされており、「世界で最もよく知られ、最も訪問され、最も書かれ、最も歌われ、最もパロディ化された芸術作品」と評されています。',
    year: 1503, // c. 1503–1506, おそらくc. 1517まで続く
    dimensions: '77 cm × 53 cm (30 in × 21 in)',
  },
  {
    id: '3',
    slug: 'the-two-fridas',
    title: '二人のフリーダ',
    imageUrl: '/paintings/ea567df5b239ba9aac8b0742fa8be534.jpg',
    artistId: '3',
    description: '「二人のフリーダ」（スペイン語でLas dos Fridas）は、メキシコの芸術家フリーダ・カーロによる油絵です。この絵はカーロが制作した最初の大規模な作品であり、彼女の最も注目すべき絵画の一つと考えられています。これは二重の自画像であり、並んで座っているカーロの2つのバージョンを描いています。',
    year: 1939,
    dimensions: '173.5 cm × 173 cm (68.3 in × 68.1 in)',
  },
  {
    id: '4',
    slug: 'cafe-terrace-at-night',
    title: '夜のカフェテラス',
    imageUrl: '/paintings/1131fd008c09056324287d02f95642a0.jpg',
    artistId: '1',
    description: '「夜のカフェテラス」は、オランダの芸術家フィンセント・ファン・ゴッホによる1888年の油絵です。また、「フォーラム広場のカフェテラス」としても知られており、1891年に初めて展示された際には、「夕方のコーヒーハウス」（Café, le soir）と題されていました。',
    year: 1888,
    dimensions: '80.7 cm x 65.3 cm (31.8 in x 25.7 in)',
  },
  {
    id: '5',
    slug: 'van-gogh-impression-1',
    title: '印象派の野原',
    imageUrl: '/paintings/80a813da09da725767b596e74289afa8.jpg',
    artistId: '1',
    description: 'プロヴァンスの太陽の下の野原を鮮やかに描いた作品で、ゴッホ特有の筆致が見られます。',
    year: 1889,
    dimensions: '60 cm x 80 cm',
  },
  {
    id: '6',
    slug: 'da-vinci-study-1',
    title: '解剖学的研究',
    imageUrl: '/paintings/d7eaa36dbb0e07e8479ffc53461db23a.jpg',
    artistId: '2',
    description: 'ダ・ヴィンチの科学的好奇心を反映した、人体解剖の詳細な研究。',
    year: 1490,
    dimensions: '30 cm x 45 cm',
  },
  {
    id: '7',
    slug: 'kahlo-self-portrait-1',
    title: '棘のある自画像',
    imageUrl: '/paintings/f0769b8da7d39b52708519c7818be090.jpg',
    artistId: '3',
    description: 'カーロの作品に典型的な、痛みと回復力をテーマにした強烈な自画像。',
    year: 1940,
    dimensions: '61 cm x 47 cm',
  },
  {
    id: '8',
    slug: 'van-gogh-portrait-1',
    title: '医師ガシェの肖像',
    imageUrl: '/paintings/30e8f995e60cad60c9c4104ecdde854d.jpg',
    artistId: '1',
    description: 'ゴッホの最も尊敬される肖像画の一つで、被写体の憂鬱な性質を捉えています。',
    year: 1890,
    dimensions: '67 cm x 56 cm',
  },
  {
    id: '9',
    slug: 'da-vinci-lady-ermine',
    title: '白貂を抱く貴婦人',
    imageUrl: '/paintings/868b73f1ace30438d6cd977b5f03aac7.jpg',
    artistId: '2',
    description: 'レオナルド・ダ・ヴィンチによる masterful な肖像画で、その心理的な深みと精巧なディテールで知られています。',
    year: 1490,
    dimensions: '54 cm x 39 cm',
  },
  {
    id: '10',
    slug: 'kahlo-roots',
    title: '根（Raíces）',
    imageUrl: '/paintings/e170dfcd2bfbc70b6c43af5e18d3d581.jpg',
    artistId: '3',
    description: 'カーロが胴体から生えるつる植物の生命の源として自身を描いた象徴的な絵画。',
    year: 1943,
    dimensions: '30.5 cm x 49.8 cm',
  },
  {
    id: '11',
    slug: 'van-gogh-sunflowers',
    title: 'ひまわり',
    imageUrl: '/paintings/fb0fd2671c6df52954bb9e7ab176ae57.jpg',
    artistId: '1',
    description: '静物画シリーズの一部であり、ゴッホの「ひまわり」は鮮やかな黄色で象徴的です。',
    year: 1888,
    dimensions: '92.1 cm x 73 cm',
  },
  {
    id: '12',
    slug: 'da-vinci-last-supper-detail',
    title: '最後の晩餐（詳細研究）',
    imageUrl: '/paintings/32b0ce914059f9afd41c091ab97f36eb.jpg',
    artistId: '2',
    description: 'レオナルド・ダ・ヴィンチによる象徴的な壁画の研究または詳細。',
    year: 1495,
    dimensions: '50 cm x 70 cm',
  },
  {
    id: '13',
    slug: 'kahlo-broken-column',
    title: '砕かれた背骨',
    imageUrl: '/paintings/a25cb308d7e35edd49ffe11a0c923ba5.jpg',
    artistId: '3',
    description: '事故後のカーロの肉体的苦痛を力強く描いた作品。',
    year: 1944,
    dimensions: '40 cm x 30.7 cm',
  },
  {
    id: '14',
    slug: 'van-gogh-irises',
    title: 'アイリス',
    imageUrl: '/paintings/e55e9fa43d9d9ca433efbb1d28c268e6.jpg',
    artistId: '1',
    description: 'ゴッホが療養所にいたときに描かれたこの作品は、彼の自然への継続的な関心を示しています。',
    year: 1889,
    dimensions: '71 cm x 93 cm',
  },
  {
    id: '15',
    slug: 'da-vinci-vitruvian-man-study',
    title: 'ウィトルウィウス的人体図（研究）',
    imageUrl: '/paintings/fd364dec71734d9b676799b2d15c4854.jpg',
    artistId: '2',
    description: '理想的な人体の比率を幾何学と関連付ける図面。',
    year: 1490,
    dimensions: '34.4 cm × 25.5 cm',
  },
  {
    id: '16',
    slug: 'kahlo-wounded-deer',
    title: '傷ついた鹿',
    imageUrl: '/paintings/3c456a7117b60aa06bb0f4d4f61a9051.jpg',
    artistId: '3',
    description: 'カーロは矢に射られた若い鹿として自身を描き、彼女の痛みと失望を象徴しています。',
    year: 1946,
    dimensions: '22.4 cm x 30 cm',
  },
  {
    id: '17',
    slug: 'van-gogh-bedroom-arles',
    title: 'アルルの寝室',
    imageUrl: '/paintings/b3dba77e7d6bdd1f415d48f88c37fbe8.jpg',
    artistId: '1',
    description: 'ゴッホによるアルルの黄色い家にある彼の寝室の描写。',
    year: 1888,
    dimensions: '72 cm x 90 cm',
  },
  {
    id: '18',
    slug: 'kahlo-my-grandparents',
    title: '私の祖父母、両親、そして私（家系図）',
    imageUrl: '/paintings/ea23d6ad2fbf68f86b708a283b14238e.jpg',
    artistId: '3',
    description: 'フリーダ・カーロの家系と遺産を描いた絵画。',
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
