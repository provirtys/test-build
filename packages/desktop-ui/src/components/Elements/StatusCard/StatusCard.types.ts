import type { ComponentColor } from '@integrity/shared/types/components';

export type StatusCardColor = ComponentColor;

export type TogglerStatus = null | false | true;

export interface StatusCardProps {
  title?: string;
  text?: string | number;
  label?: string;
  color?: StatusCardColor;
  progress?: number;
  startColor?: string;
  endColor?: string;
  behindColor?: string;
  borderRadius?: string;
}
