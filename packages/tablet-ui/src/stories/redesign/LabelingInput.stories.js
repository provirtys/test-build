import LabelingInput from "@components/redesign/LabelingInput.vue";

// Размеры кнопки
const large = "large";
const medium = "medium";
const small = "small";
const extraSmall = "extra-small";

const sizes = { large, medium, small, extraSmall };
/** Компонент input для ввода количества продукции в новой задаче (Tablet) */
export default {
    title: "TabletUI-redesign/LabelingInput",
    component: LabelingInput,
    tags: ["autodocs"],
    argTypes: {
        height: {
            description: "Размер поля ввода",
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: "radio",
                labels: {
                    large: "Large (L)",
                    medium: "Medium (M)",
                    small: "Small (S)",
                    extraSmall: "Extra small (XS)",
                },
            },
        },
        isIcon: {
            description: "Варианты с иконкой/без иконки",
            options: [true, false],
            control: { type: "radio" },
        },
        label: {
            description: "label",
        },
    },
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "white", value: "#ffffff" },
                { name: "light", value: "#ededed" },
                { name: "light-gray", value: "#f1f1f1" },
            ],
        },
    },
};
export const InputLargeL = {
    args: {
        height: "large",
        label: "Label",
    },
};
export const InputMediumM = {
    args: {
        height: "medium",
        label: "Label",
    },
};
export const InputSmallS = {
    args: {
        height: "small",
        label: "Label",
    },
};
export const InputExtraSmallXS = {
    args: {
        height: "extra-small",
        label: "Label",
    },
};
