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
  [K in SelectFieldKey]: VSelectProps;
} & {
  [K in InputFieldKey]: VInputProps;
};

export interface GetFieldProps {
  (name: SelectFieldKey): VSelectProps;

  (name: InputFieldKey): VInputProps;
}

export const SelectFieldsKeys: SelectFieldKey[] = ['gtin', 'line', 'box', 'sticker'];

export interface SelectFieldOptions extends Record<SelectFieldKey, VSelectProps['options']> {}

export interface TaskFormLoadingStates extends Record<SelectFieldKey | 'submitting', boolean> {}

export interface TaskFormProps {
  task?: Partial<TaskItem>;
  mode?: 'new' | 'edit';
  options?: SelectFieldOptions;
  loadingStates?: TaskFormLoadingStates;
}

export interface TaskFormEmits {
  (e: 'submit', data: Partial<TaskItem>): void;

  (e: 'draft', data: Partial<TaskItem>): void;
}
