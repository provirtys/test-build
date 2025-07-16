import { DatamatrixIcon } from '@base/components/Elements/DatamatrixIcon';

/** Иконка Datamatrix с границей или без */

export default {
  component: DatamatrixIcon,
  argTypes: {
    border: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    border: true,
  },
};

export const WithBorder = {};

export const WithoutBorder = {
  args: {
    border: false,
  },
};
