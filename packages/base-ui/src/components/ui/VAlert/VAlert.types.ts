import type { ComponentColor } from '@integrity/shared/types/components';

export type VAlertColor = ComponentColor;

export interface VAlertProps {
  color?: VAlertColor;
  text?: string;
  isBackgroundWhite?: boolean;
}
