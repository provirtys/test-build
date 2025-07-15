import type { DefineComponent } from 'vue';

export const VButton: DefineComponent<{
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}>;
