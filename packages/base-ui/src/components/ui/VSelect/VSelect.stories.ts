import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { QItem, QItemLabel, QItemSection } from 'quasar';
import { ref } from 'vue';
import { VSelect } from './index';

type Story = StoryObj<typeof VSelect>;

/** Компонент вывода меню опций. Является оберткой компоненте QSelect с дополнительной стилистикой и пропсами.*/
const meta: Meta<typeof VSelect> = {
  component: VSelect,
  argTypes: {
    label: {
      description: 'Текст внутри селекта',
      table: {
        category: 'props',
      },
    },
    outsideLabel: {
      description: 'Текст снаружи селекта',
    },
    required: {
      description: 'Показывать обязательность поля',
    },
    useSearch: {
      description: 'Использовать поиск по опциям',
    },
    options: {
      description:
        'Список опций. Каждая опция принимает те же параметры, что опция из QSelect, но с дополнениями: <br/>' +
        '— `label` - текст опции <br/> ' +
        '— `labelLight` - светлый текст опции (отображается после `label`, [пример](?path=/story/ui-vselect--light-label)) <br/> ' +
        '— `value` - значение опции <br/> ',
      table: {
        category: 'props',
      },
    },
    optionsDense: {
      description: 'Уменьшить размер опций',
      table: {
        category: 'props',
      },
    },
    labelColor: {
      table: {
        disable: true,
      },
    },
    outlined: {
      table: {
        disable: true,
      },
    },
    dense: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: 'Выберите опцию',
    outsideLabel: '',
    useSearch: false,
    required: false,
    staticLabel: false,
    options: [
      { label: 'Опция 1', value: 'opt1' },
      { label: 'Опция 2', value: 'opt2' },
      { label: 'Опция 3', value: 'opt3' },
      { label: 'Опция 4', value: 'opt4' },
      { label: 'Опция 5', value: 'opt5' },
      { label: 'Опция 6', value: 'opt6' },
      { label: 'Опция 7', value: 'opt7' },
      { label: 'Опция 8', value: 'opt8' },
      { label: 'Опция 9', value: 'opt9' },
      { label: 'Опция 10', value: 'opt10' },
      { label: 'Опция 11', value: 'opt11' },
      { label: 'Опция 12', value: 'opt12' },
      { label: 'Опция 13', value: 'opt13' },
      { label: 'Опция 14', value: 'opt14' },
      { label: 'Опция 15', value: 'opt15' },
      { label: 'Опция 16', value: 'opt16' },
      { label: 'Опция 17', value: 'opt17' },
      { label: 'Опция 18', value: 'opt18' },
      { label: 'Опция 19', value: 'opt19' },
      { label: 'Опция 20', value: 'opt20' },
    ],
    optionsDense: false,
  },
  render: (args) => ({
    components: { VSelect },
    setup() {
      const selectValue = ref();
      return {
        args,
        selectValue,
      };
    },
    template: `
      <v-select v-bind="args" v-model="selectValue"/>`,
  }),
};

export default meta;

export const Standard: Story = {
  args: {},
};

export const OptionsDense: Story = {
  args: {
    optionsDense: true,
  },
};

export const LabelOutside: Story = {
  args: {
    outsideLabel: 'GTIN',
  },
};

export const RequiredWithLabelOutside: Story = {
  args: {
    outsideLabel: 'GTIN',
    required: true,
  },
};

export const WithSearch: Story = {
  args: {
    useSearch: true,
  },
};

export const StaticLabel: Story = {
  args: {
    staticLabel: true,
  },
};

export const LightLabel: Story = {
  args: {
    options: [
      {
        label: '029000000001381',
        labelLight: 'Вода минеральная 0.3 л.',
        value: 'opt1',
      },
      {
        label: '029000000001382',
        labelLight: 'Вода минеральная 0.5 л.',
        value: 'opt2',
      },
      {
        label: '029000000001383',
        labelLight: 'Вода минеральная 1 л.',
        value: 'opt3',
      },
      {
        label: '029000000001384',
        labelLight: 'Вода минеральная 2 л.',
        value: 'opt4',
      },
      {
        label: '029000000001385',
        labelLight: 'Вода минеральная 5 л.',
        value: 'opt5',
      },
    ],
  },
  render: (args) => ({
    components: { VSelect, QItem, QItemSection, QItemLabel },
    setup() {
      const selectValue = ref();
      return {
        args,
        selectValue,
      };
    },
    template: `
      <div id="light-label">
        <v-select v-bind="args" v-model="selectValue"/>
        ,
      </div>`,
  }),
};
