export interface VDescriptionListItem {
    term?: string;
    definition?: string | number | VDescriptionListItem[];
    slot?: string;
    termClasses?: string | string[];
    definitionClasses?: string | string[];
}
export type FontWeight = 'normal' | 'bold';
export interface VDescriptionListProps {
    items: VDescriptionListItem[];
    inline?: boolean;
    isLight?: boolean;
    alignCenter?: boolean;
    justifyCenter?: boolean;
    termFontSize?: string;
    definitionFontSize?: string;
    bordered?: boolean;
    contentInline?: boolean;
    itemGap?: string;
    contentGap?: string;
    fontWeight?: FontWeight;
}
//# sourceMappingURL=VDescriptionList.types.d.ts.map