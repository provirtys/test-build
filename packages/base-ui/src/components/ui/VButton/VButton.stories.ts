import { computed } from 'vue';
import type { Color, Height, IconPosition, TextAlignment } from '@/components/ui/VButton/VButton.types';
import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@/types/story';
import { VButton } from './index';

type AdditionalArgs = {
  text?: string;
};

type Meta = ExtendedMeta<typeof VButton, AdditionalArgs>;
type Args = ExtendedArgs<typeof VButton, AdditionalArgs>;
type Story = ExtendedStory<typeof VButton, AdditionalArgs>;

//Цвет кнопки
const colors: Record<Color, string> = {
  primary: 'Основной',
  secondary: 'Второстепенный',
  plane: 'Плоский',
  outline: 'С границей',
  red: 'Красная',
};

//Выравнивание текста
const textAlignments: Record<TextAlignment, string> = {
  left: 'Слева',
  center: 'По центру',
  right: 'Справа',
};

//Высота кнопки
const heights: Record<Height, string> = {
  lg: 'Большой',
  md: 'Средний',
  sm: 'Маленький',
  xs: 'Очень маленький',
  xxs: 'Крохотный',
};

//Позиция иконки
const iconPositions: Record<IconPosition | 'empty', string> = {
  empty: 'Без иконки',
  left: 'Слева',
  right: 'Справа',
};

//Названия иконок
const bad = 'bad';
const arrow = 'arrow';
const aggregation = 'aggregation';
const finishAggregation = 'finish-aggregation';
const barcode = 'barcode';
const dataMatrix = 'data-matrix';
const restart = 'restart';

const iconNames = {
  bad,
  arrow,
  aggregation,
  finishAggregation,
  barcode,
  dataMatrix,
  restart,
};

/** Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки и её расположением */
const meta: Meta = {
  component: VButton,
  argTypes: {
    color: {
      description: 'Цвет кнопки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    text: {
      description: 'Текст кнопки',
    },
    textAlignment: {
      description: 'Положение текста',
      options: Object.keys(textAlignments),
      control: {
        type: 'select',
        labels: textAlignments,
      },
    },
    isDisabled: {
      description: 'Неактивное состояние',
      options: [true, false],
      control: { type: 'boolean' },
    },
    height: {
      description: 'Размер кнопки',
      options: Object.keys(heights),
      control: {
        type: 'select',
        labels: heights,
      },
    },
    isRounded: {
      description: 'Скругленные края',
      options: [true, false],
      control: { type: 'boolean' },
    },
    icon: {
      description: 'Имя иконки (название файла из папки с иконками без расширения)',
      options: Object.keys(iconNames),
      mapping: iconNames,
      control: {
        type: 'select',
        labels: iconNames,
      },
    },
    iconPosition: {
      description: 'Расположение иконки',
      options: Object.keys(iconPositions),
      mapping: location,
      control: {
        type: 'select',
        labels: iconPositions,
      },
    },
    iconSize: {
      description: 'Размер иконки',
      control: 'number',
    },
    fitWidth: {
      description: 'Отменить растягивание кнопки',
      options: [true, false],
      control: { type: 'boolean' },
    },
    once: {
      description: 'Кнопка срабатывает один раз, после чего становится disable, и иконка меняется на галочку',
      options: [true, false],
      control: { type: 'boolean' },
    },
    enableHold: {
      description: 'Удерживание кнопки с прогресс баром',
      options: [true, false],
      control: { type: 'boolean' },
    },
    default: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: 'primary',
    text: 'Кнопка',
    textAlignment: 'center',
    isDisabled: false,
    isRounded: true,
    icon: '',
    iconPosition: undefined,
    iconSize: 30,
    fitWidth: false,
    once: false,
    enableHold: false,
  },
  render: (args: Args) => ({
    components: { VButton },
    setup() {
      const bindingArgs = computed(() => {
        const { text, ...restArgs } = args;
        return restArgs;
      });

      const text = computed(() => args.text);

      return {
        bindingArgs,
        text,
      };
    },
    template: `
      <v-button v-bind="bindingArgs">{{ text }}</v-button>`,
  }),
};

export default meta;

export const Primary: Story = {
  args: {
    text: 'Кнопка 1',
  },
};

export const Test: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Вторичный вариант',
    color: 'secondary',
  },
};

export const Plane: Story = {
  args: {
    text: 'Вариант без границы и заднего фона',
    color: 'plane',
  },
};

export const Outline: Story = {
  args: {
    text: 'Вариант с границами',
    color: 'outline',
  },
};

export const Red: Story = {
  args: {
    text: 'Красная кнопка',
    color: 'red',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Неактивная кнопка',
    isDisabled: true,
  },
};

export const Square: Story = {
  args: {
    text: 'Не скругленная',
    isRounded: false,
  },
};

export const TextLeft: Story = {
  args: {
    text: 'Текст слева',
    textAlignment: 'left',
  },
};

export const TextRight: Story = {
  args: {
    text: 'Текст справа',
    textAlignment: 'right',
  },
};

export const Large: Story = {
  args: {
    text: 'Большая кнопка',
    height: 'lg',
  },
};

export const Small: Story = {
  args: {
    text: 'Маленькая кнопка',
    height: 'sm',
  },
};

export const ExtraSmall: Story = {
  args: {
    text: 'Очень маленькая кнопка',
    height: 'xs',
  },
};

export const ExtraExtraSmall: Story = {
  args: {
    text: 'Крохотная кнопка',
    height: 'xxs',
  },
};

export const IconLeftWithTextLeft: Story = {
  args: {
    text: 'Иконка слева текст слева',
    iconPosition: 'left',
    icon: 'bad',
    textAlignment: 'left',
  },
};

export const IconLeftWithTextCenter: Story = {
  args: {
    text: 'Иконка слева текст по центру',
    iconPosition: 'left',
    icon: 'bad',
  },
};

export const IconLeftWithTextRight: Story = {
  args: {
    text: 'Иконка слева текст справа',
    iconPosition: 'left',
    icon: 'bad',
    textAlignment: 'right',
  },
};

export const IconRightWithTextLeft: Story = {
  args: {
    text: 'Иконка справа текст слева',
    iconPosition: 'right',
    icon: 'bad',
    textAlignment: 'left',
  },
};

export const IconRightTextCenter: Story = {
  args: {},
};
IconRightTextCenter.args = {
  text: 'Иконка справа текст по центру',
  iconPosition: 'right',
  icon: 'bad',
};

export const IconRightWithTextCenter: Story = {
  args: {
    text: 'Иконка справа текст справа',
    iconPosition: 'right',
    icon: 'bad',
    textAlignment: 'right',
  },
};

export const Hold: Story = {
  args: {
    text: 'Кнопка с удержанием',
    enableHold: true,
  },
};

export const Once: Story = {
  args: {
    text: 'Однократное срабатывание',
    once: true,
  },
};

export const OnceWithHold: Story = {
  args: {
    text: 'Однократное срабатывание с удержанием',
    once: true,
    enableHold: true,
  },
};
