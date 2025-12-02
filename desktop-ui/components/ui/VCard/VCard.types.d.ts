import { ComponentColor } from '@integrity/shared/types/components';
import { VListItem } from '../VList';
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
//# sourceMappingURL=VCard.types.d.ts.map