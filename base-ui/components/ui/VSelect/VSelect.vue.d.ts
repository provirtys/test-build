import { QSelect } from 'quasar';
import { VSelectProps, VSelectSlots } from './VSelect.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<VSelectSlots> & VSelectSlots;
    refs: {
        selectRef: QSelect | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VSelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (val: any) => any;
}, string, import('vue').PublicProps, Readonly<VSelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}>, {
    color: import('quasar').NamedColor;
    dense: boolean;
    outlined: boolean;
    labelColor: import('quasar').NamedColor;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    selectRef: QSelect | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VSelect.vue.d.ts.map