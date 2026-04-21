import { ConsoleData, Generation } from "../types";

export const consolesData: ConsoleData[] = [
  // 1st Generation
  {
    id: "magnavox-odyssey",
    name: "Magnavox Odyssey",
    generation: 1,
    manufacturer: "Magnavox",
    releaseYear: 1972,
    specs: {
      cpu: "N/A (Lógica discreta de transistores)",
      gpu: "N/A (Gráficos analógicos rudimentares)",
      ram: "N/A",
      media: "Cartões de circuito (Jumpers)",
      resolution: "256 x 240 (Aproximado, sinal de TV analógico)"
    },
    launch: {
      price: "$100 USD",
      source: "Magnavox Museum"
    },
    sales: {
      total: "350.000 unidades",
      source: "Gamasutra"
    },
    dimensions: {
      size: "26,5 x 26,5 x 10,5 cm",
      weight: "1.8 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Saída RF / Antena",
    brazilCuriosity: "Nunca foi lançado oficialmente no Brasil, mas clones como o Telejogo da Philco (1977) surgiram depois.",
    imageUrl: "https://picsum.photos/seed/magnavox/400/300"
  },
  // 2nd Generation
  {
    id: "atari-2600",
    name: "Atari 2600",
    generation: 2,
    manufacturer: "Atari",
    releaseYear: 1977,
    specs: {
      cpu: "MOS Tech 6507 @ 1.19 MHz",
      gpu: "TIA (Television Interface Adaptor)",
      ram: "128 bytes",
      media: "Cartucho",
      resolution: "160 x 192 (NTSC)"
    },
    launch: {
      price: "$199 USD",
      source: "Atari Archives"
    },
    sales: {
      total: "30 milhões de unidades",
      source: "Business Week"
    },
    dimensions: {
      size: "35 x 23 x 9 cm",
      weight: "2.3 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Saída RF",
    brazilCuriosity: "Foi o console que iniciou o boom dos videogames no Brasil, lançado oficialmente pela Polyvox em 1983.",
    imageUrl: "https://picsum.photos/seed/atari2600/400/300"
  },
  {
    id: "intellivision",
    name: "Intellivision",
    generation: 2,
    manufacturer: "Mattel",
    releaseYear: 1979,
    specs: {
      cpu: "General Instrument CP1600 @ 894.886 kHz",
      gpu: "STIC (Standard Television Interface Chip)",
      ram: "1456 bytes",
      media: "Cartucho",
      resolution: "160 x 192"
    },
    launch: {
      price: "$299 USD",
      source: "Mattel History"
    },
    sales: {
      total: "3 milhões de unidades",
      source: "Blue Sky Rangers"
    },
    dimensions: {
      size: "38 x 21 x 7 cm",
      weight: "2 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Saída RF",
    brazilCuriosity: "Lançado no Brasil pela Digiponto em 1983, competindo diretamente com o Atari da Polyvox.",
    imageUrl: "https://picsum.photos/seed/intellivision/400/300"
  },
  {
    id: "colecovision",
    name: "ColecoVision",
    generation: 2,
    manufacturer: "Coleco",
    releaseYear: 1982,
    specs: {
      cpu: "Zilog Z80A @ 3.58 MHz",
      gpu: "Texas Instruments TMS9928A",
      ram: "1 KB principal, 16 KB vídeo",
      media: "Cartucho",
      resolution: "256 x 192"
    },
    launch: {
      price: "$175 USD",
      source: "Coleco Industries"
    },
    sales: {
      total: "2 milhões de unidades",
      source: "Gamasutra"
    },
    dimensions: {
      size: "34 x 20 x 5 cm",
      weight: "1.5 kg"
    },
    retrocompatibility: "Compatível com Atari 2600 via adaptador",
    connectivity: "Saída RF",
    brazilCuriosity: "Lançado pela Microdigital (Splice) como 'ColecoVision' e também teve clones como o 'SpliceVision'.",
    imageUrl: "https://picsum.photos/seed/colecovision/400/300"
  },
  // 3rd Generation
  {
    id: "nes",
    name: "Nintendo Entertainment System (NES)",
    generation: 3,
    manufacturer: "Nintendo",
    releaseYear: 1983,
    specs: {
      cpu: "Ricoh 2A03 (8-bit) @ 1.79 MHz",
      gpu: "Ricoh PPU",
      ram: "2 KB principal, 2 KB vídeo",
      media: "Cartucho",
      resolution: "256 x 240"
    },
    launch: {
      price: "$179 USD (com R.O.B.)",
      source: "Nintendo"
    },
    sales: {
      total: "61.91 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "25 x 20 x 8,5 cm",
      weight: "1.2 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "AV Composto e RF",
    brazilCuriosity: "Lançado oficialmente pela Playtronic em 1993, mas clones como o Phantom System e o Dynavision dominavam antes.",
    imageUrl: "https://picsum.photos/seed/nes/400/300"
  },
  {
    id: "master-system",
    name: "Sega Master System",
    generation: 3,
    manufacturer: "Sega",
    releaseYear: 1985,
    specs: {
      cpu: "Zilog Z80 @ 3.58 MHz",
      gpu: "Sega VDP",
      ram: "8 KB principal, 16 KB vídeo",
      media: "Cartucho e Sega Card",
      resolution: "256 x 192 / 256 x 224"
    },
    launch: {
      price: "$199 USD",
      source: "Sega Retro"
    },
    sales: {
      total: "10-13 milhões (estimado)",
      source: "Sega"
    },
    dimensions: {
      size: "36 x 17 x 7 cm",
      weight: "1 kg"
    },
    retrocompatibility: "Sega SG-1000",
    connectivity: "AV Composto e RF",
    brazilCuriosity: "É o console mais icônico da Tectoy e ainda é fabricado/vendido no Brasil até hoje!",
    imageUrl: "https://picsum.photos/seed/mastersystem/400/300"
  },
  // 4th Generation
  {
    id: "snes",
    name: "Super Nintendo Entertainment System (SNES)",
    generation: 4,
    manufacturer: "Nintendo",
    releaseYear: 1990,
    specs: {
      cpu: "Ricoh 5A22 @ 3.58 MHz",
      gpu: "PPU1 & PPU2 (S-PPU)",
      ram: "128 KB principal, 64 KB vídeo",
      media: "Cartucho",
      resolution: "256 x 224 até 512 x 448 (intercalado)"
    },
    launch: {
      price: "$199 USD",
      source: "Nintendo"
    },
    sales: {
      total: "49.10 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "20 x 24 x 7 cm",
      weight: "1.1 kg"
    },
    retrocompatibility: "Nenhuma (oficialmente)",
    connectivity: "Multi-Out (AV, S-Video, RGB) e RF",
    brazilCuriosity: "Foi o primeiro grande sucesso da Playtronic (Nintendo no Brasil), com jogos localizados como Donkey Kong Country.",
    imageUrl: "https://picsum.photos/seed/snes/400/300"
  },
  {
    id: "mega-drive",
    name: "Sega Mega Drive / Genesis",
    generation: 4,
    manufacturer: "Sega",
    releaseYear: 1988,
    specs: {
      cpu: "Motorola 68000 @ 7.6 MHz",
      gpu: "Yamaha YM2612 (Som) + VDP",
      ram: "64 KB principal, 64 KB vídeo, 8 KB áudio",
      media: "Cartucho",
      resolution: "320 x 224"
    },
    launch: {
      price: "$189 USD",
      source: "Sega"
    },
    sales: {
      total: "30.75 milhões de unidades",
      source: "Sega"
    },
    dimensions: {
      size: "28 x 21 x 7 cm",
      weight: "1.2 kg"
    },
    retrocompatibility: "Master System (via Power Base Converter)",
    connectivity: "Mini-DIN AV (Stereo no frontal do Model 1) e RF",
    brazilCuriosity: "No Brasil, foi rei absoluto no início dos anos 90 graças às campanhas agressivas da Tectoy.",
    imageUrl: "https://picsum.photos/seed/megadrive/400/300"
  },
  {
    id: "neo-geo-aes",
    name: "Neo Geo AES",
    generation: 4,
    manufacturer: "SNK",
    releaseYear: 1990,
    specs: {
      cpu: "Motorola 68000 @ 12 MHz + Zilog Z80 @ 4 MHz",
      gpu: "Chipset SNK proprietário",
      ram: "64 KB main, 68 KB video",
      media: "Cartucho (Enormes!)",
      resolution: "320 x 224"
    },
    launch: {
      price: "$649 USD",
      source: "SNK History"
    },
    sales: {
      total: "1 milhão (estimado)",
      source: "VGChartz"
    },
    dimensions: {
      size: "32,5 x 23,5 x 6 cm",
      weight: "1.5 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "AV e RGB",
    brazilCuriosity: "Era o console dos sonhos devido ao altíssimo preço, muitas vezes custando o valor de um carro usado na época.",
    imageUrl: "https://picsum.photos/seed/neogeo/400/300"
  },
  {
    id: "pc-engine",
    name: "PC Engine / TurboGrafx-16",
    generation: 4,
    manufacturer: "NEC",
    releaseYear: 1987,
    specs: {
      cpu: "Hudson Soft HuC6280 (8-bit)",
      gpu: "HuC6260 VCE + HuC6270 VDC",
      ram: "8 KB main, 64 KB video",
      media: "HuCard e CD-ROM (acessório)",
      resolution: "256 x 239"
    },
    launch: {
      price: "$199 USD",
      source: "NEC History"
    },
    sales: {
      total: "5.8 milhões de unidades",
      source: "NEC"
    },
    dimensions: {
      size: "14 x 14 x 3,8 cm (Básico)",
      weight: "0.5 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "AV (porta traseira expansion)",
    brazilCuriosity: "Teve pouca expressividade oficial no Brasil, sendo encontrado majoritariamente via importação.",
    imageUrl: "https://picsum.photos/seed/pcengine/400/300"
  },
  // 5th Generation
  {
    id: "playstation-1",
    name: "PlayStation",
    generation: 5,
    manufacturer: "Sony",
    releaseYear: 1994,
    specs: {
      cpu: "MIPS R3000A @ 33.86 MHz",
      gpu: "Sony GPU (Custom)",
      ram: "2 MB main, 1 MB video",
      media: "CD-ROM",
      resolution: "256 x 224 até 640 x 480"
    },
    launch: {
      price: "$299 USD",
      source: "Sony IR"
    },
    sales: {
      total: "102.49 milhões de unidades",
      source: "Sony IR"
    },
    dimensions: {
      size: "27 x 18,8 x 6 cm",
      weight: "1.5 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "AV Multi Out e Serial Port",
    brazilCuriosity: "Consagrou-se no Brasil no final dos anos 90, especialmente pela facilidade de pirataria em CDs.",
    imageUrl: "https://picsum.photos/seed/ps1/400/300"
  },
  {
    id: "nintendo-64",
    name: "Nintendo 64",
    generation: 5,
    manufacturer: "Nintendo",
    releaseYear: 1996,
    specs: {
      cpu: "NEC VR4300 (64-bit) @ 93.75 MHz",
      gpu: "SGI Reality Co-Processor",
      ram: "4 MB RDRAM (8 MB com expansion pak)",
      media: "Cartucho",
      resolution: "256 x 224 até 640 x 480"
    },
    launch: {
      price: "$199 USD",
      source: "Nintendo"
    },
    sales: {
      total: "32.93 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "26 x 19 x 7 cm",
      weight: "1.1 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Multi-Out (AV, S-Video)",
    brazilCuriosity: "Marcou época com as coloridas locadoras e o fenômeno de 007 GoldenEye e Mario Kart 64.",
    imageUrl: "https://picsum.photos/seed/n64/400/300"
  },
  {
    id: "sega-saturn",
    name: "Sega Saturn",
    generation: 5,
    manufacturer: "Sega",
    releaseYear: 1994,
    specs: {
      cpu: "2x Hitachi SH-2 @ 28.6 MHz",
      gpu: "VDP1 (Sprites/Polígonos) + VDP2 (Fundos)",
      ram: "2 MB main, 1.5 MB video, 512 KB áudio",
      media: "CD-ROM",
      resolution: "320 x 224 até 704 x 480"
    },
    launch: {
      price: "$399 USD",
      source: "Sega"
    },
    sales: {
      total: "9.26 milhões de unidades",
      source: "Sega"
    },
    dimensions: {
      size: "26 x 23 x 8 cm",
      weight: "1.6 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "AV Multi Out",
    brazilCuriosity: "A Tectoy investiu pesado, mas o preço alto do hardware dificultou a luta contra o PlayStation.",
    imageUrl: "https://picsum.photos/seed/saturn/400/300"
  },
  // 6th Generation
  {
    id: "dreamcast",
    name: "Sega Dreamcast",
    generation: 6,
    manufacturer: "Sega",
    releaseYear: 1998,
    specs: {
      cpu: "Hitachi SH-4 @ 200 MHz",
      gpu: "NEC PowerVR2",
      ram: "16 MB main, 8 MB video, 2 MB áudio",
      media: "GD-ROM",
      resolution: "640 x 480 (VGA nativo)"
    },
    launch: {
      price: "$199 USD",
      source: "Sega"
    },
    sales: {
      total: "9.13 milhões de unidades",
      source: "Sega"
    },
    dimensions: {
      size: "19 x 19,5 x 7,5 cm",
      weight: "1.5 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Modem embutido, AV, VGA via adaptador",
    brazilCuriosity: "Foi o último suspiro da Sega; a Tectoy ainda lançou uma versão com modem para o Brasil.",
    imageUrl: "https://picsum.photos/seed/dreamcast/400/300"
  },
  {
    id: "playstation-2",
    name: "PlayStation 2",
    generation: 6,
    manufacturer: "Sony",
    releaseYear: 2000,
    specs: {
      cpu: "Emotion Engine @ 294 MHz",
      gpu: "Graphics Synthesizer @ 147 MHz",
      ram: "32 MB RDRAM, 4 MB eDRAM video",
      media: "DVD e CD-ROM",
      resolution: "480i, 480p, 720p, 1080i (Jogos selecionados)"
    },
    launch: {
      price: "$299 USD",
      source: "Sony IR"
    },
    sales: {
      total: "Superior a 155 milhões de unidades",
      source: "Sony IR"
    },
    dimensions: {
      size: "30 x 18 x 8 cm (Fat)",
      weight: "2.2 kg"
    },
    retrocompatibility: "PlayStation 1",
    connectivity: "USB 1.1, i.Link, AV Multi, Expansion Bay",
    brazilCuriosity: "O videogame mais popular da história do Brasil, vivendo por anos mesmo após a chegada do PS3.",
    imageUrl: "https://picsum.photos/seed/ps2/400/300"
  },
  {
    id: "xbox-classic",
    name: "Xbox",
    generation: 6,
    manufacturer: "Microsoft",
    releaseYear: 2001,
    specs: {
      cpu: "Intel Pentium III Custom @ 733 MHz",
      gpu: "Nvidia NV2A @ 233 MHz",
      ram: "64 MB DDR SDRAM",
      media: "DVD",
      resolution: "480i, 480p, 720p, 1080i"
    },
    launch: {
      price: "$299 USD",
      source: "Microsoft"
    },
    sales: {
      total: "24 milhões de unidades",
      source: "Microsoft"
    },
    dimensions: {
      size: "32 x 26 x 10 cm",
      weight: "3.8 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Ethernet nativo, AV Out especial",
    brazilCuriosity: "A Microsoft não lançou o Xbox Classic oficialmente no Brasil, sendo raro e dependente de importação.",
    imageUrl: "https://picsum.photos/seed/xbox/400/300"
  },
  {
    id: "gamecube",
    name: "Nintendo GameCube",
    generation: 6,
    manufacturer: "Nintendo",
    releaseYear: 2001,
    specs: {
      cpu: "IBM Gekko (PowerPC) @ 485 MHz",
      gpu: "ATI Flipper @ 162 MHz",
      ram: "24 MB main, 16 MB A-RAM",
      media: "Nintendo Optical Disc (8 cm)",
      resolution: "480i, 480p"
    },
    launch: {
      price: "$199 USD",
      source: "Nintendo"
    },
    sales: {
      total: "21.74 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "15 x 16 x 11 cm",
      weight: "2.4 kg"
    },
    retrocompatibility: "Nenhuma",
    connectivity: "Analog/Digital AV Out, Serial Ports",
    brazilCuriosity: "Teve o Gradiente como representante oficial, com jogos marcantes como Metroid Prime e Wind Waker.",
    imageUrl: "https://picsum.photos/seed/gamecube/400/300"
  },
  // 7th Generation
  {
    id: "xbox-360",
    name: "Xbox 360",
    generation: 7,
    manufacturer: "Microsoft",
    releaseYear: 2005,
    specs: {
      cpu: "IBM Xenon (3 núcleos) @ 3.2 GHz",
      gpu: "ATI Xenos @ 500 MHz",
      ram: "512 MB GDDR3 unificada",
      media: "DVD-DL",
      resolution: "até 1080p via HDMI"
    },
    launch: {
      price: "$299 (Core) / $399 (Premium)",
      source: "Microsoft"
    },
    sales: {
      total: "84 milhões de unidades (aprox.)",
      source: "Microsoft"
    },
    dimensions: {
      size: "31 x 8 x 26 cm (Fat)",
      weight: "3.5 kg"
    },
    retrocompatibility: "Xbox Classic (Títulos selecionados via emulação)",
    connectivity: "Wi-Fi (via adaptador ou nativo no Slim), Ethernet, HDMI",
    brazilCuriosity: "Foi fabricado no Brasil a partir de 2011, o que reduziu drasticamente seu preço oficial.",
    imageUrl: "https://picsum.photos/seed/xbox360/400/300"
  },
  {
    id: "wii",
    name: "Nintendo Wii",
    generation: 7,
    manufacturer: "Nintendo",
    releaseYear: 2006,
    specs: {
      cpu: "IBM Broadway @ 729 MHz",
      gpu: "ATI Hollywood @ 243 MHz",
      ram: "24 MB 1T-SRAM, 64 MB GDDR3",
      media: "Wii/GameCube Disc",
      resolution: "480i, 480p"
    },
    launch: {
      price: "$249 USD",
      source: "Nintendo"
    },
    sales: {
      total: "101.63 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "15 x 4 x 21 cm",
      weight: "1.2 kg"
    },
    retrocompatibility: "Nintendo GameCube (nativo via hardware)",
    connectivity: "Wi-Fi, Bluetooth (controles), AV Out Especial",
    brazilCuriosity: "Causou alvoroço pelo controle de movimento, sendo figurinha carimbada em programas de TV e shoppings brasileiros.",
    imageUrl: "https://picsum.photos/seed/wii/400/300"
  },
  {
    id: "playstation-3",
    name: "PlayStation 3",
    generation: 7,
    manufacturer: "Sony",
    releaseYear: 2006,
    specs: {
      cpu: "Cell Broadband Engine @ 3.2 GHz",
      gpu: "Nvidia RSX @ 550 MHz",
      ram: "256 MB XDR, 256 MB GDDR3 video",
      media: "Blu-ray Disc",
      resolution: "até 1080p via HDMI"
    },
    launch: {
      price: "$499 / $599 USD",
      source: "Sony IR"
    },
    sales: {
      total: "87.4 milhões de unidades",
      source: "Sony IR"
    },
    dimensions: {
      size: "32,5 x 9,8 x 27,4 cm (Fat)",
      weight: "5 kg"
    },
    retrocompatibility: "PS1 (Todos); PS2 (Apenas Modelos Iniciais)",
    connectivity: "Wi-Fi, Bluetooth, Ethernet, HDMI, USB 2.0",
    brazilCuriosity: "Lançado tardiamente de forma oficial, mas o PS3 Slim 'nacional' foi fundamental para a Sony retomar o mercado.",
    imageUrl: "https://picsum.photos/seed/ps3/400/300"
  },
  // 8th Generation
  {
    id: "wii-u",
    name: "Wii U",
    generation: 8,
    manufacturer: "Nintendo",
    releaseYear: 2012,
    specs: {
      cpu: "IBM Espresso (3 núcleos) @ 1.24 GHz",
      gpu: "AMD Radeon Latte @ 550 MHz",
      ram: "2 GB DDR3 (1 GB jogos, 1 GB OS)",
      media: "Wii U Optical Disc",
      resolution: "até 1080p"
    },
    launch: {
      price: "$299 / $349 USD",
      source: "Nintendo"
    },
    sales: {
      total: "13.56 milhões de unidades",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "26,8 x 17,2 x 4,6 cm",
      weight: "1.5 kg"
    },
    retrocompatibility: "Nintendo Wii",
    connectivity: "Wi-Fi, Bluetooth, HDMI, Proprietary AV",
    brazilCuriosity: "A Nintendo saiu do Brasil oficialmente em 2015 durante a era Wii U, retornando só anos depois.",
    imageUrl: "https://picsum.photos/seed/wiiu/400/300"
  },
  {
    id: "playstation-4",
    name: "PlayStation 4",
    generation: 8,
    manufacturer: "Sony",
    releaseYear: 2013,
    specs: {
      cpu: "AMD Jaguar (8 núcleos) @ 1.6 GHz",
      gpu: "AMD Radeon 1.84 TFLOPS",
      ram: "8 GB GDDR5",
      media: "Blu-ray Disc",
      resolution: "até 1080p (4K em vídeo via Pro)"
    },
    launch: {
      price: "$399 USD",
      source: "Sony IR"
    },
    sales: {
      total: "117 milhões de unidades",
      source: "Sony IR"
    },
    dimensions: {
      size: "27,5 x 30,5 x 5,3 cm (Fat)",
      weight: "2.8 kg"
    },
    retrocompatibility: "Nenhuma (via hardware)",
    connectivity: "Wi-Fi, Bluetooth 4.0, HDMI, Optical Out",
    brazilCuriosity: "Ficou famoso pelo meme do 'PS4K' – o console custava R$ 4.000 no lançamento oficial brasileiro.",
    imageUrl: "https://picsum.photos/seed/ps4/400/300"
  },
  {
    id: "xbox-one",
    name: "Xbox One",
    generation: 8,
    manufacturer: "Microsoft",
    releaseYear: 2013,
    specs: {
      cpu: "AMD Jaguar (8 núcleos) @ 1.75 GHz",
      gpu: "AMD Radeon 1.31 TFLOPS",
      ram: "8 GB DDR3 + 32 MB ESRAM",
      media: "Blu-ray Disc",
      resolution: "até 1080p"
    },
    launch: {
      price: "$499 USD (com Kinect)",
      source: "Microsoft"
    },
    sales: {
      total: "58 milhões (estimado)",
      source: "Microsoft"
    },
    dimensions: {
      size: "34 x 26 x 8 cm (Fat)",
      weight: "3.2 kg"
    },
    retrocompatibility: "Xbox 360 e Xbox Classic (Títulos selecionados)",
    connectivity: "HDMI In/Out, Wi-Fi Direct, USB 3.0",
    brazilCuriosity: "No Brasil, foi elogiado por já vir com preço mais competitivo que o PS4 e localização total.",
    imageUrl: "https://picsum.photos/seed/xboxone/400/300"
  },
  {
    id: "nintendo-switch",
    name: "Nintendo Switch",
    generation: 8,
    manufacturer: "Nintendo",
    releaseYear: 2017,
    specs: {
      cpu: "Nvidia Tegra X1 Custom",
      gpu: "Nvidia Maxwell 256 CUDA cores",
      ram: "4 GB LPDDR4",
      media: "Cartucho (Game Card)",
      resolution: "720p (Portátil) / 1080p (Docked)"
    },
    launch: {
      price: "$299 USD",
      source: "Nintendo IR"
    },
    sales: {
      total: "146 milhões de unidades (Até nov/2024)",
      source: "Nintendo IR"
    },
    dimensions: {
      size: "10 x 24 x 1,4 cm (com Joy-Con)",
      weight: "0.4 kg"
    },
    retrocompatibility: "Nenhuma (via hardware)",
    connectivity: "NFC, Wi-fi, Bluetooth, USB-C",
    brazilCuriosity: "Marcou o retorno oficial da Nintendo ao Brasil em 2020, com a loja eSuop em Reais.",
    imageUrl: "https://picsum.photos/seed/switch/400/300"
  },
  // 9th Generation (To reach 25 consoles)
  {
    id: "playstation-5",
    name: "PlayStation 5",
    generation: 9,
    manufacturer: "Sony",
    releaseYear: 2020,
    specs: {
      cpu: "8x Zen 2 @ 3.5 GHz",
      gpu: "AMD RDNA 2 @ 2.23 GHz (10.28 TFLOPS)",
      ram: "16 GB GDDR6",
      media: "4K UHD Blu-ray",
      resolution: "até 8K, 4K a 120fps"
    },
    launch: {
      price: "$399 / $499 USD",
      source: "Sony IR"
    },
    sales: {
      total: "61.7 milhões de unidades",
      source: "Sony IR"
    },
    dimensions: {
      size: "39 x 10,4 x 26 cm (Standard)",
      weight: "4.5 kg"
    },
    retrocompatibility: "99% do catálogo PS4",
    connectivity: "Wi-Fi 6, Bluetooth 5.1, HDMI 2.1",
    brazilCuriosity: "Lançado em plena pandemia, com estoques baixíssimos e preços agressivos, mas ainda assim um sucesso imediato.",
    imageUrl: "https://picsum.photos/seed/ps5/400/300"
  }
];

export const generations: Generation[] = [
  { number: 1, name: "Consoles Pong e Primórdios", consoles: consolesData.filter(c => c.generation === 1) },
  { number: 2, name: "Era dos Cartuchos de 8 Bits (Início)", consoles: consolesData.filter(c => c.generation === 2) },
  { number: 3, name: "Crise e o Renascimento (8 Bits)", consoles: consolesData.filter(c => c.generation === 3) },
  { number: 4, name: "A Era de Ouro dos 16 Bits", consoles: consolesData.filter(c => c.generation === 4) },
  { number: 5, name: "A Revolução do 3D", consoles: consolesData.filter(c => c.generation === 5) },
  { number: 6, name: "Multimídia e Online (128 Bits+)", consoles: consolesData.filter(c => c.generation === 6) },
  { number: 7, name: "Alta Definição e Movimento", consoles: consolesData.filter(c => c.generation === 7) },
  { number: 8, name: "Híbridos, Social e 4K", consoles: consolesData.filter(c => c.generation === 8) },
  { number: 9, name: "Nova Geração (SSD e Ray Tracing)", consoles: consolesData.filter(c => c.generation === 9) }
];
