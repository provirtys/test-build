import type { QRadioProps } from 'quasar';

export type Size = 'lg' | 'md' | 'sm' | 'xs';

export type Width = 'auto' | 'full' | 'dense';

export interface VRadioGroupProps {
  label?: string;
  modelValue: string;
  options: QRadioProps[];
  size?: Size;
  width?: Width;
  dark: boolean;
}

export type VRadioGroupEmits = (e: 'update:modelValue', val: VRadioGroupProps['modelValue']) => void;
