export type Color = 'success' | 'error' | 'info' | 'warning';

interface StatusTimelineLink {
  text: string;
  href: string;
}

export interface StatusTimelineItem {
  id: string;
  name: string;
  label?: string;
  color?: Color;
  links?: StatusTimelineLink[];
}

export interface StatusTimelineProps {
  items: StatusTimelineItem[];
}
