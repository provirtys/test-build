import type { InfoGridProps } from '../InfoGrid';

export interface BoxTemplateCardProps extends Pick<InfoGridProps, 'x' | 'y'> {
  name?: string;
  layers?: number;
}
