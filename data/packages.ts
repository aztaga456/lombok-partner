import { PackageItem, HotelLocation, TierPrice } from '@/types';

// ==========================================
// PRICE LIST MATRICES FROM OFFICIAL FLYERS
// ==========================================

// Flyer 1: 2 Hari 1 Malam (2D1N)
export const PRICE_TIERS_2D1N: TierPrice[] = [
  { paxRange: '2–3 Orang', minPax: 2, maxPax: 3, tanpaHotel: 1350000, bintang2: 1550000, bintang3: 1750000, bintang4: 2050000, bintang5: 2550000 },
  { paxRange: '4–5 Orang', minPax: 4, maxPax: 5, tanpaHotel: 1050000, bintang2: 1250000, bintang3: 1450000, bintang4: 1750000, bintang5: 2250000 },
  { paxRange: '6–10 Orang', minPax: 6, maxPax: 10, tanpaHotel: 1000000, bintang2: 1200000, bintang3: 1400000, bintang4: 1700000, bintang5: 2200000 },
  { paxRange: '11–15 Orang', minPax: 11, maxPax: 15, tanpaHotel: 950000, bintang2: 1150000, bintang3: 1350000, bintang4: 1650000, bintang5: 2150000 },
  { paxRange: '16–20 Orang', minPax: 16, maxPax: 20, tanpaHotel: 900000, bintang2: 1100000, bintang3: 1300000, bintang4: 1600000, bintang5: 2100000 },
  { paxRange: '21–34 Orang', minPax: 21, maxPax: 34, tanpaHotel: 850000, bintang2: 1050000, bintang3: 1250000, bintang4: 1550000, bintang5: 2050000 },
  { paxRange: '35–65 Orang', minPax: 35, maxPax: 65, tanpaHotel: 800000, bintang2: 1000000, bintang3: 1200000, bintang4: 1500000, bintang5: 2000000 },
  { paxRange: '66–100 Orang', minPax: 66, maxPax: 100, tanpaHotel: 750000, bintang2: 950000, bintang3: 1150000, bintang4: 1450000, bintang5: 1950000 },
  { paxRange: '101–150 Orang', minPax: 101, maxPax: 150, tanpaHotel: 700000, bintang2: 900000, bintang3: 1100000, bintang4: 1400000, bintang5: 1900000 },
];

// Flyer 2: 3 Hari 2 Malam (3D2N)
export const PRICE_TIERS_3D2N: TierPrice[] = [
  { paxRange: '2–3 Orang', minPax: 2, maxPax: 3, tanpaHotel: 1700000, bintang2: 2050000, bintang3: 2250000, bintang4: 2650000, bintang5: 3150000 },
  { paxRange: '4–5 Orang', minPax: 4, maxPax: 5, tanpaHotel: 1250000, bintang2: 1550000, bintang3: 1750000, bintang4: 2150000, bintang5: 2650000 },
  { paxRange: '6–10 Orang', minPax: 6, maxPax: 10, tanpaHotel: 1200000, bintang2: 1500000, bintang3: 1700000, bintang4: 2100000, bintang5: 2600000 },
  { paxRange: '11–15 Orang', minPax: 11, maxPax: 15, tanpaHotel: 1150000, bintang2: 1450000, bintang3: 1650000, bintang4: 2050000, bintang5: 2550000 },
  { paxRange: '16–20 Orang', minPax: 16, maxPax: 20, tanpaHotel: 1100000, bintang2: 1400000, bintang3: 1600000, bintang4: 2000000, bintang5: 2500000 },
  { paxRange: '21–34 Orang', minPax: 21, maxPax: 34, tanpaHotel: 1050000, bintang2: 1350000, bintang3: 1550000, bintang4: 1950000, bintang5: 2450000 },
  { paxRange: '35–65 Orang', minPax: 35, maxPax: 65, tanpaHotel: 1000000, bintang2: 1300000, bintang3: 1500000, bintang4: 1900000, bintang5: 2400000 },
  { paxRange: '66–100 Orang', minPax: 66, maxPax: 100, tanpaHotel: 950000, bintang2: 1200000, bintang3: 1400000, bintang4: 1800000, bintang5: 2300000 },
  { paxRange: '101–150 Orang', minPax: 101, maxPax: 150, tanpaHotel: 900000, bintang2: 1150000, bintang3: 1350000, bintang4: 1750000, bintang5: 2250000 },
];

// Flyer 3: 4 Hari 3 Malam (4D3N)
export const PRICE_TIERS_4D3N: TierPrice[] = [
  { paxRange: '2–3 Orang', minPax: 2, maxPax: 3, tanpaHotel: 2700000, bintang2: 3000000, bintang3: 3300000, bintang4: 3850000, bintang5: 4600000 },
  { paxRange: '4–5 Orang', minPax: 4, maxPax: 5, tanpaHotel: 2100000, bintang2: 2500000, bintang3: 2800000, bintang4: 3350000, bintang5: 4100000 },
  { paxRange: '6–10 Orang', minPax: 6, maxPax: 10, tanpaHotel: 2050000, bintang2: 2450000, bintang3: 2750000, bintang4: 3300000, bintang5: 4050000 },
  { paxRange: '11–15 Orang', minPax: 11, maxPax: 15, tanpaHotel: 2000000, bintang2: 2400000, bintang3: 2700000, bintang4: 3250000, bintang5: 4000000 },
  { paxRange: '16–20 Orang', minPax: 16, maxPax: 20, tanpaHotel: 1950000, bintang2: 2350000, bintang3: 2650000, bintang4: 3200000, bintang5: 3950000 },
  { paxRange: '21–34 Orang', minPax: 21, maxPax: 34, tanpaHotel: 1900000, bintang2: 2300000, bintang3: 2600000, bintang4: 3150000, bintang5: 3900000 },
  { paxRange: '35–65 Orang', minPax: 35, maxPax: 65, tanpaHotel: 1850000, bintang2: 2250000, bintang3: 2550000, bintang4: 3100000, bintang5: 3850000 },
];

