import { VDateProps, VDateSlots } from './VDate.types';
type __VLS_Props = VDateProps;
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<VDateSlots> & VDateSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
} & {
    "update:model-value": (value: any, reason: "mask" | "add-day" | "remove-day" | "add-range" | "remove-range" | "locale" | "year" | "month", details: {
        year: number;
        month: number;
        day: number;
        from?: {
            year: number;
            month: number;
            day: number;
        };
        to?: {
            year: number;
            month: number;
            day: number;
        };
    }) => any;
    navigation: (view: {
        year: number;
        month: number;
    }) => any;
    rangeStart: (from: {
        year: number;
        month: number;
        day: number;
    }) => any;
    rangeEnd: (range: {
        from: {
            year: number;
            month: number;
            day: number;
        };
        to: {
            year: number;
            month: number;
            day: number;
        };
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:model-value"?: ((value: any, reason: "mask" | "add-day" | "remove-day" | "add-range" | "remove-range" | "locale" | "year" | "month", details: {
        year: number;
        month: number;
        day: number;
        from?: {
            year: number;
            month: number;
            day: number;
        };
        to?: {
            year: number;
            month: number;
            day: number;
        };
    }) => any) | undefined;
    onNavigation?: ((view: {
        year: number;
        month: number;
    }) => any) | undefined;
    onRangeStart?: ((from: {
        year: number;
        month: number;
        day: number;
    }) => any) | undefined;
    onRangeEnd?: ((range: {
        from: {
            year: number;
            month: number;
            day: number;
        };
        to: {
            year: number;
            month: number;
            day: number;
        };
    }) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {
    mask: string;
    locale: {
        days?: readonly any[];
        daysShort?: readonly any[];
        months?: readonly any[];
        monthsShort?: readonly any[];
    };
    firstDayOfWeek: string | number;
    minimal: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VDate.vue.d.ts.map