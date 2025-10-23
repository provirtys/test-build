import type { VListItem } from '@/components/ui/VList';

export type Color = 'success' | 'error' | 'info' | 'warning' | 'gray';

export interface VCardProps {
  title?: string;
  stretch?: boolean;
  color?: Color;
  paddingX?: string;
  paddingY?: string;
  menuItems?: VListItem[];
  isFlex?: boolean;
  borderRadius?: string;
}
