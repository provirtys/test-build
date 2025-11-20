import type { ComponentColor } from '@integrity/shared/types/components';
import type { VListItem } from '@/components/ui/VList';

export type VCardColor = ComponentColor | 'gray';

export interface VCardProps {
  title?: string;
  stretch?: boolean;
  color?: VCardColor;
  paddingX?: string;
  paddingY?: string;
  menuItems?: VListItem[];
  isFlex?: boolean;
  borderRadius?: string;
  btnConf?: {
    icon: string;
    handler: () => void;
  };
}
