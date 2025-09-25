export interface VListItem {
  label: string;
  icon?: string;
  handler?: () => void;
}

export interface VListProps {
  items: VListItem[];
}
