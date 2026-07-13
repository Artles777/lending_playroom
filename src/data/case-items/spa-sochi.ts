import spaSochi1 from '@assets/images/spa-sochi-1.jpg';
import spaSochi2 from '@assets/images/spa-sochi-2.jpg';
import spaSochi3 from '@assets/images/spa-sochi-3.jpg';
import spaSochi4 from '@assets/images/spa-sochi-4.jpg';
import spaSochi5 from '@assets/images/spa-sochi-5.jpg';
import type { PortfolioCase } from '../case-types';

const spaSochiCase: PortfolioCase = {
  slug: 'spa-sochi',
  sortOrder: 100,
  title: 'SPA-комплекс Сочи',
  caption: 'SPA-комплекс г. Сочи',
  category: 'spa',
  categoryLabel: 'SPA-комплексы',
  description: 'Проект в стилистике горного шале, отражающей контекст локации. Запрос заказчика — атмосфера премиального интерьера с ощущением уединения и комфорта. В основе — тёплая природная палитра и фактуры, отсылающие к альпийской архитектуре. Камерность шале в сочетании с эстетикой современного СПА.',
  photosFolder: 'СПА комплекс г. Сочи',
  previewImages: [spaSochi1, spaSochi2, spaSochi3],
  images: [spaSochi1, spaSochi2, spaSochi3, spaSochi4, spaSochi5],
};

export default spaSochiCase;
