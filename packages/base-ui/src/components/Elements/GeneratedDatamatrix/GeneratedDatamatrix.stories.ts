import { GeneratedDatamatrix } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';

type Story = StoryObj<typeof GeneratedDatamatrix>;

/** Компонент для генерации Datamatrix изображения на основе получаемого сообщения. Можно менять размер изображения и переключать светлый/темный режим. */
const meta: Meta<typeof GeneratedDatamatrix> = {
  component: GeneratedDatamatrix,
  argTypes: {
    data: {
      description: 'Сообщение для генерации',
    },
    size: {
      description: 'Размер изображения',
      control: {
        type: 'number',
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
    data: undefined,
    size: 180,
    dark: false,
  },
  render: (args) => ({
    components: { GeneratedDatamatrix },
    setup() {
      const componentKey = computed(() => JSON.stringify(args.data) + args.dark);
      return { args, componentKey };
    },
    template: `
      <generated-datamatrix :key="componentKey" :data="args.data" :size="args.size" :dark="args.dark"/>`,
  }),
};
export default meta;

export const Standard: Story = {
  args: {
    data: {
      name: 'Вода Артезианская 1 л.',
      stackSize: 6,
      palletSize: 100,
    },
  },
};

export const DarkMode: Story = {
  args: {
    data: {
      name: 'Вода Артезианская 1 л.',
      stackSize: 6,
      palletSize: 100,
    },
    dark: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
