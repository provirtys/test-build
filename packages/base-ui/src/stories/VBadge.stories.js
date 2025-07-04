import { VBadge } from '@base';

// Размеры
const lg = 'lg';
const md = 'md';
const sm = 'sm';

//Цвета
const success = 'success';
const error = 'error';
const info = 'info';
const warning = 'warning';

const sizes = { lg, md, sm };
const colors = { success, error, info, warning };

export default {
    title: 'VBadge',
    component: VBadge,
    argTypes: {
        label: {
            description: 'Текст элемента',
        },
        size: {
            description: 'Размер элемента',
            options: Object.keys(sizes),
            control: {
                type: 'select',
                labels: {
                    lg: 'Большой',
                    md: 'Средний',
                    sm: 'Маленький',
                },
            },
        },
        color: {
            description: 'Цвет элемента',
            options: Object.keys(colors),
            control: {
                type: 'select',
                labels: {
                    success: 'Зеленый',
                    error: 'Красный',
                    info: 'Синий',
                    warning: 'Желтый',
                },
            },
        },
        isInverted: {
            description: 'Поменять местами цвета',
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        label: 'Название',
        size: lg,
        color: info,
        isInverted: false,
    },
};

export const Large = {
    args: {
        label: 'Новое',
        size: lg,
    },
};

export const Medium = {
    args: {
        label: 'Новое',
        size: md,
    },
};

export const Small = {
    args: {
        label: 'Новое',
        size: sm,
    },
};

export const ColorInfoInverted = {
    args: {
        label: 'Новое',
        isInverted: true,
    },
};

export const ColorSuccess = {
    args: {
        label: 'Завершено',
        color: 'success',
    },
};

export const ColorSuccessInverted = {
    args: {
        label: 'Завершено',
        color: 'success',
        isInverted: true,
    },
};

export const ColorError = {
    args: {
        label: 'Отменено',
        color: 'error',
    },
};

export const ColorErrorInverted = {
    args: {
        label: 'Отменено',
        color: 'error',
        isInverted: true,
    },
};

export const ColorWarning = {
    args: {
        label: 'Маркировка',
        color: 'warning',
    },
};

export const ColorWarningInverted = {
    args: {
        label: 'Маркировка',
        color: 'warning',
        isInverted: true,
    },
};
