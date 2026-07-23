import nexusGameHall from '@assets/images/nexus-game-hall.jpg';
import nexusGameZone from '@assets/images/nexus-game-zone.jpg';
import nexusLoungeCyberpunk from '@assets/images/nexus-lounge-cyberpunk.png';
import nexusLoungeWarrior from '@assets/images/nexus-lounge-warrior.png';
import nexusVipLounge from '@assets/images/nexus-vip-lounge.jpg';
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
  photosUrl: 'https://disk.yandex.ru/d/7mj0pDvOcVkPwg',
  previewImages: [nexusGameZone, nexusLoungeWarrior, nexusVipLounge],
  images: [
    nexusGameZone,
    nexusLoungeWarrior,
    nexusGameHall,
    nexusVipLounge,
    nexusLoungeCyberpunk,
  ],
};

export default nexusCase;
