export interface VDescriptionListItem {
  term?: string;
  definition?: string | VDescriptionListItem[];
  slot?: string;
}

export interface VDescriptionListProps {
  items: VDescriptionListItem[];
  inline?: boolean;
  isLight?: boolean;
  alignCenter?: boolean;
  termFontSize?: string;
  definitionFontSize?: string;
  bordered?: boolean;
}
