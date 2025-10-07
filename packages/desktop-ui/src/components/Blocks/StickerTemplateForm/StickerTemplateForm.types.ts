import type { VInputProps } from '@integrity/base-ui/src';

export interface StickerTemplateItem {
  id: string;
  name: string;
  file: File;
}

export interface StickerTemplateFormProps {
  sticker?: Partial<StickerTemplateItem>;
  mode?: 'new' | 'edit';
  loading?: boolean;
}

export type StickerTemplateFormEmits = (e: 'submit', data: Omit<StickerTemplateItem, 'id'>) => void;

export type InputFieldKey = Exclude<keyof StickerTemplateItem, 'id'>;

export type FieldSettings = {
  [K in InputFieldKey]: VInputProps;
};

export type StickerTemplateFormFieldProps = (name: InputFieldKey) => VInputProps;
