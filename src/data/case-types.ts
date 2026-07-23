import type { ImageMetadata } from 'astro';

export type CaseCategory = 'cyber';

export type PortfolioCase = {
  slug: string;
  sortOrder: number;
  title: string;
  caption: string;
  category: CaseCategory;
  categoryLabel: string;
  description: string;
  photosFolder: string;
  photosUrl?: string;
  previewImages: ImageMetadata[];
  images: ImageMetadata[];
};
