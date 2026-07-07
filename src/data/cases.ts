import type { ImageMetadata } from 'astro';

import duoZone from '@assets/images/duo-zone.jpg';
import goldgameDuoRoom from '@assets/images/goldgame-duo-room.jpg';
import goldgamePsRoom from '@assets/images/goldgame-ps-room.jpg';
import kokpitSimulators from '@assets/images/kokpit-simulators.jpg';
import loungeZone from '@assets/images/lounge-zone.jpg';

export type CaseCategory = 'cyber';

export type CaseCategoryItem = {
  value: CaseCategory;
  label: string;
};

export type PortfolioCase = {
  slug: string;
  title: string;
  caption: string;
  category: CaseCategory;
  categoryLabel: string;
  description: string;
  previewImages: ImageMetadata[];
  images: ImageMetadata[];
};

export const caseCategories: CaseCategoryItem[] = [
  { value: 'cyber', label: 'Киберклубы' },
];

const goldgameCase: PortfolioCase = {
  slug: 'goldgame',
  title: 'Goldgame',
  caption: 'Gold Game компьютерный клуб 89 м2',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект игрового пространства с приватными зонами, лаунжем, консольной комнатой и световым сценарием под атмосферу клуба.',
  previewImages: [goldgameDuoRoom, goldgamePsRoom, loungeZone],
  images: [goldgameDuoRoom, goldgamePsRoom, loungeZone, duoZone, kokpitSimulators],
};

export const cases: PortfolioCase[] = [
  goldgameCase,
];
