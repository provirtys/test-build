import { Loading } from '@base';
import type { Meta } from '@storybook/vue3-vite';

/** Loading component with customizable massage*/
const meta: Meta<typeof Loading> = {
  component: Loading,
  argTypes: {
    loadingType: {
      description: 'Тип загрузки',
      options: ['loading', 'photo', 'connection', 'check', 'internet_false', 'try_again', 'retry'],
      control: { type: 'select' },
    },
  },
};
export default meta;

/** Происходит загрузка в базу*/
export const Primary = {
  args: {
    loadingType: 'loading',
  },
};
/** Нет интернет-соединения*/
export const InternetFalse = {
  args: {
    loadingType: 'internet_false',
  },
};

/** Идет обработка фотографии*/
export const PhotoProcessing = {
  args: {
    loadingType: 'photo',
  },
};
