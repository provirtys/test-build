import CodeCard from '@components/CodeCard.vue';

const dataMatrix = 'dataMatrix';
const barcode = 'barcode';
const verified = 'verified';
const broken = 'broken';
const none = 'none';
const codeTypes = { dataMatrix, barcode };
const statuses = { none, verified, broken };

/** Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции.  */
export default {
    title: 'Tablet/CodeCard',
    component: CodeCard,
    argTypes: {
        codeType: {
            description: 'Тип кода',
            options: Object.keys(codeTypes),
            mapping: codeTypes,
            control: {
                type: 'radio',
                labels: {
                    dataMatrix: 'DataMatrix',
                    barcode: 'Barcode',
                },
            },
        },
        codeText: {
            description: 'Текст кода',
        },
        status: {
            description: 'Статус кода',
            options: Object.keys(statuses),
            mapping: statuses,
            control: {
                type: 'radio',
                labels: {
                    none: 'none',
                    verified: 'verified',
                    broken: 'broken',
                },
            },
        },
        time: {
            description: 'Время',
        },
        position: {
            description: 'Номер позиции',
        },
    },
    args: {
        codeType: 'dataMatrix',
        status: none,
        codeText: 'wv985fjs934',
        time: '12:34:56',
        position: 0,
    },
};

export const DataMatrix = {};

export const DataMatrixVerified = {
    args: {
        status: 'verified',
        position: 1,
    },
};

export const DataMatrixBroken = {
    args: {
        status: 'broken',
        position: 2,
    },
};

export const Barcode = {
    args: {
        codeType: 'barcode',
        position: 4,
    },
};

export const BarcodeVerified = {
    args: {
        codeType: 'barcode',
        status: 'verified',
        position: 5,
    },
};

export const BarcodeBroken = {
    args: {
        codeType: 'barcode',
        status: 'broken',
        position: 6,
    },
};
