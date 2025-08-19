export type Color = 'success' | 'error' | 'info' | 'warning';

export interface VAlertProps {
  color?: Color;
  text?: string;
  isBackgroundWhite?: boolean;
}
