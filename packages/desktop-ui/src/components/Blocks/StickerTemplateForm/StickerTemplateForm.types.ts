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

export type FormInputKey = Exclude<keyof StickerTemplateItem, 'id'>;
