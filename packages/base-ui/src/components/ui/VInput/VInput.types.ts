import type { QInputProps, QInputSlots } from 'quasar';

export type Variant = 'standard' | 'outlined' | 'filled';

export interface VInputProps extends QInputProps {
  labelOutside?: boolean;
  required?: boolean;
  xPadding?: string;
  labelOnBorder?: boolean;
  placeholder?: string;
  fontSize?: string;
  displayNumberWithDelimiter?: boolean;
}

export interface VInputSlots extends QInputSlots {
  [key: string]: any;
}

export type VInputEmits = (e: 'update:modelValue', val: string | number | undefined) => void;
