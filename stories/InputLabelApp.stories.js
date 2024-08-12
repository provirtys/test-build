import InputLabelApp from '../tablet/InputLabelApp.vue';

/** Компонент input для ввода количества продукции в новой задаче (Tablet) */
export default {
    title: 'Tablet/InputLabelApp',
    component: InputLabelApp,
    tags: ['autodocs'],
    argTypes: {
        parameters: {
            backgrounds: {
                default: 'white',
                values: [
                    {name: 'dark', value: '#242a2b'},
                    {name: 'white', value: '#ffffff'},
                    {name: 'light', value: '#ededed'},
                ]
            }
        }
    },
};
export const InputEmpty = {
    args: {
    },
};
