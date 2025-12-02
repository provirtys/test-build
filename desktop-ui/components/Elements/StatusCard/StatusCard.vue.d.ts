import { StatusCardProps, TogglerStatus } from './StatusCard.types';
type __VLS_Props = StatusCardProps;
type __VLS_PublicProps = {
    'togglerStatus'?: TogglerStatus;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:togglerStatus": (value: TogglerStatus) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:togglerStatus"?: ((value: TogglerStatus) => any) | undefined;
}>, {
    startColor: string;
    behindColor: string;
    borderRadius: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=StatusCard.vue.d.ts.map