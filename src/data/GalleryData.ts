export interface GalleryCategory {
  key: string;
  label: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    key: "events",
    label: "Events",
    images: Array.from({ length: 14 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "venue",
    label: "Venue",
    images: Array.from({ length: 12 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "boracay",
    label: "Boracay",
    images: Array.from({ length: 48 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "versteck",
    label: "Versteck",
    images: Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "halloween",
    label: "Halloween",
    images: Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "christmas_new_year",
    label: "Christmas & New Year",
    images: Array.from({ length: 8 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "ktv",
    label: "KTV",
    images: Array.from({ length: 6 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "river",
    label: "River",
    images: Array.from({ length: 4 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "customers",
    label: "Customers",
    images: Array.from({ length: 62 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "staff",
    label: "Staff",
    images: Array.from({ length: 16 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "cafe",
    label: "Cafe",
    images: Array.from({ length: 13 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    key: "dinagyang-2025",
    label: "Dinagyang - 2025",
    images: Array.from({ length: 13 }, (_, i) => `${i + 1}.jpg`),
  },
];