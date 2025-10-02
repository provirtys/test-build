import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
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

      return {
        pagination,
      };
    },
    template: `
      <v-pagination v-model="pagination"/>`,
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
