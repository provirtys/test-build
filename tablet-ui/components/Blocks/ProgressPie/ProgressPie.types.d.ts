import { ComponentSize } from '@integrity/shared/types/components';
export type ProgressPieSize = Extract<ComponentSize, 'lg' | 'sm'>;
export interface ProgressPieProps {
    percentage?: number;
    size?: ProgressPieSize;
}
//# sourceMappingURL=ProgressPie.types.d.ts.map