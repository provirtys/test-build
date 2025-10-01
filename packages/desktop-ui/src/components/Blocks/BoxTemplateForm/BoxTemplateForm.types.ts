import type { VInputProps, VSelectProps } from '@integrity/base-ui/src';

export interface BoxTemplateItem {
  id: string;
  name: string;
  gtin: string[];
  x: number;
  y: number;
  layers: number;
}

export interface BoxTemplateFormProps {
  box?: Partial<BoxTemplateItem>;
  mode?: 'new' | 'edit';
  options?: SelectFieldOptions;
  loading?: boolean;
}

export type BoxTemplateFormEmits = (e: 'submit', data: Omit<BoxTemplateItem, 'id'>) => void;

export type SelectFields = Pick<BoxTemplateItem, 'gtin'>;
export type SelectFieldKey = keyof SelectFields;
export type InputFieldKey = Exclude<keyof BoxTemplateItem, SelectFieldKey | 'id'>;

export type FieldSettings = {
  [K in SelectFieldKey]: VSelectProps;
} & {
  [K in InputFieldKey]: VInputProps;
};

export interface BoxTemplateFormFieldProps {
  (name: SelectFieldKey): VSelectProps;

  (name: InputFieldKey): VInputProps;
}

export const SelectFieldsKeys: SelectFieldKey[] = ['gtin'];

export interface SelectFieldOptions extends Record<SelectFieldKey, VSelectProps['options']> {}
