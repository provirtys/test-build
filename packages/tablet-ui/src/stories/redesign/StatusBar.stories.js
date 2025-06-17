import StatusBar from "@components/redesign/StatusBar.vue";

const btnExit = "TaskList";
const btnBack = "";
const _buttons = { btnExit, btnBack };

const home = "home";
const logoutDark = "logout-dark";
const arrowBackRedesign = "arrowBackRedesign";
const icons = { home, logoutDark, arrowBackRedesign };

const StandardState = {
    status: "success",
    text: "READY",
    sync: false,
    active: false,
};
const Synchronization = {
    status: "success",
    text: "READY",
    sync: true,
    active: false,
};
const DebuggingMode = {
    status: "success",
    text: "READY",
    sync: true,
    active: true,
};

const StandardStateSettings = {
    status: "warning",
    text: "SETTING",
    sync: false,
    active: false,
};
const SynchronizationSettings = {
    status: "warning",
    text: "SETTING",
    sync: true,
    active: false,
};
const DebuggingModeSettings = {
    status: "warning",
    text: "SETTING",
    sync: true,
    active: true,
};
const StandardStateError = {
    status: "error",
    text: "NOT_READY",
    sync: false,
    active: false,
};
const SynchronizationError = {
    status: "error",
    text: "NOT_READY",
    sync: true,
    active: false,
};
const DebuggingModeError = {
    status: "error",
    text: "NOT_READY",
    sync: true,
    active: true,
};
const systemStatus = {
    StandardState,
    Synchronization,
    DebuggingMode,
    StandardStateSettings,
    SynchronizationSettings,
    DebuggingModeSettings,
    StandardStateError,
    SynchronizationError,
    DebuggingModeError,
};

/** Компонент StatusBar отображает кнопку Выход/Назад, Список задач/Актикул изделия и статус готовности принтера,
 * а также кнопку Настройки. Для кнопки Назад есть два варианта иконки - home/arrow */
export default {
    title: "TabletUI-redesign/StatusBar",
    component: StatusBar,
    tags: ["autodocs"],
    argTypes: {
        btnIcon: {
            description: "Иконка кнопки Назад",
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "radio",
                labels: {
                    home: "Домой",
                    logoutDark: "Выйти",
                    arrowBackRedesign: "Назад",
                },
            },
        },
        title: {
            description: "Наименование задачи",
        },
        systemStatus: {
            description: "Состояние принтера",
            options: Object.keys(systemStatus),
            mapping: systemStatus,
            control: {
                type: "radio",
                labels: {
                    StandardState: "Стандартное сосотояние",
                    Synchronization: "Синхронизация",
                    DebuggingMode: "Режим отладки",
                    StandardStateSettings: "Стандартное сосотояние - Настройки",
                    SynchronizationSettings: "Синхронизация - Настройки",
                    DebuggingModeSettings: "Режим отладки - Настройки",
                    StandardStateError: "Стандартное сосотояние - Ошибка",
                    SynchronizationError: "Синхронизация - Ошибка",
                    DebuggingModeError: "Режим отладки - Ошибка",
                },
            },
        },
        isDisabled: {
            description: "Неактивное состояние.",
            options: [true, false],
            control: { type: "radio" },
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#ededed" },
                { name: "white", value: "#fff" },
                { name: "light-gray-55", value: "#f1f1f1" },
            ],
        },
    },
};

export const ExitBtn = {
    args: {
        title: "Список заданий",
        btnText: "Выйти",
        btnIcon: "logout-dark",
        systemStatus: {
            status: "success",
            text: "READY",
            sync: false,
            active: true,
        },
    },
};

export const ExitBtnPrinterError = {
    args: {
        title: "Список заданий",
        btnText: "Выйти",
        btnIcon: "logout-dark",
        systemStatus: {
            status: "error",
            text: "NOT_READY",
            sync: true,
            active: true,
        },
        isDisabled: true,
    },
};

export const BackBtn = {
    args: {
        title: "Артикул изделия",
        btnText: "Назад",
        btnIcon: arrowBackRedesign,
        systemStatus: {
            status: "ok",
            text: "READY",
        },
    },
};

export const BackBtnPrinterError = {
    args: {
        title: "Артикул изделия",
        systemStatus: {
            status: "error",
            text: "NOT_READY",
            sync: true,
            active: false,
        },
        isDisabled: true,
    },
};

export const BackBtnSetting = {
    args: {
        title: "Артикул изделия",
        systemStatus: {
            status: "warning",
            text: "SETTING",
        },
    },
};

export const BackBtnPrinterSetting = {
    args: {
        title: "Артикул изделия",
        systemStatus: {
            status: "warning",
            text: "SETTING",
            sync: true,
            active: false,
        },
        isDisabled: true,
    },
};

export const HomeBtn = {
    args: {
        title: "Артикул изделия",
        btnText: "Назад",
        btnIcon: home,
        systemStatus: {
            status: "ok",
            text: "READY",
        },
    },
};
