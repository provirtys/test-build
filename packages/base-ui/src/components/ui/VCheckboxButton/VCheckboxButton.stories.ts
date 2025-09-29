import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import { VCheckboxButton } from './index';
import type { Height } from './VCheckboxButton.types';

type Story = StoryObj<typeof VCheckboxButton>;

const heights: Record<Height, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
  xs: 'Очень маленький',
};

//Названия иконок
const none = '';
const qr = 'qr';
const aggregation = 'aggregation';
const finishAggregation = 'finish-aggregation';
const barCode = 'barcode';
const dataMatrix = 'data-matrix';
const done = 'done';
const iconNames = { none, qr, aggregation, finishAggregation, barCode, dataMatrix, done };

const meta: Meta<typeof VCheckboxButton> = {
  component: VCheckboxButton,
  argTypes: {
    label: {
      description: 'Текст кнопки',
    },
    modelValue: {
      description: 'Выбранное значение',
      options: [true, false],
    },
    iconName: {
      description: 'Имя иконки (название файла из папки с иконками без расширения)',
      options: Object.keys(iconNames),
      mapping: iconNames,
      control: {
        type: 'select',
        labels: {
          ...iconNames,
          none: 'Нет',
        },
      },
    },
    isPlane: {
      description: 'Без границ',
      options: [true, false],
    },
    height: {
      description: 'Размер элемента',
      options: Object.keys(heights),
      control: {
        type: 'select',
        labels: heights,
      },
    },
    isDisabled: {
      description: 'Активность чекбокса',
      options: [true, false],
    },
    border: {
      description: 'Радиус границы',
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
  args: {
    modelValue: false,
    label: 'Checkbox',
    height: 'lg',
    iconName: '',
    isPlane: false,
    isDisabled: false,
    border: '8px',
  },
  render: (args) => ({
    components: { VCheckboxButton },
    setup() {
      const checkboxValue = ref(args.modelValue);
      const bindingArgs = computed(() => {
        const { modelValue, ...restArgs } = args;

        return restArgs;
      });

      return {
        checkboxValue,
        bindingArgs,
      };
    },
    template: `<v-checkbox-button v-model="checkboxValue" v-bind="bindingArgs"/>`,
  }),
};

export default meta;

export const Standard: Story = {};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const WithIcon: Story = {
  args: {
    iconName: qr,
  },
};

export const Plane: Story = {
  args: {
    isPlane: true,
  },
};

export const MediumHeight: Story = {
  args: {
    height: 'md',
  },
};

export const SmallHeight: Story = {
  args: {
    height: 'sm',
  },
};

export const ExtraSmallHeight: Story = {
  args: {
    height: 'xs',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
