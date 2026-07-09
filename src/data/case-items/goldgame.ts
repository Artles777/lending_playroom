import goldgameCorridor1 from '@assets/images/goldgame-corridor-1.jpg';
import goldgameHall1 from '@assets/images/goldgame-hall-1.jpg';
import goldgameHall3 from '@assets/images/goldgame-hall-3.jpg';
import goldgamePs from '@assets/images/goldgame-ps.jpg';
import goldgameReception1 from '@assets/images/goldgame-reception-1.jpg';
import type { PortfolioCase } from '../case-types';

const goldgameCase: PortfolioCase = {
  slug: 'goldgame',
  sortOrder: 10,
  title: 'Goldgame',
  caption: 'Gold Game компьютерный клуб',
  category: 'cyber',
  categoryLabel: 'Киберклубы',
  description: 'Проект игрового пространства с приватными зонами, лаунжем, консольной комнатой и световым сценарием под атмосферу клуба.',
  photosFolder: 'Gold Game компьютерный клуб 89 кв Серпухов',
  previewImages: [goldgameHall1, goldgameReception1, goldgameHall3],
  images: [goldgameHall1, goldgameReception1, goldgameHall3, goldgamePs, goldgameCorridor1],
};

export default goldgameCase;
