export interface AppSidebarItem {
  label: string;
  icon?: string;
  handler: () => void;
  active?: boolean;
}

export interface AppSidebarProps {
  items?: AppSidebarItem[];
}
