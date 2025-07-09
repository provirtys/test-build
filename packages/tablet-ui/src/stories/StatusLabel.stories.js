import StatusLabel from '@components/StatusLabel.vue';

const success = 'success';
const error = 'error';
const warning = 'warning';
const info = 'info';

const colors = { success, error, warning, info };
/** Компонент статус принтера, используемый на планшетах. Можно регулировать цвет, тип сообщения, состояния отладки, синхронизации. */
/** Состояние режима отладки делает кнопку активной для нажатия и добавляет к кнопке заливку,
 * которая отражает состояние системы.*/
export default {
    title: 'Tablet/StatusLabel',
    component: StatusLabel,
    argTypes: {
        color: {
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    success: 'Зеленый',
                    error: 'Красный',
                    warning: 'Желтый',
                    info: 'Синий',
                },
            },
        },
        isAnimate: {
            options: [true, false],
        },
        showBackground: {
            options: [true, false],
        },
    },
    args: {
        label: 'Готово',
        color: 'success',
        isAnimate: false,
        showBackground: false,
    },
};

export const StandardSuccess = {
    args: {
        label: 'Готово',
        color: 'success',
    },
};

export const StandardSuccessAnimating = {
    args: {
        label: 'Готово',
        color: 'success',
        isAnimate: true,
        showBackground: false,
    },
};

export const StandardSuccessAnimatingWithBackground = {
    args: {
        label: 'Готово',
        color: 'success',
        isAnimate: true,
        showBackground: true,
    },
};

export const StandardError = {
    args: {
        label: 'Ошибка',
        color: 'error',
    },
};

export const StandardWarning = {
    args: {
        label: 'В процессе',
        color: 'warning',
    },
};

export const StandardInfo = {
    args: {
        label: 'Инфо',
        color: 'info',
    },
};
