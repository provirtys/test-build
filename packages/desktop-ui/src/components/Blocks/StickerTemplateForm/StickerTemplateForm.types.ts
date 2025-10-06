import type { VInputProps, VSelectProps } from '@integrity/base-ui/src';

export interface StickerTemplateItem {
  id: string;
  name: string;
  gtin: string[];
  file: File;
}

export interface StickerTemplateFormProps {
  sticker?: Partial<StickerTemplateItem>;
  mode?: 'new' | 'edit';
  options?: SelectFieldOptions;
  loading?: boolean;
}

export type StickerTemplateFormEmits = (e: 'submit', data: Omit<StickerTemplateItem, 'id'>) => void;

export type SelectFields = Pick<StickerTemplateItem, 'gtin'>;
export type SelectFieldKey = keyof SelectFields;
export type InputFieldKey = Exclude<keyof StickerTemplateItem, SelectFieldKey | 'id'>;

export type FieldSettings = {
  [K in SelectFieldKey]: VSelectProps;
} & {
  [K in InputFieldKey]: VInputProps;
};

export interface StickerTemplateFormFieldProps {
  (name: SelectFieldKey): VSelectProps;

  (name: InputFieldKey): VInputProps;
}

export const SelectFieldsKeys: SelectFieldKey[] = ['gtin'];

export interface SelectFieldOptions extends Record<SelectFieldKey, VSelectProps['options']> {}
