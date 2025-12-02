import { QTable } from 'quasar';
import { VTableColumn, VTableEmitsRequest, VTablePagination, VTableProps, VTableSlots } from './VTable.types';
type __VLS_Props = VTableProps;
type __VLS_PublicProps = {
    'pagination'?: VTablePagination;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<VTableSlots> & VTableSlots;
    refs: {
        tableRef: QTable | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:pagination": (value: VTablePagination) => any;
} & {
    "update:pagination": (data: VTablePagination) => any;
    request: (data: VTableEmitsRequest) => any;
    rowClick: (evt: Event, row: any, index: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:pagination"?: ((value: VTablePagination) => any) | undefined;
    onRequest?: ((data: VTableEmitsRequest) => any) | undefined;
    onRowClick?: ((evt: Event, row: any, index: number) => any) | undefined;
}>, {
    columns: VTableColumn[];
    rows: readonly any[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tableRef: QTable | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VTable.vue.d.ts.map