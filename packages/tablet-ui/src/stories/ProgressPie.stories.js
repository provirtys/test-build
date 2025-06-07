import ProgressPie from "../components/ProgressPie.vue";

const small = "small";
const large = "large";
const sizes = { small, large };

/** Компонент отображает процент выполнения задачи/маркировки. Можно настроить размер компонента и процент выполнения */
export default {
    title: "Tablet/ProgressPie",
    component: ProgressPie,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "Размер компонентна",
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: "radio",
                labels: {
                    small: "small",
                    large: "large",
                },
            },
        },
        percentage: {
            description: "Процент выполнения",
        },
    },
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
                { name: "white", value: "#fff" },
            ],
        },
    },
};

export const Small0 = {
    args: {
        percentage: 0,
        size: "small",
    },
};
export const Small50 = {
    args: {
        percentage: 50,
        size: "small",
    },
};
export const Small100 = {
    args: {
        percentage: 100,
        size: "small",
    },
};
export const large0 = {
    args: {
        percentage: 0,
        size: "large",
    },
};
export const large50 = {
    args: {
        percentage: 50,
        size: "large",
    },
};
export const large100 = {
    args: {
        percentage: 100,
        size: "large",
    },
};
