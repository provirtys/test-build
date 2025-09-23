import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { headerBreadcrumbs } from '../../../mocks/layout';
import VBreadcrumbs from './VBreadcrumbs.vue';

type Story = StoryObj<typeof VBreadcrumbs>;

/** Компонент хлебных крошек (НЕ использует в себе компонент q-breadcrumbs). <br/> Элементы, которые не являются последними, имеют серый цвет + обработчик нажатия. Последний элемент имеет черный цвет и не имеет обработчик нажатия  */
const meta: Meta<typeof VBreadcrumbs> = {
  component: VBreadcrumbs,
  argTypes: {
    items: {
      description: 'Массив элементов: <br/>' + '`label` — заголовок <br/>' + '`handler` — обработчик нажатия',
    },
  },
  args: {
    items: headerBreadcrumbs,
  },
};

export default meta;

export const OneItem: Story = {
  args: {
    items: headerBreadcrumbs.slice(0, 1),
  },
};

export const TwoItems: Story = {
  args: {
    items: headerBreadcrumbs.slice(0, 2),
  },
};

export const ThreeItems: Story = {
  args: {
    items: headerBreadcrumbs.slice(0, 3),
  },
};
