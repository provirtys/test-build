import type { QBtnToggleProps } from 'quasar';

export type Align = 'left' | 'center' | 'right';

type VSwitcherOption = QBtnToggleProps['options'][number] & { iconName?: string };

export interface VSwitcherProps extends QBtnToggleProps {
  align?: Align;
  options: VSwitcherOption[];
}

export type VSwitcherEmits = (e: 'update:modelValue', val: string) => void;
