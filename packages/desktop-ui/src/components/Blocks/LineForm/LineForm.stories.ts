import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LineForm from './LineForm.vue';

type Story = StoryObj<typeof LineForm>;

/** Компонент формы создания/редактирования линии */
const meta: Meta<typeof LineForm> = {
  component: LineForm,
  argTypes: {
    line: {
      description: 'Изначальные данные для формы',
    },
  },
  args: {
    onSubmit: (data) => {
      console.log('Данные формы:', data);
    },
  },
};

export default meta;

export const New: Story = {};

export const Edit: Story = {
  args: {
    line: {
      name: 'Линия 1',
      modules: [
        {
          name: 'Модуль 1',
          ip: '111.222.3.4',
        },
      ],
    },
  },
};