// Flyer 4: 5 Hari 4 Malam (5D4N)
export const PRICE_TIERS_5D4N: TierPrice[] = [
  { paxRange: '2–3 Pax', minPax: 2, maxPax: 3, tanpaHotel: 3150000, bintang2: 3650000, bintang3: 4050000, bintang4: 4350000, bintang5: 5450000 },
  { paxRange: '4–5 Pax', minPax: 4, maxPax: 5, tanpaHotel: 2550000, bintang2: 3050000, bintang3: 3450000, bintang4: 3750000, bintang5: 4850000 },
  { paxRange: '6–10 Pax', minPax: 6, maxPax: 10, tanpaHotel: 2450000, bintang2: 2950000, bintang3: 3350000, bintang4: 3650000, bintang5: 4750000 },
  { paxRange: '11–15 Pax', minPax: 11, maxPax: 15, tanpaHotel: 2350000, bintang2: 2850000, bintang3: 3250000, bintang4: 3550000, bintang5: 4650000 },
  { paxRange: '16–20 Pax', minPax: 16, maxPax: 20, tanpaHotel: 2250000, bintang2: 2750000, bintang3: 3150000, bintang4: 3450000, bintang5: 4550000 },
  { paxRange: '21–34 Pax', minPax: 21, maxPax: 34, tanpaHotel: 2150000, bintang2: 2650000, bintang3: 3050000, bintang4: 3350000, bintang5: 4450000 },
];

// Price List definition map for modal switching
export interface PriceMatrixDef {
  id: string;
  durationLabel: string;
  name: string;
  tiers: TierPrice[];
  minPaxNote: string;
}

export const ALL_PACKAGE_PRICE_MATRICES: PriceMatrixDef[] = [
  {
    id: '2d1n',
    durationLabel: '2 Hari 1 Malam',
    name: 'PAKET WISATA LOMBOK 2 HARI 1 MALAM',
    tiers: PRICE_TIERS_2D1N,
    minPaxNote: 'Minimal 2 Peserta',
  },
  {
    id: '3d2n',
    durationLabel: '3 Hari 2 Malam',
    name: 'PAKET WISATA LOMBOK 3 HARI 2 MALAM',
    tiers: PRICE_TIERS_3D2N,
    minPaxNote: 'Minimal 2 Peserta',
  },
  {
    id: '4d3n',
    durationLabel: '4 Hari 3 Malam',
    name: 'PAKET WISATA LOMBOK 4 HARI 3 MALAM',
    tiers: PRICE_TIERS_4D3N,
    minPaxNote: 'Minimal 2 Peserta',
  },
  {
    id: '5d4n',
    durationLabel: '5 Hari 4 Malam',
    name: 'PAKET WISATA LOMBOK 5 HARI 4 MALAM',
    tiers: PRICE_TIERS_5D4N,
    minPaxNote: 'Minimal 2 Peserta',
  },
];

// Official hotel partners database
export const HOTEL_DATABASE: HotelLocation[] = [
  {
    location: 'Kuta Mandalika',
    tiers: [
      { stars: 5, hotels: ['Pullman Lombok Merujani', 'Novotel Lombok'] },
      { stars: 4, hotels: ['Origin', 'El Tropico', 'Sima', 'Sikara', 'Tiu Oasis'] },
      { stars: 3, hotels: ['Jati', 'Kies Villas', 'Puri Rinjani', 'Tastura'] },
      { stars: 2, hotels: ['Kuta Indah', 'LoTide Surf Camp', 'Mana Eco'] },
    ],
  },
  {
    location: 'Mataram City',
    tiers: [
      { stars: 4, hotels: ['Lombok Astoria', 'Aston Inn', 'Prime Park', 'Golden Palace'] },
      { stars: 3, hotels: ['Favehotel Langko', 'Hotel Santika', 'Lombok Plaza'] },
      { stars: 2, hotels: ['Hotel Griya Asri', 'Hastina', 'M Hotel'] },
    ],
  },
  {
    location: 'Senggigi',
    tiers: [
      { stars: 5, hotels: ['Katamaran'] },
      { stars: 4, hotels: ['Merumatta', 'Holiday Resort', 'Aruna', 'Svarga'] },
      { stars: 3, hotels: ['Puri Saron', 'Sunset Lavinia', 'Pasific Beach'] },
      { stars: 2, hotels: ['Cafe Alberto', 'Bale Mandala', 'Indah Homestay'] },
    ],
  },
  {
    location: 'Gili Trawangan',
    tiers: [
      { stars: 5, hotels: ['Pondok Santi Estate', 'Cocana Resort'] },
      { stars: 4, hotels: ['Pearl', 'Aston Sunset', 'Jambuluwuk Oceano', 'Vila Ombak', 'Lumi'] },
      { stars: 3, hotels: ['The Trawangan Resort', 'Pesona Beach', 'Marc Hotel'] },
      { stars: 2, hotels: ['Gili Sands', 'Gili Amor', 'Trawangan Dive'] },
    ],
  },
];

