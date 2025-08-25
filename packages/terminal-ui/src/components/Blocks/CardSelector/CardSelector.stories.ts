import type { Meta, StoryObj } from '@storybook/vue3-vite';
import boxImage from '@/assets/images/box.png';
import boxCodeImage from '@/assets/images/box-code.png';
import boxOpenImage from '@/assets/images/box-open.png';
import boxPalletImage from '@/assets/images/box-pallet.png';
import boxesImage from '@/assets/images/boxes.png';
import datamatrixScanImage from '@/assets/images/datamatrix-scan.png';
import type { VCardBgColor } from '../../ui/VCard/VCard.types';
import type { CardSelectorItem } from './CardSelector.types';
import { CardSelector } from './index';

type Story = StoryObj<typeof CardSelector>;

const bgColors: Record<VCardBgColor, string> = {
  white: 'Белый',
  gray: 'Серый',
};

const itemsMock1: CardSelectorItem[] = [
  {
    id: 'aggregation',
    title: 'Упаковка',
    image: boxImage,
  },
  {
    id: 'pallet',
    title: 'Паллет',
    image: boxPalletImage,
  },
];

const itemsMock2: CardSelectorItem[] = [
  {
    id: 'aggregation',
    title: 'Формирование',
    image: boxCodeImage,
  },
  {
    id: 'disaggregation',
    title: 'Расформирование',
    image: boxOpenImage,
  },
  {
    id: 'change',
    title: 'Изменение',
    image: boxesImage,
  },
  {
    id: 'info',
    title: 'Информация',
    image: datamatrixScanImage,
  },
];

const meta: Meta<typeof CardSelector> = {
  component: CardSelector,
  argTypes: {
    items: {
      description: 'Элементы для вывода',
    },
    bigFont: {
      description: 'Увеличить шрифт',
    },
    colsCount: {
      description: 'Количество колонок',
      control: {
        type: 'number',
      },
    },
    itemPaddingX: {
      description: 'Внутренний отступ у элементов по оси X',
    },
    itemPaddingY: {
      description: 'Внутренний отступ у элементов по оси Y',
    },
    bgColor: {
      description: 'Цвет фона элементов',
      options: Object.keys(bgColors),
      control: {
        type: 'radio',
        labels: bgColors,
      },
    },
  },
  args: {
    items: itemsMock1,
    bgColor: 'gray',
    itemPaddingX: '16px',
    itemPaddingY: '16px',
    bigFont: false,
    colsCount: 1,
  },
};
export default meta;

export const OneColumn: Story = {
  args: {
    items: itemsMock1,
  },
};

export const TwoColumns: Story = {
  args: {
    items: itemsMock2,
    colsCount: 2,
    itemPaddingX: '20px',
    itemPaddingY: '20px',
  },
};
