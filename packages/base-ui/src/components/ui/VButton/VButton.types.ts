import type { QBtnProps } from 'quasar';

export type Color = 'primary' | 'secondary' | 'plane' | 'outline' | 'red';

export type Height = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type IconPosition = 'left' | 'right';

export type TextAlignment = 'left' | 'center' | 'right';

export interface VButtonProps extends QBtnProps {
  color?: Color;
  isDisabled?: boolean;
  height?: Height;
  isRounded?: boolean;
  icon?: string;
  iconPosition?: IconPosition;
  iconSize?: number;
  textAlignment?: TextAlignment;
  fitWidth?: boolean;
  once?: boolean;
  enableHold?: boolean;
}

export type VButtonEmits = (e: 'action') => void;
