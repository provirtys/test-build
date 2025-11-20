import type { ComponentColor } from '@integrity/shared/types/components';

export type StatusIndicatorColor = ComponentColor;

export interface StatusIndicatorProps {
  color?: StatusIndicatorColor;
  isAnimate?: boolean;
}
