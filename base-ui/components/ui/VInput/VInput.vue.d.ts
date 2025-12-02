import { QInput } from 'quasar';
import { VInputProps, VInputSlots } from './VInput.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<VInputSlots> & VInputSlots;
    refs: {
        labelRef: HTMLSpanElement;
        inputRef: QInput | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (val: string | number | undefined) => any;
}, string, import('vue').PublicProps, Readonly<VInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((val: string | number | undefined) => any) | undefined;
}>, {
    required: boolean;
    borderRadius: string;
    fontSize: string;
    labelOutside: boolean;
    labelOnBorder: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    labelRef: HTMLSpanElement;
    inputRef: QInput | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VInput.vue.d.ts.map