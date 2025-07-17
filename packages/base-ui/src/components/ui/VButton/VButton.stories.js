import { VButton } from '@base';
import { sleep } from '@base/utils/sleep.js';
import { expect, userEvent, waitFor } from 'storybook/test';
import { computed } from 'vue';

// Расположение иконки
const empty = '';
const right = 'right';
const left = 'left';

// Виды кнопок
const primary = 'primary';
const secondary = 'secondary';
const plane = 'plane';
const outline = 'outline';
const red = 'red';

// Размеры кнопки
const lg = 'lg';
const md = 'md';
const sm = 'sm';
const xs = 'xs';

const center = 'center';

//Названия иконок
const bad = 'bad';
const arrow = 'arrow';
const aggregation = 'aggregation';
const finishAggregation = 'finish-aggregation';
const barcode = 'barcode';
const dataMatrix = 'data-matrix';
const restart = 'restart';

const location = { left, right, empty };
const colors = { primary, secondary, plane, outline, red };
const sizes = { lg, md, sm, xs };
const textAlignments = { left, center, right };
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
export default {
  component: VButton,
  argTypes: {
    color: {
      description: 'Цвет кнопки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: {
          primary: 'Основной',
          secondary: 'Второстепенный',
          plane: 'Плоский',
          outline: 'С границей',
          red: 'Красная',
        },
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
        labels: {
          left: 'Слева',
          center: 'По центру',
          right: 'Справа',
        },
      },
    },
    isDisabled: {
      description: 'Неактивное состояние',
      options: [true, false],
      control: { type: 'boolean' },
    },
    height: {
      description: 'Размер кнопки',
      options: Object.keys(sizes),
      control: {
        type: 'select',
        labels: {
          lg: 'Большой',
          md: 'Средний',
          sm: 'Маленький',
          xs: 'Очень маленький',
        },
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
    locationIcon: {
      description: 'Расположение иконки',
      options: Object.keys(location),
      mapping: location,
      control: {
        type: 'select',
        labels: {
          empty: 'Без иконки',
          left: 'Слева',
          right: 'Справа',
        },
      },
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
  },
  args: {
    color: primary,
    height: md,
    text: 'Кнопка',
    textAlignment: center,
    isDisabled: false,
    isRounded: true,
    icon: '',
    locationIcon: empty,
    fitWidth: false,
    once: false,
    enableHold: false,
  },
};

const BaseComponent = (args) => ({
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
  template: `<v-button v-bind="bindingArgs">{{ text }}</v-button>`,
});

export const Primary = BaseComponent.bind({});
Primary.args = {
  text: 'Кнопка',
};

export const Secondary = BaseComponent.bind({});
Secondary.args = {
  text: 'Вторичный вариант',
  color: secondary,
};

export const Plane = BaseComponent.bind({});
Plane.args = {
  text: 'Вариант без границы и заднего фона',
  color: plane,
};

export const Outline = BaseComponent.bind({});
Outline.args = {
  text: 'Вариант с границами',
  color: outline,
};

export const Red = BaseComponent.bind({});
Red.args = {
  text: 'Красная кнопка',
  color: red,
};

export const Disabled = BaseComponent.bind({});
Disabled.args = {
  text: 'Неактивная кнопка',
  isDisabled: true,
};

export const Square = BaseComponent.bind({});
Square.args = {
  text: 'Не скругленная',
  isRounded: false,
};

export const TextLeft = BaseComponent.bind({});
TextLeft.args = {
  text: 'Текст слева',
  textAlignment: 'left',
};

export const TextRight = BaseComponent.bind({});
TextRight.args = {
  text: 'Текст справа',
  textAlignment: 'right',
};

export const Large = BaseComponent.bind({});
Large.args = {
  text: 'Большая кнопка',
  height: lg,
};

export const Small = BaseComponent.bind({});
Small.args = {
  text: 'Маленькая кнопка',
  height: sm,
};

export const ExtraSmall = BaseComponent.bind({});
ExtraSmall.args = {
  text: 'Очень маленькая кнопка',
  height: xs,
};

export const IconLeftWithTextLeft = BaseComponent.bind({});
IconLeftWithTextLeft.args = {
  text: 'Иконка слева текст слева',
  locationIcon: 'left',
  icon: 'bad',
  textAlignment: 'left',
};

export const IconLeftWithTextCenter = BaseComponent.bind({});
IconLeftWithTextCenter.args = {
  text: 'Иконка слева текст по центру',
  locationIcon: 'left',
  icon: 'bad',
};

export const IconLeftWithTextRight = BaseComponent.bind({});
IconLeftWithTextRight.args = {
  text: 'Иконка слева текст справа',
  locationIcon: 'left',
  icon: 'bad',
  textAlignment: 'right',
};

export const IconRightWithTextLeft = BaseComponent.bind({});
IconRightWithTextLeft.args = {
  text: 'Иконка справа текст слева',
  locationIcon: 'right',
  icon: 'bad',
  textAlignment: 'left',
};

export const IconRightTextCenter = BaseComponent.bind({});
IconRightTextCenter.args = {
  text: 'Иконка справа текст по центру',
  locationIcon: 'right',
  icon: 'bad',
};

export const IconRightWithTextCenter = BaseComponent.bind({});
IconRightWithTextCenter.args = {
  text: 'Иконка справа текст справа',
  locationIcon: 'right',
  icon: 'bad',
  textAlignment: 'right',
};

export const Hold = BaseComponent.bind({});
Hold.args = {
  text: 'Кнопка с удержанием',
  enableHold: true,
};

export const Once = BaseComponent.bind({});
Once.args = {
  text: 'Однократное срабатывание',
  once: true,
};

export const OnceWithHold = BaseComponent.bind({});
OnceWithHold.args = {
  text: 'Однократное срабатывание с удержанием',
  once: true,
  enableHold: true,
};
