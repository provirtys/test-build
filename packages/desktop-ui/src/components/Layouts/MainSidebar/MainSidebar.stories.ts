import type { ExtendedArgs } from '@integrity/base-ui/src/types/story';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { sidebarItems } from '@/mocks/layout';
import MainSidebar from './MainSidebar.vue';

type Story = StoryObj<typeof MainSidebar>;
type Args = ExtendedArgs<typeof MainSidebar>;

/**
 * Компонент сайдбара приложения. Содержит в себе элементы навигации и логотип компании. Может принимать компактный вид.
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
        '`active` — выделять пункт как активный <br/>',
    },
  },
  args: {
    items: [],
  },
  render: (args: Args) => ({
    components: { MainSidebar },
    setup() {
      const items = ref(
        sidebarItems.map((item, idx) => ({
          ...item,
          handler: () => {
            activateItem(idx);
          },
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
        <main-sidebar :items="items"/>
      </div>`,
  }),
};

export default meta;

export const Default: Story = {
  args: {},
};
