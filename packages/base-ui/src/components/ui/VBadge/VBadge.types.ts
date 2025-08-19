import type { QBadgeProps } from 'quasar';

export type Size = 'lg' | 'md' | 'sm';

export type Color = 'success' | 'error' | 'info' | 'warning';

export interface VBadgeProps extends QBadgeProps {
  size?: Size;
  isInverted?: boolean;
}
