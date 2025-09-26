import type { InfoGridProps } from '../InfoGrid';

export interface PackageTemplateCardProps extends Pick<InfoGridProps, 'x' | 'y'> {
  title?: string;
  layers?: number;
}
