export type Game = {
  name: string;
  img: string;
  slug: string;
  description: string;
  images: string[];
  Price: string;
  isBacklog: boolean;
  releaseYear: number;
  platform: Platform[];
};

export type Platform = "Playstation" | "Xbox" | "Nintendo" | "PC";

export const gameArray: Game[] = [
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    img: "/GamesPage/ZeldaTearsOfTheKingdom.jpg",
    slug: "zelda-tears-of-the-kingdom",
    description:
      "Embark on an epic adventure across the vast landscapes of Hyrule and the mysterious floating islands in the sky.",
    images: [
      "/GamesPage/Zelda_1.jpg",
      "/GamesPage/Zelda_2.jpg",
      "/GamesPage/Zelda_3.jpg",
    ],
    Price: "£49.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["Nintendo"],
  },
  {
    name: "Elden Ring",
    img: "/GamesPage/EldenRing.jpg",
    slug: "elden-ring",
    description:
      "Explore a vast, dark fantasy world in this open-world action RPG crafted by FromSoftware and George R.R. Martin.",
    images: [
      "/GamesPage/EldenRing_1.jpg",
      "/GamesPage/EldenRing_2.jpg",
      "/GamesPage/EldenRing_3.jpg",
    ],
    Price: "£44.99",
    isBacklog: true,
    releaseYear: 2022,
    platform: ["PC", "Playstation", "Xbox"],
  },
  {
    name: "God of War Ragnarök",
    img: "/GamesPage/GodOfWarRagnarok.jpg",
    slug: "god-of-war-ragnarok",
    description:
      "Join Kratos and Atreus on a mythic journey as the Norse apocalypse draws near in this epic action adventure.",
    images: [
      "/GamesPage/GOWR_1.jpg",
      "/GamesPage/GOWR_2.jpg",
      "/GamesPage/GOWR_3.jpg",
    ],
    Price: "£59.99",
    isBacklog: false,
    releaseYear: 2022,
    platform: ["Playstation"],
  },
  {
    name: "Starfield",
    img: "/GamesPage/Starfield.jpg",
    slug: "starfield",
    description:
      "Bethesda’s first new universe in over 25 years takes you on a journey through space exploration and sci-fi role-playing.",
    images: [
      "/GamesPage/Starfield_1.jpg",
      "/GamesPage/Starfield_2.jpg",
      "/GamesPage/Starfield_3.jpg",
    ],
    Price: "£69.99",
    isBacklog: true,
    releaseYear: 2023,
    platform: ["PC", "Xbox"],
  },
  {
    name: "Resident Evil 4 Remake",
    img: "/GamesPage/ResidentEvil4Remake.jpg",
    slug: "resident-evil-4-remake",
    description:
      "Re-experience the survival horror classic with modern visuals, gameplay enhancements, and deeper narrative.",
    images: [
      "/GamesPage/RE4_1.jpg",
      "/GamesPage/RE4_2.jpg",
      "/GamesPage/RE4_3.jpg",
    ],
    Price: "£54.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["PC", "Xbox"],
  },
  {
    name: "Marvel’s Spider-Man 2",
    img: "/GamesPage/SpiderMan2.jpg",
    slug: "spider-man-2",
    description:
      "Swing through New York City as Peter Parker and Miles Morales in this highly anticipated sequel.",
    images: [
      "/GamesPage/Spidey2_1.jpg",
      "/GamesPage/Spidey2_2.jpg",
      "/GamesPage/Spidey2_3.jpg",
    ],
    Price: "£69.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["Playstation", "PC"],
  },
  {
    name: "Final Fantasy XVI",
    img: "/GamesPage/FinalFantasyXVI.jpg",
    slug: "final-fantasy-xvi",
    description:
      "An epic fantasy tale with stunning visuals, intense combat, and dramatic storytelling from Square Enix.",
    images: [
      "/GamesPage/FF16_1.jpg",
      "/GamesPage/FF16_2.jpg",
      "/GamesPage/FF16_3.jpg",
    ],
    Price: "£64.99",
    isBacklog: true,
    releaseYear: 2023,
    platform: ["Playstation"],
  },
  {
    name: "Hogwarts Legacy",
    img: "/GamesPage/HogwartsLegacy.jpg",
    slug: "hogwarts-legacy",
    description:
      "Live the unwritten in this immersive, open-world action RPG set in the Harry Potter universe.",
    images: [
      "/GamesPage/Hogwarts_1.jpg",
      "/GamesPage/Hogwarts_2.jpg",
      "/GamesPage/Hogwarts_3.jpg",
    ],
    Price: "£59.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["PC", "Playstation", "Xbox"],
  },
  {
    name: "Baldur’s Gate 3",
    img: "/GamesPage/BaldursGate3.jpg",
    slug: "baldurs-gate-3",
    description:
      "A massive D&D-inspired CRPG experience filled with tactical combat, deep role-playing, and rich narrative choices.",
    images: [
      "/GamesPage/BG3_1.jpg",
      "/GamesPage/BG3_2.jpg",
      "/GamesPage/BG3_3.jpg",
    ],
    Price: "£49.99",
    isBacklog: true,
    releaseYear: 2023,
    platform: ["PC"],
  },
  {
    name: "Super Mario Bros. Wonder",
    img: "/GamesPage/MarioWonder.jpg",
    slug: "mario-wonder",
    description:
      "Mario returns in a colorful and inventive 2D platforming adventure filled with surprises and fun.",
    images: [
      "/GamesPage/MarioWonder_1.jpg",
      "/GamesPage/MarioWonder_2.jpg",
      "/GamesPage/MarioWonder_3.jpg",
    ],
    Price: "£49.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["Nintendo"],
  },
];
