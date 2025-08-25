import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BoxCodeImage from '@/assets/images/box-code.png';
import BoxCodeGreenImage from '@/assets/images/box-code-green.png';
import BoxOpenImage from '@/assets/images/box-open.png';
import BoxesGreenImage from '@/assets/images/boxes-green.png';
import { InfoMessage } from './index';

type Story = StoryObj<typeof InfoMessage>;

const meta: Meta<typeof InfoMessage> = {
  component: InfoMessage,
  argTypes: {},
  args: {
    items: {
      text: {
        value: 'Отсканируйте код упаковки для подтверждения',
      },
    },
  },
};
export default meta;

export const ScanGTIN: Story = {
  args: {
    items: {
      icon: {
        name: 'datamatrix-loading',
        size: '105px',
      },
      text: {
        value: 'Отсканируйте GTIN код',
      },
    },
  },
};

export const PutLabel: Story = {
  args: {
    items: {
      image: {
        path: BoxCodeImage,
      },
      text: {
        value: 'Нанесите этикетку на упаковку. После нанесения отсканируйте код упаковки для подтверждения.',
      },
    },
  },
};

export const PackageFormed: Story = {
  args: {
    items: {
      icon: {
        name: 'status-success',
        size: 53,
      },
      image: {
        path: BoxCodeGreenImage,
      },
      text: {
        value: 'Упаковка сформирована',
      },
    },
  },
};

export const PackageUnformed: Story = {
  args: {
    items: {
      image: {
        path: BoxOpenImage,
      },
      icon: {
        name: 'status-success',
        size: 53,
      },

      text: {
        value: 'Упаковка расформирована',
      },
    },
  },
};

export const ChangeCompleted: Story = {
  args: {
    items: {
      icon: {
        name: 'status-success',
        size: 53,
      },
      image: {
        path: BoxesGreenImage,
      },
      text: {
        value: 'Изменение завершено',
      },
    },
  },
};
