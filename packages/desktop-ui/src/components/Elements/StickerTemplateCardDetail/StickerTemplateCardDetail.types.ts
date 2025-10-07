export interface StickerTemplateCardDetailProps {
  name: string;
  base64Image: string;
}

export type StickerTemplateCardDetailEmits = {
  (e: 'edit'): void;
  (e: 'export'): void;
  (e: 'delete'): void;
};
