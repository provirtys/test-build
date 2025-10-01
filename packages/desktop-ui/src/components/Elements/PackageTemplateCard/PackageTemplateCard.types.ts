import type { InfoGridProps } from '../InfoGrid';

export interface PackageTemplateCardProps extends Pick<InfoGridProps, 'x' | 'y'> {
  name?: string;
  layers?: number;
}
