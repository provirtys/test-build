import type { ComponentColor } from '@integrity/shared/types/components';

export type StatusLabelColor = ComponentColor;

export interface StatusLabelProps {
  color?: StatusLabelColor;
  label?: string;
  isAnimate?: boolean;
  showBackground?: boolean;
}
