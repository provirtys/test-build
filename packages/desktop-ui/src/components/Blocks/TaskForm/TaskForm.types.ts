import type { VSelectOption } from '@base/components/ui/VSelect/VSelect.types';
import type { VInputProps, VSelectProps } from '@integrity/base-ui/src';

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

export type SelectFields = Pick<TaskItem, 'gtin' | 'line' | 'sticker' | 'box'>;
export type SelectFieldKey = keyof SelectFields;
export type InputFieldKey = Exclude<keyof TaskItem, SelectFieldKey | 'id'>;

export type FieldSettings = {
  [K in SelectFieldKey]: Omit<VSelectProps, 'modelValue' | 'onUpdate:modelValue'>;
} & {
  [K in InputFieldKey]: Omit<VInputProps, 'modelValue' | 'onUpdate:modelValue'>;
};

export interface GetFieldProps {
  (name: SelectFieldKey): Omit<VSelectProps, 'modelValue' | 'onUpdate:modelValue'>;

  (name: InputFieldKey): Omit<VInputProps, 'modelValue' | 'onUpdate:modelValue'>;
}

export const SelectFieldsKeys: SelectFieldKey[] = ['gtin', 'line', 'box', 'sticker'];

export interface TaskFormOptions {
  gtin: VSelectOption[];
  line: VSelectOption[];
  sticker: VSelectOption[];
  box: (VSelectOption & { perBox: number })[];
}

export interface TaskFormLoadingStates extends Record<SelectFieldKey | 'submitting', boolean> {}

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
