import { NumericRatio } from '@tablet';
import { computed } from 'vue';
import { VDescriptionList } from './index.js';

/**
 * Компонент для вывода списка элементов - ключ:значение. Поддерживает слоты для кастомного вывода значений.
 */
export default {
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

export const Standard = {};

export const Inline = {
  args: {
    inline: true,
  },
};

export const Light = {
  args: {
    isLight: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Centered = {
  args: {
    alignCenter: true,
  },
};

export const WithCustomSlot = (args) => ({
  components: { VDescriptionList, NumericRatio },
  setup() {
    const list = computed(() => [
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
    ]);
    const numbers = {
      primary: 0,
      secondary: 2,
      total: 4,
    };

    return {
      list,
      numbers,
    };
  },
  template: `
    <v-description-list :items="list" inline>
      <template #custom-slot>
        <numeric-ratio :value="numbers.primary" :secondary-value="numbers.secondary" :total="numbers.total"/>
      </template>
    </v-description-list>`,
});
