import StatusLine from "../components/StatusLine.vue";

const btnExit = "TaskList";
const btnBack = "";
const buttons = { btnExit, btnBack };

const success = { status: "ok", text: "READY" };
const error = { status: "error", text: "NOT_READY" };
const systemStatus = { success, error };

/** Компонент StatusLine отображает кнопку Выход/Назад, наименование задачи и стату готовности принтера, а также кнопку Новое задание */
export default {
    title: "Tablet/StatusLine",
    component: StatusLine,
    tags: ["autodocs"],
    argTypes: {
        page: {
            description: "Выбор кнопки",
            options: Object.keys(buttons),
            mapping: buttons,
            control: {
                type: "radio",
                labels: {
                    btnExit: "Выход",
                    btnBack: "Назад",
                },
            },
        },
        textTask: {
            description: "Наименование задачи",
        },
        systemStatus: {
            description: "Состояние принтера",
            options: Object.keys(systemStatus),
            mapping: systemStatus,
            control: {
                type: "radio",
                labels: {
                    success: "Принтер готов",
                    error: "Ошибка",
                },
            },
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#ededed" },
                { name: "white", value: "#fff" },
            ],
        },
    },
};
export const ExitBtn = {
    args: {
        textTask: "Наименование задачи",
        page: "TaskList",
        systemStatus: {
            status: "ok",
            text: "READY",
        },
    },
};
export const ExitBtnPrinterError = {
    args: {
        textTask: "Наименование задачи",
        page: "TaskList",
        systemStatus: {
            status: "error",
            text: "NOT_READY",
        },
    },
};

export const BackBtn = {
    args: {
        textTask: "Задача 1",
        page: "",
        systemStatus: {
            status: "ok",
            text: "READY",
        },
    },
};
export const BackBtnPrinterError = {
    args: {
        textTask: "Задача 1",
        page: "",
        systemStatus: {
            status: "error",
            text: "NOT_READY",
        },
    },
};
