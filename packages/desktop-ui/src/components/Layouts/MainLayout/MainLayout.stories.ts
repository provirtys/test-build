import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import { ref } from 'vue';
import { AppSidebar, VBreadcrumbs, type VBreadcrumbsItem } from '@';
import { sidebarItems as sidebarItemsMock } from '@/mocks/layout';
import MainLayout from './MainLayout.vue';

type Story = StoryObj<typeof MainLayout>;

/** Главный шаблон для приложения. Поддерживает слоты `sidebar`, `header`, `content` */
const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  argTypes: {
    sidebar: {
      description: 'Слот для сайдбара',
    },
    header: {
      description: 'Слот для верхней части приложения',
    },
    content: {
      description: 'Слот для контентной части приложения',
    },
  },
  render: () => ({
    components: { MainLayout, AppSidebar, VBreadcrumbs },
    setup() {
      const sidebarItems = ref(
        sidebarItemsMock.map((item, idx) => ({
          ...item,
          handler: () => {
            activateItem(idx);
          },
        })),
      );

      const headerItems = ref<VBreadcrumbsItem[]>([
        {
          label: 'Линии',
          handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт Линии' }),
        },
        {
          label: 'Линия 1',
          handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт Линия 1' }),
        },
        {
          label: 'Агрегация',
          handler: () => Notify.create({ type: 'info', message: 'Нажатие на пункт Агрегация' }),
        },
      ]);

      const activateItem = (id: number) => {
        sidebarItems.value.forEach((item, idx) => {
          item.active = idx === id;
        });
      };

      return {
        sidebarItems,
        headerItems,
      };
    },
    template: `
      <main-layout style="height: 958px">
        <template #sidebar>
          <app-sidebar :items="sidebarItems"/>
        </template>
        <template #header>
          <v-breadcrumbs :items="headerItems"/>
        </template>
        <template #content>
          <div class="flex flex-center full-height text-h5">
            Контент страницы
          </div>
        </template>
      </main-layout>
    `,
  }),
};

export default meta;

export const Standard: Story = {
  args: {
    // Значения для стори
  },
};
