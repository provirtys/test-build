import { QBtnProps } from 'quasar';
import { VButtonProps } from './VButton.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        menu?(_: {}): any;
    };
    refs: {
        btnRef: {
            $props: import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & QBtnProps;
            $slots: import('quasar').QBtnSlots;
        } | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    action: () => any;
}, string, import('vue').PublicProps, Readonly<VButtonProps> & Readonly<{
    onAction?: (() => any) | undefined;
}>, {
    push: boolean;
    flat: boolean;
    icon: string;
    iconRight: string;
    unelevated: boolean;
    rounded: boolean;
    glossy: boolean;
    padding: string;
    color: import('../../..').VButtonColor;
    noCaps: boolean;
    ripple: boolean | any | undefined;
    iconSize: string | number;
    textAlignment: import('../../..').VButtonTextAlignment;
    fitWidth: boolean;
    once: boolean;
    enableHold: boolean;
    borderRadius: string;
    centeredContent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    btnRef: {
        $props: import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & QBtnProps;
        $slots: import('quasar').QBtnSlots;
    } | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VButton.vue.d.ts.map