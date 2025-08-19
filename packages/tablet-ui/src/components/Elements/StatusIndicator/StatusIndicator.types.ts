export type Color = 'info' | 'success' | 'error' | 'warning';

export interface StatusIndicatorProps {
  color?: Color;
  isAnimate?: boolean;
}
