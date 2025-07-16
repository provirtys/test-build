import { VButton } from '@base';
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
    changeIcon: {
      description: 'Показывать иконку галочки при отработке нажатия',
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
    changeIcon: false,
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

export const Standard = BaseComponent.bind({});
Standard.args = {
  text: 'Кнопка',
  height: 'md',
  color: primary,
  changeIcon: true,
  enableHold: false,
};

export const Primary = BaseComponent.bind({});
Primary.args = {
  text: 'Начать маркировку',
  height: md,
  color: primary,
  enableHold: true,
};

export const Secondary = BaseComponent.bind({});
Secondary.args = {
  text: 'Начать маркировку',
  height: md,
  color: secondary,
  enableHold: true,
};

export const Plane = BaseComponent.bind({});
Plane.args = {
  text: 'Начать маркировку',
  height: md,
  color: plane,
  enableHold: true,
};

export const Outline = BaseComponent.bind({});
Outline.args = {
  text: 'Начать маркировку',
  height: md,
  color: outline,
  enableHold: true,
};

export const Red = BaseComponent.bind({});
Red.args = {
  text: 'Начать маркировку',
  height: md,
  color: red,
  enableHold: true,
};

export const Disabled = BaseComponent.bind({});
Disabled.args = {
  text: 'Неактивная кнопка',
  height: md,
  isDisabled: true,
  color: primary,
  enableHold: true,
};

export const Square = BaseComponent.bind({});
Square.args = {
  text: 'Не скругленная',
  height: md,
  color: primary,
  enableHold: true,
  isRounded: false,
};

export const TextCenter = BaseComponent.bind({});
TextCenter.args = {
  text: 'Текст по центру',
  height: md,
  color: primary,
  textAlignment: 'center',
  enableHold: true,
};

export const TextRight = BaseComponent.bind({});
TextRight.args = {
  text: 'Текст справа',
  height: md,
  color: primary,
  textAlignment: 'right',
  enableHold: true,
};

export const IconLeftWithTextLeft = BaseComponent.bind({});
IconLeftWithTextLeft.args = {
  text: 'Иконка слева текст слева',
  height: md,
  color: primary,
  locationIcon: 'left',
  icon: 'bad',
  textAlignment: 'left',
  enableHold: true,
};

export const IconLeftWithTextCenter = BaseComponent.bind({});
IconLeftWithTextCenter.args = {
  text: 'Иконка слева текст по центру',
  height: md,
  color: primary,
  locationIcon: 'left',
  icon: 'bad',
  textAlignment: 'center',
  enableHold: true,
};

export const IconLeftWithTextRight = BaseComponent.bind({});
IconLeftWithTextRight.args = {
  text: 'Иконка слева текст справа',
  height: md,
  color: primary,
  locationIcon: 'left',
  icon: 'bad',
  textAlignment: 'right',
  enableHold: true,
};

export const IconRightWithTextLeft = BaseComponent.bind({});
IconRightWithTextLeft.args = {
  text: 'Иконка справа текст слева',
  height: md,
  color: primary,
  locationIcon: 'right',
  icon: 'bad',
  textAlignment: 'left',
  enableHold: true,
};

export const IconRightTextCenter = BaseComponent.bind({});
IconRightTextCenter.args = {
  text: 'Иконка справа текст по центру',
  height: md,
  color: primary,
  locationIcon: 'right',
  icon: 'bad',
  textAlignment: 'center',
  enableHold: true,
};

export const IconRightWithTextCenter = BaseComponent.bind({});
IconRightWithTextCenter.args = {
  text: 'Иконка справа текст справа',
  height: md,
  color: primary,
  locationIcon: 'right',
  icon: 'bad',
  textAlignment: 'right',
  enableHold: true,
};

export const ShowIconOnAction = BaseComponent.bind({});
ShowIconOnAction.args = {
  text: 'Показывать иконку при отработке нажатия',
  height: md,
  color: primary,
  changeIcon: true,
  enableHold: true,
};
