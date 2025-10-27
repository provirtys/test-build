import type { VDescriptionListItem } from '@base';

export interface MainSidebarItem {
  label: string;
  icon?: string;
  handler: () => void;
  active?: boolean;
  notificationsCount?: number;
}

export interface MainSidebarProps {
  items?: MainSidebarItem[];
  bottomDescriptionList?: VDescriptionListItem[];
}
