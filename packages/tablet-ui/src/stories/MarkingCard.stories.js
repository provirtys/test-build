import MarkingCard from "../components/MarkingCard.vue";

/** Компонент карточки маркировки */
export default {
    title: "Tablet/MarkingCard",
    component: MarkingCard,
    tags: ["autodocs"],
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

/** Прогресс маркировки */
export const Progress = {
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
    },
};

/** Идет агрегация */
export const goAggregation = {
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
    },
};

/** Повторная маркировка */
export const repeatAggregation = {
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
    },
};
