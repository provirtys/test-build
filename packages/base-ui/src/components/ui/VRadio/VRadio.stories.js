import { VRadio } from '@base';
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

/** Компонент радио кнопки. Можно менять подпись и размеры.<br>
 *  Чтобы создать группу радио кнопок, используй компонент [VRadioGroup](/docs/ui-vradiogroup--docs)<br> */
export default {
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
        labels: {
          lg: 'Большой',
          md: 'Средний',
          sm: 'Маленький',
          xs: 'Очень маленький',
        },
      },
    },
    width: {
      description: 'Ширина элемента',
      options: Object.keys(widths),
      control: {
        type: 'select',
        labels: {
          auto: 'Автоматически',
          dense: 'Уменьшенный',
          full: 'На всего родителя',
        },
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
};

const BaseComponent = (args) => ({
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
  template: `<v-radio v-model="modelValue" v-bind="bindingAttrs"/>`,
});

export const Standard = BaseComponent.bind({});

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

export const Dense = BaseComponent.bind({});
ExtraSmallSize.args = {
  width: dense,
};

export const FullWidth = BaseComponent.bind({});
ExtraSmallSize.args = {
  width: full,
};
