export type Color = 'success' | 'error' | 'info' | 'warning';

export interface PieProgressProps {
  value?: number | string;
  size?: number | string;
  borderWidth?: number | string;
  color?: Color;
}
