import iventHall1 from '@assets/images/ivent-hall-1.jpg';
import iventHall10 from '@assets/images/ivent-hall-10.jpg';
import iventHall2 from '@assets/images/ivent-hall-2.jpg';
import iventHall4 from '@assets/images/ivent-hall-4.jpg';
import iventHall9 from '@assets/images/ivent-hall-9.jpg';
import type { PortfolioCase } from '../case-types';

const iventCase: PortfolioCase = {
  slug: 'ivent',
  sortOrder: 20,
  title: 'Ивент-пространство — 252 м²',
  caption: 'ИВЕНТ компьютерный клуб',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект реализован в максимально сжатые сроки. Главной задачей было сделать зону ресепшн визуальным центром пространства. Особое внимание уделили сценариям освещения — свет здесь работает как полноценный инструмент дизайна. Цветовая палитра утверждалась совместно с заказчиком, результат — интерьер, производящий сильное первое впечатление.',
  photosFolder: 'Ивент компьютерный клуб 252 кв Наро-Фоминск',
  photosUrl: 'https://disk.yandex.ru/d/34VDs5hXQfQixA',
  previewImages: [iventHall1, iventHall10, iventHall9],
  images: [iventHall1, iventHall10, iventHall9, iventHall2, iventHall4],
};

export default iventCase;
