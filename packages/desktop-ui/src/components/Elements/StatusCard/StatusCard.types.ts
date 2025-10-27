export type Color = 'success' | 'error' | 'info' | 'warning';

export type TogglerStatus = null | false | true;

export interface StatusCardProps {
  title?: string;
  text?: string | number;
  label?: string;
  color?: Color;
  progress?: number;
  startColor?: string;
  endColor?: string;
  behindColor?: string;
  borderRadius?: string;
}
