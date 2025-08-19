import type { QRadioProps } from 'quasar';

export type Size = 'lg' | 'md' | 'sm' | 'xs';

export type Width = 'auto' | 'dense' | 'full';

export interface VRadioProps extends QRadioProps {
  label?: string;
  val: string;
  modelValue: string;
  size?: Size;
  width?: Width;
  dark?: boolean;
}

export type VRadioEmits = (e: 'update:modelValue', val: string) => void;
