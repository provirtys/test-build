import { VDescriptionListProps } from './VDescriptionList.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {}) => any>>;
    refs: {};
    rootEl: HTMLDListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VDescriptionListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<VDescriptionListProps> & Readonly<{}>, {
    items: import('./VDescriptionList.types').VDescriptionListItem[];
    inline: boolean;
    isLight: boolean;
    alignCenter: boolean;
    termFontSize: string;
    definitionFontSize: string;
    contentInline: boolean;
    itemGap: string;
    contentGap: string;
    fontWeight: import('./VDescriptionList.types').FontWeight;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=VDescriptionList.vue.d.ts.map