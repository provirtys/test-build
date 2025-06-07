import InteractiveSystemStatus from "../../components/redesign/InteractiveSystemStatus.vue";

const success = "success";
const error = "error";
const warning = "warning";

const colors = { success, error, warning };
/** Компонент статус принтера, используемый на планшетах. Можно регулировать цвет, тип сообщения, состояния отладки, синхронизации. */
/** Состояние режима отладки делает кнопку активной для нажатия и добавляет к кнопке заливку,
 * которая отражает состояние системы.*/
export default {
    title: "TabletUI-redesign/InteractiveSystemStatus",
    component: InteractiveSystemStatus,
    tags: ["autodocs"],
    argTypes: {
        color: {
            description: "Цвет индикатора системы",
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: "radio",
                labels: {
                    success: "Система готова к работе",
                    error: "Система не готова к работе",
                    warning: "Настройка системы",
                },
            },
        },
        statusType: {
            description: "Состояние принтера",
            options: ["READY", "NOT_READY", "SETTING"],
            control: { type: "select" },
        },
        isSync: {
            description: "Состояние синхронизации",
            options: [true, false],
        },
        isActive: {
            description: "Режим отладки",
            options: [true, false],
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

export const StandardState = {
    args: {
        statusType: "READY",
        color: "success",
        isSync: false,
        isActive: false,
    },
};

export const Synchronization = {
    args: {
        statusType: "READY",
        color: "success",
        isSync: true,
        isActive: false,
    },
};
export const DebuggingMode = {
    args: {
        statusType: "READY",
        color: "success",
        isSync: true,
        isActive: true,
    },
};

export const SystemStatusNotReady = {
    args: {
        statusType: "NOT_READY",
        color: "error",
    },
};
export const SystemStatusSetting = {
    args: {
        statusType: "SETTING",
        color: "warning",
    },
};
