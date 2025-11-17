import type { VButtonProps as VBaseButtonProps } from '@base';

export type Size = 'lg' | 'md' | 'sm' | 'xs';

export interface VButtonProps extends VBaseButtonProps {
  size?: Size;
}

export type VButtonEmits = (e: 'action') => void;
