import LabelingProgress from '@components/LabelingProgress.vue';

export default {
    title: 'Tablet/LabelingProgress',
    component: LabelingProgress,
};

export const NoErrors = {
    args: {
        total: 250,
        mistakes: 0,
    },
};

export const Errors2 = {
    args: {
        total: 300,
        mistakes: 6,
    },
};

export const Errors5 = {
    args: {
        total: 300,
        mistakes: 15,
    },
};

export const Errors20 = {
    args: {
        total: 250,
        mistakes: 50,
    },
};

export const Errors50 = {
    args: {
        total: 400,
        mistakes: 200,
    },
};

export const Errors70 = {
    args: {
        total: 700,
        mistakes: 490,
    },
};

export const Errors90 = {
    args: {
        total: 500,
        mistakes: 450,
    },
};

export const Errors98 = {
    args: {
        total: 500,
        mistakes: 490,
    },
};

export const OnlyErrors = {
    args: {
        total: 270,
        mistakes: 270,
    },
};
