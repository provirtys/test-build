import BarChartTwoGraphs from "../components/BarChartTwoGraphs.vue";

/** Экран с гафиками отображает информацию о наличие/отстуствии и количестве ошибок на длине изделия. */
export default {
    title: "Tablet/BarChartTwoGraphs",
    component: BarChartTwoGraphs,
    // tags: ["autodocs"],
    argTypes: {
        codes: {
            description: 'Список кодов маркироки',
        },
        lastMeter: {
            description: 'Последний метр изделия',
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#f4f4f4'},
                {name: 'white', value: '#fff'},
            ]
        }
    }
};
export const BarChartPrimaryGraphs1code = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'},          ],
        lastMeter: 1
    },
};
export const BarChartPrimaryGraphs2code = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'},   {code: 3, status: 'printed'},        ],
        lastMeter: 2
    },
};
export const BarChartPrimaryGraphs3code = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'},   {code: 3, status: 'printed'},   {code: 3, status: 'printed'},       ],
        lastMeter: 3
    },
};
export const BarChartPrimaryGraphs4code = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'},   {code: 3, status: 'printed'},   {code: 3, status: 'printed'},  {code: 3, status: 'printed'},     ],
        lastMeter: 4
    },
};

export const BarChartPrimaryGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},            ],
        lastMeter: 3
    },
};
let status = 'ok';
export const BarChart18MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'},
                ],
        lastMeter: 18
    },
};

export const BarChart30MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
            ],
        lastMeter: 30
    },
};
export const BarChart50MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
            ],
        lastMeter: 50
    },
};
export const BarChart100MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                ],
        lastMeter: 200
    },
};

export const BarChart200MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
            ],
        lastMeter: 2100
    },
};

export const BarChart250MetersGraphs = {
    args: {
        codes:
            [
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},

                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'broken'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
                {code: 3, status: 'printed'}, {code: 2, status: 'printed'}, {code: 1, status: 'printed'}, {code: 2, status: 'printed'}, {code: 3, status: 'printed'},
            ],
        // lastMeter: 2100
    },
};
