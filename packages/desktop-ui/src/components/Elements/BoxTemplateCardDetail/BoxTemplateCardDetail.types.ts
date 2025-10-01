import type { InfoGridProps } from '../InfoGrid';

export interface BoxTemplateCardDetailProps extends Pick<InfoGridProps, 'x' | 'y'> {
  name?: string;
  layers?: number;
}

export type BoxTemplateCardDetailEmits = {
  (e: 'edit'): void;
  (e: 'export'): void;
  (e: 'delete'): void;
};
