import { base64ToUint8Array, uint8ArrayToFile } from '@integrity/base-ui/src/helpers/convert';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { sticker1Base64 } from '../../../mocks/stickers';
import type { BoxTemplateFormProps } from '../BoxTemplateForm';
import StickerTemplateForm from './StickerTemplateForm.vue';

type Story = StoryObj<typeof StickerTemplateForm>;

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
    mode: 'new',
    onSubmit: (data) => {
      console.log('Данные формы:', data);
    },
  },
  render: (args) => ({
    components: { StickerTemplateForm },
    setup() {
      const stickerData = args.sticker;

      const onSubmit = (data: any) => {
        console.log('Событие создания шаблона:', data);
      };

      return {
        stickerData,
        onSubmit,
      };
    },
    template: `
      <sticker-template-form :sticker="stickerData" @submit="onSubmit"/>`,
  }),
};

export default meta;

export const New: Story = {};

export const Edit: Story = {
  args: {
    sticker: {
      name: 'Шаблон этикетки 1',
      file: uint8ArrayToFile(base64ToUint8Array(sticker1Base64), 'testFile'),
    },
  },
};
