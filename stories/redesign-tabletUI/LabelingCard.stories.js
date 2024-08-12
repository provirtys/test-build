import LabelingCard from "../../components/redesign-tabletUI/LabelingCard.vue";

/** Компонент карточки маркировки */
export default {
    title: "TabletUI-redesign/MarkingCard",
    component: LabelingCard,
    tags: ["autodocs"],
    argTypes: {
        isAggregationVisible: {
            description: 'Идет агрегация',
        },
        isAuto: {
            description: 'Автоматическая маркировка',
        },
        codeInfo: {
            description: 'Информация по объекту',
        },
        isCodes: {
            description: 'Статус кода',
        },
        isScan: {
            description: 'Статус кода',
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#ededed'},
                {name: 'light-gray-55', value: '#f1f1f1'},
                {name: 'light-gray', value: '#D9D9D9'},
            ]
        }
    }
};

/** Прогресс маркировки */
export const Progress = {
    args: {
        isAggregationVisible: false,
        isAuto: true,
        isCodes: true,
        isScan: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: '12:11:12',
            code: 'wv985fjs934',
            position: 10
        },
        statusCode: {
            status1: 'verified',
            codeType1: 'DataMatrix',
            status2: 'verified',
            codeType2: 'Code128'
        }
    },
};

/** Идет агрегация */
export const goAggregation = {
    args: {
        isAggregationVisible: true,
        isAuto: true,
        isCodes: true,
        isScan: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: '12:11:12',
            code: 'wv985fjs934',
            position: 10
        },
        statusCode: {
            status1: 'none',
            codeType1: 'Code128',
            status2: 'verified',
            codeType2: 'DataMatrix',
        }
    },
};

/** Повторная маркировка */
export const Print = {
    args: {
        isAggregationVisible: false,
        isAuto: false,
        isCodes: true,
        isScan: true,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: '12:11:12',
            code: 'wv985fjs934',
            position: 10
        },
    },
};