// Common Inclusions for Multi-Day Stay Packages
const STAY_INCLUSIONS = [
  { id: 'Transportasi (All New Avanza / Menyesuaikan)', en: 'Transportation (All New Avanza / Adapted)' },
  { id: 'BBM (Bahan Bakar Minyak)', en: 'Fuel (BBM)' },
  { id: 'Driver Berpengalaman & Ramah', en: 'Experienced & Courteous Driver' },
  { id: 'Parkir Seluruh Objek Wisata', en: 'Parking fees at all attractions' },
  { id: 'Air Mineral Selama Perjalanan', en: 'Mineral water throughout tour' },
  { id: 'Tiket Masuk Objek Wisata', en: 'Attraction Entrance Tickets' },
  { id: 'Akomodasi Hotel (Sesuai Pilihan)', en: 'Hotel accommodation (According to chosen star)' },
  { id: 'Airport Transfer Pulang-Pergi (PP)', en: 'Roundtrip Airport Transfer' },
];

// Common Exclusions for Multi-Day Stay Packages
const STAY_EXCLUSIONS = [
  { id: 'Tiket Pesawat ke/dari Lombok', en: 'Flight tickets to/from Lombok' },
  { id: 'Makan (Lunch & Dinner)', en: 'Meals (Lunch & Dinner)' },
  { id: 'Pengeluaran Pribadi', en: 'Personal expenses' },
  { id: 'Tip Driver (Sukarela)', en: 'Driver tip (Voluntary)' },
  { id: 'Biaya Tambahan Diluar Itinerary', en: 'Additional expenses outside itinerary' },
];

