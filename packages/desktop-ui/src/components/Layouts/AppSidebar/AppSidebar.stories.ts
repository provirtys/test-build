import type { ExtendedArgs } from '@integrity/base-ui/src/types/story';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import AppSidebar from './AppSidebar.vue';

type Story = StoryObj<typeof AppSidebar>;
type Args = ExtendedArgs<typeof AppSidebar>;

/**
 * Компонент сайдбара приложения. Содержит в себе элементы навигации и логотип компании. Может принимать компактный вид.
 */
const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
  argTypes: {
    items: {
      description:
        'Массив элементов для вывода. <br/> ' +
        'Каждый элемент содержит в себе: <br/>' +
        '`label` — заголовок <br/>' +
        '`icon` — имя иконки из пакета `@integrity/icons` <br/>' +
        '`handler` — функция обработчик нажатия <br/>' +
        '`active` — выделять пункт как активный <br/>',
    },
  },
  args: {
    items: [],
  },
  render: (args: Args) => ({
    components: { AppSidebar },
    setup() {
      const items = ref([
        {
          label: 'Задачи',
          icon: 'page-check',
          handler: () => {
            activateItem(0);
          },
        },
        {
          label: 'Линии',
          icon: 'water-pump',
          handler: () => {
            activateItem(1);
          },
        },
        {
          label: 'Шаблоны',
          icon: 'folder-special',
          handler: () => {
            activateItem(2);
          },
          active: true,
        },
        {
          label: 'Интеграции',
          icon: 'puzzle',
          handler: () => {
            activateItem(3);
          },
        },
        {
          label: 'Настройки',
          icon: 'settings-filled',
          handler: () => {
            activateItem(4);
          },
        },
      ]);

      const activateItem = (id: number) => {
        items.value.forEach((item, idx) => {
          item.active = idx === id;
        });
      };

      return {
        args,
        items,
      };
    },
    template: `
      <div class="sidebar-wrappper" style="height: 958px">
        <app-sidebar :items="items"/>
      </div>`,
  }),
};

export default meta;

export const Default: Story = {
  args: {},
};
