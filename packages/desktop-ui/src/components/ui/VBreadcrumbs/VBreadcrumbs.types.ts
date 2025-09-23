export interface VBreadcrumbsItem {
  label: string;
  handler?: () => void;
}

export interface VBreadcrumbsProps {
  items: VBreadcrumbsItem[];
}
