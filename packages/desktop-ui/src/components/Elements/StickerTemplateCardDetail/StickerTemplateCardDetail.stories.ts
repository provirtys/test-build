import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import { sticker1Base64, sticker2Base64, sticker3Base64, sticker4Base64 } from '../../../mocks/stickers';
import StickerTemplateCardDetail from './StickerTemplateCardDetail.vue';

type Story = StoryObj<typeof StickerTemplateCardDetail>;

/** Компонент для просмотра детальной информации по шаблону этикетки. Содержит название и изображение шаблона */
const meta: Meta<typeof StickerTemplateCardDetail> = {
  component: StickerTemplateCardDetail,
  argTypes: {
    name: {
      description: 'Название шаблона этикетки',
    },
    base64Image: {
      description: 'Изображение шаблона в формате Base64',
    },
  },
  args: {
    name: '',
    base64Image: '',
  },
  render: (args) => ({
    components: { StickerTemplateCardDetail },
    setup() {
      const onDelete = () => Notify.create({ message: 'Событие удаления' });
      const onEdit = () => Notify.create({ message: 'Событие изменения' });
      const onExport = () => Notify.create({ message: 'Событие экспорта' });

      return {
        args,
        onDelete,
        onEdit,
        onExport,
      };
    },
    template: `
      <sticker-template-card-detail
        v-bind="args"
        :name="args.name"
        :base64-image="args.base64Image"
        @delete="onDelete"
        @edit="onEdit"
        @export="onExport"/>`,
  }),
};

export default meta;

export const Sticker1: Story = {
  args: {
    name: 'Этикетка 1',
    base64Image: 'data:image/png;base64,' + sticker1Base64,
  },
};

export const Sticker2: Story = {
  args: {
    name: 'Этикетка 2',
    base64Image: 'data:image/png;base64,' + sticker2Base64,
  },
};

export const Sticker3: Story = {
  args: {
    name: 'Этикетка 3',
    base64Image: 'data:image/png;base64,' + sticker3Base64,
  },
};

export const Sticker4: Story = {
  args: {
    name: 'Этикетка 4',
    base64Image: 'data:image/png;base64,' + sticker4Base64,
  },
};
