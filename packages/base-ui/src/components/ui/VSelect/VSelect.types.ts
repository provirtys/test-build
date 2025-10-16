import type { QSelectProps, QSelectSlots } from 'quasar';

export interface VSelectOption {
  label: string;
  labelLight?: string;
  value: string;
}

export interface VSelectProps extends QSelectProps {
  outsideLabel?: string;
  useSearch?: boolean;
  required?: boolean;
  staticLabel?: boolean;
  options?: VSelectOption[];
}

export interface VSelectSlots extends QSelectSlots {
  [key: string]: any;
}

export type VSelectEmits = (e: 'update:modelValue', val: any) => void;
