import { ComponentSize } from '@integrity/shared/types/components';
export type VKeyButtonSize = Exclude<ComponentSize, 'xs'>;
export interface VKeyButtonProps {
    value: string;
    size: VKeyButtonSize;
}
export type VKeyButtonEmits = (e: 'pressed', value: string) => void;
//# sourceMappingURL=VKeyButton.types.d.ts.map