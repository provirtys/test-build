import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { CodeStatus } from './CodeCard.types';
import { CodeCard } from './index';

type Story = StoryObj<typeof CodeCard>;

const status: Record<CodeStatus | 'none', string> = {
  none: '',
  broken: 'Ошибка',
  verified: 'Подтвержден',
};

const dataMatrix = 'dataMatrix';
const barcode = 'barcode';
const codeTypes = { dataMatrix, barcode };

/** Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции.  */
const meta: Meta<typeof CodeCard> = {
  component: CodeCard,
  argTypes: {
    codeType: {
      description: 'Тип кода',
      options: Object.keys(codeTypes),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          dataMatrix: 'DataMatrix',
          barcode: 'Barcode',
        },
      },
    },
    codeText: {
      description: 'Текст кода',
    },
    status: {
      description: 'Статус кода',
      options: Object.keys(status),
      control: {
        type: 'radio',
        labels: status,
      },
    },
    time: {
      description: 'Время',
    },
    position: {
      description: 'Номер позиции',
    },
  },
  args: {
    codeType: 'dataMatrix',
    codeText: 'wv985fjs934',
    status: undefined,
    time: '12:34:56',
    position: 0,
  },
};
export default meta;

export const DataMatrix: Story = {};

export const DataMatrixVerified: Story = {
  args: {
    status: 'verified',
    position: 1,
  },
};

export const DataMatrixBroken: Story = {
  args: {
    status: 'broken',
    position: 2,
  },
};

export const Barcode: Story = {
  args: {
    codeType: 'barcode',
    position: 4,
  },
};

export const BarcodeVerified: Story = {
  args: {
    codeType: 'barcode',
    status: 'verified',
    position: 5,
  },
};

export const BarcodeBroken: Story = {
  args: {
    codeType: 'barcode',
    status: 'broken',
    position: 6,
  },
};
