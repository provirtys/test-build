import { VRadio } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import type { Size, Width } from '@/components/ui/VRadio/VRadio.types';

type Story = StoryObj<typeof VRadio>;

const sizes: Record<Size, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
  xs: 'Очень маленький',
};

const widths: Record<Width, string> = {
  auto: 'Автоматически',
  dense: 'Уменьшенный',
  full: 'На всего родителя',
};

/** Компонент радио кнопки. Можно менять подпись и размеры.<br>
 *  Чтобы создать группу радио кнопок, используй компонент [VRadioGroup](/docs/ui-vradiogroup--docs)<br> */
const meta: Meta<typeof VRadio> = {
  component: VRadio,
  argTypes: {
    label: {
      description: 'Подпись к элементу',
    },
    val: {
      description: 'Значение элемента',
    },
    size: {
      description:
        'Размер элемента. <br> Поддерживаемые значения - <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>',
      options: Object.keys(sizes),
      control: {
        type: 'select',
        labels: sizes,
      },
    },
    width: {
      description: 'Ширина элемента',
      options: Object.keys(widths),
      control: {
        type: 'select',
        labels: widths,
      },
    },
    dark: {
      description: 'Темный режим',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    val: 'option1',
    modelValue: '',
    label: 'Опция 1',
    size: 'lg',
    width: 'auto',
    dark: false,
  },
  render: (args) => ({
    components: { VRadio },
    setup() {
      const modelValue = ref('');

      const bindingAttrs = computed(() => {
        const { modelValue, ...restArgs } = args;

        return restArgs;
      });

      return {
        bindingAttrs,
        modelValue,
      };
    },
    template: `
      <v-radio v-model="modelValue" v-bind="bindingAttrs"/>`,
  }),
};

export default meta;

export const Standard: Story = {};

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

export const Dense: Story = {
  args: {
    width: 'dense',
  },
};

export const FullWidth: Story = {
  args: {
    width: 'full',
  },
};

export const Dark: Story = {
  args: {
    dark: true,
  },
};
