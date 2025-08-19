import type { Meta, StoryObj } from '@storybook/vue3-vite';
import imageTool from '@/assets/images/scan-zone.svg';
import type { BtnType } from './InformationTool.types';
import { InformationTool } from './index';

type Story = StoryObj<typeof InformationTool>;

const btnTypes: Record<BtnType, string> = {
  get: 'Получить',
  return: 'Вернуть',
};

const empty = '';
const images = { empty, imageTool };

/** Компонент для отображения информации об инструменте (Mobile). Можно настраивать кнопку Получить/Вернуть
 * и управлять наличием изображения инструмента. Компонент для приложения Inventory мобильной версии
 * (параметры телефона 360х754px/754x336px*/
const meta: Meta<typeof InformationTool> = {
  component: InformationTool,
  argTypes: {
    attributes: {
      description: 'Атрибуты инструмента',
    },
    img: {
      description: 'Изображение инструмента',
      options: Object.keys(images),
      mapping: images,
      control: {
        type: 'radio',
        labels: {
          empty: 'Без изображения',
          imageTool: 'Изображение инструмента',
        },
      },
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

export const ToolWithImage: Story = {
  args: {
    img: imageTool,
  },
};

export const returnToolWithoutImage: Story = {
  args: {
    btn: 'return',
  },
};

export const returnToolWithImage: Story = {
  args: {
    img: imageTool,
    btn: 'return',
  },
};
