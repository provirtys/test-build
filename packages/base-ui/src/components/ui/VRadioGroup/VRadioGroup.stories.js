import { VRadioGroup } from '@base';
import { computed, ref } from 'vue';

// Размеры
const lg = 'lg';
const md = 'md';
const sm = 'sm';
const xs = 'xs';
const sizes = { lg, md, sm, xs };

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
    inline: {
      description: 'Отображать кнопки в одну строку',
      control: {
        type: 'boolean',
      },
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
    inline: false,
    size: 'lg',
  },
};

const BaseComponent = (args) => ({
  components: { VRadioGroup },
  setup() {
    const value = ref('');

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

export const Inline = BaseComponent.bind({});
Inline.args = {
  inline: true,
};

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
