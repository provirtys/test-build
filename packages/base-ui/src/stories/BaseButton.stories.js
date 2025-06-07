import BaseButton from "../components/BaseButton.vue";

/** Button component with customizable text and bg color*/
export default {
    title: "BaseButton",
    component: BaseButton,
    tags: ["autodocs"],
    isDisabled: false,
    argTypes: {
        size: {
            options: ["medium", "large", "full"],
            control: { type: "radio" },
        },
        background: {
            options: ["red", "white"],
            control: { type: "radio" },
        },
        color: {
            options: ["red", "white", "black"],
            control: { type: "radio" },
        },
        icon: {
            options: ["без логотипа", "/logo_white.svg"],
            control: { type: "radio" },
        },
    },
};

export const FixingTape = {
    args: {
        text: "ФИКСАЦИЯ ОТРЕЗКОВ ЛЕНТЫ",
        background: "red",
        color: "white",
        isDisabled: false,
    },
};

export const Primary = {
    args: {
        text: "ПРИСВОЕНИЕ ПАСПОРТА",
        background: "white",
        color: "red",
        isDisabled: false,
    },
};

export const Black = {
    args: {
        text: "ЧЕРНОВИКИ",
        background: "white",
        color: "black",
        isDisabled: false,
    },
};

export const FixingConnection = {
    args: {
        text: "Фиксация соединения",
        background: "white",
        color: "red",
        isDisabled: false,
    },
};

export const SaveDraft = {
    args: {
        text: "Сохранить черновик",
        background: "white",
        color: "black",
        isDisabled: false,
    },
};

export const SaveDatabase = {
    args: {
        text: "Сохранить в базу",
        background: "red",
        color: "white",
        isDisabled: false,
        size: "large",
        icon: "/logo_white.svg",
    },
};

export const SaveDataInactive = {
    args: {
        text: "Сохранить в базу",
        background: "red",
        color: "white",
        isDisabled: true,
        size: "large",
        icon: "/logo_white.svg",
    },
};

export const Save = {
    args: {
        text: "Сохранить в базу",
        background: "red",
        color: "white",
        isDisabled: false,
        size: "full",
    },
};
