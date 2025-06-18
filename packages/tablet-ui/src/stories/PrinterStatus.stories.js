import PrinterStatus from "@components/PrinterStatus.vue";

const success = "success";
const warning = "warning";
const error = "error";
const colors = { success, warning, error };
/** Компонент статус принтера, используемый на планшетах. Можно регулировать цвет, тип сообщения */
export default {
    title: "Tablet/PrinterStatus",
    component: PrinterStatus,
    argTypes: {
        color: {
            description: "Цвет индикатора",
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: "radio",
                labels: {
                    success: "success",
                    warning: "warning",
                    error: "error",
                },
            },
        },
        statusType: {
            description: "Состояние принтера",
            options: ["READY", "NOT_READY", "DISCONNECTED"],
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

export const PrinterStatusReady = {
    args: {
        statusType: "READY",
        color: "success",
    },
};
export const PrinterStatusNotReady = {
    args: {
        statusType: "NOT_READY",
        color: "error",
    },
};
export const PrinterStatusDisconnected = {
    args: {
        statusType: "DISCONNECTED",
        color: "warning",
    },
};
