import { VRadioGroup } from '@base';
import { computed, ref } from 'vue';

// Размеры
const lg = 'lg';
const md = 'md';
const sm = 'sm';
const xs = 'xs';
const sizes = { lg, md, sm, xs };

// Ширина
const auto = 'auto';
const full = 'full';
const dense = 'dense';
const widths = { auto, dense, full };

/** Компонент для группировки радио кнопок. <br>
 * Можно задавать отображаемое название для группы, менять размеры кнопок и делать их в одну строку. <br>
 * Если нужна отдельная радио кнопка, то используй компонент [VRadio](/docs/ui-vradio--docs)*/
export default {
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
        labels: {
          lg: 'Большой',
          md: 'Средний',
          sm: 'Маленький',
          xs: 'Очень маленький',
        },
      },
    },
    width: {
      description: 'Ширина кнопок. ',
      options: Object.keys(widths),
      control: {
        type: 'select',
        labels: {
          auto: 'Автоматически',
          dense: 'В одну строку',
          full: 'На всего родителя',
        },
      },
    },
  },
  args: {
    label: '',
    options: [
      {
        val: 'option1',
        label: 'Опция 1',
      },
      {
        val: 'option2',
        label: 'Опция 2',
      },
      {
        val: 'option3',
        label: 'Опция 3',
      },
    ],
    modelValue: '',
    size: 'lg',
    width: 'auto',
    dark: false,
  },
};

const BaseComponent = (args) => ({
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
});

export const Standard = BaseComponent.bind({});
Standard.args = {
  label: 'Выберите значение',
};

export const WithoutLabel = BaseComponent.bind({});

export const OneOption = BaseComponent.bind({});
OneOption.args = {
  label: 'Одна опция',
  options: [
    {
      val: 'option1',
      label: 'Опция 1',
    },
  ],
};

export const MediumSize = BaseComponent.bind({});
MediumSize.args = {
  size: 'md',
};

export const SmallSize = BaseComponent.bind({});
SmallSize.args = {
  size: 'sm',
};

export const ExtraSmallSize = BaseComponent.bind({});
ExtraSmallSize.args = {
  size: 'xs',
};

export const Dark = BaseComponent.bind({});
Dark.args = {
  dark: true,
};

export const Inline = BaseComponent.bind({});
Inline.args = {
  width: dense,
};

export const FullWidth = BaseComponent.bind({});
FullWidth.args = {
  width: full,
};
