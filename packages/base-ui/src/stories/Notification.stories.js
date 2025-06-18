import Notification from "@components/Notification.vue";

/** Notification component with customizable size block*/
export default {
    title: "Notification",
    component: Notification,
};

/** Максимальный размер блока пустой */
export const BigEmptyBlock = {
    args: {
        isMin: false,
        text: "",
    },
};
/** Максимальный размер блока с текстом */
export const BigBlockText = {
    args: {
        isMin: false,
        text: "BigBlockText",
    },
};
/** Минимальный размер блока пустой */
export const SmallEmptyBlock = {
    args: {
        isMin: true,
        text: "",
    },
};
/** Минимальный размер блока с текстом */
export const SmallBlockText = {
    args: {
        isMin: true,
        text: "SmallBlockText",
    },
};
