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
    termFontSize: {
      description: 'Размер шрифта у заголовка',
    },
    definitionFontSize: {
      description: 'Размер шрифта у значения',
    },
    bordered: {
      description: 'Показывать границы у элементов',
    },
    contentInline: {
      description: 'Отображать элементы в линию',
    },
    itemGap: {
      description: 'Расстояние между term и definition в элементе',
    },
    contentGap: {
      description: 'Расстояние между элементами',
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
    termFontSize: '14px',
    definitionFontSize: '28px',
    bordered: false,
    contentInline: false,
    itemGap: '12px',
    contentGap: '20px',
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

export const ContentInline: Story = {
  args: {
    contentInline: true,
  },
};

export const ContentInlineAndItemsInline: Story = {
  name: 'Content Inline + Items Inline',
  args: {
    inline: true,
    contentInline: true,
    termFontSize: '16px',
    definitionFontSize: '16px',
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

export const MultiLevel: Story = {
  args: {
    items: [
      {
        term: 'Заголовок 1',
        definition: [
          {
            term: 'Заголовок 1.1',
            definition: [
              {
                term: 'Заголовок 1.1.1',
                definition: 'Значение 1.1.1',
              },
              {
                term: 'Заголовок 1.1.2',
                definition: 'Значение 1.1.2',
              },
              {
                term: 'Заголовок 1.1.3',
                definition: 'Значение 1.1.3',
              },
            ],
          },
          {
            term: 'Заголовок 1.2',
            definition: 'Значение 1.2',
          },
        ],
      },
      {
        term: 'Заголовок 2',
        definition: [
          {
            term: 'Заголовок 2.1',
            definition: 'Значение 2.1',
          },
          {
            term: 'Заголовок 2.2',
            definition: 'Значение 2.2',
          },
          {
            term: 'Заголовок 2.3',
            definition: 'Значение 2.3',
          },
        ],
      },
    ],
  },
};
