import { House, Reading } from '@element-plus/icons-vue';
import routerConstant from './routes.constant';

const MENU_LIST = [
  {
    text: 'Главная',
    path: routerConstant.ROUTE_HOME,
    icon: House,
  },
  {
    text: 'Библиотека',
    path: routerConstant.ROUTE_LIBRARY,
    icon: Reading,
  },
] as const;

export default { MENU_LIST };
