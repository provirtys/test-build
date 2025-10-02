import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import { ref } from 'vue';
import type { VPaginationNavigateData } from './VPagination.types';
import VPagination from './VPagination.vue';

type Story = StoryObj<typeof VPagination>;

const meta: Meta<typeof VPagination> = {
  component: VPagination,
  argTypes: {
    modelValue: {
      description:
        'Объект с пагинацией: <br/>' +
        '`page` — текущая страница<br/>' +
        '`totalEl` — общее количество элементов<br/>' +
        '`elPerPage` — кол-во элементов на странице<br/>',
    },
  },
  args: {
    modelValue: {
      page: 1,
      totalEl: 20,
      elPerPage: 3,
    },
  },
  render: (args) => ({
    components: { VPagination },
    setup() {
      const pagination = ref(args.modelValue);

      const paginationHandler = (data: VPaginationNavigateData) => {
        if (pagination.value) {
          pagination.value.page = data.page;
        }
        switch (data.type) {
          case 'prev':
            Notify.create({
              message: 'Запрос на предыдущую страницу',
            });
            break;
          case 'next':
            Notify.create({
              message: 'Запрос на следующую страницу',
            });
            break;
          case 'first':
            Notify.create({
              message: 'Запрос на первую страницу',
            });
            break;
          case 'last':
            Notify.create({
              message: 'Запрос на последнюю страницу',
            });
            break;
        }
      };

      return {
        pagination,
        paginationHandler,
      };
    },
    template: `
      <v-pagination v-model="pagination" @navigate="paginationHandler"/>`,
  }),
};

export default meta;

export const Standard: Story = {};

export const OnePage: Story = {
  args: {
    modelValue: {
      page: 1,
      totalEl: 6,
      elPerPage: 6,
    },
  },
};
