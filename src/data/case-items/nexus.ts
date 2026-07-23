import nexusGameHall from '@assets/images/nexus-game-hall.jpg';
import nexusGameZone from '@assets/images/nexus-game-zone.jpg';
import nexusLoungeCyberpunk from '@assets/images/nexus-lounge-cyberpunk.png';
import nexusLoungeWarrior from '@assets/images/nexus-lounge-warrior.png';
import nexusVipLounge from '@assets/images/nexus-vip-lounge.jpg';
import type { PortfolioCase } from '../case-types';

const nexusCase: PortfolioCase = {
  slug: 'nexus',
  sortOrder: 10,
  title: 'NEXUS',
  caption: 'NEXUS компьютерный клуб',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект компьютерного клуба NEXUS с просторной игровой зоной, выразительным неоновым светом и лаунж-пространствами для отдыха.',
  photosFolder: 'Нексус для лендинга',
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
