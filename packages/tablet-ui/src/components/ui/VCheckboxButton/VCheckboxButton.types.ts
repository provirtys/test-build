export type Height = 'lg' | 'md' | 'sm' | 'xs';

export interface VCheckboxButtonProps {
  modelValue: boolean;
  iconName?: string;
  isPlane?: boolean;
  height?: Height;
  label?: string;
  isDisabled?: boolean;
}

export type VCheckboxButtonEmits = (e: 'update:modelValue', val: boolean) => void;
