import { ComponentColor, ComponentSize } from '@integrity/shared/types/components';
import { QBadgeProps } from 'quasar';
export type VBadgeSize = Exclude<ComponentSize, 'xs'>;
export type VBadgeColor = ComponentColor;
export interface VBadgeProps extends QBadgeProps {
    size?: VBadgeSize;
    isInverted?: boolean;
}
//# sourceMappingURL=VBadge.types.d.ts.map