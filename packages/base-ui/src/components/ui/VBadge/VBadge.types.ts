import type { ComponentColor, ComponentSize } from '@integrity/shared/types/components';
import type { QBadgeProps } from 'quasar';

export type VBadgeSize = Exclude<ComponentSize, 'xs'>;

export type VBadgeColor = ComponentColor;

export interface VBadgeProps extends QBadgeProps {
  size?: VBadgeSize;
  isInverted?: boolean;
}
