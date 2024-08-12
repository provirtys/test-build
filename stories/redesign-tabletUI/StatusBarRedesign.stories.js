import StatusBarRedesign from "../../components/redesign-tabletUI/StatusBarRedesign.vue";

const btnExit = 'TaskList'
const btnBack = ''
const buttons = {btnExit, btnBack}

const StandardState = {
    status: 'success',
    text: 'READY',
    sync: false,
    active: false
}
const Synchronization = {
    status: 'success',
    text: 'READY',
    sync: true,
    active: false}
const DebuggingMode = {
    status: 'success',
    text: 'READY',
    sync: true,
    active: true}

const StandardStateSettings = {
    status: 'warning',
    text: 'SETTING',
    sync: false,
    active: false
}
const SynchronizationSettings = {
    status: 'warning',
    text: 'SETTING',
    sync: true,
    active: false}
const DebuggingModeSettings = {
    status: 'warning',
    text: 'SETTING',
    sync: true,
    active: true}
const StandardStateError = {
    status: 'error',
    text: 'NOT_READY',
    sync: false,
    active: false
}
const SynchronizationError = {
    status: 'error',
    text: 'NOT_READY',
    sync: true,
    active: false}
const DebuggingModeError = {
    status: 'error',
    text: 'NOT_READY',
    sync: true,
    active: true}
const systemStatus = {StandardState, Synchronization, DebuggingMode, StandardStateSettings, SynchronizationSettings, DebuggingModeSettings, StandardStateError, SynchronizationError, DebuggingModeError}

/** Компонент StatusBar отображает кнопку Выход/Назад, Список задач/Актикул изделия и статус готовности принтера, а также кнопку Настройки */
export default {
    title: "TabletUI-redesign/StatusBar",
    component: StatusBarRedesign,
    tags: ["autodocs"],
    argTypes: {
        page: {
            description: 'Выбор кнопки',
            options: Object.keys(buttons),
            mapping: buttons,
            control: {
                type: 'radio',
                labels: {
                    btnExit: 'Выход',
                    btnBack: 'Назад'
                },
            },
        },
        textTask: {
            description: 'Наименование задачи',
        },
        systemStatus: {
            description: 'Состояние принтера',
            options: Object.keys(systemStatus),
            mapping: systemStatus,
            control: {
                type: 'radio',
                labels: {
                    StandardState: 'Стандартное сосотояние',
                    Synchronization: 'Синхронизация',
                    DebuggingMode: 'Режим отладки',
                    StandardStateSettings: 'Стандартное сосотояние - Настройки',
                    SynchronizationSettings: 'Синхронизация - Настройки',
                    DebuggingModeSettings: 'Режим отладки - Настройки',
                    StandardStateError: 'Стандартное сосотояние - Ошибка',
                    SynchronizationError: 'Синхронизация - Ошибка',
                    DebuggingModeError: 'Режим отладки - Ошибка',
                },
            },
        },
        isDisabled: {
            description: 'Неактивное состояние.',
            options: [true, false],
            control: {type: 'radio'},
        },
    },

    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#ededed'},
                {name: 'white', value: '#fff'},
            ]
        }
    }
};
export const ExitBtn = {
    args: {
        // nameButton: 'back',
        textTask: 'Список заданий',
        page: 'TaskList',
        systemStatus: {
            status: 'success',
            text: 'READY',
            sync: false,
            active: true
        },
        isDisabled: false,

    },
};
export const ExitBtnPrinterError = {
    args: {
        // nameButton: 'back',
        textTask: 'Список заданий',
        page: 'TaskList',
        systemStatus: {
            status: 'error',
            text: 'NOT_READY',
            sync: true,
            active: true
        },
        isDisabled: true,
    },
};

export const BackBtn = {
    args: {
        // nameButton: 'exit',
        textTask: 'Актикул изделия',
        page: '',
        systemStatus: {
            status: 'ok',
            text: 'READY'
        }
    },
};
export const BackBtnPrinterError = {
    args: {
        // nameButton: 'exit',
        textTask: 'Актикул изделия',
        page: '',
        systemStatus: {
            status: 'error',
            text: 'NOT_READY',
            sync: true,
            active: false
        },
        isDisabled: true,
    },
};
export const BackBtnSetting = {
    args: {
        // nameButton: 'exit',
        textTask: 'Актикул изделия',
        page: '',
        systemStatus: {
            status: 'warning',
            text: 'SETTING'
        }
    },
};
export const BackBtnPrinterSetting = {
    args: {
        // nameButton: 'exit',
        textTask: 'Актикул изделия',
        page: '',
        systemStatus: {
            status: 'warning',
            text: 'SETTING',
            sync: true,
            active: false
        },
        isDisabled: true,
    },
};
