import { NumericRatio } from './index.js';

/**
 * Компонент отображает числовую долю от целого значения. Есть вертикальное и горизонтальное разделение. Также поддерживает светлый режим, который используется когда задний фон становится темнее.
 */
export default {
  component: NumericRatio,
  argTypes: {
    value: {
      description: 'Число над дробью до слэша',
    },
    secondaryValue: {
      description: 'Число над дробью после слэша',
      type: 'number',
    },
    total: {
      description: 'Число под дробью',
    },
    isLight: {
      description: 'Светлый режим',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    value: 0,
    secondaryValue: 0,
    total: 0,
    isLight: false,
  },
};

export const AllValues = {
  args: {
    value: 10,
    secondaryValue: 2,
    total: 42,
  },
};

export const OnlyTop = {
  args: {
    value: 10,
    secondaryValue: 2,
  },
};

export const WithoutSecondary = {
  args: {
    value: 4,
    total: 25,
  },
};

export const LightMode = {
  args: {
    value: 10,
    secondaryValue: 2,
    total: 42,
    isLight: true,
  },
  globals: {
    backgrounds: { value: 'red' },
  },
};