export const LOMBOK_PACKAGES: PackageItem[] = [
  // 1. PAKET 2 HARI 1 MALAM (2D1N)
  {
    id: 'paket-2d1n',
    name: {
      id: 'Paket Wisata Lombok 2 Hari 1 Malam (2D1N)',
      en: 'Lombok Tour Package 2 Days 1 Night (2D1N)',
    },
    location: {
      id: 'Lombok Selatan & Mandalika',
      en: 'South Lombok & Mandalika',
    },
    shortDescription: {
      id: 'Paket hemat populer menginap 2D1N dengan pilihan hotel Bintang 2 s/d Bintang 5 atau Tanpa Hotel. Wisata budaya Desa Sade, Pantai Kuta, dan Bukit Merese.',
      en: 'Popular 2D1N getaway with choices of 2-star to 5-star hotels or No Hotel. Visit Sade cultural village, Kuta Mandalika beach, and Merese Hill sunset.',
    },
    duration: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
    },
    price: 700000,
    priceUnit: {
      id: '/ orang (mulai dari)',
      en: '/ person (starting from)',
    },
    rating: 4.9,
    reviewsCount: 342,
    image: '/packages/paket-2d1n.jpg',
    category: 'stay',
    minPax: 2,
    tierPrices: PRICE_TIERS_2D1N,
    highlights: [
      { id: 'Pilihan Tanpa Hotel atau Hotel Bintang 2, 3, 4, 5', en: 'Option for No Hotel or 2, 3, 4, 5-Star Hotel' },
      { id: 'Sunset magis di Bukit Merese & Sirkuit Mandalika', en: 'Magical sunset at Merese Hill & MotoGP Circuit' },
      { id: 'Desa Adat Sade & Sentra Tenun Sukarara', en: 'Sade Sasak Village & Sukarara handweaving center' },
      { id: 'Antar-Jemput Bandara Internasional Lombok (PP)', en: 'Roundtrip Lombok International Airport transfers' },
    ],
    itinerary: [
      {
        timeOrDay: 'Hari 1',
        title: { id: 'Sasak Mandalika Discovery & Sunset Merese', en: 'Sasak Mandalika Discovery & Merese Sunset' },
        desc: {
          id: 'Penjemputan di Bandara Lombok (BIL), mengunjungi Desa Sade Sasak, Pantai Kuta Mandalika, foto Sirkuit MotoGP, menikmati sunset di Bukit Merese, lalu check-in hotel pilihan.',
          en: 'Airport pickup at Lombok Airport (BIL), visit Sade Sasak village, Kuta Mandalika beach, MotoGP Circuit photo spot, golden sunset at Merese Hill, check-in hotel.'
        }
      },
      {
        timeOrDay: 'Hari 2',
        title: { id: 'Pusat Kerajinan Sukarara & Drop Bandara', en: 'Sukarara Weaving Center & Airport Drop' },
        desc: {
          id: 'Sarapan di hotel, check-out, mengunjungi sentra tenun tradisional Sukarara, belanja oleh-oleh khas Lombok, transfer kembali ke Bandara.',
          en: 'Breakfast at hotel, check-out, explore Sukarara traditional weaving craft, souvenir shopping, then transfer back to Lombok Airport.'
        }
      }
    ],
    inclusions: STAY_INCLUSIONS,
    exclusions: STAY_EXCLUSIONS,
  },

  // 2. PAKET 3 HARI 2 MALAM (3D2N)
  {
    id: 'paket-3d2n',
    name: {
      id: 'Paket Wisata Lombok 3 Hari 2 Malam (3D2N)',
      en: 'Lombok Tour Package 3 Days 2 Nights (3D2N)',
    },
    location: {
      id: 'Mandalika, 3 Gili & Mataram',
      en: 'Mandalika, 3 Gili Islands & Mataram',
    },
    shortDescription: {
      id: 'Paket favorit lengkap 3D2N! Menikmati pesona Mandalika, petualangan snorkeling private di 3 Gili (Trawangan, Meno, Air), dan city tour belanja oleh-oleh.',
      en: 'All-time favorite 3D2N tour! Experience Mandalika highlights, private snorkeling in 3 Gili Islands (Trawangan, Meno, Air), and Mataram cultural city tour.',
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    price: 900000,
    priceUnit: {
      id: '/ orang (mulai dari)',
      en: '/ person (starting from)',
    },
    rating: 5.0,
    reviewsCount: 512,
    image: '/packages/paket-3d2n.jpg',
    category: 'stay',
    minPax: 2,
    tierPrices: PRICE_TIERS_3D2N,
    highlights: [
      { id: 'Kombinasi sempurna: Pantai Selatan + Snorkeling 3 Gili', en: 'Best combination: South Coast + 3 Gili Snorkeling' },
      { id: 'Spot Patung Bawah Laut The Nest & Penyu Liar', en: 'The Nest Underwater Statues & wild turtle sanctuary' },
      { id: 'Tersedia pilihan Tanpa Hotel & Bintang 2 s/d Bintang 5', en: 'Available from No Hotel to 5-Star Resort luxury' },
      { id: 'Transportasi privat All New Avanza / Hiace full AC', en: 'Private transport All New Avanza / Hiace full AC' },
    ],
    itinerary: [
      {
        timeOrDay: 'Hari 1',
        title: { id: 'Kedatangan & Wisata Sasak Mandalika', en: 'Arrival & Sasak Mandalika Tour' },
        desc: {
          id: 'Penjemputan di Bandara, eksplorasi Desa Adat Sade, Pantai Kuta Mandalika, foto Sirkuit Internasional Mandalika, panorama sunset Bukit Merese, check-in hotel.',
          en: 'Pickup at airport, explore Sade village, Kuta Mandalika beach, photo stop at MotoGP Circuit, Bukit Merese sunset, hotel check-in.'
        }
      },
      {
        timeOrDay: 'Hari 2',
        title: { id: 'Eksplorasi Island Hopping & Snorkeling 3 Gili', en: '3 Gili Island Hopping & Snorkeling' },
        desc: {
          id: 'Menuju Pelabuhan Teluk Nare, naik private boat snorkeling ke Gili Air (fish feeding), Gili Meno (patung The Nest & penyu), santai di Gili Trawangan, sunset Senggigi Malimbu.',
          en: 'Depart to Teluk Nare harbor, board private boat to Gili Air, Gili Meno (The Nest statues), Gili Trawangan, returning via Malimbu Hill sunset.'
        }
      },
      {
        timeOrDay: 'Hari 3',
        title: { id: 'City Tour Mataram & Transfer Bandara', en: 'Mataram City Tour & Airport Transfer' },
        desc: {
          id: 'Sarapan di hotel, check out, belanja oleh-oleh khas (kaos Lombok, mutiara, madu, jajanan khas), desa tenun Sukarara, transfer ke Bandara Lombok.',
          en: 'Hotel breakfast, check out, visit local souvenir center, Sukarara weaving village, transfer to Lombok Airport.'
        }
      }
    ],
    inclusions: STAY_INCLUSIONS,
    exclusions: STAY_EXCLUSIONS,
  },

  // 3. PAKET 4 HARI 3 MALAM (4D3N)
  {
    id: 'paket-4d3n',
    name: {
      id: 'Paket Wisata Lombok 4 Hari 3 Malam (4D3N)',
      en: 'Lombok Tour Package 4 Days 3 Nights (4D3N)',
    },
    location: {
      id: 'Mandalika, 3 Gili & Air Terjun Rinjani',
      en: 'Mandalika, 3 Gili & Rinjani Waterfalls',
    },
    shortDescription: {
      id: 'Petualangan eksklusif 4D3N! Menyusuri keindahan pantai Mandalika, snorkeling 3 Gili, serta sejuknya alam Sembalun & Air Terjun Sendang Gile - Tiu Kelep.',
      en: 'Exclusive 4D3N adventure! Combine Mandalika beaches, 3 Gili snorkeling, and the cool slopes of Mt Rinjani at Sendang Gile & Tiu Kelep waterfalls.',
    },
    duration: {
      id: '4 Hari 3 Malam',
      en: '4 Days 3 Nights',
    },
    price: 1850000,
    priceUnit: {
      id: '/ orang (mulai dari)',
      en: '/ person (starting from)',
    },
    rating: 5.0,
    reviewsCount: 388,
    image: '/packages/paket-4d3n.jpg',
    category: 'stay',
    minPax: 2,
    tierPrices: PRICE_TIERS_4D3N,
    highlights: [
      { id: 'Eksplorasi lengkap: Pantai, Snorkeling Gili, & Air Terjun', en: 'Complete exploration: Beaches, Gili Snorkeling, & Waterfalls' },
      { id: 'Air Terjun Tiu Kelep & Sendang Gile Kaki Rinjani', en: 'Tiu Kelep & Sendang Gile cascades at Mt Rinjani' },
      { id: 'Pilihan akomodasi fleksibel Bintang 2 s/d Bintang 5', en: 'Flexible hotel accommodation from 2 to 5 Stars' },
      { id: 'Driver profesional pemandu lokal terpercaya', en: 'Professional driver and certified local guides' },
    ],
    itinerary: [
      {
        timeOrDay: 'Hari 1',
        title: { id: 'Arrival & Sasak Mandalika Heritage Tour', en: 'Arrival & Sasak Mandalika Heritage Tour' },
        desc: {
          id: 'Penjemputan di Bandara, explore Desa Sade, Pantai Tanjung Aan & Bukit Merese sunset, check-in hotel.',
          en: 'Airport pickup, explore Sade cultural village, Tanjung Aan beach, Bukit Merese sunset, check-in hotel.'
        }
      },
      {
        timeOrDay: 'Hari 2',
        title: { id: 'Private Snorkeling 3 Gili (Trawangan, Meno, Air)', en: 'Private Snorkeling 3 Gili (Trawangan, Meno, Air)' },
        desc: {
          id: 'Island hopping private boat: spot patung The Nest, berenang dengan penyu, rest & makan siang di Gili Trawangan, sunset Bukit Malimbu.',
          en: 'Private boat island hopping: The Nest statues, sea turtle spot, relax on Gili Trawangan, Malimbu viewpoint sunset.'
        }
      },
      {
        timeOrDay: 'Hari 3',
        title: { id: 'Pesona Alam Sembalun & Air Terjun Tiu Kelep', en: 'Sembalun Mountain Panorama & Tiu Kelep Waterfall' },
        desc: {
          id: 'Perjalanan ke Lombok Utara, menikmati view lembah Sembalun, soft trekking menuju gemuruh segar Air Terjun Sendang Gile & Tiu Kelep.',
          en: 'Scenic drive to North Lombok, panoramic Sembalun valley, soft trekking to Sendang Gile & magical Tiu Kelep waterfalls.'
        }
      },
      {
        timeOrDay: 'Hari 4',
        title: { id: 'City Tour, Belanja Khas Lombok & Airport Transfer', en: 'City Tour, Shopping & Airport Transfer' },
        desc: {
          id: 'Check-out hotel, belanja kaos khas, tenun Sukarara, mutiara air laut Lombok, jajanan khas, drop off Bandara Internasional Lombok.',
          en: 'Hotel check-out, shopping for souvenirs, Sukarara weaving, Lombok pearls, local culinary snacks, transfer to Airport.'
        }
      }
    ],
    inclusions: STAY_INCLUSIONS,
    exclusions: STAY_EXCLUSIONS,
  },

  // 4. PAKET 5 HARI 4 MALAM (5D4N)
  {
    id: 'paket-5d4n',
    name: {
      id: 'Paket Wisata Lombok 5 Hari 4 Malam (5D4N)',
      en: 'Lombok Tour Package 5 Days 4 Nights (5D4N)',
    },
    location: {
      id: 'Lombok Ultimate (Mandalika, Gili, Sembalun, Pink Beach)',
      en: 'Ultimate Lombok (Mandalika, Gili, Sembalun, Pink Beach)',
    },
    shortDescription: {
      id: 'Liburan impian paripurna 5D4N! Jelajahi seluruh pesona Lombok tanpa terburu-buru: Mandalika, Snorkeling 3 Gili, Air Terjun Tiu Kelep, dan eksotisme Pantai Pink.',
      en: 'The ultimate 5D4N Lombok experience! Unhurried journey visiting Mandalika, 3 Gili Snorkeling, Tiu Kelep Waterfalls, and the famous Pink Beach.',
    },
    duration: {
      id: '5 Hari 4 Malam',
      en: '5 Days 4 Nights',
    },
    price: 2150000,
    priceUnit: {
      id: '/ orang (mulai dari)',
      en: '/ person (starting from)',
    },
    rating: 5.0,
    reviewsCount: 295,
    image: '/packages/paket-5d4n.jpg',
    category: 'stay',
    minPax: 2,
    tierPrices: PRICE_TIERS_5D4N,
    highlights: [
      { id: 'Pengalaman terlengkap: Mandalika, 3 Gili, Rinjani, & Pantai Pink', en: 'Most complete trip: Mandalika, 3 Gili, Rinjani, & Pink Beach' },
      { id: 'Eksotisme Pasir Pink & Pulau Pasir Tanjung Luar', en: 'Exotic Pink Sand beaches & Tanjung Luar Sand Island' },
      { id: 'Tersedia pilihan Tanpa Hotel s/d Resort Bintang 5 Mewah', en: 'Available from No Hotel to 5-Star Luxury Beach Resorts' },
      { id: 'Waktu santai leluasa cocok untuk keluarga & honeymoon', en: 'Unhurried leisure time ideal for families and honeymoons' },
    ],
    itinerary: [
      {
        timeOrDay: 'Hari 1',
        title: { id: 'Kedatangan & Wisata Sasak Mandalika', en: 'Arrival & Sasak Mandalika' },
        desc: {
          id: 'Penjemputan di Bandara, Desa Sade, Pantai Kuta Mandalika, foto Sirkuit Mandalika, sunset Bukit Merese, check-in hotel.',
          en: 'Airport pickup, Sade village, Kuta Mandalika, MotoGP Circuit photo spot, Bukit Merese sunset, hotel check-in.'
        }
      },
      {
        timeOrDay: 'Hari 2',
        title: { id: 'Private Snorkeling 3 Gili (Trawangan, Meno, Air)', en: 'Private Snorkeling 3 Gili Islands' },
        desc: {
          id: 'Private boat snorkeling spot The Nest Gili Meno, penyu liar, santai di Gili Trawangan, sunset spektakuler Bukit Malimbu.',
          en: 'Private boat snorkeling at The Nest statues, turtle point, relax on Gili Trawangan, Malimbu viewpoint sunset.'
        }
      },
      {
        timeOrDay: 'Hari 3',
        title: { id: 'Lembah Sembalun & Air Terjun Sendang Gile - Tiu Kelep', en: 'Sembalun Valley & Tiu Kelep Waterfalls' },
        desc: {
          id: 'Perjalanan ke kaki Gunung Rinjani, panorama Sembalun, soft trekking hutan tropis menuju Air Terjun Sendang Gile & Tiu Kelep.',
          en: 'Journey to the foothills of Mt Rinjani, Sembalun vistas, soft trekking to Sendang Gile & majestic Tiu Kelep.'
        }
      },
      {
        timeOrDay: 'Hari 4',
        title: { id: 'Eksplorasi Pantai Pink & Pulau Pasir Lombok Timur', en: 'Pink Beach & Sand Island Exploration' },
        desc: {
          id: 'Naik private boat dari Pelabuhan Tanjung Luar menuju Pulau Pasir (muncul saat surut), Pantai Pink 1 & 2, serta snorkeling Gili Petelu.',
          en: 'Private boat from Tanjung Luar to Sand Island, Pink Beach 1 & 2, and snorkeling around colorful Gili Petelu.'
        }
      },
      {
        timeOrDay: 'Hari 5',
        title: { id: 'City Tour, Belanja Khas & Airport Transfer', en: 'City Tour, Souvenir Shopping & Airport Transfer' },
        desc: {
          id: 'Sarapan di hotel, check out, sentra tenun Sukarara, belanja oleh-oleh khas Lombok, transfer kembali ke Bandara Internasional Lombok.',
          en: 'Hotel breakfast, check out, Sukarara weaving center, shopping for local souvenirs, transfer back to Lombok Airport.'
        }
      }
    ],
    inclusions: STAY_INCLUSIONS,
    exclusions: STAY_EXCLUSIONS,
  },

  // 5. GILI TRILOGY - Private Snorkeling (Image 2)
  {
    id: 'gili-trilogy',
    name: {
      id: 'Gili Trilogy — Private Snorkeling',
      en: 'Gili Trilogy — Private Snorkeling',
    },
    location: {
      id: '3 Gili (Gili T, Gili Air, Gili Meno)',
      en: '3 Gili Islands (Gili T, Gili Air, Gili Meno)',
    },
    shortDescription: {
      id: 'Private snorkeling trip eksklusif mengunjungi 3 Gili: spot patung bawah laut Nest, berenang bersama penyu liar, dan karang warna-warni.',
      en: 'Exclusive private snorkeling excursion to 3 Gili Islands: Nest underwater statues, swimming with wild sea turtles, and colorful coral gardens.',
    },
    duration: {
      id: '4 – 5 Jam (Private Boat)',
      en: '4 – 5 Hours (Private Boat)',
    },
    price: 1000000,
    priceUnit: {
      id: '/ paket privat (Maks. 6 orang)',
      en: '/ private package (Max 6 persons)',
    },
    rating: 5.0,
    reviewsCount: 420,
    image: '/packages/gili-trilogy.jpg',
    category: 'snorkeling',
    maxPax: 6,
    highlights: [
      { id: 'Explore 3 Gili: Gili Trawangan, Gili Air, Gili Meno', en: 'Explore 3 Gili: Gili Trawangan, Gili Air, Gili Meno' },
      { id: 'Dokumentasi Underwater Kamera GoPro Terbaru', en: 'Underwater documentation with latest edition GoPro' },
      { id: 'Private Boat & Guide Khusus Rombongan Anda', en: 'Private boat & dedicated guide just for your group' },
      { id: 'Peralatan Lengkap, Handuk, Air Mineral & Asuransi', en: 'Full gear, towels, mineral water & insurance included' }
    ],
    itinerary: [
      {
        timeOrDay: 'Spot 1',
        title: { id: 'Gili Air Coral Garden & Fish Feeding', en: 'Gili Air Coral Garden & Fish Feeding' },
        desc: {
          id: 'Berenang di perairan jernih Gili Air sambil memberi makan ratusan ikan karang warna-warni yang jinak.',
          en: 'Swim in crystal clear waters of Gili Air while feeding friendly tropical reef fish.'
        }
      },
      {
        timeOrDay: 'Spot 2',
        title: { id: 'Gili Meno Underwater Statues (The Nest)', en: 'Gili Meno Underwater Statues (The Nest)' },
        desc: {
          id: 'Foto bawah air ikonik di patung lingkaran karya Jason deCaires Taylor dan spot konservasi penyu laut.',
          en: 'Iconic underwater photoshoot at the circle statues by Jason deCaires Taylor and sea turtle haven.'
        }
      },
      {
        timeOrDay: 'Spot 3',
        title: { id: 'Gili Trawangan Turtle Point & Rest Area', en: 'Gili Trawangan Turtle Point & Rest Area' },
        desc: {
          id: 'Berenang bersama penyu hijau liar di Turtle Point lalu bersantai di pantai pasir putih Gili Trawangan.',
          en: 'Encounter wild green sea turtles at Turtle Point and relax along the vibrant white shores of Gili T.'
        }
      }
    ],
    inclusions: [
      { id: 'Private Guide Berpengalaman', en: 'Private Guide' },
      { id: 'GoPro Latest Edition (Foto & Video HD)', en: 'GoPro Latest Edition (HD Photos & Videos)' },
      { id: 'Snorkeling Equipment (Masker, Snorkel, Life Jacket)', en: 'Snorkeling Equipment (Mask, Snorkel, Life Jacket)' },
      { id: 'Private Boat Khusus (Bukan Sharing)', en: 'Private Boat (Not Shared)' },
      { id: 'Mineral Water & Towel (Handuk Bersih)', en: 'Mineral Water & Clean Towel' },
      { id: 'Insurance Included (Asuransi Perjalanan)', en: 'Insurance Included' }
    ],
    exclusions: [
      { id: 'Makan siang di pulau (opsional)', en: 'Lunch on the island (optional)' },
      { id: 'Sewa sepeda / Cidomo di Gili Trawangan', en: 'Bicycle or Cidomo carriage rental on Gili T' },
      { id: 'Transportasi antar jemput darat ke pelabuhan', en: 'Land transfers to harbor (available on request)' }
    ]
  },

  // 6. One Day Trip SENARU & SEMBALUN (Image 3)
  {
    id: 'senaru-sembalun',
    name: {
      id: 'One Day Trip: Senaru & Sembalun',
      en: 'One Day Trip: Senaru & Sembalun',
    },
    location: {
      id: 'Lombok Utara & Sembalun',
      en: 'North Lombok & Sembalun Valley',
    },
    shortDescription: {
      id: 'Jelajahi keagungan lembah Sembalun berlatar Gunung Rinjani serta kesegaran mistis Air Terjun Sendang Gile & Tiu Kelep.',
      en: 'Explore majestic Sembalun valley at the foot of Mt Rinjani and experience the mystical Sendang Gile & Tiu Kelep waterfalls.',
    },
    duration: {
      id: '1 Hari Penuh (07.00 – 16.30)',
      en: 'Full Day (07.00 – 16.30)',
    },
    price: 525000,
    priceUnit: {
      id: '/ pack (Min. 2 Pax)',
      en: '/ pack (Min. 2 Pax)',
    },
    rating: 4.9,
    reviewsCount: 236,
    image: '/packages/senaru-sembalun.jpg',
    category: 'oneday',
    minPax: 2,
    highlights: [
      { id: 'Sembalun View Point panorama lembah pegunungan', en: 'Sembalun View Point with panoramic mountain valley views' },
      { id: 'Sendang Gile & Tiu Kelep Waterfall', en: 'Sendang Gile & Tiu Kelep waterfalls soft trekking' },
      { id: 'Private Trip hemat sudah termasuk tiket dan supir BBM', en: 'Private trip inclusive of tickets, car, fuel & driver' }
    ],
    itinerary: [
      { timeOrDay: '07.00', title: { id: 'Pick Up & Briefing', en: 'Pick Up & Briefing' }, desc: { id: 'Penjemputan di hotel dan pengenalan rute wisata hari ini.', en: 'Hotel pickup and trip briefing by our driver.' } },
      { timeOrDay: '09.00', title: { id: 'Sembalun View Point', en: 'Sembalun View Point' }, desc: { id: 'Spot foto pemandangan petak sawah warna-warni dan udara sejuk pegunungan.', en: 'Photo opportunity overlooking patchwork hills and refreshing mountain air.' } },
      { timeOrDay: '11.00', title: { id: 'Sendang Gile Waterfall', en: 'Sendang Gile Waterfall' }, desc: { id: 'Menikmati gemuruh tirai air terjun pertama setinggi 30 meter.', en: 'Experience the 30-meter high first cascade surrounded by lush forest.' } },
      { timeOrDay: '13.00', title: { id: 'Tiu Kelep Waterfall', en: 'Tiu Kelep Waterfall' }, desc: { id: 'Soft trekking sungai alami menuju kolam sejuk air terjun legendaris Tiu Kelep.', en: 'Soft river trekking to the magical pool of legendary Tiu Kelep cascade.' } },
      { timeOrDay: '16.30', title: { id: 'Drop Off Hotel', en: 'Drop Off Hotel' }, desc: { id: 'Kembali menuju hotel di kawasan Senggigi / Mataram dengan santai.', en: 'Relaxing journey back to hotel in Senggigi or Mataram.' } }
    ],
    inclusions: [
      { id: 'Transportasi AC Nyaman (Avanza / Xenia)', en: 'Comfortable AC Transportation' },
      { id: 'Driver & BBM Sepuasnya', en: 'Driver & Fuel (BBM)' },
      { id: 'Tiket Masuk Wisata Sembalun & Air Terjun', en: 'Entrance Tickets to Sembalun & Waterfalls' },
      { id: 'Air Mineral Segar', en: 'Fresh Mineral Water' }
    ],
    exclusions: [
      { id: 'Makan Siang (Opsional)', en: 'Lunch (Optional)' },
      { id: 'Ojek Lokal Air Terjun (Bila Perlu)', en: 'Local waterfall motorcycle shuttle (If needed)' },
      { id: 'Pengeluaran Pribadi', en: 'Personal Expenses' }
    ]
  },

  // 7. One Day Trip SASAK TOUR & MANDALIKA (Image 4)
  {
    id: 'sasak-mandalika',
    name: {
      id: 'One Day Trip: Sasak Tour & Mandalika',
      en: 'One Day Trip: Sasak Tour & Mandalika',
    },
    location: {
      id: 'Lombok Tengah (Sade & Mandalika)',
      en: 'Central Lombok (Sade & Mandalika)',
    },
    shortDescription: {
      id: 'Jelajahi budaya autentik suku Sasak di Desa Sade & Ende, keindahan Pantai Kuta Mandalika, Sirkuit MotoGP, dan sunset Bukit Merese.',
      en: 'Discover authentic Sasak culture at Sade & Ende villages, pristine Kuta Mandalika beach, MotoGP Circuit, and Bukit Merese sunset.',
    },
    duration: {
      id: '1 Hari Penuh (± 10 Jam)',
      en: 'Full Day (± 10 Hours)',
    },
    price: 425000,
    priceUnit: {
      id: '/ pack (Min. 2 Pax)',
      en: '/ pack (Min. 2 Pax)',
    },
    rating: 4.9,
    reviewsCount: 310,
    image: '/packages/sasak-mandalika.jpg',
    category: 'oneday',
    minPax: 2,
    highlights: [
      { id: 'Desa Sade (Rumah Adat Sasak)', en: 'Sade Village (Traditional Sasak House)' },
      { id: 'Desa Ende (Sentra Tenun Tradisional)', en: 'Ende Village (Handweaving Heritage)' },
      { id: 'Pantai Kuta Mandalika & Bukit Merese', en: 'Kuta Mandalika Beach & Merese Hill' }
    ],
    itinerary: [
      { timeOrDay: '08.30', title: { id: 'Penjemputan di Hotel / Bandara', en: 'Pickup from Hotel / Airport' }, desc: { id: 'Penjemputan tepat waktu oleh driver profesional kami.', en: 'Timely pickup by our professional driver.' } },
      { timeOrDay: '09.30', title: { id: 'Desa Adat Sade & Ende', en: 'Sade & Ende Cultural Villages' }, desc: { id: 'Menyaksikan langsung kearifan lokal suku Sasak dan seni menenun kain tradisional.', en: 'Witness live indigenous Sasak traditions and traditional handweaving.' } },
      { timeOrDay: '12.00', title: { id: 'Pantai Kuta Mandalika', en: 'Kuta Mandalika Beach' }, desc: { id: 'Pantai pasir merica berpadu dengan air laut biru jernih dan santai makan siang.', en: 'Pepper-grain sand beach with crystal blue water and seaside lunch.' } },
      { timeOrDay: '14.30', title: { id: 'Sirkuit Internasional Pertamina Mandalika', en: 'Pertamina Mandalika International Circuit' }, desc: { id: 'Foto bersama di spot ikonik sirkuit kelas dunia kebanggaan Indonesia.', en: 'Iconic photo stop at the world-class MotoGP racing circuit.' } },
      { timeOrDay: '16.30', title: { id: 'Bukit Merese Golden Sunset', en: 'Bukit Merese Golden Sunset' }, desc: { id: 'Bukit berumput hijau dengan panorama matahari terbenam 360 derajat terbaik di Lombok.', en: 'Scenic grassy headland with the most magnificent 360-degree sunset in Lombok.' } },
      { timeOrDay: '18.30', title: { id: 'Drop Off Hotel / Bandara', en: 'Drop Off Hotel / Airport' }, desc: { id: 'Kembali diantar ke hotel dengan kenangan liburan menyenangkan.', en: 'Drop off back at your hotel with sweet holiday memories.' } }
    ],
    inclusions: [
      { id: 'Transportasi AC Nyaman', en: 'Comfortable AC Transportation' },
      { id: 'Driver & BBM', en: 'Driver & Fuel (BBM)' },
      { id: 'Tiket Parkir Seluruh Lokasi', en: 'Parking fees at all sites' },
      { id: 'Air Mineral', en: 'Mineral Water' }
    ],
    exclusions: [
      { id: 'Makan (Lunch/Dinner)', en: 'Meals (Lunch/Dinner)' },
      { id: 'Tiket Masuk Objek Wisata', en: 'Attraction Entrance Tickets' },
      { id: 'Pengeluaran Pribadi', en: 'Personal Expenses' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Budi Santoso & Keluarga',
    origin: 'Jakarta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Pelayanan Paket 2D1N Lombok Partner luar biasa memuaskan! Driver sangat sopan, hotel bintang 4 nya berkelas, dan anak-anak sangat bahagia saat snorkeling 3 Gili. Highly recommended!',
      en: 'The 2D1N tour package from Lombok Partner was top-notch! The driver was very courteous, the 4-star hotel was wonderful, and our children had the best time snorkeling in 3 Gili!'
    },
    rating: 5,
    package: 'Paket 2D1N Lombok'
  },
  {
    name: 'Jessica & Kevin',
    origin: 'Surabaya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Gili Trilogy Private Snorkeling bener-bener privat! Gak gabung orang lain, hasil foto GoPro nya jernih banget di patung The Nest. Admin responnya secepat kilat.',
      en: 'Gili Trilogy private snorkeling was truly private! No sharing with strangers, and the GoPro photos at The Nest were crystal clear. Fast customer service!'
    },
    rating: 5,
    package: 'Gili Trilogy Private Snorkeling'
  },
  {
    name: 'Mark & Sarah',
    origin: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Trip Senaru & Sembalun sangat menakjubkan. Air terjun Tiu Kelep adalah salah satu tempat paling indah yang pernah saya lihat. Terima kasih Lombok Partner!',
      en: 'The Senaru & Sembalun day trip was breathtaking. Tiu Kelep waterfall is easily one of the most magical places on Earth. Thank you Lombok Partner!'
    },
    rating: 5,
    package: 'Senaru & Sembalun Trip'
  },
  {
    name: 'dr. Amanda & Rekan',
    origin: 'Bandung',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Liburan bersama rekan kerja ke Kuta Mandalika dan Bukit Merese sangat berkesan. Driver ramah, tahu spot foto tersembunyi, dan sunsetnya sangat magis!',
      en: 'Our holiday trip with colleagues to Kuta Mandalika and Merese Hill was unforgettable. Friendly driver, knew hidden photo spots, and the sunset was pure magic!'
    },
    rating: 5,
    package: 'Sasak Mandalika Discovery'
  },
  {
    name: 'Rian Pratama',
    origin: 'Yogyakarta',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Snorkeling di Secret Gili (Nanggu, Sudak, Kedis) suasananya tenang dan alami sekali. Karang masih sangat terjaga dan banyak ikan warna-warni. Pelayanan mantap!',
      en: 'Snorkeling at Secret Gili (Nanggu, Sudak, Kedis) was so peaceful and pristine. Coral reef is vibrant with tons of colorful fish. Outstanding hospitality!'
    },
    rating: 5,
    package: 'Secret Gili Snorkeling'
  },
  {
    name: 'Clara & David',
    origin: 'Singapura',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Bulan madu kami di Lombok sangat sempurna bersama Lombok Partner. Pilihan resort tepi pantainya romantis, itinerary santai tanpa terburu-buru, service bintang 5!',
      en: 'Our honeymoon in Lombok was extraordinary with Lombok Partner. Romantic beachfront resort, relaxed itinerary without rush, and 5-star service throughout!'
    },
    rating: 5,
    package: 'Lombok Honeymoon Romantic'
  },
  {
    name: 'Hendro Wijaya & Tim',
    origin: 'Semarang',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    comment: {
      id: 'Acara family gathering 16 orang berjalan lancar dan terkoordinasi rapi. Bus wisata bersih, driver profesional, makanan lokal yang direkomendasikan semuanya lezat!',
      en: 'Our family gathering of 16 went seamlessly and well-organized. Clean tour bus, professional driver, and all the recommended local culinary stops were delicious!'
    },
    rating: 5,
    package: 'Private Family Gathering 3D2N'
  }
];
