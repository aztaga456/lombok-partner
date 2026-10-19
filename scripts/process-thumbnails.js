const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = path.join(__dirname, '..', 'foto thumnail paket');
const outputDir = path.join(__dirname, '..', 'public', 'packages');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const configs = [
  {
    src: 'Paket Wisata Lombok 2 Hari 1 Malam (2D1N).jpeg',
    dest: 'paket-2d1n.jpg',
    // 750 x 1125. Focal point: Pulau Pasir (sandbar) and boat in turquoise sea
    // Sand island is at y ~ 450-650. Let's crop from y=240 to y=780 (h=540, w=750 -> ~4:3)
    extract: { left: 0, top: 240, width: 750, height: 530 },
  },
  {
    src: 'Paket Wisata Lombok 3 Hari 2 Malam (3D2N).jpeg',
    dest: 'paket-3d2n.jpg',
    // 750 x 1125. Focal point: White boat anchored in crystal-clear water and white beach
    // Boat is at y ~ 480-550. Let's crop from y=300 to y=830 (h=530, w=750 -> ~4:3)
    extract: { left: 0, top: 300, width: 750, height: 530 },
  },
  {
    src: 'Paket Wisata Lombok 4 Hari 3 Malam (4D3N).jpeg',
    dest: 'paket-4d3n.jpg',
    // 1113 x 1200. Focal point: Coastal bay, turquoise curve, mountain hill, white beach
    // Crop from y=60 to y=860 (h=800, w=1113 -> ~1.4 ratio)
    extract: { left: 0, top: 60, width: 1113, height: 800 },
  },
  {
    src: 'Paket Wisata Lombok 5 Hari 4 Malam (5D4N).jpeg',
    dest: 'paket-5d4n.jpg',
    // 1024 x 1280. Focal point: Galloping wild horses on beach with tropical hills
    // Horses are at y ~ 520-660. Let's crop from y=280 to y=980 (h=700, w=1024 -> ~1.46 ratio)
    extract: { left: 0, top: 280, width: 1024, height: 700 },
  },
  {
    src: 'Gili Trilogy — Private Snorkeling-.jpeg',
    dest: 'gili-trilogy.jpg',
    // 640 x 800. Focal point: Swimmer and circle of underwater statues (The Nest)
    // Swimmer at y ~ 300, statues at y ~ 400-720.
    // Crop from y=170 to y=730 (h=560, w=640)
    extract: { left: 0, top: 170, width: 640, height: 560 },
  },
  {
    src: 'One Day Trip Senaru & Sembalun.jpeg',
    dest: 'senaru-sembalun.jpg',
    // 1200 x 1600. Focal point: Star platform with traveler overlooking Sembalun valley & Rinjani mountain
    // Star platform at y ~ 1050-1350. Valley at y ~ 400-1100.
    // Crop from y=500 to y=1400 (h=900, w=1200 -> 4:3)
    extract: { left: 0, top: 500, width: 1200, height: 900 },
  },
  {
    src: 'One Day Trip Sasak Tour & Mandalika.jpeg',
    dest: 'sasak-mandalika.jpg',
    // 768 x 1152. Focal point: Traditional Sasak weaver woman with loom and colorful fabrics
    // Woman at y ~ 450-800, loom at y ~ 750-950, fabric behind her at y ~ 200-500.
    // Crop from y=320 to y=920 (h=600, w=768 -> ~1.28 ratio)
    extract: { left: 0, top: 320, width: 768, height: 600 },
  },
];

async function run() {
  for (const item of configs) {
    const inputPath = path.join(inputDir, item.src);
    const outputPath = path.join(outputDir, item.dest);
    
    await sharp(inputPath)
      .extract(item.extract)
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outputPath);
      
    console.log(`Successfully generated ${item.dest} (${item.extract.width}x${item.extract.height})`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
