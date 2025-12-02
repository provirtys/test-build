import { VTableProps } from '@integrity/base-ui';
declare const _default: import('vue').DefineComponent<VTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<VTableProps> & Readonly<{}>, {
    rows: readonly any[];
    columns: {
        name: string;
        label: string;
        field: string | ((row: any) => any);
        required?: boolean;
        align?: "left" | "right" | "center";
        sortable?: boolean;
        sort?: (a: any, b: any, rowA: any, rowB: any) => number;
        rawSort?: (a: any, b: any, rowA: any, rowB: any) => number;
        sortOrder?: "ad" | "da";
        format?: (val: any, row: any) => any;
        style?: string | ((row: any) => string);
        classes?: string | ((row: any) => string);
        headerStyle?: string;
        headerClasses?: string;
    }[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TableAttributes.vue.d.ts.map