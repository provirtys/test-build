import type { QBtnProps } from 'quasar';

export type Color = 'primary' | 'secondary' | 'plain' | 'outline' | 'red';

export type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type TextAlignment = 'left' | 'center' | 'right';

export interface VButtonProps extends QBtnProps {
  color?: Color;
  size?: Size;
  iconSize?: string | number;
  textAlignment?: TextAlignment;
  fitWidth?: boolean;
  once?: boolean;
  enableHold?: boolean;
  borderRadius?: string;
  gap?: string;
  fontSize?: string;
  height?: string;
}

export type VButtonEmits = (e: 'action') => void;

export interface VButtonSizeConfig {
  font: string;
  padding: string;
  height: string;
  icon: string | number;
  gap: string;
}
