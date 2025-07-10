import { StatusCode } from './index.js';

const none = '';

const dataMatrix = 'dataMatrix';
const barcode = 'barcode';

const active = 'active';
const processing = 'processing';

const info = 'info';
const success = 'success';
const error = 'error';
const warning = 'warning';

const colors = { none, info, warning, success, error };
const types = { dataMatrix, barcode };
const statuses = { none, active, processing };

/** Компонент отображает иконку с кодом и её статус. Поддерживает DataMatrix и Barcode, 4 цветовых палитры (синий, желтый, зеленый, красный) и статус. Статус показывается, если задан цвет. */
export default {
    component: StatusCode,
    argTypes: {
        type: {
            description: 'Тип кода',
            options: Object.keys(types),
            mapping: types,
            control: {
                type: 'radio',
                labels: {
                    dataMatrix: 'DataMatrix',
                    barcode: 'Barcode',
                },
            },
        },
        color: {
            description: 'Цвет статуса',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'select',
                labels: {
                    none: 'Нет',
                    info: 'Синий',
                    success: 'Зеленый',
                    error: 'Красный',
                    warning: 'Желтый',
                },
            },
        },
        status: {
            description: 'Статус кода',
            options: Object.keys(statuses),
            mapping: statuses,
            control: {
                type: 'select',
                labels: {
                    none: 'Скрыто',
                    active: 'Отображается',
                    processing: 'В процессе',
                },
            },
        },
    },
    args: {
        type: dataMatrix,
        color: '',
        status: '',
    },
    globals: {
        backgrounds: { value: 'dark' },
    },
};

export const DataMatrix = {
    name: 'DataMatrix',
};

export const Barcode = {
    args: {
        type: 'barcode',
    },
};

export const ColorSuccessSimple = {
    args: {
        color: 'success',
    },
};

export const ColorSuccessWithPoint = {
    args: {
        color: 'success',
        status: 'active',
    },
};

export const ColorSuccess = {
    args: {
        color: 'success',
        status: 'processing',
    },
};

export const ColorError = {
    args: {
        color: 'error',
        status: 'processing',
    },
};

export const ColorInfo = {
    args: {
        color: 'info',
        status: 'processing',
    },
};

export const ColorWarning = {
    args: {
        color: 'warning',
        status: 'processing',
    },
};
