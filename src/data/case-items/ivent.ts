import iventHall1 from '@assets/images/ivent-hall-1.jpg';
import iventHall10 from '@assets/images/ivent-hall-10.jpg';
import iventHall2 from '@assets/images/ivent-hall-2.jpg';
import iventHall4 from '@assets/images/ivent-hall-4.jpg';
import iventHall9 from '@assets/images/ivent-hall-9.jpg';
import type { PortfolioCase } from '../case-types';

const iventCase: PortfolioCase = {
  slug: 'ivent',
  sortOrder: 20,
  title: 'ИВЕНТ',
  caption: 'ИВЕНТ компьютерный клуб',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект просторного компьютерного клуба с игровым залом, акцентным светом, навигационными линиями и сценарием под плотный поток гостей.',
  photosFolder: 'Ивент компьютерный клуб 252 кв Наро-Фоминск',
  previewImages: [iventHall1, iventHall10, iventHall9],
  images: [iventHall1, iventHall10, iventHall9, iventHall2, iventHall4],
};

export default iventCase;
