import type { VSelectOption } from '@base/components/ui/VSelect/VSelect.types';

export interface TaskItem {
  id: string;
  name: string;
  gtin: string;
  dateStart: string;
  timeStart: string;
  total: number;
  line: string;
  comment: string;
  privateComment: string;
  sticker: string;
  box: string;
  boxTotal: number;
}

export type FormSelectKey = keyof Pick<TaskItem, 'gtin' | 'line' | 'sticker' | 'box'>;
export type FormInputKey = Exclude<keyof TaskItem, FormSelectKey | 'id'>;

export interface TaskFormOptions {
  gtin: VSelectOption[];
  line: VSelectOption[];
  sticker: VSelectOption[];
  box: (VSelectOption & { perBox: number })[];
}

export interface TaskFormLoadingStates extends Record<FormSelectKey | 'submitting', boolean> {}

export interface TaskFormProps {
  task?: Partial<TaskItem>;
  mode?: 'new' | 'edit';
  options?: TaskFormOptions;
  loadingStates?: TaskFormLoadingStates;
}

export interface TaskFormEmits {
  (e: 'submit', data: Partial<TaskItem>): void;

  (e: 'draft', data: Partial<TaskItem>): void;
}

export interface BoxAlert {
  show?: boolean;
  count?: number;
  showCheckbox?: boolean;
  text?: string;
}
