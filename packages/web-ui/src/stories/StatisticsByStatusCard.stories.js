import StatisticsByStatusCard from "@components/StatisticsByStatusCard.vue";

export default {
    title: "web/StatisticsByStatusCard",
    component: StatisticsByStatusCard,
};

export const TotalJobs = {
    args: {
        title: "Заданий всего",
        number: 185,
    },
};

export const LabelingJobs = {
    args: {
        title: "Маркировка (заданий)",
        number: 64,
    },
};

export const CancelTools = {
    args: {
        title: "Отменено (изделий)",
        number: 370,
    },
};
