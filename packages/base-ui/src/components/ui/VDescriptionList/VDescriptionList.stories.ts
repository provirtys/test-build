import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VBadge } from '@';
import { VDescriptionList } from './index';

type Story = StoryObj<typeof VDescriptionList>;

/**
 * Компонент для вывода списка элементов - ключ:значение. Поддерживает слоты для кастомного вывода значений.
 */
const meta: Meta<typeof VDescriptionList> = {
  component: VDescriptionList,
  argTypes: {
    items: {
      description: 'Массив элементов',
    },
    inline: {
      description: 'Светлый цвет шрифта',
      control: {
        type: 'boolean',
      },
    },
    isLight: {
      description: 'Светлый цвет шрифта',
      control: {
        type: 'boolean',
      },
    },
    alignCenter: {
      description: 'Центрировать текст значения по центру',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    items: [
      {
        term: 'Заголовок 1',
        definition: 'Значение 1',
      },
      {
        term: 'Заголовок 2',
        definition: 'Значение 2',
      },
      {
        term: 'Заголовок 3',
        definition: 'Значение 3',
      },
    ],
    inline: false,
    isLight: false,
    alignCenter: false,
  },
};
export default meta;

export const Standard: Story = {};

export const Inline: Story = {
  args: {
    inline: true,
  },
};

export const Light: Story = {
  args: {
    isLight: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Centered: Story = {
  args: {
    alignCenter: true,
  },
};

export const WithCustomSlot: Story = {
  args: {
    items: [
      {
        term: 'Заголовок 1',
        definition: 'Значение 1',
      },
      {
        term: 'Заголовок 2',
        slot: 'custom-slot',
      },
      {
        term: 'Заголовок 3',
        definition: 'Значение 3',
      },
    ],
  },
  render: (args) => ({
    components: { VDescriptionList, VBadge },
    setup() {
      return {
        items: args.items,
      };
    },
    template: `
    <v-description-list :items="items" inline>
      <template #custom-slot>
        <v-badge label="Значение 2.1" color="success" style="margin-right: 10px"/>
        <v-badge label="Значение 2.2"/>
      </template>
    </v-description-list>`,
  }),
};
