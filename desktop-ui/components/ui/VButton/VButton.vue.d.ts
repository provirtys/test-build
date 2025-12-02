import { VButtonProps } from './VButton.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        menu?(_: {}): any;
    };
    refs: {};
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
    color: import('@integrity/base-ui').VButtonColor;
    borderRadius: string;
    icon: string;
    iconRight: string;
    unelevated: boolean;
    rounded: boolean;
    glossy: boolean;
    padding: string;
    noCaps: boolean;
    ripple: boolean | any | undefined;
    iconSize: string | number;
    textAlignment: import('@integrity/base-ui').VButtonTextAlignment;
    fitWidth: boolean;
    once: boolean;
    enableHold: boolean;
    centeredContent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VButton.vue.d.ts.map