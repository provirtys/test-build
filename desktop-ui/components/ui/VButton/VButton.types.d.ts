import { VButtonProps as VBaseButtonProps } from '@integrity/base-ui';
import { ComponentSize } from '@integrity/shared/types/components';
export type VButtonSize = ComponentSize;
export interface VButtonProps extends VBaseButtonProps {
    size?: VButtonSize;
}
export type VButtonEmits = (e: 'action') => void;
//# sourceMappingURL=VButton.types.d.ts.map