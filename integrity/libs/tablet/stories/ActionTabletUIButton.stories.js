import ActionTabletUIButton from '../components/ActionTabletUIButton.vue';

// Расположение иконки
const empty = '';
const right = 'right';
const left = 'left';

// Виды кнопок
const primary = 'primary';
const secondary = 'secondary';
const plane = 'plane';
const outline = 'outline';

// Размеры кнопки
const large = 'large';
const medium = 'medium';
const small = 'small';
const extraSmall = 'extra-small';

const location = { right, left, empty };
const colors = { primary, secondary, plane, outline };
const sizes = { large, medium, small, extraSmall };

/** Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки. Если в кнопке есть иконка, то текст выравнивается не по центру, а по левому краю, иконка
 * располагается справа. */
export default {
  title: 'Tablet/ActionTabletUIButton',
  component: ActionTabletUIButton,
  tags: ['autodocs'],
  argTypes: {
    parameters: {
      backgrounds: {
        default: 'white',
      },
    },
    color: {
      description: 'Цвет кнопки.',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          plane: 'Plane',
          outline: 'Outline',
        },
      },
    },
    text: {
      description: 'Текст кнопки.',
    },
    isDisabled: {
      description: 'Неактивное состояние.',
      options: [true, false],
      control: { type: 'radio' },
    },
    height: {
      description: 'Размеры кнопки.',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          large: 'Large (L)',
          medium: 'Medium (M)',
          small: 'Small (S)',
          extraSmall: 'Extra small (XS)',
        },
      },
    },
    isRadius: {
      description: 'Скругление углов.',
      options: [true, false],
      control: { type: 'radio' },
    },
    locationIcon: {
      description: 'Расположение иконки.',
      options: Object.keys(location),
      mapping: location,
      control: {
        type: 'radio',
        labels: {
          empty: 'Без иконки',
          left: 'left',
          right: 'right',
        },
      },
    },
  },
};

export const Primary = {
  args: {
    text: 'Начать маркировку',
    height: medium,
    isDisabled: false,
    isRadius: true,
    locationIcon: 'right',
  },
};

export const Secondary = {
  args: {
    text: 'Начать маркировку',
    height: medium,
    isDisabled: false,
    color: 'secondary',
    isRadius: true,
    locationIcon: 'right',
  },
};

export const Plane = {
  args: {
    text: 'Начать маркировку',
    height: medium,
    isDisabled: false,
    color: 'plane',
    isRadius: true,
    locationIcon: 'right',
  },
};

export const Outline = {
  args: {
    text: 'Начать маркировку',
    height: medium,
    isDisabled: false,
    color: 'outline',
    isRadius: true,
    locationIcon: 'right',
  },
};
