import Notification from "../../components/redesign/Notification.vue";

/**
 * Компонент отображает информацию, на которую стоит обратить внимание пользователю. Содержит в себе иконку и текст. Можно настраивать цвет иконки, цвет и прозрачность заднего фона.
 */
export default {
    title: "TabletUI-redesign/Notification",
    component: Notification,
    tags: ["autodocs"],
    argTypes: {
        bgColor: {
            description: "Задний цвет фона",
        },
        iconColor: {
            description: "Цвет иконки",
        },
        text: {
            description: "Текст уведомления",
        },
        isTransparent: {
            description: "Прозрачность фона",
            control: { type: "boolean" },
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
                { name: "red", value: "rgba(211, 20, 28, 0.85)" },
            ],
        },
    },
};

export const Info = {
    args: {
        bgColor: "#206dc8",
        iconColor: "#206dc8",
        text: "Проверьте количество продукции",
        isTransparent: true,
    },
};

export const ErrorRed = {
    args: {
        bgColor: "#c83420",
        iconColor: "#c83420",
        text: "Код не подтвержден",
        isTransparent: true,
    },
};

export const ErrorWhite = {
    args: {
        bgColor: "#f1f1f1",
        iconColor: "#c83420",
        text: "Не все коды подтверждены",
        isTransparent: false,
    },
    parameters: {
        backgrounds: {
            default: "red",
        },
    },
};
