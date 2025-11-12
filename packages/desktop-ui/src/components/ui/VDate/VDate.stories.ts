import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import VDate from './VDate.vue';

type Story = StoryObj<typeof VDate>;

/**
 * Компонент-обертка над QDate. Наследует все пропсы, слоты и эмиты от QDate.
 */
const meta: Meta<typeof VDate> = {
  component: VDate,
  argTypes: {
    mask: {
      table: {
        disable: true,
      },
    },
    locale: {
      table: {
        disable: true,
      },
    },
    minimal: {
      table: {
        disable: true,
      },
    },
    firstDayOfWeek: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => ({
    components: { VDate },
    setup() {
      const modelValue = ref(args.modelValue);
      const bindingProps = computed(() => {
        const { modelValue, ...restProps } = args;

        return restProps;
      });

      return {
        modelValue,
        bindingProps,
      };
    },
    template: `
      <v-date v-bind="bindingProps" v-model="modelValue"/>
      <div class="q-mt-md">
          modelValue: {{ modelValue }}
      </div>
    `,
  }),
};

export default meta;

export const Standard: Story = {};

export const CustomMask: Story = {
  args: {
    mask: 'YYYY_MM_DD',
  },
};

export const InitialValue: Story = {
  args: {
    modelValue: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    mask: 'DD.MM.YYYY',
  },
};
