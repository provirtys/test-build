import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { BoxTemplateFormProps, SelectFieldOptions } from '../BoxTemplateForm/BoxTemplateForm.types';
import StickerTemplateForm from './StickerTemplateForm.vue';

type Story = StoryObj<typeof StickerTemplateForm>;

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

/** Компонент формы создания/редактирования шаблона этикетки */
const meta: Meta<typeof StickerTemplateForm> = {
  component: StickerTemplateForm,
  argTypes: {
    sticker: {
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
    sticker: {},
    options: inputOptions,
    mode: 'new',
    onSubmit: (data) => {
      console.log('Данные формы:', data);
    },
  },
  render: (args) => ({
    components: { StickerTemplateForm },
    setup() {
      const stickerData = args.sticker;
      const options = inputOptions;

      const onSubmit = (data: any) => {
        console.log('Событие создания шаблона:', data);
      };

      return {
        stickerData,
        options,
        onSubmit,
      };
    },
    template: `
      <sticker-template-form :sticker="stickerData" :options="options" @submit="onSubmit"/>`,
  }),
};

export default meta;

export const New: Story = {};

export const Edit: Story = {
  args: {
    sticker: {
      name: 'Шаблон этикетки 1',
      gtin: ['gtin-1', 'gtin-2', 'gtin-4'],
    },
  },
};
