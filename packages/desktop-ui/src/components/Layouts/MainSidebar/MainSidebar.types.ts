export interface MainSidebarItem {
  label: string;
  icon?: string;
  handler: () => void;
  active?: boolean;
}

export interface MainSidebarProps {
  items?: MainSidebarItem[];
}
