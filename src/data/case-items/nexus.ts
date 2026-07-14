import nexus3010 from '@assets/images/nexus-3010.jpeg';
import nexus3011 from '@assets/images/nexus-3011.jpeg';
import nexus3012 from '@assets/images/nexus-3012.jpeg';
import nexus3013 from '@assets/images/nexus-3013.jpeg';
import nexus3014 from '@assets/images/nexus-3014.jpeg';
import type { PortfolioCase } from '../case-types';

const nexusCase: PortfolioCase = {
  slug: 'nexus',
  sortOrder: 10,
  title: 'Компьютерный клуб Nexus — 150 м²',
  caption: 'Nexus компьютерный клуб',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект компьютерного клуба Nexus площадью 150 м² в Мурманске.',
  photosFolder: 'Компьютерный клуб Nexus 150кв.м. Мурманск',
  previewImages: [nexus3011, nexus3012, nexus3010],
  images: [nexus3011, nexus3012, nexus3010, nexus3013, nexus3014],
};

export default nexusCase;
