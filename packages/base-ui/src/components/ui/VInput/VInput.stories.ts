import { VInput } from '@base';
import type { QInputProps } from 'quasar';
import { expect, userEvent, waitFor } from 'storybook/test';
import { computed, ref, watch } from 'vue';
import type { Variant } from '@/components/ui/VInput/VInput.types';
import type { ExtendedMeta, ExtendedStory } from '@/types/story';
import { sleep } from '@/utils/sleep';

type AdditionalArgs = {
  variant?: Variant;
};

type Meta = ExtendedMeta<typeof VInput, AdditionalArgs>;
type Story = ExtendedStory<typeof VInput, AdditionalArgs>;

const variants: Record<Variant, string> = {
  standard: 'Обычный',
  outlined: 'С границами',
  filled: 'Заполненный',
};

const types: Partial<Record<NonNullable<QInputProps['type']>, string>> = {
  text: 'Текст',
  number: 'Число',
  textarea: 'Textarea',
  password: 'Пароль',
  date: 'Дата',
  time: 'Время',
  'datetime-local': 'Дата-время',
};

/** Компонент input, который в своей основе использует q-input, но с некоторыми брендовыми изменениями. Можно передавать все пропсы, которые принимает базовый компонент q-input. */
const meta: Meta = {
  component: VInput,
  argTypes: {
    type: {
      description: 'Тип поля ввода',
      options: Object.keys(types),
      control: {
        type: 'select',
        labels: types,
      },
      table: {
        category: 'props',
      },
    },
    variant: {
      description: 'Стиль поля ввода',
      options: Object.keys(variants),
      control: {
        type: 'select',
        labels: variants,
      },
      table: {
        category: 'props',
      },
    },
    label: {
      description: 'Название поля',
      table: {
        category: 'props',
      },
    },
    modelValue: {
      description: 'Значение поля',
      table: {
        category: 'props',
      },
    },
    placeholder: {
      description: 'Заглушка для поля',
    },
    labelOutside: {
      description: 'Название за границами поля ввода',
      options: [true, false],
    },
    required: {
      description: 'Обязательное поле',
      options: [true, false],
    },
    dense: {
      description: 'Занимать меньше пространства',
      options: [true, false],
      control: {
        type: 'boolean',
      },
      table: {
        category: 'props',
      },
    },
    xPadding: {
      description: 'Горизонтальный отступ',
    },
    labelOnBorder: {
      description: 'Отображать название на границе в `outlined` режиме',
    },
    displayNumberWithDelimiter: {
      description: 'Отображать значение в формате 1 000 000 (только цифры)',
    },
  },
  args: {
    type: 'text',
    variant: 'standard',
    label: '',
    modelValue: '',
    placeholder: '',
    labelOutside: false,
    required: false,
    dense: false,
    xPadding: '',
    labelOnBorder: true,
    displayNumberWithDelimiter: false,
  },
  render: (args: any) => ({
    components: { VInput },
    setup() {
      const modelValue = ref(args.modelValue);

      const inputProps = computed(() => {
        const baseProps = { ...args };

        baseProps.variant = undefined;

        args.variant;

        if (args.variant && args.variant !== variants.standard) {
          baseProps[args.variant] = true;
        }

        return baseProps;
      });

      watch(modelValue, (val) => {
        args.modelValue = val;
      });

      return {
        modelValue,
        inputProps,
        args,
      };
    },
    template: `
      <v-input v-model="modelValue" v-bind="inputProps"/>`,
  }),
};

export default meta;

export const Standard: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
  },
};

export const StandardDense: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    dense: true,
  },
};

export const StandardLabelOutside: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true,
  },
};

export const StandardLabelOutsideRequired: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true,
    required: true,
  },
};

export const Outlined: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
  },
};

export const OutlinedLabelOutside: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
  },
};

export const OutlinedLabelOnBorderRequired: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
    required: true,
  },
};

export const OutlinedLabelOutsideRequired: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
    required: true,
    labelOnBorder: false,
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
  },
};

export const FilledLabelOutside: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true,
  },
};

export const FilledLabelOutsideRequired: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true,
    required: true,
  },
};

export const WithInlinePadding: Story = {
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    xPadding: '12px',
    labelOutside: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
  },
  play: async () => {
    const inputEl = document.querySelector('.v-input input');
    const eyeEl = document.querySelector('.v-input__eye');
    const password = 'Очень_сильный_пароль';

    if (inputEl && eyeEl) {
      await userEvent.type(inputEl, password, { delay: 100 });
      await userEvent.click(eyeEl);

      await expect(inputEl).toHaveAttribute('type', 'text');
      await expect(inputEl).toHaveDisplayValue(password);

      await sleep(1000);

      await userEvent.click(eyeEl);

      await expect(inputEl).toHaveAttribute('type', 'password');
    }
  },
};

export const PasswordRequired: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    required: true,
  },
};

export const PasswordWithValidation: Story = {
  name: 'Password With Validation (min:length = 6)',
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    rules: [(val) => val.length >= 6 || 'Минимальная длина 6 символов'],
    lazyRules: true,
    required: true,
  },
  play: async ({ canvas }) => {
    const inputWrapperEl = document.querySelector('.v-input');
    const inputEl = canvas.getByPlaceholderText('Введите пароль');
    const errorClass = 'v-input--has-error';

    inputEl.focus();
    inputEl.blur();

    await waitFor(() => {
      expect(canvas.getByRole('alert')).toHaveTextContent('обязательное');
    });

    await userEvent.type(inputEl, '12345', { delay: 200 });

    inputEl.blur();

    await waitFor(() => {
      expect(canvas.getByRole('alert')).toHaveTextContent('Минимальная длина');
    });

    await userEvent.type(inputEl, '12345', { delay: 200 });

    inputEl.blur();

    await waitFor(() => {
      expect(inputWrapperEl).not.toHaveClass(errorClass);
    });
  },
};

export const Textarea: Story = {
  args: {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение',
  },
};

export const TextareaRequired: Story = {
  args: {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение',
    required: true,
  },
};

export const NumberWithThousandsDelimiter: Story = {
  args: {
    displayNumberWithDelimiter: true,
    modelValue: '123456789',
  },
};

export const WithCounter: Story = {
  args: {
    outlined: true,
    counter: true,
    maxlength: 120,
  },
};
