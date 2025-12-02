import { ComponentColor } from '@integrity/shared/types/components';
export type StatusTimelineColor = ComponentColor;
interface StatusTimelineLink {
    text: string;
    href: string;
}
export interface StatusTimelineItem {
    id: string;
    name: string;
    label?: string;
    color?: StatusTimelineColor;
    links?: StatusTimelineLink[];
}
export interface StatusTimelineProps {
    items: StatusTimelineItem[];
}
export {};
//# sourceMappingURL=StatusTimeline.types.d.ts.map