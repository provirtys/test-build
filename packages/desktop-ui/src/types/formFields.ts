import type { VInputProps, VSelectProps } from '@integrity/base-ui/src';

export type FormInputProps<Keys extends string> = (
  name: Keys,
) => Omit<VInputProps, 'modelValue' | 'onUpdate:modelValue'>;

export type FormSelectProps<Keys extends string> = (
  name: Keys,
) => Omit<VSelectProps, 'modelValue' | 'onUpdate:modelValue'>;

export type FormInputSettings<Keys extends string> = {
  [K in Keys]: Omit<VInputProps, 'modelValue' | 'onUpdate:modelValue'>;
};

export type FormSelectSettings<Keys extends string> = {
  [K in Keys]: Omit<VSelectProps, 'modelValue' | 'onUpdate:modelValue'>;
};
