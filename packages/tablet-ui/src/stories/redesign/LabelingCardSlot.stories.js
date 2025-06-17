import LabelingCardSlot from "@components/redesign/LabelingCardSlot.vue";

const one = "1";
const two = "2";
const three = "3";
const four = "4";
const five = "5";
const btnTypes = { one, two, three, four, five };
/** Компонент карточки маркировки c кнопками. Можно настраивать кнопки в заваисимотри от этапа маркировки*/
export default {
    title: "TabletUI-redesign/LabelingCardSlot",
    component: LabelingCardSlot,
    tags: ["autodocs"],
    argTypes: {
        isAggregationVisible: {
            description: "Идет агрегация",
        },
        isAutoLabeling: {
            description: "Автоматическая маркировка",
        },
        btn: {
            description: "Кнопка",
            options: Object.keys(btnTypes),
            mapping: btnTypes,
            control: {
                type: "radio",
                labels: {
                    one: "Начать агрегацию Начать маркировку",
                    two: "Новое задание Продолжить маркировку",
                    three: "Закончить агрегацию",
                    four: "Печать этикетки Начать маркировку",
                    five: "Брак маркировки Подтвердить",
                },
            },
        },
        codeInfo: {
            description: "Информация по объекту",
        },
    },
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "white", value: "#ffffff" },
                { name: "light", value: "#ededed" },
                { name: "light-gray", value: "#f1f1f1" },
            ],
        },
    },
};

/** Начало агрегации/маркировки */
export const ProgressSlot1 = {
    args: {
        isAggregationVisible: false,
        isAutoLabeling: false,
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

export const ProgressSlot2 = {
    args: {
        isAggregationVisible: false,
        isAutoLabeling: false,
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
/**Закончить агрегацию*/
export const ProgressSlot3 = {
    args: {
        isAggregationVisible: false,
        isAutoLabeling: false,
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

export const ProgressSlot4 = {
    args: {
        isAggregationVisible: false,
        isAutoLabeling: true,
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
export const ProgressSlot5 = {
    args: {
        isAggregationVisible: false,
        isAutoLabeling: true,
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
