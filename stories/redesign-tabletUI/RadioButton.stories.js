import RadioButton from "@/components/redesign-tabletUI/RadioButton.vue";

// Виды кнопок
const primary = 'primary'
const secondary = 'secondary'
const plane = 'plane'
const outline = 'outline'

// Размеры кнопки
const large = 'large'
const medium = 'medium'
const small = 'small'
const extraSmall = 'extra-small'

// Иконка справа
const icon = 'icon'
const status = 'status'
const empty = ''

const colors = {primary, secondary, plane, outline}
const icons = {empty, icon, status}
const sizes = {large, medium, small, extraSmall}

export default {
    title: "TabletUI-redesign/RadioButton",
    component: RadioButton,
    tags: ["autodocs"],
    argTypes: {
        parameters: {
            backgrounds: {
                default: 'white',
                values: [
                    {name: 'dark', value: '#242a2b'},
                    {name: 'white', value: '#ffffff'},
                    {name: 'light', value: '#ededed'},
                    {name: 'light-gray', value: '#f1f1f1'},
                ]
            }
        },
        color: {
            description: 'Цвет кнопки.',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    primary: 'Primary',
                    secondary: 'Secondary',
                    plane: 'Plane',
                    outline: 'Outline',
                },
            },
        },
        buttonText: {
            description: 'Текст кнопки',
        },
        isIcon: {
            description: 'Элементы кнопки',
                options: Object.keys(icons),
                mapping: icons,
                control: {
                    type: 'radio',
                    labels: {
                        empty: 'Без дополнительных элементов',
                        icon: 'С иконкой',
                        status: 'Со статусом',
                    },
                },
        },
        isDisabled: {
            description: 'Неактивное состояние.',
            options: [true, false],
            control: {type: 'radio'},
        },
        isSelect: {
            description: 'Выбранное значение',
            options: [true, false],
            control: {type: 'radio'},
        },
        height: {
            description: 'Размер кнопки.',
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: 'radio',
                labels: {
                    large: 'Large (L)',
                    medium: 'Medium (M)',
                    small: 'Small (S)',
                    extraSmall: 'Extra small (XS)'
                },
            },
        },
    },
};

export const Primary = {
    args: {
        isIcon: '',
        color: 'primary',
        buttonText: 'Radio title',
        height: 'large'
    },
};

export const WithIcon = {
    args: {
        isIcon: 'icon',
        buttonText: 'Radio title',
    },
};
export const WithStatus = {
    args: {
        isIcon: 'status',
        buttonText: 'Radio title',
    },
};

export const Secondary = {
    args: {
        isIcon: '',
        color: 'secondary',
        buttonText: 'Radio title',
        height: 'large'
    },
};

export const Plane = {
    args: {
        isIcon: '',
        color: 'plane',
        buttonText: 'Radio title',
        height: 'large'
    },
};

export const Outline = {
    args: {
        isIcon: '',
        color: 'outline',
        buttonText: 'Radio title',
        height: 'large'
    },
};
