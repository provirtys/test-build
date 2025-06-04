import Checkbox from '../../components/redesign/Checkbox.vue';

// Размеры кнопки
const large = 'large';
const medium = 'medium';
const small = 'small';
const extraSmall = 'extra-small';

//Названия иконок
const qr = 'qr';
const aggregation = 'aggregation';
const finishAggregation = 'finishAggregation';
const barCode = 'barCode';
const dataMatrix = 'dataMatrix';
const done = 'done';
const iconNames = { qr, aggregation, finishAggregation, barCode, dataMatrix, done };

const sizes = { large, medium, small, extraSmall };

export default {
  title: 'TabletUI-redesign/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Текст кнопки',
    },
    modelValue: {
      description: 'Выбранное значение',
      options: [true, false],
    },
    iconName: {
      description:
        'Имя иконки (название файла из папки с иконками без расширения)',
      options: Object.keys(iconNames),
      mapping: iconNames,
      control: {
        type: 'radio',
        labels: iconNames,
      },
    },
    isPlane: {
      description: 'Вид Plane',
      options: [true, false],
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
    isDisabled: {
      description: 'Активность чекбокса',
      options: [true, false],
    },
  },
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
};

export const Primary = {
  args: {
    modelValue: false,
    iconName: qr,
    isPlane: false,
    height: 'large',
    label: 'Checkbox',
    isDisabled: false,
  },
};
export const SelectedValue = {
  args: {
    modelValue: true,
    iconName: '',
    isPlane: false,
    height: 'large',
    label: 'Checkbox',
    isDisabled: false,
  },
};
export const Default = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: false,
    height: 'large',
    label: 'Checkbox',
    isDisabled: false,
  },
};
export const Plane = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: true,
    height: 'large',
    label: 'Checkbox',
    isDisabled: false,
  },
};

export const MediumHeight = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: false,
    height: 'medium',
    label: 'Checkbox',
    isDisabled: false,
  },
};

export const SmallHeight = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: false,
    height: 'small',
    label: 'Checkbox',
    isDisabled: false,
  },
};

export const ExtraSmallHeight = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: false,
    height: 'extra-small',
    label: 'Checkbox',
    isDisabled: false,
  },
};

export const WithIcon = {
  args: {
    modelValue: false,
    iconName: qr,
    isPlane: false,
    height: 'large',
    label: 'Checkbox',
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    modelValue: false,
    iconName: '',
    isPlane: false,
    height: 'large',
    label: 'Checkbox',
    isDisabled: true,
  },
};
