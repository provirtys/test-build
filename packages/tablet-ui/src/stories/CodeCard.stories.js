import CodeCard from '@components/CodeCard.vue';

const dataMatrix = 'DataMatrix';
const code128 = 'Code128';
const verified = 'verified';
const broken = 'broken';
const none = 'none';
const codeTypes = { dataMatrix, code128 };
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
                    code128: 'Code128',
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

export const Code128 = {
    args: {
        codeType: 'code128',
        position: 4,
    },
};

export const Code128Verified = {
    args: {
        codeType: 'code128',
        status: 'verified',
        position: 5,
    },
};

export const Code128Broken = {
    args: {
        codeType: 'code128',
        status: 'broken',
        position: 6,
    },
};
