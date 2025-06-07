import BaseInput from "../components/BaseInput.vue";

/** Компонент input для ввода количества продукции в новой задаче (Tablet) */
export default {
    title: "Tablet/BaseInput",
    component: BaseInput,
    tags: ["autodocs"],
    argTypes: {
        parameters: {
            backgrounds: {
                default: "white",
                values: [
                    { name: "dark", value: "#242a2b" },
                    { name: "white", value: "#ffffff" },
                    { name: "light", value: "#ededed" },
                ],
            },
        },
    },
};
export const InputEmpty = {
    args: {},
};
