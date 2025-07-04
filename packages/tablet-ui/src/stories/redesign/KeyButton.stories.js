import KeyButton from '@components/redesign/KeyButton.vue';

/** KeyButton component with customizable number*/
export default {
    title: 'TabletUI-redesign/KeyButton',
    component: KeyButton,
    argTypes: {
        value: {
            options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Back'],
            control: { type: 'select' },
        },
    },
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                { name: 'dark', value: '#242a2b' },
                { name: 'white', value: '#ffffff' },
                { name: 'light', value: '#ededed' },
                { name: 'light-gray', value: '#f1f1f1' },
            ],
        },
    },
};

/** Кнопка Number*/
export const NumberPrimary = {
    args: {
        value: '0',
    },
};
/** Кнопка Backspace*/
export const Backspace = {
    args: {
        value: 'Back',
    },
};
