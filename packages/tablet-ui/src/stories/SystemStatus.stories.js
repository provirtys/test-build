import SystemStatus from "@components/SystemStatus.vue";

const success = "success";
const error = "error";
const colors = { success, error };
/** Компонент статус принтера, используемый на планшетах. Можно регулировать цвет, тип сообщения */
export default {
    title: "Tablet/SystemStatus",
    component: SystemStatus,
    tags: ["autodocs"],
    argTypes: {
        color: {
            description: "Цвет индикатора",
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: "radio",
                labels: {
                    success: "Принтер готов",
                    error: "Ошибка",
                },
            },
        },
        statusType: {
            description: "Состояние принтера",
            options: ["READY", "NOT_READY"],
            control: { type: "select" },
        },
    },
    parameters: {
        backgrounds: {
            default: "bg-screen-grey",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
                { name: "bg-screen-grey", value: "#EDEDED" },
            ],
        },
    },
};

export const SystemStatusReady = {
    args: {
        statusType: "READY",
        color: "success",
    },
};
export const SystemStatusNotReady = {
    args: {
        statusType: "NOT_READY",
        color: "error",
    },
};
