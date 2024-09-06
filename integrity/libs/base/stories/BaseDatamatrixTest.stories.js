import BaseDatamatrixTest from '../components/BaseDatamatrixTest.vue';

/** Компонент Datamatrix код. */
/** Цвет текста и фон кода могут меняться в зависимости от цвета фона на выбранной странице. */
/** При изменении параметров uuid, name, isBackgroundDark нужно нажать remount component для обновления кода.*/

export default {
  title: 'BaseDatamatrixTest',
  component: BaseDatamatrixTest,
  tags: ['autodocs'],
  argTypes: {
    isBackgroundDark: {
      description: 'Фон на странице темный?',
    },
    uuid: {
      description: 'Строка для генерации кода',
    },
    name: {
      description: 'Строка для генерации кода',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f8f9fb' },
      ],
    },
  },
};
/** Datamatrix код на светлом фоне страницы */
export const PrimaryLight = {
  args: {
    uuid: 'testing',
    name: 'testing',
    isBackgroundDark: false,
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f8f9fb' },
      ],
    },
  },
};

/** Datamatrix код на черном фоне страницы*/
export const PrimaryDark = {
  args: {
    uuid: 'test',
    name: 'test',
    isBackgroundDark: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f8f9fb' },
      ],
    },
  },
};
