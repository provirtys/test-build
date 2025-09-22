import type { VInputProps, VSelectProps } from '@integrity/base-ui/src';
import type { TaskItem } from '@/types/entities';

export interface TaskFormProps {
  task?: Partial<TaskItem>;
  mode?: 'new' | 'edit';
  options?: SelectFieldOptions;
}

export interface TaskFormEmits {
  (e: 'submit', data: Partial<TaskItem>): void;

  (e: 'draft', data: Partial<TaskItem>): void;
}

export type SelectFields = Pick<TaskItem, 'gtin' | 'line' | 'labelTemplate' | 'packageTemplate'>;
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

export const SelectFieldsKeys: SelectFieldKey[] = ['gtin', 'line', 'labelTemplate', 'packageTemplate'];

export interface SelectFieldOptions extends Record<SelectFieldKey, VSelectProps['options']> {}
