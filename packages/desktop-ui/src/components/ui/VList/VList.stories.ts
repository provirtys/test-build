import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify, QMenu } from 'quasar';
import { VButton } from '@';
import VList from './VList.vue';

type Story = StoryObj<typeof VList>;

const items = [
  {
    label: 'Пункт 1',
    icon: 'puzzle',
    handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт 1' }),
  },
  {
    label: 'Пункт 2',
    icon: 'aggregation',
    handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт 2' }),
  },
  {
    label: 'Пункт 3',
    icon: 'settings',
    handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт 3' }),
  },
];

/** Компонент меню. Используется в кнопке. Выводит список элементов, при нажатии на которые срабатывает callback */
const meta: Meta<typeof VList> = {
  component: VList,
  argTypes: {
    items: {
      description:
        'Элементы списка <br/>' +
        'Каждый элемент содержит: <br/>' +
        '`label` — текст<br/>' +
        '`icon` — имя иконки<br/>' +
        '`iconColor` — цвет иконки<br/>' +
        '`handler` — обработчик нажатиия на элемент<br/>' +
        '`topDivider` — отображать ли разделитель перед элементом<br/>',
    },
  },
  args: {
    items: items,
  },
};

export default meta;

export const Standard: Story = {};

export const IconColor: Story = {
  args: {
    items: items.map((item, idx) => ({
      ...item,
      iconColor: idx === items.length - 1 ? 'primary' : undefined,
    })),
  },
};

export const WithDivider: Story = {
  args: {
    items: items.map((item, idx) => ({
      ...item,
      topDivider: idx === items.length - 1,
    })),
  },
};

export const ExampleWithButton: Story = {
  render: (args) => ({
    components: { VButton, VList, QMenu },
    setup() {
      return {
        args,
      };
    },
    template: `
      <v-button>
        Открыть меню
        <template #menu>
          <q-menu>
            <v-list :items="args.items"/>
          </q-menu>
        </template>
      </v-button>`,
  }),
};
