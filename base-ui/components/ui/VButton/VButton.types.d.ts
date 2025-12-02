import { ComponentPosition } from '@integrity/shared/types/components';
import { QBtnProps } from 'quasar';
export type VButtonColor = 'primary' | 'secondary' | 'plain' | 'outline' | 'red';
export type VButtonTextAlignment = ComponentPosition;
export interface VButtonProps extends Omit<QBtnProps, 'size'> {
    color?: VButtonColor;
    iconSize?: string | number;
    textAlignment?: VButtonTextAlignment;
    fitWidth?: boolean;
    once?: boolean;
    enableHold?: boolean;
    borderRadius?: string;
    gap?: string;
    fontSize?: string;
    height?: string;
    centeredContent?: boolean;
}
export type VButtonEmits = (e: 'action') => void;
export interface VButtonSizeConfig {
    fontSize: string;
    padding: string;
    height: string;
    iconSize: string | number;
    gap: string;
}
//# sourceMappingURL=VButton.types.d.ts.map