import ActionTabletUIButton from "../../components/redesign/ActionTabletUIButton.vue"

// Расположение иконки
const empty = ''
const right = 'right'
const left = 'left'

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

const location = {right, left, empty}
const colors = {primary, secondary, plane, outline}
const sizes = {large, medium, small, extraSmall}

const openTaskIcon = 'openTaskIcon'
const newTaskIcon = 'newTaskIcon'
const verifyIcon = 'verifyIcon'
const labelPrintingIcon = 'labelPrintingIcon'
const startAggregationIcon = 'startAggregationIcon'
const finishAggregationIcon = 'finishAggregationIcon'
const badIcon = 'badIcon'
const restartIcon = 'restartIcon'
const arrowIcon = 'arrowIcon'

const icons = { arrowIcon, openTaskIcon, newTaskIcon, verifyIcon, labelPrintingIcon, startAggregationIcon, finishAggregationIcon, badIcon, restartIcon}

/** Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки. Если в кнопке есть иконка, то текст выравнивается не по центру, а по левому краю, иконка
 * располагается справа. */
export default {
    title: "TabletUI-redesign/ActionTabletUIButton",
    component: ActionTabletUIButton,
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
        icon: {
            description: 'Иконка.',
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: 'radio',
                labels: {
                    arrowIcon: 'Стрелка',
                    openTaskIcon: 'Открыть задачу, Начать/Продолжить маркировку',
                    newTaskIcon: 'Новое задание',
                    verifyIcon: 'Подтвердить',
                    labelPrintingIcon: 'Печать этикетки/Единичная маркировка',
                    startAggregationIcon: 'Начать агрегацию',
                    finishAggregationIcon: 'Закончить агрегацию',
                    badIcon: 'Брак маркировки',
                    restartIcon: 'Повторить маркировку/Сканировать',
                },
            },
        },
        text: {
            description: 'Текст кнопки.',
        },
        isDisabled: {
            description: 'Неактивное состояние.',
            options: [true, false],
            control: {type: 'radio'},
        },
        height: {
            description: 'Размеры кнопки.',
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
        isRadius: {
            description: 'Скругление углов.',
            options: [true, false],
            control: {type: 'radio'},
        },
        locationIcon: {
            description: 'Расположение иконки.',
            options: Object.keys(location),
            mapping: location,
            control: {
                type: 'radio',
                labels: {
                    empty: 'Без иконки',
                    left: 'left',
                    right: 'right',
                },
            },
        },
    },
};

export const Primary = {
    args: {
        text: 'Начать маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'primary',
        isRadius: true,
        locationIcon: 'right',
        icon: 'arrowIcon'
    },
};

export const Secondary = {
    args: {
        text: 'Начать маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'secondary',
        isRadius: true,
        locationIcon: 'right',
        icon: 'arrowIcon'
    },
};

export const Plane = {
    args: {
        text: 'Начать маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'plane',
        isRadius: true,
        locationIcon: 'right',
        icon: 'arrowIcon'

    },
};

export const Outline = {
    args: {
        text: 'Начать маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'arrowIcon'
    },
};

export const openTask = {
    args: {
        text: 'Открыть задачу',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'openTaskIcon'
    },
};
export const newTask = {
    args: {
        text: 'Новое задание',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'newTaskIcon'
    },
};
export const startLabeling = {
    args: {
        text: 'Начать маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'openTaskIcon'
    },
};
export const verify = {
    args: {
        text: 'Подтвердить',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'verifyIcon'
    },
};
export const labelPrinting  = {
    args: {
        text: 'Печать этикетки',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'labelPrintingIcon'
    },
};
export const startAggregation  = {
    args: {
        text: 'Начать агрегацию',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'startAggregationIcon'
    },
};
export const singleMarking  = {
    args: {
        text: 'Начать агрегацию',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'labelPrintingIcon'
    },
};
export const scan  = {
    args: {
        text: 'Сканировать',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'restartIcon'
    },
};
export const finishAggregation  = {
    args: {
        text: 'Закончить агрегацию',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'finishAggregationIcon'
    },
};
export const defectLabeling  = {
    args: {
        text: 'Брак маркировки',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'badIcon'
    },
};
export const restart  = {
    args: {
        text: 'Повторить маркировку',
        height: 'medium',
        isDisabled: false,
        color: 'outline',
        isRadius: true,
        locationIcon: 'right',
        icon: 'restartIcon'
    },
};
