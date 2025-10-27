import { Notify } from 'quasar';
import type { VBreadcrumbsItem } from '@';
import type { MainSidebarItem } from '../components/Layouts/MainSidebar';

export const sidebarItems: Omit<MainSidebarItem, 'handler'>[] = [
  {
    label: 'Задачи',
    icon: 'page-check',
  },
  {
    label: 'Линии',
    icon: 'water-pump',
  },
  {
    label: 'Шаблоны',
    icon: 'folder-special',
    active: true,
  },
  {
    label: 'Интеграции',
    icon: 'puzzle',
  },
  {
    label: 'Продукция',
    icon: 'box',
  },
  {
    label: 'Журнал',
    icon: 'notifications',
  },
];

export const headerBreadcrumbs: VBreadcrumbsItem[] = [
  {
    label: 'Пункт 1',
    handler: () =>
      Notify.create({
        type: 'info',
        message: 'Нажатие на пункт 1',
      }),
  },
  {
    label: 'Пункт 2',
    handler: () =>
      Notify.create({
        type: 'info',
        message: 'Нажатие на пункт 2',
      }),
  },
  {
    label: 'Пункт 3',
    handler: () =>
      Notify.create({
        type: 'info',
        message: 'Нажатие на пункт 3',
      }),
  },
  {
    label: 'Пункт 4',
  },
];
