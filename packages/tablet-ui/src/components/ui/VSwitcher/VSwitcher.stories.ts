import { sleep } from '@integrity/shared/utils';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, userEvent } from 'storybook/test';
import { computed, ref } from 'vue';
import { VSwitcher } from './index';

type Story = StoryObj<typeof VSwitcher>;

const options = [
  { label: 'Опция 1', value: 'left', iconName: 'aggregation' },
  { label: 'Опция 2', value: 'right', iconName: 'print' },
];

/** Компонент переключатель. Принимает в себя 2 опции, у которых настраивается выводимый текст и иконка. Можно растягивать компонент на всю доступную ширину, позиционировать контент, а также сделать компонент отключенным.  */
const meta: Meta<typeof VSwitcher> = {
  component: VSwitcher,
  argTypes: {
    modelValue: {
      description: 'Значение модели',
      table: {
        disable: true,
      },
    },
    disable: {
      description: 'Отключить изменение состояния',
    },
    align: {
      description: 'Позиционирование текста и иконки',
      options: ['left', 'center', 'right'],
      control: {
        type: 'radio',
        labels: {
          left: 'Слева',
          center: 'По центру',
          right: 'Справа',
        },
      },
    },
    spread: {
      description: 'Занимать всю доступную ширину',
    },
  },
  args: {
    options: options,
    disable: false,
    align: 'left',
    modelValue: 'left',
    spread: true,
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
  render: (args) => ({
    components: { VSwitcher },
    setup() {
      const modelValue = ref(args.modelValue);

      const bindingProps = computed(() => {
        const { modelValue, ...restArgs } = args;

        return restArgs;
      });

      return {
        modelValue,
        bindingProps,
      };
    },
    template: `<v-switcher v-model="modelValue" v-bind="bindingProps" />`,
  }),
};
export default meta;

export const Primary: Story = {
  play: async () => {
    const firstBtn = document.querySelector('.v-switcher>.q-btn:first-child');
    const secondBtn = document.querySelector('.v-switcher>.q-btn:not(.q-btn:first-child)');

    if (firstBtn && secondBtn) {
      await userEvent.click(firstBtn);
      await expect(firstBtn.getAttribute('aria-pressed'));
      await expect(!secondBtn.getAttribute('aria-pressed'));

      await sleep(1000);

      await userEvent.click(secondBtn);
      await expect(secondBtn.getAttribute('aria-pressed'));
      await expect(!firstBtn.getAttribute('aria-pressed'));

      await sleep(1000);

      await userEvent.click(firstBtn);
      await expect(firstBtn.getAttribute('aria-pressed'));
      await expect(!secondBtn.getAttribute('aria-pressed'));
    }
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
  },
};

export const AlignRight: Story = {
  args: {
    align: 'right',
  },
};

export const WithoutIcons: Story = {
  args: {
    options: options.map((option) => ({
      ...option,
      iconName: undefined,
    })),
  },
};

export const Disable: Story = {
  args: {
    options: options,
  },
};

export const NotSpread: Story = {
  args: {
    spread: false,
  },
};
