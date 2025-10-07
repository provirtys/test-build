import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { BoxTemplateFormProps } from './BoxTemplateForm.types';
import BoxTemplateForm from './BoxTemplateForm.vue';

type Story = StoryObj<typeof BoxTemplateForm>;

const modes: Record<NonNullable<BoxTemplateFormProps['mode']>, string> = {
  new: 'Создание',
  edit: 'Изменение',
};

const meta: Meta<typeof BoxTemplateForm> = {
  component: BoxTemplateForm,
  argTypes: {
    box: {
      description: 'Изначальные данные для формы',
    },
    mode: {
      description: 'Режим создания/изменения',
      options: Object.keys(modes),
      control: {
        type: 'radio',
        labels: modes,
      },
    },
  },
  args: {
    box: {},
    mode: 'new',
    onSubmit: (data) => {
      console.log('Данные формы:', data);
    },
  },
};

export default meta;

export const New: Story = {};

export const Edit: Story = {
  args: {
    box: {
      id: '1234567890',
      name: 'Шаблон упаковки 1',
      x: 4,
      y: 2,
      layers: 5,
    },
    mode: 'edit',
  },
};
