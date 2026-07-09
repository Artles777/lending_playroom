import type { ImageMetadata } from 'astro';

export type CaseCategory = 'cyber' | 'spa';

export type CaseCategoryItem = {
  value: CaseCategory;
  label: string;
};

export type PortfolioCase = {
  slug: string;
  sortOrder: number;
  title: string;
  caption: string;
  category: CaseCategory;
  categoryLabel: string;
  description: string;
  photosFolder: string;
  previewImages: ImageMetadata[];
  images: ImageMetadata[];
};
