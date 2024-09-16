import IconStatus from "../../components/redesign/IconStatus.vue";

const info = 'info'
const success = 'success'
const error = 'error'
const warning = 'warning'

const colors = {info, warning, success, error}
/** Компонент Иконка статуса. Можно регулировать цвет, анимированное состояние. */
export default {
    title: "TabletUI-redesign/IconStatus",
    component: IconStatus,
    tags: ["autodocs"],
    argTypes: {
        color: {
            description: 'Иконка статуса',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    info: 'Информация (Info)',
                    success: 'Система готова к работе (Success)',
                    error: 'Система не готова к работе (Error)',
                    warning: 'Настройка системы (Warning)'
                },
            },
        },
        isAnimate: {
            description: 'Анимированное состояние иконки',
            options: [true, false],
            control: {type: 'radio'},
        },
    },
    parameters: {
        backgrounds: {
            default: 'bg-screen-grey',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#f4f4f4'},
                {name: 'bg-screen-grey', value: '#EDEDED'},
            ]
        }
    }
};

export const Info = {
    args: {
        color: 'info',
        isAnimate: true,
    },
};
export const Warning = {
    args: {
        color: 'warning',
        isAnimate: true,
    },
};
export const Success = {
    args: {
        color: 'success',
        isAnimate: true,
    },
};export const Error = {
    args: {
        color: 'error',
        isAnimate: true,
    },
};
