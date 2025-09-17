export type Color = 'success' | 'error' | 'info' | 'warning';

export interface StripedCardProps {
  title?: string;
  text?: string;
  color?: Color;
}
