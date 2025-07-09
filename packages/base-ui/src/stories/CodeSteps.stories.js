import CodeSteps from '@base/components/CodeSteps.vue';

/** CodeSteps component with customizable number and type of code*/
export default {
    title: 'CodeSteps',
    component: CodeSteps,
    argTypes: {
        codeType: {
            options: ['barcode', 'dataMatrix'],
            control: {
                type: 'radio',
                labels: {
                    barcode: 'Barcode',
                    dataMatrix: 'DataMatrix',
                },
            },
        },
    },
};

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryCode = {
    args: {
        codeType: 'barcode',
        currentCodeIndex: 0,
        codesLength: 2,
        showBorder: true,
    },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryCodeLength = {
    args: {
        codeType: 'barcode',
        currentCodeIndex: 3,
        codesLength: 5,
        showBorder: true,
    },
};

/** Выброр типа кода для сканирования */
export const PrimaryCodeSelect = {
    args: {
        codeType: 'barcode',
        currentCodeIndex: -1,
        codesLength: 1,
        showBorder: false,
    },
};

/** Cканирование первого кода, всего кодов для сканирования 2 */
export const PrimaryDatamatrix = {
    args: {
        codeType: 'dataMatrix',
        currentCodeIndex: 0,
        codesLength: 2,
        showBorder: true,
    },
};

/** Cканирование кода с индексом 3, всего кодов для сканирования 5 */
export const PrimaryDatamatrixLength = {
    args: {
        codeType: 'dataMatrix',
        currentCodeIndex: 3,
        codesLength: 5,
        showBorder: true,
    },
};

/** Выброр типа кода для сканирования */
export const PrimaryDatamatrixSelect = {
    args: {
        codeType: 'dataMatrix',
        currentCodeIndex: -1,
        codesLength: 1,
        showBorder: false,
    },
};
