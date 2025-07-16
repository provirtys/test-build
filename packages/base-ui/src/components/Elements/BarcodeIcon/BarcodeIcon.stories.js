import { BarcodeIcon } from '@base/components/Elements/BarcodeIcon';

/** Иконка Barcode с границей или без */

export default {
  component: BarcodeIcon,
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
