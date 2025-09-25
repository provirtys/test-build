import { VButton } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify, QMenu } from 'quasar';
import VList from './VList.vue';

type Story = StoryObj<typeof VList>;

/** Компонент меню. Используется в кнопке. Выводит список элементов, при нажатии на которые срабатывает callback */
const meta: Meta<typeof VList> = {
  component: VList,
  argTypes: {
    items: {
      description: 'Элементы списка',
    },
  },
  args: {
    items: [
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
    ],
  },
};

export default meta;

export const Standard: Story = {};

export const ExampleWithButton: Story = {
  render: (args) => ({
    components: { VButton, VList, QMenu },
    setup() {
      return {
        args,
      };
    },
    template: `
      <v-button height="xs">
        Открыть меню
        <template #menu>
          <q-menu>
            <v-list :items="args.items"/>
          </q-menu>
        </template>
      </v-button>`,
  }),
};
