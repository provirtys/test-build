import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import type { VRadioGroupSize, VRadioGroupWidth } from '@/components/ui/VRadioGroup/VRadioGroup.types';
import { VRadioGroup } from './index';

type Story = StoryObj<typeof VRadioGroup>;

const sizes: Record<VRadioGroupSize, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
  xs: 'Очень маленький',
};

const widths: Record<VRadioGroupWidth, string> = {
  auto: 'Автоматически',
  dense: 'В одну строку',
  full: 'На всего родителя',
};

/** Компонент для группировки радио кнопок. <br>
 * Можно задавать отображаемое название для группы, менять размеры кнопок и делать их в одну строку. <br>
 * Если нужна отдельная радио кнопка, то используй компонент [VRadio](/docs/ui-vradio--docs)*/
const meta: Meta<typeof VRadioGroup> = {
  component: VRadioGroup,
  argTypes: {
    label: {
      description: 'Текст группы кнопок',
    },
    options: {
      description: 'Опции для кнопок',
    },
    size: {
      description:
        'Размер кнопок <br> Поддерживаемые значения - <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>',
      options: Object.keys(sizes),
      control: {
        type: 'select',
        labels: sizes,
      },
    },
    width: {
      description: 'Ширина кнопок. ',
      options: Object.keys(widths),
      control: {
        type: 'select',
        labels: widths,
      },
    },
  },
  args: {
    label: '',
    options: [
      {
        val: 'option1',
        modelValue: 'option1',
        label: 'Опция 1',
      },
      {
        val: 'option2',
        modelValue: 'option2',
        label: 'Опция 2',
      },
      {
        val: 'option3',
        modelValue: 'option3',
        label: 'Опция 3',
      },
    ],
    modelValue: '',
    size: 'lg',
    width: 'auto',
    dark: false,
  },
  render: (args) => ({
    components: { VRadioGroup },
    setup() {
      const value = ref(args.modelValue);

      const bindingAttrs = computed(() => {
        const { modelValue, ...restArgs } = args;

        return restArgs;
      });

      return {
        bindingAttrs,
        value,
      };
    },
    template: `<v-radio-group v-model="value" v-bind="bindingAttrs" />`,
  }),
};

export default meta;

export const Standard: Story = {
  args: {
    label: 'Выберите значение',
  },
};

export const WithoutLabel: Story = {};

export const OneOption: Story = {
  args: {
    label: 'Одна опция',
    options: [
      {
        val: 'option1',
        modelValue: 'option1',
        label: 'Опция 1',
      },
    ],
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const ExtraSmallSize: Story = {
  args: {
    size: 'xs',
  },
};

export const Dark: Story = {
  args: {
    dark: true,
  },
};

export const Inline: Story = {
  args: {
    width: 'dense',
  },
};

export const FullWidth: Story = {
  args: {
    width: 'full',
  },
};
