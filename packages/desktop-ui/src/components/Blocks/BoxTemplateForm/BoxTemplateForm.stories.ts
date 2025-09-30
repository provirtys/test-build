import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { BoxTemplateFormProps, SelectFieldOptions } from './BoxTemplateForm.types';
import BoxTemplateForm from './BoxTemplateForm.vue';

type Story = StoryObj<typeof BoxTemplateForm>;

const inputOptions: SelectFieldOptions = {
  gtin: [
    {
      label: '029000000001381',
      labelLight: 'Вода минеральная 0.3 л.',
      value: 'gtin-1',
    },
    {
      label: '029000000001382',
      labelLight: 'Вода минеральная 0.5 л.',
      value: 'gtin-2',
    },
    {
      label: '029000000001383',
      labelLight: 'Вода минеральная 1 л.',
      value: 'gtin-3',
    },
    {
      label: '029000000001384',
      labelLight: 'Вода минеральная 1.5 л.',
      value: 'gtin-4',
    },
    {
      label: '029000000001385',
      labelLight: 'Вода минеральная 2 л.',
      value: 'gtin-5',
    },
    {
      label: '029000000001386',
      labelLight: 'Вода минеральная 5 л.',
      value: 'gtin-6',
    },
  ],
};

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
    options: {
      description: 'Набор опций для селектов',
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
    options: inputOptions,
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
      gtin: ['gtin-1', 'gtin-2', 'gtin-3', 'gtin-4'],
      x: 4,
      y: 2,
      layers: 5,
    },
    mode: 'edit',
  },
};
