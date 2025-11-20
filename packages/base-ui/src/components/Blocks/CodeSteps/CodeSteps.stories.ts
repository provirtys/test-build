import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { CodeSteps } from '@';

type Story = StoryObj<typeof CodeSteps>;

/** CodeSteps component with customizable number and type of code*/
const meta: Meta<typeof CodeSteps> = {
  component: CodeSteps,
  argTypes: {
    codeType: {
      description: 'Вариант изображения кода',
      options: ['barcode', 'dataMatrix'],
      control: {
        type: 'radio',
        labels: {
          barcode: 'Barcode',
          dataMatrix: 'DataMatrix',
        },
      },
    },
    currentCodeIndex: {
      description: 'Текущий сканируемый код',
    },
    codesLength: {
      description: 'Общее количество кодов',
    },
    showBorder: {
      description: 'Показывать рамку вокруг кода',
    },
  },
};
export default meta;

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryCode: Story = {
  args: {
    codeType: 'barcode',
    currentCodeIndex: 0,
    codesLength: 2,
    showBorder: true,
  },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryCodeLength: Story = {
  args: {
    codeType: 'barcode',
    currentCodeIndex: 3,
    codesLength: 5,
    showBorder: true,
  },
};

/** Выброр типа кода для сканирования */
export const PrimaryCodeSelect: Story = {
  args: {
    codeType: 'barcode',
    currentCodeIndex: -1,
    codesLength: 1,
    showBorder: false,
  },
};

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryDatamatrix: Story = {
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: 0,
    codesLength: 2,
    showBorder: true,
  },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryDatamatrixLength: Story = {
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: 3,
    codesLength: 5,
    showBorder: true,
  },
};

/** Выброр типа кода для сканирования */
export const PrimaryDatamatrixSelect: Story = {
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: -1,
    codesLength: 1,
    showBorder: false,
  },
};
