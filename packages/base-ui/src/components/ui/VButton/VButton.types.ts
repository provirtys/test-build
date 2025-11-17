import type { QBtnProps } from 'quasar';

export type Color = 'primary' | 'secondary' | 'plain' | 'outline' | 'red';

export type TextAlignment = 'left' | 'center' | 'right';

export interface VButtonProps extends Omit<QBtnProps, 'size'> {
  color?: Color;
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
  fontSize: string;
  padding: string;
  height: string;
  iconSize: string | number;
  gap: string;
}
