import type { QInputProps, QInputSlots } from 'quasar';

export type Variant = 'standard' | 'outlined' | 'filled';

export interface VInputProps extends QInputProps {
  labelOutside?: boolean;
  required?: boolean;
  xPadding?: string;
  labelOnBorder?: boolean;
  placeholder?: string;
}

export interface VInputSlots extends QInputSlots {
  [key: string]: any;
}
