import MarkingCardSlot from "@components/MarkingCardSlot.vue";

const one = "1";
const two = "2";
const three = "3";
const four = "4";
const five = "5";
const btnTypes = { one, two, three, four, five };
/** Компонент карточки маркировки c кнопками. Можно настраивать кнопки в заваисимотри от этапа маркировки*/
export default {
    title: "Tablet/MarkingCardSlot",
    component: MarkingCardSlot,
    argTypes: {
        isAggregationVisible: {
            description: "Идет агрегация",
        },
        isProgressPieVisible: {
            description: "Прогресс",
        },
        isRepeatVisible: {
            description: "Повторная маркировка",
        },
        codeInfo: {
            description: "Информация по объекту",
        },
        btn: {
            description: "Кнопка",
            options: Object.keys(btnTypes),
            mapping: btnTypes,
            control: {
                type: "radio",
                labels: {
                    one: "Начало агрегации",
                    two: "Идет агрегация Сканирование кода",
                    three: "Брак маркировки Сканирование",
                    four: "Брак маркировки Подтверждение",
                    five: "Завершение агрегации",
                },
            },
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#ededed" },
            ],
        },
    },
};

/** Начало агрегации */
export const ProgressSlot1 = {
    args: {
        isAggregationVisible: false,
        isProgressPieVisible: true,
        isRepeatVisible: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "1",
    },
};
/**Идет агрегация - Брак маркировки/Повторить маркировку */
export const ProgressSlot2 = {
    args: {
        isAggregationVisible: true,
        isProgressPieVisible: false,
        isRepeatVisible: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "2",
    },
};
/** Идет агрегация - Брак маркировки/Повторить маркировку */
export const ProgressSlot3 = {
    args: {
        isAggregationVisible: true,
        isProgressPieVisible: false,
        isRepeatVisible: true,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "2",
    },
};
/** Брак маркировки - Сканировать */
export const ProgressSlot4 = {
    args: {
        isAggregationVisible: true,
        isProgressPieVisible: false,
        isRepeatVisible: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "3",
    },
};
/** Брак маркировки - Подтвердить */
export const ProgressSlot5 = {
    args: {
        isAggregationVisible: true,
        isProgressPieVisible: false,
        isRepeatVisible: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "4",
    },
};
/** Завершение агрегации */
export const ProgressSlot6 = {
    args: {
        isAggregationVisible: true,
        isProgressPieVisible: false,
        isRepeatVisible: false,
        codeInfo: {
            labeled: 50,
            total: 120,
            ts: "12:11:12",
            code: "wv985fjs934",
            position: 10,
        },
        btn: "5",
    },
};
