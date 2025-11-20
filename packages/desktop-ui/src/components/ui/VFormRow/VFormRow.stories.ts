import { VInput } from '@integrity/base-ui';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VFormRow from './VFormRow.vue';

type Story = StoryObj<typeof VFormRow>;

/** Компонент для вывода полей формы в одной строке в несколько равных колонок */
const meta: Meta<typeof VFormRow> = {
  component: VFormRow,
  argTypes: {
    columns: {
      description: 'Количество колонок',
    },
  },
  args: {
    columns: 1,
  },
  render: (args) => ({
    components: { VFormRow, VInput },
    setup() {
      return {
        args,
      };
    },
    template: `
      <v-form-row :columns="args.columns">
        <v-input v-for="(_, key) in Array.from({length:args.columns})"
                 :key="key"
                 outlined
                 :label="'Поле ввода ' + (key + 1)"/>
      </v-form-row>
    `,
  }),
};

export default meta;

export const OneColumn: Story = {};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};
