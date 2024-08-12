import InputAdmin from "../web/InputAdmin.vue";

/** Компонент input с иконкой поиска  (Labeling Admin) */
export default {
    title: "web/InputAdmin",
    component: InputAdmin,
    tags: ["autodocs"],
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
export const InputSearchTask = {
    args: {
        placeholder: 'задание'
    },
};
export const InputSearchDevice = {
    args: {
        placeholder: 'токен'
    },
};
export const InputSearchEmpty = {};
