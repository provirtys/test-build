import StatusIndicator from '@components/redesign/StatusIndicator.vue';

const info = 'info';
const success = 'success';
const error = 'error';
const warning = 'warning';

const colors = { info, warning, success, error };
/** Компонент для отображения статуса сервиса. Можно регулировать цвет и включать/отключать анимацию. */
export default {
    title: 'TabletUI-redesign/StatusIndicator',
    component: StatusIndicator,
    argTypes: {
        color: {
            description: 'Цвет статуса',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    info: 'Info (Синий)',
                    success: 'Success (Зеленый)',
                    error: 'Error (Красный)',
                    warning: 'Warning (Желтый)',
                },
            },
        },
        isAnimate: {
            description: 'Анимированное состояние иконки',
            options: [true, false],
        },
    },
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'dark', value: '#242a2b' },
                { name: 'white', value: '#ffffff' },
                { name: 'light', value: '#ededed' },
                { name: 'light-gray', value: '#f1f1f1' },
            ],
        },
    },
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
};

export const _Error = {
    args: {
        color: 'error',
        isAnimate: true,
    },
};
