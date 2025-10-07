import type { VInputProps } from '@integrity/base-ui/src';

export interface BoxTemplateItem {
  id: string;
  name: string;
  x: number;
  y: number;
  layers: number;
}

export interface BoxTemplateFormProps {
  box?: Partial<BoxTemplateItem>;
  mode?: 'new' | 'edit';
  loading?: boolean;
}

export type BoxTemplateFormEmits = (e: 'submit', data: Omit<BoxTemplateItem, 'id'>) => void;

export type InputFieldKey = Exclude<keyof BoxTemplateItem, 'id'>;

export type FieldSettings = {
  [K in InputFieldKey]: VInputProps;
};

export type BoxTemplateFormFieldProps = (name: InputFieldKey) => VInputProps;
