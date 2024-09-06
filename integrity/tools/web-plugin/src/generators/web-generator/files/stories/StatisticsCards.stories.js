import StatisticsCards from "../components/StatisticsCards.vue"

export default {
    title: "web/StatisticsCards",
    component: StatisticsCards,
    tags: ["autodocs"]
};


export const PrimaryStatistics = {
    args: {
        jobCards: [
            {
                id: 1,
                title: 'Заданий всего',
                number: 420
            },
            {
                id: 2,
                title: 'Создано (заданий)',
                number: 81
            },
            {
                id: 3,
                title: 'Маркировка (заданий)',
                number: 57
            },
            {
                id: 4,
                title: 'Завершено (заданий)',
                number: 258
            },
            {
                id: 5,
                title: 'Отменено (заданий)',
                number: 24
            }
        ],
        toolCards: [
            {
              id: 1,
              title: 'Изделий всего',
              number: 12850
            },
            {
              id: 2,
              title: 'Создано (изделий)',
              number: 2208
            },
            {
              id: 3,
              title: 'Маркировка (изделий)',
              number: 3175
            },
            {
              id: 4,
              title: 'Завершено (изделий)',
              number: 6520
            },
            {
              id: 5,
              title: 'Отменено (изделий)',
              number: 947
            }
          ]
    },
};
