import MarkingCodeCard from "../../components/redesign/MarkingCodeCard.vue";

const dataMatrix = 'DataMatrix'
const code128 = 'Code128'

const verified = 'verified'
const broken = 'broken'
const none = 'none'
const synced = 'synced'

const info = 'info'
const success = 'success'
const error = 'error'
const warning = 'warning'

const codeTypes = {dataMatrix, code128}
const statuses = {verified, synced, broken, none}
const colors = {info, warning, success, error}
/** Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции.  */
export default {
    title: "TabletUI-redesign/MarkingCodeCard",
    component: MarkingCodeCard,
    tags: ["autodocs"],
    argTypes: {
        codeText: {
            description: 'Текст кода',
        },
        template: {
            description: 'Текст кода',
        },
        time: {
            description: 'Время',
        },
        position: {
            description: 'Номер позиции',
        },
        isErrorLabeling: {
            description: 'Ошибка маркировки',
            options: [true, false],
            control: {type: 'radio'},
        },
      isAggregation: {
            description: 'Группа кодов (агрегация)',
            options: [true, false],
            control: {type: 'radio'},
        },
        codesGroup: {
            description: 'Коды, входящие в группу кодов (агрегации)',
        },
        noCodes: {
            description: 'No codes',
            options: [true, false],
            control: {type: 'radio'},
        },
        status1: {
            description: 'Статус',
            options: Object.keys(statuses),
            mapping: codeTypes,
            control: {
                type: 'radio',
                labels: {
                    none: 'none',
                    synced: 'synced',
                    verified: 'verified',
                    broken: 'broken',
                },
            },
        },
        codeType1: {
            description: 'Тип кода',
            options: Object.keys(codeTypes),
            mapping: codeTypes,
            control: {
                type: 'radio',
                labels: {
                    DataMatrix: 'dataMatrix',
                    Code128: 'Code128',
                },
            },
        },
        color1: {
            description: 'Иконка статуса',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    info: 'Info',
                    success: 'Success',
                    error: 'Error',
                    warning: 'Warning'
                },
            },
        },
        secondCode: {
            description: 'Количество кодов',
            options: [true, false],
            control: {type: 'radio'},
        },
        status2: {
            description: 'Статус',
            options: Object.keys(statuses),
            mapping: codeTypes,
            control: {
                type: 'radio',
                labels: {
                    none: 'none',
                    synced: 'synced',
                    verified: 'verified',
                    broken: 'broken',
                },
            },
        },
          codeType2: {
            description: 'Тип кода',
            options: Object.keys(codeTypes),
            mapping: codeTypes,
            control: {
                type: 'radio',
                labels: {
                    DataMatrix: 'dataMatrix',
                    Code128: 'Code128',
                },
            },
        },
          color2: {
            description: 'Иконка статуса',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    info: 'Info',
                    success: 'Success',
                    error: 'Error',
                    warning: 'Warning'
                },
            },
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#f4f4f4'},
                {name: 'white', value: '#fff'},
                {name: 'light-gray-55', value: '#f1f1f1'},
            ]
        }
    }
};

export const DataMatrixAndBarcode = {
    args: {
        codeText: 'wv985fjs934',
        time: '00:00:00',
        position: 0,
        template: 'Integrity',
        codesGroup: '#'

    },
};
export const Aggregation = {
    args: {
        codeText: 'wv985fjs934',
        time: '00:00:00',
        position: 0,
        template: 'Integrity',
        isAggregation: true,
        codesGroup: '1-5'
    },
};
export const BarcodeAndDataMatrix = {
    args: {
        codeText: 'wv985fjs934',
        time: '00:00:00',
        position: 0,
        template: 'Integrity 0',
        codesGroup: '#'

    },
};
export const DataMatrixVerifiedSynced = {
    args: {
        codeText: 'wv985fjs935',
        time: '00:01:01',
        position: 1,
        template: 'Integrity 1',
        codesGroup: '#'

    },
};
export const DataMatrixVerified = {
    args: {
        codeText: 'wv985fjs935',
        time: '00:01:01',
        position: 1,
        template: 'Integrity 1',
        codesGroup: '#'

    },
};
export const DataMatrixBroken = {
    args: {
        codeText: 'wv985fjs936',
        status: 'broken',
        time: '00:02:02',
        position: 2,
        template: 'Integrity 2',
        codesGroup: '#'

    },
};
export const Code128Primary = {
    args: {
        codeText: 'wv985fjs937',
        status: 'none',
        time: '00:04:04',
        position: 4,
        template: 'Integrity 4',
        codesGroup: '#'

    },
};
export const Code128Verified = {
    args: {
        codeType: 'code128',
        codeText: 'wv985fjs938',
        status: 'verified',
        time: '00:05:05',
        position: 5,
        template: 'Integrity 5',
        codesGroup: '#'

    },
};
export const Code128Broken = {
    args: {
        codeType: 'code128',
        codeText: 'wv985fjs939',
        status: 'broken',
        time: '00:06:06',
        position: 6,
        template: 'Integrity 6',
        codesGroup: '#'

    },
};
