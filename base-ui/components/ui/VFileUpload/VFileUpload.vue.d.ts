import { VFileUploadProps } from './VFileUpload.types';
type __VLS_Props = VFileUploadProps;
type __VLS_PublicProps = {
    modelValue?: File;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: File) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: File) => any) | undefined;
}>, {
    label: string;
    formats: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=VFileUpload.vue.d.ts.map