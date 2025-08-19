export type Color = 'info' | 'success' | 'warning' | 'error';

export interface StatusLabelProps {
  color?: Color;
  label?: string;
  isAnimate?: boolean;
  showBackground?: boolean;
}
