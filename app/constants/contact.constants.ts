import { Message, Phone, Position } from '@element-plus/icons-vue';

const CONTACT_LIST = [
  {
    title: 'Город',
    text: 'Москва',
    link: 'https://yandex.ru/maps/geo/moskva/53000094',
    type: 'position',
    icon: Position,
  },
  {
    title: 'Телефон',
    text: '+7 (937)-550-67-69',
    link: 'tel:+79375506769',
    type: 'phone',
    icon: Phone,
  },
  {
    title: 'Email',
    text: 'G.besscetnov@yandex.ru',
    link: 'mailto:G.besscetnov@yandex.ru',
    type: 'email',
    icon: Message,
  },
];

export default {
  CONTACT_LIST,
};
