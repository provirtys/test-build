import { VKeyButton } from '@base';

/** VKeyButton component with customizable number*/
export default {
    component: VKeyButton,
    argTypes: {
        value: {
            options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'back'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'select',
                labels: {
                    sm: 'Маленький',
                    md: 'Средний',
                    lg: 'Большой',
                },
            },
        },
    },
    args: {
        value: 0,
        size: 'lg',
    },
};

/** Кнопка с цифрой*/
export const NumberPrimary = {
    args: {
        value: '0',
    },
};
/** Кнопка с иконкой backspace*/
export const Backspace = {
    args: {
        value: 'back',
    },
};

/** Средний размер*/
export const Middle = {
    args: {
        value: '0',
        size: 'md',
    },
};

/** Маленький размер*/
export const Small = {
    args: {
        value: '0',
        size: 'sm',
    },
};
