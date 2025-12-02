import { VDescriptionListItem } from '@integrity/base-ui';
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
//# sourceMappingURL=MainSidebar.types.d.ts.map