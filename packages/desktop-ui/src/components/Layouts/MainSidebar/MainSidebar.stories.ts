import type { ExtendedArgs } from '@integrity/base-ui/src/types/story';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { sidebarItems } from '@/mocks/layout';
import type { MainSidebarItem } from './MainSidebar.types';
import MainSidebar from './MainSidebar.vue';

type Story = StoryObj<typeof MainSidebar>;
type Args = ExtendedArgs<typeof MainSidebar>;

/**
 * Компонент сайдбара приложения. Содержит в себе элементы навигации, список с информацией о приложении (например, лицензия и поддержка) и логотип компании. Может принимать компактный вид.
 */
const meta: Meta<typeof MainSidebar> = {
  component: MainSidebar,
  argTypes: {
    items: {
      description:
        'Массив элементов для вывода. <br/> ' +
        'Каждый элемент содержит в себе: <br/>' +
        '`label` — заголовок <br/>' +
        '`icon` — имя иконки из пакета `@integrity/icons` <br/>' +
        '`handler` — функция обработчик нажатия <br/>' +
        '`active` — выделять пункт как активный <br/>' +
        '`notificationsCount` — кол-во уведомлений в разделе <br/>',
    },
  },
  args: {
    items: [],
    bottomDescriptionList: [
      {
        term: 'Лицензия',
        definition: '23.04.2026',
      },
      {
        term: 'Поддержка',
        definition: '23.004.2026',
      },
    ],
  },
  render: (args: Args) => ({
    components: { MainSidebar },
    setup() {
      const items = ref<MainSidebarItem[]>(
        sidebarItems.map((item, idx) => ({
          ...item,
          handler: () => {
            activateItem(idx);
          },
          notificationsCount: idx % 2 ? +(Math.random() * 100 - 1 + 1).toFixed() : undefined,
        })),
      );

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
      <div style="height: 958px">
        <main-sidebar :items="items" :bottom-description-list="args.bottomDescriptionList"/>
      </div>`,
  }),
};

export default meta;

export const Default: Story = {
  args: {},
};
