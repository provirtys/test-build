import type { ComponentSize } from '@integrity/shared/types/components';
import type { QRadioProps } from 'quasar';

export type VRadioSize = ComponentSize;

export type VRadioWidth = 'auto' | 'dense' | 'full';

export interface VRadioProps extends QRadioProps {
  label?: string;
  val: string;
  modelValue: number | string | boolean | object;
  size?: VRadioSize;
  width?: VRadioWidth;
  dark?: boolean;
}

export type VRadioEmits = (e: 'update:modelValue', val: number | string | boolean | object) => void;
