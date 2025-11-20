import type { ComponentColor } from '@integrity/shared/types/components';

export type PieProgressColor = ComponentColor;

export interface PieProgressProps {
  value?: number | string;
  size?: number | string;
  borderWidth?: number | string;
  color?: PieProgressColor;
}
