import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { StatusCardColor } from './StatusCard.types';
import StatusCard from './StatusCard.vue';

type Story = StoryObj<typeof StatusCard>;

const colors: Record<StatusCardColor, string> = {
  success: 'Зеленый',
  error: 'Красный',
  info: 'Синий',
  warning: 'Желтый',
};

/**
 * Компонент для отображения статуса сущности в течение определенного периода.
 */
const meta: Meta<typeof StatusCard> = {
  component: StatusCard,
  argTypes: {
    title: {
      description: 'Заголовок карточки (сверху вверху)',
    },
    text: {
      description: 'Основное значение (слева внизу)',
    },
    label: {
      description: 'Дескриптор (рядом с `text`)',
    },
    color: {
      description: 'Цвет карточки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    progress: {
      description: 'Ширина цветного фона. <br/> От `0` до `100`',
      control: {
        min: 0,
        max: 100,
      },
    },
    togglerStatus: {
      description: `Статус переключателя:<br/>
<b>null</b> - не отображать переключатель <br/>
<b>false</b> - отображать, неактивный статус <br/>
<b>true</b> - отображать, активный статус <br/><br/>
Можно использовать как <br/> 
v-model:togglerStatus="togglerModel"`,
      options: [null, false, true],
      control: {
        type: 'select',
      },
    },
    startColor: {
      description: 'Цвет, с которого начинается градиентный фон. По умолчанию `light-gray-55`',
      control: {
        type: 'text',
      },
    },
    endColor: {
      description: 'Цвет, которым заканчивается градиентный фон. Если не задан, то используется цвет из пропа `color`',
      control: {
        type: 'text',
      },
    },
    behindColor: {
      description: 'Цвет подложки заднего фона, отображается когда карточка не до конца заполнена',
      control: {
        type: 'text',
      },
    },
    borderRadius: {
      description: 'Радиус границы',
    },
  },
  args: {
    title: '',
    text: '',
    label: '',
    color: undefined,
    togglerStatus: null,
    progress: 0,
    startColor: 'light-gray-55',
    endColor: '',
    behindColor: 'light-gray-55',
    borderRadius: '8px',
  },
  globals: {
    backgrounds: { value: 'white' },
  },
};

export default meta;

export const Default: Story = {
  args: {
    title: 'Средняя скорость',
    text: 32,
    label: 'м./час',
  },
};

export const ErrorColor: Story = {
  args: {
    title: 'Брак',
    text: '0.01%',
    label: '149 123 шт.',
    color: 'error',
    progress: 100,
    togglerStatus: false,
  },
};

export const InfoColor: Story = {
  args: {
    title: 'Средняя скорость',
    text: 132,
    label: '31% от всех задач',
    color: 'info',
    progress: 31,
    togglerStatus: false,
  },
};

export const WarningColor: Story = {
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'warning',
    progress: 10,
    togglerStatus: false,
  },
};

export const SuccessColor: Story = {
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'success',
    progress: 100,
    togglerStatus: false,
  },
};

export const CustomBackgroundColors: Story = {
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'success',
    progress: 75,
    togglerStatus: false,
    startColor: 'error',
    endColor: 'info',
    behindColor: 'light-gray-70',
  },
};
