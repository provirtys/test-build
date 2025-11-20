import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { BtnType } from './InformationTool.types';
import { InformationTool } from './index';

type Story = StoryObj<typeof InformationTool>;

const btnTypes: Record<BtnType, string> = {
  get: 'Получить',
  return: 'Вернуть',
};

/** Компонент для отображения информации об инструменте (Mobile). Можно настраивать кнопку Получить/Вернуть
 * и управлять наличием изображения инструмента. Компонент для приложения Inventory мобильной версии
 * (параметры телефона 360х754px/754x336px*/
const meta: Meta<typeof InformationTool> = {
  component: InformationTool,
  argTypes: {
    attributes: {
      description: 'Атрибуты инструмента',
    },
    btn: {
      description: 'Кнопка',
      options: Object.keys(btnTypes),
      control: {
        type: 'radio',
        labels: btnTypes,
      },
    },
  },
  args: {
    attributes: { Название: 'Название инструмента 1', Количество: 125 },
    img: '',
    btn: 'get',
  },
};
export default meta;

export const takeToolWithoutImage: Story = {};

export const returnToolWithoutImage: Story = {
  args: {
    btn: 'return',
  },
};

export const returnToolWithImage: Story = {
  args: {
    btn: 'return',
  },
};
