export type Console = {
  readonly id: number;
  name: string;
  img: string;
  slug: string;
  description: string;
  images: string[];
  spec: string;
  isBacklog: boolean;
  Price: string;
};

export const consoles: Console[] = [
  {
    id: 11,
    name: "Playstation 5",
    img: "/ConsolesPage/Playstation5Console.jpg",
    slug: "playstation-5",
    description:
      "The PlayStation 5 is Sony’s latest console featuring ultra-fast load times, ray tracing, and a revolutionary DualSense controller.",
    images: [
      "/ConsolesPage/Playstation5_1.jpg",
      "/ConsolesPage/Playstation5_2.jpg",
      "/ConsolesPage/Playstation5_3.jpg",
      "/ConsolesPage/Playstation5_4.jpg",
      "/ConsolesPage/Playstation5_5.jpg",
    ],
    spec: `
• **CPU**: 8-core AMD Zen 2 @ up to 3.5 GHz  
• **GPU**: Custom AMD RDNA 2, 36 CUs @ up to 2.23 GHz (~10.28 TFLOPS), hardware ray tracing  
• **RAM**: 16 GB GDDR6 @ 256-bit, 448 GB/s  
• **Storage**: 825 GB custom NVMe SSD (~5.5 GB/s raw; ~8–9 GB/s compressed); expandable via M.2  
• **Optical Drive**: 4K UHD Blu-ray  
• **Audio**: Tempest 3D Audio Engine  
• **Video Output**: HDMI 2.1 (up to 8K, 4K/120 Hz, VRR)  
• **Connectivity**: USB-A/C, Ethernet, Wi‑Fi 6, Bluetooth 5.1  
• **Dimensions**: ~390 × 104 × 260 mm; Weight ~4.5 kg  
• **Power**: Internal PSU (350 W); liquid-metal cooling + dual 120 mm fan
`,
    isBacklog: false,
    Price: "£449.99",
  },
  {
    id: 12,
    name: "Xbox Series X",
    img: "/ConsolesPage/XboxSeriesXConsole.jpg",
    slug: "xbox-series-x",
    description:
      "The Xbox Series X is Microsoft's most powerful console, delivering 4K gaming, fast load speeds, and Game Pass integration.",
    images: [
      "/ConsolesPage/XboxSeriesX_1.jpg",
      "/ConsolesPage/XboxSeriesX_2.jpg",
      "/ConsolesPage/XboxSeriesX_3.jpg",
      "/ConsolesPage/XboxSeriesX_4.jpg",
      "/ConsolesPage/XboxSeriesX_5.jpg",
    ],
    spec: `
• **CPU**: 8-core Custom AMD Zen 2 @ 3.8 GHz (3.6 GHz w/ SMT)  
• **GPU**: Custom AMD RDNA 2, 52 CUs @ 1.825 GHz (~12 TFLOPS)  
• **RAM**: 16 GB GDDR6 (10 GB @ 560 GB/s, 6 GB @ 336 GB/s)  
• **Storage**: 1 TB Custom NVMe SSD (~2.4 GB/s raw; ~4.8 GB/s compressed); expandable via proprietary card  
• **Optical Drive**: 4K UHD Blu-ray  
• **Video Output**: HDMI 2.1 (4K/120 Hz, 8K, VRR)  
• **Connectivity**: USB 3.1, Ethernet, Wi‑Fi 5, Bluetooth  
• **Dimensions**: ~301 × 151 × 151 mm; Weight ~4.45 kg  
• **Power**: Internal PSU
`,
    isBacklog: false,
    Price: "£429.99",
  },
  {
    id: 13,
    name: "Gamecube",
    img: "/ConsolesPage/GamecubeConsole.jpg",
    slug: "gamecube",
    description:
      "Nintendo's GameCube is a compact and colorful console known for classics like Super Smash Bros. Melee and Metroid Prime.",
    images: [
      "/ConsolesPage/Gamecube_1.jpg",
      "/ConsolesPage/Gamecube_2.jpg",
      "/ConsolesPage/Gamecube_3.jpg",
      "/ConsolesPage/Gamecube_4.jpg",
      "/ConsolesPage/Gamecube_5.jpg",
    ],
    spec: `
• **CPU**: IBM PowerPC “Gekko” @ 485 MHz  
• **GPU**: ATI/Nintendo “Flipper” @ 162 MHz  
• **RAM**: 24 MB 1T-SRAM + 16 MB DRAM (~40 MB total)  
• **Storage**: Proprietary 1.5 GB mini‑DVD disc  
• **Video**: Up to 480p (NTSC)/576i (PAL)  
• **Audio**: Stereo analog out  
• **I/O**: 4 controller ports, 2 memory card slots  
• **Dimensions**: ~150 × 110 × 161 mm; Weight ~2.4 kg  
• **Power**: DC 12 V @ 3.25 A
`,
    isBacklog: false,
    Price: "£79.99",
  },
  {
    id: 14,
    name: "Playstation 1",
    img: "/ConsolesPage/Playstation1Console.jpg",
    slug: "playstation-1",
    description:
      "The original PlayStation introduced 3D gaming to a mainstream audience, with legendary titles like Final Fantasy VII and Metal Gear Solid.",
    images: [
      "/ConsolesPage/Playstation1_1.jpg",
      "/ConsolesPage/Playstation1_2.jpg",
      "/ConsolesPage/Playstation1_3.jpg",
      "/ConsolesPage/Playstation1_4.jpg",
      "/ConsolesPage/Playstation1_5.jpg",
    ],
    spec: `
• **CPU**: 32-bit RISC MIPS R3000A-compatible @ 33 MHz  
• **GPU**: Custom Sony GPU up to 1.5 M polygons/sec  
• **RAM**: 2 MB main; 1 MB VRAM  
• **Storage**: CD-ROM (up to 700 MB)  
• **Audio**: 24-channel ADPCM audio  
• **Video Output**: Composite, S-Video, RGB SCART  
• **Dimensions**: ~260 × 32 × 190 mm; Weight ~1.5 kg  
• **Power**: PCA internal PSU (AC input)
`,
    isBacklog: false,
    Price: "£49.99",
  },
  {
    id: 15,
    name: "Playstation 2",
    img: "/ConsolesPage/Playstation2Console.jpg",
    slug: "playstation-2",
    description:
      "The PlayStation 2 is the best-selling console of all time, with a massive library of iconic games across every genre.",
    images: [
      "/ConsolesPage/Playstation2_1.jpg",
      "/ConsolesPage/Playstation2_2.jpg",
      "/ConsolesPage/Playstation2_3.jpg",
      "/ConsolesPage/Playstation2_4.jpg",
      "/ConsolesPage/Playstation2_5.jpg",
    ],
    spec: `
• **CPU**: Emotion Engine (MIPS III RISC) @ 294 MHz  
• **GPU**: Graphics Synthesizer @ 147 MHz (150 MHz in later models)  
• **RAM**: 32 MB RDRAM @ 3.2 GB/s  
• **Storage**: DVD-ROM; optional HDD accessory  
• **Audio**: SPU2, up to 48 channels  
• **Video Output**: Composite, S-Video, Component, VGA, RGB  
• **Dimensions**: ~301 × 78 × 182 mm; Weight ~2.2 kg (original)  
• **Power**: ~45–90 W depending on model
`,
    isBacklog: false,
    Price: "£69.99",
  },
  {
    id: 16,
    name: "Playstation 3",
    img: "/ConsolesPage/Playstation3Console.jpg",
    slug: "playstation-3",
    description:
      "Sony’s PlayStation 3 featured Blu-ray playback and powerful hardware that supported blockbuster franchises like Uncharted and The Last of Us.",
    images: [
      "/ConsolesPage/Playstation3_1.jpg",
      "/ConsolesPage/Playstation3_2.jpg",
      "/ConsolesPage/Playstation3_3.jpg",
      "/ConsolesPage/Playstation3_4.jpg",
      "/ConsolesPage/Playstation3_5.jpg",
    ],
    spec: `
• **CPU**: Cell Broadband Engine (1 PPE + 7 SPE) @ 3.2 GHz  
• **GPU**: NVIDIA RSX “Reality Synthesizer” @ 550 MHz  
• **RAM**: 256 MB XDR main, 256 MB GDDR3 VRAM  
• **Storage**: 20–60 GB (fat), 120–500 GB (Slim & Super Slim) HDD  
• **Optical**: Blu-ray/DVD/CD drive  
• **Audio/Video Output**: HDMI 1.3a, AV Multi-out (Composite, Component, S-Video)  
• **Dimensions**: Fat: ~325 × 98 × 274 mm; Weight ~5 kg  
• **Power**: 250 W (original); ~200 W (Slim)
`,
    isBacklog: false,
    Price: "£89.99",
  },
  {
    id: 17,
    name: "Xbox 360",
    img: "/ConsolesPage/Xbox360.jpg",
    slug: "xbox-360",
    description:
      "The Xbox 360 brought HD gaming to the masses and is known for hits like Halo 3, Gears of War, and robust online multiplayer.",
    images: [
      "/ConsolesPage/Xbox360_1.jpg",
      "/ConsolesPage/Xbox360_2.jpg",
      "/ConsolesPage/Xbox360_3.jpg",
      "/ConsolesPage/Xbox360_4.jpg",
      "/ConsolesPage/Xbox360_5.jpg",
    ],
    spec: `
• **CPU**: Triple-core Xenon @ 3.2 GHz  
• **GPU**: ATI Xenos @ 500 MHz (10 MB eDRAM)  
• **RAM**: 512 MB GDDR3 + 10 MB eDRAM  
• **Storage**: 20–250 GB HDD (removable); external USB 2.0 support  
• **Optical**: DVD-ROM + optional HD DVD add-on  
• **Video Output**: HDMI 1.2a, Component, Composite, VGA  
• **Connectivity**: Ethernet, Wi‑Fi (built-in on later models), USB ports  
• **Dimensions**: Original: ~310 × 79 × 246 mm; Weight ~3.2 kg  
• **Power**: 150–175 W
`,
    isBacklog: false,
    Price: "£59.99",
  },
  {
    id: 18,
    name: "Gameboy",
    img: "/ConsolesPage/Gameboy.png",
    slug: "gameboy",
    description:
      "The original Game Boy was Nintendo’s first handheld console and became a cultural icon. Everyone loves Game Boy. Packing a huge amount of power into a tiny package…",
    images: [
      "/ConsolesPage/Gameboy_1.jpg",
      "/ConsolesPage/Gameboy_2.jpg",
      "/ConsolesPage/Gameboy_3.jpg",
      "/ConsolesPage/Gameboy_4.jpg",
      "/ConsolesPage/Gameboy_5.jpg",
    ],
    spec: `
• **CPU**: Custom 8-bit Sharp LR35902 @ ~4.19 MHz  
• **RAM**: 8 KB internal, 8 KB video RAM  
• **Display**: 160 × 144 px gray‑green LCD  
• **Sound**: 4-channel PCM audio  
• **Storage**: ROM cartridges (32 KB–8 MB)  
• **Power**: 4× AA batteries (~15 h life); ~0.7 W  
• **Dimensions**: ~90 × 32 × 144 mm; Weight ~220 g (with batteries)
`,
    isBacklog: true,
    Price: "£49.99",
  },
  {
    id: 19,
    name: "Gameboy Color",
    img: "/ConsolesPage/GameboyColor.png",
    slug: "gameboy-color",
    description:
      "The Game Boy Color added a color screen to Nintendo’s handheld lineup, bringing new life to classics like Pokémon Gold and Silver.",
    images: [
      "/ConsolesPage/GameboyColor_1.jpg",
      "/ConsolesPage/GameboyColor_2.jpg",
      "/ConsolesPage/GameboyColor_3.jpg",
      "/ConsolesPage/GameboyColor_4.jpg",
      "/ConsolesPage/GameboyColor_5.jpg",
    ],
    spec: `
• **CPU**: Custom 8-bit Sharp LR35902 @ ~8 MHz  
• **RAM**: 32 KB internal, 16 KB VRAM  
• **Display**: 160×144 px color LCD (56 palette colors)  
• **Sound**: 4-channel PCM  
• **Storage**: ROM cartridges  
• **Power**: 2× AA (~10 h life); ~0.6 W  
• **Dimensions**: ~133 × 27 × 75 mm; Weight ~138 g
`,
    isBacklog: false,
    Price: "£59.99",
  },
  {
    id: 20,
    name: "Gameboy Advance",
    img: "/ConsolesPage/GameboyAdvance.jpg",
    slug: "gameboy-advance",
    description:
      "The Game Boy Advance introduced improved graphics and horizontal layout to handheld gaming, with standout titles like Metroid Fusion.",
    images: [
      "/ConsolesPage/GameboyAdvance_1.jpg",
      "/ConsolesPage/GameboyAdvance_2.jpg",
      "/ConsolesPage/GameboyAdvance_3.jpg",
      "/ConsolesPage/GameboyAdvance_4.jpg",
      "/ConsolesPage/GameboyAdvance_5.jpg",
    ],
    spec: `
• **CPU**: 32-bit ARM7TDMI @ 16.78 MHz  
• **RAM**: 32 KB + 256 KB VRAM  
• **Display**: 240×160 px 32,768‑color LCD  
• **Sound**: 2 Game Boy channels + 6 Direct Sound  
• **Storage**: ROM cartridges  
• **Power**: 2× AA (~15 h); ~0.5 W  
• **Dimensions**: ~144 × 24 × 82 mm; Weight ~140 g
`,
    isBacklog: false,
    Price: "£69.99",
  },
  {
    id: 21,
    name: "Nintendo DS",
    img: "/ConsolesPage/NintendoDS.jpg",
    slug: "nintendo-ds",
    description:
      "The Nintendo DS featured dual screens and a touchscreen, revolutionizing portable gaming with titles like Nintendogs and Brain Age.",
    images: [
      "/ConsolesPage/NintendoDS_1.jpg",
      "/ConsolesPage/NintendoDS_2.jpg",
      "/ConsolesPage/NintendoDS_3.jpg",
      "/ConsolesPage/NintendoDS_4.jpg",
      "/ConsolesPage/NintendoDS_5.jpg",
    ],
    spec: `
• **CPU**: Dual ARM CPUs (ARM9 @ 67 MHz + ARM7 @ 33 MHz)  
• **RAM**: 4 MB 2T-SRAM  
• **Display**: Dual 256×192 px TFT LCD (lower touchscreen)  
• **Sound**: Stereo speakers, microphone  
• **Storage**: Nintendo DS game cards (~8 MB–512 MB)  
• **Battery**: Li-ion (15 h); 3.7 V, 1000 mAh  
• **Dimensions**: ~148 × 28 × 73 mm; Weight ~275 g
`,
    isBacklog: false,
    Price: "£44.99",
  },
  {
    id: 22,
    name: "Nintendo Wii",
    img: "/ConsolesPage/NintendoWii.jpg",
    slug: "nintendo-wii",
    description:
      "The Nintendo Wii introduced motion controls to the mainstream, making games like Wii Sports and Mario Kart accessible to all ages.",
    images: [
      "/ConsolesPage/NintendoWii_1.jpg",
      "/ConsolesPage/NintendoWii_2.jpg",
      "/ConsolesPage/NintendoWii_3.jpg",
      "/ConsolesPage/NintendoWii_4.jpg",
      "/ConsolesPage/NintendoWii_5.jpg",
    ],
    spec: `
• **CPU**: IBM PowerPC "Broadway" @ 729 MHz  
• **GPU**: ATI "Hollywood" @ 243 MHz  
• **RAM**: 88 MB total (24 MB "ESRAM" + 64 MB GDDR3)  
• **Storage**: 512 MB internal flash + SD expansion; disc-based  
• **Video Output**: 480p (Component); composite/S-Video via adapter  
• **Audio/Connectivity**: Stereo, Bluetooth, USB 2.0, Ethernet (in later models)  
• **Dimensions**: ~44 × 157 × 215 mm (“vertical”); Weight ~1.4 kg  
• **Power**: ~40 W
`,
    isBacklog: false,
    Price: "£49.99",
  },
  {
    id: 23,
    name: "Nintendo DS Lite",
    img: "/ConsolesPage/NintendoDSLite.jpg",
    slug: "nintendo-ds-lite",
    description:
      "The Nintendo DS Lite improved on the original DS with a sleeker design and brighter screens, retaining full compatibility with DS games.",
    images: [
      "/ConsolesPage/NintendoDSLite_1.jpg",
      "/ConsolesPage/NintendoDSLite_2.jpg",
      "/ConsolesPage/NintendoDSLite_3.jpg",
      "/ConsolesPage/NintendoDSLite_4.jpg",
      "/ConsolesPage/NintendoDSLite_5.jpg",
    ],
    spec: `
• **CPU**: ARM9 @ 67 MHz + ARM7 @ 33 MHz  
• **RAM**: 4 MB 2T‑SRAM  
• **Display**: Dual 256×192 px TFT LCD (brighter)  
• **Sound**: Stereo speakers, mic  
• **Battery**: Li-ion (15 h max); 3.7 V, 1000–1300 mAh  
• **Dimensions**: ~133 × 21 × 74 mm; Weight ~214 g
`,
    isBacklog: false,
    Price: "£49.99",
  },
  {
    id: 24,
    name: "Nintendo 3DS",
    img: "/ConsolesPage/Nintendo3DS.jpg",
    slug: "nintendo-3ds",
    description:
      "The Nintendo 3DS brought stereoscopic 3D to handheld gaming, launching with titles like Super Mario 3D Land and Pokémon X/Y.",
    images: [
      "/ConsolesPage/Nintendo3DS_1.jpg",
      "/ConsolesPage/Nintendo3DS_2.jpg",
      "/ConsolesPage/Nintendo3DS_3.jpg",
      "/ConsolesPage/Nintendo3DS_4.jpg",
      "/ConsolesPage/Nintendo3DS_5.jpg",
    ],
    spec: `
• **CPU**: Dual-core ARM11 @ 268 MHz + ARM9 @ 134 MHz  
• **RAM**: 128 MB (shared) + 6 MB VRAM  
• **Display**: Upper 800×240 px autostereoscopic 3D LCD; lower 320×240 px touchscreen  
• **Storage**: 2 GB SD card included, up to 32 GB; cartridge-based game media  
• **Battery**: Li-ion (~7–10 h non-3D, ~3–5 h 3D)  
• **Connectivity**: Wi‑Fi, StreetPass/SpotPass, SD slot, AGB slot  
• **Dimensions**: ~134 × 74 × 21 mm; Weight ~235 g
`,
    isBacklog: false,
    Price: "£89.99",
  },
  {
    id: 25,
    name: "Xbox Series S",
    img: "/ConsolesPage/XboxOneS.jpg",
    slug: "xbox-series-s",
    description:
      "The Xbox Series S is a compact, digital-only console that offers next-gen speed and performance at a more affordable price point.",
    images: [
      "/ConsolesPage/XboxSeriesS_1.jpg",
      "/ConsolesPage/XboxSeriesS_2.jpg",
      "/ConsolesPage/XboxSeriesS_3.jpg",
      "/ConsolesPage/XboxSeriesS_4.jpg",
      "/ConsolesPage/XboxSeriesS_5.jpg",
    ],
    spec: `
• **CPU**: 8-core Custom AMD Zen 2 @ 3.6 GHz (3.4 GHz w/ SMT)  
• **GPU**: Custom AMD RDNA 2, 20 CUs @ 1.565 GHz (~4 TFLOPS)  
• **RAM**: 10 GB GDDR6 (8 GB @ 224 GB/s, 2 GB @ 56 GB/s)  
• **Storage**: 512 GB Custom NVMe SSD (~2.4 GB/s raw; ~4.8 GB/s compressed); expandable  
• **Output**: HDMI 2.1 (1440p/120 Hz), upscaled 4K  
• **Connectivity**: USB 3.1, Ethernet, Wi‑Fi 5, Bluetooth  
• **Dimensions**: ~275 × 63 × 151 mm; Weight ~1.9 kg  
• **Power**: Internal PSU
`,
    isBacklog: false,
    Price: "£250.99",
  },
  {
    id: 31,
name: "Nintendo Switch 2",
img: "/ConsolesPage/NintendoSwitch2.jpg",
slug: "nintendo-switch-2",
description:
  "The Nintendo Switch 2 builds on the hybrid success of its predecessor, offering improved performance, a vibrant OLED display, and enhanced battery life for gaming at home or on the go.",
images: [
  "/ConsolesPage/NintendoSwitch2_1.jpg",
  "/ConsolesPage/NintendoSwitch2_2.jpg",
  "/ConsolesPage/NintendoSwitch2_3.jpg",
  "/ConsolesPage/NintendoSwitch2_4.jpg",
  "/ConsolesPage/NintendoSwitch2_5.jpg",
],
spec: `
• **CPU**: Custom NVIDIA ARM-based processor with 8 cores  
• **GPU**: NVIDIA Ampere architecture, up to ~1.2 TFLOPS  
• **RAM**: 12 GB LPDDR5  
• **Storage**: 256 GB internal flash storage; expandable via microSDXC  
• **Display**: 7-inch OLED, 1080p handheld / up to 4K docked via DLSS  
• **Connectivity**: Wi‑Fi 6, Bluetooth 5.1, USB-C, headphone jack  
• **Battery life**: Approx. 6–10 hours depending on usage  
• **Dimensions**: ~242 × 102 × 13.9 mm; Weight ~420 g (with Joy-Cons)
`,
isBacklog: false,
Price: "£499.99",
  },

  {
    id: 26,
    name: "Xbox One",
    img: "/ConsolesPage/XboxOne.jpg",
    slug: "xbox-one",
    description: "",
    images: ["/ConsolesPage/XboxOne_1.jpg",
      "/ConsolesPage/XboxOne_2.jpg",
      "/ConsolesPage/XboxOne_3.jpg",
      "/ConsolesPage/XboxOne_4.jpg",
      "/ConsolesPage/XboxOne_5.jpg",],
    spec: "",
    isBacklog: true,
    Price: "£89.99",
  },
  {
    id: 27,
    name: "SNES",
    img: "/ConsolesPage/SNES.jpg",
    slug: "snes",
    description: "",
    images: ["/ConsolesPage/SNES_1.jpg",
      "/ConsolesPage/SNES_2.jpg",
      "/ConsolesPage/SNES_3.jpg",
      "/ConsolesPage/SNES_4.jpg",
      "/ConsolesPage/SNES_5.jpg",],
    spec: "",
    isBacklog: true,
    Price: "£89.99",
  },
  {
    id: 28,
    name: "Nintendo 64",
    img: "/ConsolesPage/N64.jpg",
    slug: "nintendo-64",
    description: "",
    images: ["/ConsolesPage/Nintendo64_1.jpg",
      "/ConsolesPage/Nintendo64_2.jpg",
      "/ConsolesPage/Nintendo64_3.jpg",
      "/ConsolesPage/Nintendo64_4.jpg",
      "/ConsolesPage/Nintendo64_5.jpg",],
    spec: "",
    isBacklog: true,
    Price: "£89.99",
  },
  {
    id: 29,
    name: "Gameboy Advance SP",
    img: "/ConsolesPage/GameboyAdvanceSP.jpg",
    slug: "gameboy-advance-sp",
    description: "",
    images: ["/ConsolesPage/GameboyAdvanceSP_1.jpg",
      "/ConsolesPage/GameboyAdvanceSP_2.jpg",
      "/ConsolesPage/GameboyAdvanceSP_3.jpg",
      "/ConsolesPage/GameboyAdvanceSP_4.jpg",
      "/ConsolesPage/GameboyAdvanceSP_5.jpg",],
    spec: "",
    isBacklog: true,
    Price: "£89.99",
  },
  {
    id: 30,
    name: "Game and Watch",
    img: "/ConsolesPage/GameAndWatch.jpg",
    slug: "game-and-watch",
    description: "",
    images: ["/ConsolesPage/GameAndWatch_1.jpg",
      "/ConsolesPage/GameAndWatch_2.jpg",
      "/ConsolesPage/GameAndWatch_3.jpg",
      "/ConsolesPage/GameAndWatch_4.jpg",
      "/ConsolesPage/GameAndWatch_5.jpg",],
    spec: "",
    isBacklog: true,
    Price: "£89.99",
  },
];

export const availableConsoles = consoles.filter(
  (console) => console.isBacklog === false
);

export const filteredBacklogConsoles = consoles.filter(
  (console) => console.isBacklog === true
);
