import BaseCode from "@components/BaseCode.vue";

/** BaseCode component with customizable number and type of code*/
export default {
    title: "BaseCode",
    component: BaseCode,
    argTypes: {
        codeType: {
            options: ["Code128", "DataMatrix"],
            control: { type: "radio" },
        },
    },
};

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryCode = {
    args: {
        codeType: "Code128",
        currentCode: 0,
        codesLength: 2,
        needBorder: true,
    },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryCodeLength = {
    args: {
        codeType: "Code128",
        currentCode: 3,
        codesLength: 5,
        needBorder: true,
    },
};

/** Выброр типа кода для сканирования */
export const PrimaryCodeSelect = {
    args: {
        codeType: "Code128",
        currentCode: -1,
        codesLength: 1,
        needBorder: false,
    },
};

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryDatamatrix = {
    args: {
        codeType: "DataMatrix",
        currentCode: 0,
        codesLength: 2,
        needBorder: true,
    },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryDatamatrixLength = {
    args: {
        codeType: "DataMatrix",
        currentCode: 3,
        codesLength: 5,
        needBorder: true,
    },
};

/** Выброр типа кода для сканирования */
export const PrimaryDatamatrixSelect = {
    args: {
        codeType: "DataMatrix",
        currentCode: -1,
        codesLength: 1,
        needBorder: false,
    },
};
