import type { InfoGridProps } from '../InfoGrid';

export interface PackageTemplateCardProps extends Pick<InfoGridProps, 'rowsCount' | 'columnsCount'> {
  title?: string;
  layersCount?: number;
}
