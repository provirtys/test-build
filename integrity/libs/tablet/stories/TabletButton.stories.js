import TabletButton from '../components/TabletButton.vue';
import aggregationIcon from '../assets/images/aggregation.svg';
import badIcon from '../assets/images/bad.svg';
import printIcon from '../assets/images/print.svg';
import restartIcon from '../assets/images/restart.svg';
import scanIcon from '../assets/images/scan.svg';

const empty = '';
const red = 'red';
const dark = 'dark';
const gray = 'gray';
const lightGray = 'light-gray';
const medium = 'medium';
const large = 'large';
const icons = {
  empty,
  aggregationIcon,
  badIcon,
  printIcon,
  restartIcon,
  scanIcon,
};
const colors = { red, dark, gray, lightGray };
const sizes = { medium, large };

/** Компонент кнопки, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки. Если в кнопке есть иконка, то текст выравнивается не по центру, а по левому краю, иконка
 * располагается справа. */
export default {
  title: 'Tablet/tabletButton',
  component: TabletButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Цвет кнопки.',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          red: 'Красный',
          dark: 'Темный',
          gray: 'Серый',
          lightGray: 'Светло-серый',
        },
      },
    },
    icon: {
      description: 'Иконка.',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          empty: 'Без иконки',
          aggregationIcon: 'Агрегация',
          badIcon: 'Брак',
          printIcon: 'Печать',
          restartIcon: 'Повторить',
          scanIcon: 'Сканировать',
        },
      },
    },
    text: {
      description: 'Текст кнопки.',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    height: {
      description: 'Размер кнопки.',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          medium: 'Стандартный',
          large: 'Большой',
        },
      },
    },
  },
};

export const Print = {
  args: {
    text: 'Начать печать',
    icon: printIcon,
    height: medium,
    isDisabled: false,
  },
};

export const PrintDisabled = {
  args: {
    text: 'Начать печать',
    icon: printIcon,
    height: medium,
    isDisabled: true,
  },
};

export const RestartMarking = {
  args: {
    text: 'Повторить маркировку',
    icon: restartIcon,
  },
};

export const Bad = {
  args: {
    text: 'Брак',
    icon: badIcon,
    color: 'gray',
  },
};

export const Scan = {
  args: {
    text: 'Сканировать',
    icon: scanIcon,
  },
};

export const Aggregation = {
  args: {
    text: 'Начать агрегацию',
    icon: aggregationIcon,
    color: 'dark',
  },
};
