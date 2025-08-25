import type { QInputProps } from 'quasar';

export type Variant = 'standard' | 'outlined' | 'filled';

export interface VInputProps extends QInputProps {
  labelOutside?: boolean;
  required?: boolean;
  xPadding?: string;
}
