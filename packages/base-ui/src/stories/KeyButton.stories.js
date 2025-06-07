import KeyButton from "../components/KeyButton.vue";

/** KeyButton component with customizable number*/
export default {
    title: "KeyButton",
    component: KeyButton,
    tags: ["autodocs"],
    argTypes: {
        value: {
            options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Back"],
            control: { type: "select" },
        },
    },
};

/** Кнопка Number*/
export const NumberPrimary = {
    args: {
        value: "0",
    },
};
/** Кнопка Backspace*/
export const Backspace = {
    args: {
        value: "Back",
    },
};
