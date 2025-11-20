import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { StatusLabelColor } from '@/components/Blocks/StatusLabel/StatusLabel.types';
import { StatusLabel } from './index';

type Story = StoryObj<typeof StatusLabel>;

const colors: Record<StatusLabelColor, string> = {
  success: 'Зеленый',
  error: 'Красный',
  warning: 'Желтый',
  info: 'Синий',
};

/** Компонент статус принтера, используемый на планшетах. Можно регулировать цвет, тип сообщения, состояния отладки, синхронизации. */
/** Состояние режима отладки делает кнопку активной для нажатия и добавляет к кнопке заливку,
 * которая отражает состояние системы.*/
const meta: Meta<typeof StatusLabel> = {
  component: StatusLabel,
  argTypes: {
    color: {
      options: Object.keys(colors),
      control: {
        type: 'radio',
        labels: colors,
      },
    },
    isAnimate: {
      options: [true, false],
    },
    showBackground: {
      options: [true, false],
    },
  },
  args: {
    label: 'Готово',
    color: 'success',
    isAnimate: false,
    showBackground: false,
  },
};
export default meta;

export const StandardSuccess: Story = {
  args: {
    label: 'Готово',
    color: 'success',
  },
};

export const StandardSuccessAnimating: Story = {
  args: {
    label: 'Готово',
    color: 'success',
    isAnimate: true,
    showBackground: false,
  },
};

export const StandardSuccessAnimatingWithBackground: Story = {
  args: {
    label: 'Готово',
    color: 'success',
    isAnimate: true,
    showBackground: true,
  },
};

export const StandardError: Story = {
  args: {
    label: 'Ошибка',
    color: 'error',
  },
};

export const StandardWarning: Story = {
  args: {
    label: 'В процессе',
    color: 'warning',
  },
};

export const StandardInfo: Story = {
  args: {
    label: 'Инфо',
    color: 'info',
  },
};
