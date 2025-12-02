import { ComponentSize } from '@integrity/shared/types/components';
import { QRadioProps } from 'quasar';
export type VRadioGroupSize = ComponentSize;
export type VRadioGroupWidth = 'auto' | 'full' | 'dense';
export interface VRadioGroupProps {
    label?: string;
    modelValue: number | string | boolean | object;
    options: QRadioProps[];
    size?: VRadioGroupSize;
    width?: VRadioGroupWidth;
    dark: boolean;
}
export type VRadioGroupEmits = (e: 'update:modelValue', val: VRadioGroupProps['modelValue']) => void;
//# sourceMappingURL=VRadioGroup.types.d.ts.map