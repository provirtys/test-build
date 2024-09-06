import Checkbox from '../../components/redesign/Checkbox.vue';

// Размеры кнопки
const large = 'large';
const medium = 'medium';
const small = 'small';
const extraSmall = 'extra-small';

const sizes = { large, medium, small, extraSmall };

export default {
  title: 'TabletUI-redesign/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    parameters: {
      backgrounds: {
        default: 'white',
        values: [
          { name: 'dark', value: '#242a2b' },
          { name: 'white', value: '#ffffff' },
          { name: 'light', value: '#ededed' },
          { name: 'light-gray', value: '#f1f1f1' },
        ],
      },
    },
    buttonText: {
      description: 'Текст кнопки',
    },
    isIcon: {
      description: 'Варианты С иконкой/Без иконки',
      options: [true, false],
      control: { type: 'radio' },
    },
    isActive: {
      description: 'Выбранное значение',
      options: [true, false],
      control: { type: 'radio' },
    },
    isPlane: {
      description: 'Вид Plane',
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
  },
};

export const Primary = {
  args: {
    isIcon: true,
    isActive: false,
    isPlane: false,
    height: 'large',
    buttonText: 'Checkbox',
  },
};
export const SelectedValue = {
  args: {
    isIcon: true,
    isActive: true,
    isPlane: false,
    height: 'large',
    buttonText: 'Checkbox',
  },
};
export const Default = {
  args: {
    isIcon: false,
    isActive: false,
    isPlane: false,
    height: 'large',
    buttonText: 'Checkbox',
  },
};
export const Plane = {
  args: {
    isIcon: false,
    isActive: false,
    isPlane: true,
    height: 'large',
    buttonText: 'Checkbox',
  },
};
