export type Game = {
  readonly id: number;
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

export type Platform = "All" | "Playstation" | "Xbox" | "Nintendo" | "PC";

export const gameArray: Game[] = [
  {
    id: 1,
    name: "The Legend of Zelda: Tears of the Kingdom",
    img: "/GamesPage/ZeldaTearsOfTheKingdom.jpg",
    slug: "zelda-tears-of-the-kingdom",
    description:
      "Embark on an awe-inspiring journey in 'Tears of the Kingdom', where you’ll once again explore the sprawling, beautifully rendered land of Hyrule — but this time, the skies above are also yours to discover. With innovative mechanics, new powers, and mysterious floating islands, the game invites creativity and exploration at every turn. Forge your path through dynamic environments, engage in thrilling combat, and unravel a grand narrative as Link, the legendary hero.",
    images: [
      "/GamesPage/Zelda_1.jpg",
      "/GamesPage/Zelda_2.png",
      "/GamesPage/Zelda_3.jpg",
    ],
    Price: "£49.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["Nintendo"],
  },
  {
    id: 2,
    name: "Elden Ring",
    img: "/GamesPage/EldenRing.jpg",
    slug: "elden-ring",
    description:
      "In 'Elden Ring', enter a hauntingly majestic realm shaped by shattered gods and long-lost glory. Developed by FromSoftware and enriched by the worldbuilding of George R.R. Martin, this action RPG invites you to traverse the Lands Between — a vast, interconnected open world filled with deadly creatures, ancient ruins, and powerful magic. Customize your Tarnished hero, conquer brutal bosses, and carve out your destiny in a story of ruin, grace, and ambition.",
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
    id: 3,
    name: "God of War Ragnarök",
    img: "/GamesPage/GodOfWarRagnarok.jpg",
    slug: "god-of-war-ragnarok",
    description:
      "Face the end of the Norse world with Kratos and Atreus in 'God of War Ragnarök', the gripping sequel to the award-winning 2018 title. Venture through the Nine Realms, encounter mythical beasts, and clash with powerful gods like Thor and Odin. The father-son duo must reckon with fate and legacy as war looms. With breathtaking visuals, deep combat, and heartfelt storytelling, this game delivers an unforgettable cinematic experience.",
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
    id: 4,
    name: "Starfield",
    img: "/GamesPage/Starfield.jpg",
    slug: "starfield",
    description:
      "Chart your course through the cosmos in 'Starfield', Bethesda’s most ambitious RPG to date. Explore over 1,000 planets with your customizable ship, meet diverse factions, and uncover ancient alien mysteries in a richly imagined sci-fi universe. Build outposts, manage resources, and forge your own identity in a galaxy teeming with secrets. Whether you're a space explorer, diplomat, pirate, or soldier, the stars are yours to command.",
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
    id: 5,
    name: "Resident Evil 4 Remake",
    img: "/GamesPage/ResidentEvil4Remake.jpg",
    slug: "resident-evil-4-remake",
    description:
      "Revisit the iconic survival horror adventure reimagined with stunning graphics, enhanced gameplay, and a darker tone. In 'Resident Evil 4 Remake', you reprise the role of Leon S. Kennedy on a mission to rescue the president's daughter. Navigate a tense rural village overrun with sinister enemies, uncover a chilling plot, and survive intense encounters using an upgraded arsenal. It’s a masterful reinvention of a genre-defining classic.",
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
    id: 6,
    name: "Marvel’s Spider-Man 2",
    img: "/GamesPage/SpiderMan2.jpg",
    slug: "spider-man-2",
    description:
      "Swing through a bigger, bolder New York in 'Marvel’s Spider-Man 2'. This sequel allows you to play as both Peter Parker and Miles Morales, each with unique abilities, as they face new villains including the terrifying Venom. With faster web-swinging, expanded combat mechanics, and emotional storytelling, the game delivers an exhilarating superhero experience that balances action, drama, and heartfelt moments.",
    images: [
      "/GamesPage/Spidey2_1.png",
      "/GamesPage/Spidey2_2.jpg",
      "/GamesPage/Spidey2_3.jpg.png",
    ],
    Price: "£69.99",
    isBacklog: false,
    releaseYear: 2023,
    platform: ["Playstation", "PC"],
  },
  {
    id: 7,
    name: "Final Fantasy XVI",
    img: "/GamesPage/FinalFantasyXVI.jpg",
    slug: "final-fantasy-xvi",
    description:
      "Step into the dark fantasy world of Valisthea in 'Final Fantasy XVI', where powerful nations wage war over magical Crystals and towering Eikons. Follow Clive Rosfield on a path of vengeance, love, and betrayal, as he seeks justice and truth amid political chaos. The game blends cinematic real-time combat, immersive world-building, and an emotionally charged story into a bold new direction for the iconic franchise.",
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
    id: 8,
    name: "Hogwarts Legacy",
    img: "/GamesPage/HogwartsLegacy.jpg",
    slug: "hogwarts-legacy",
    description:
      "Live out your wizarding fantasy in 'Hogwarts Legacy', an open-world RPG set in the 1800s Wizarding World. Attend classes, tame magical beasts, and wield powerful spells as a custom student holding a mysterious ancient secret. Explore iconic locations like the Forbidden Forest and Hogsmeade, and make moral decisions that affect the course of your story. It’s a deeply immersive magical adventure beyond the pages of the books.",
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
    id: 9,
    name: "Baldur’s Gate 3",
    img: "/GamesPage/BaldursGate3.jpg",
    slug: "baldurs-gate-3",
    description:
      "Experience one of the most immersive RPGs ever created with 'Baldur’s Gate 3'. Set in the rich Dungeons & Dragons universe, it offers deep character customization, reactive storytelling, and turn-based combat that rewards strategy. Your choices shape not only your fate but the world around you. Recruit memorable companions, battle through epic quests, and confront the darkness within — or embrace it.",
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
    id: 10,
    name: "Super Mario Bros. Wonder",
    img: "/GamesPage/MarioWonder.jpg",
    slug: "mario-wonder",
    description:
      "Join Mario, Luigi, and friends in an all-new side-scrolling adventure bursting with color, creativity, and charm. 'Super Mario Bros. Wonder' introduces the magical Wonder Flowers that completely transform stages in surprising and delightful ways. Play solo or in co-op as you uncover secrets, dodge enemies, and take on clever platforming challenges in a joyful reinvention of classic 2D Mario fun.",
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
  {
    id: 31,
    name: "Grand Theft Auto V",
    img: "/GamesPage/GTAV.jpg",
    slug: "gta-v",
    description:
      "Dive into the criminal underworld of Los Santos in 'Grand Theft Auto V', a sprawling open-world game that redefined modern sandbox experiences. Switch between three protagonists — Michael, Franklin, and Trevor — as their interconnected stories unfold in a city brimming with opportunity, chaos, and satire. From daring heists to side hustles, the game offers unmatched freedom and depth, alongside a thriving GTA Online experience.",
    images: [
      "/GamesPage/GTAV_1.jpg",
      "/GamesPage/GTAV_2.jpg",
      "/GamesPage/GTAV_3.jpg",
    ],
    Price: "£24.99",
    isBacklog: false,
    releaseYear: 2013,
    platform: ["PC", "Playstation", "Xbox"],
  },
  {
    id: 32,
    name: "EA FC 25 - Ultimate Edition",
    img: "/GamesPage/EAFC25.jpg",
    slug: "ea-fc-25-ultimate-edition",
    description:
      "The beautiful game evolves once more in 'EA Sports FC 25 - Ultimate Edition'. Featuring next-gen HyperMotion technology, updated squads, and dynamic matchday presentation, this installment brings unmatched realism to the pitch. Build your dream team in Ultimate Team, take control of a club in Career Mode, and compete online in rich, competitive modes. It’s the future of football, powered by innovation and passion.",
    images: [
      "/GamesPage/EAFC_1.jpg",
      "/GamesPage/EAFC_2.jpg",
      "/GamesPage/EAFC_3.jpg",
    ],
    Price: "£34.99",
    isBacklog: false,
    releaseYear: 2024,
    platform: ["PC", "Playstation", "Xbox"],
  },
];

export const pc = gameArray.filter((game) => game.platform.includes("PC"));
export const nintendo = gameArray.filter((game) =>
  game.platform.includes("Nintendo")
);
export const playstation = gameArray.filter((game) =>
  game.platform.includes("Playstation")
);
export const xbox = gameArray.filter((game) => game.platform.includes("Xbox"));
