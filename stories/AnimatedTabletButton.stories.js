import AnimatedTabletButton from "../tablet/AnimatedTabletButton.vue"
import aggregationIcon from "../images/aggregation.svg"
import badIcon from "../images/bad.svg"
import logoutIcon from "../images/logout.svg"
import printIcon from "../images/print.svg"
import restartIcon from "../images/restart.svg"
import scanIcon from "../images/scan.svg"

const empty = ''
const red = 'red'
const dark = 'dark'
const light = 'light'
const medium = 'medium'
const large = 'large'
const icons = { empty, aggregationIcon, badIcon, logoutIcon, printIcon, restartIcon, scanIcon }
const colors = { red, dark, light }
const sizes = { medium, large }


/** Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки. Если в кнопке есть иконка, то текст выравнивается не по центру, а по левому краю, иконка
 * располагается справа. */
export default {
    title: "Tablet/AnimatedTabletButton",
    component: AnimatedTabletButton,
    tags: ["autodocs"],
    argTypes: {
        color: {
            description: 'Цвет кнопки.',
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: 'radio',
                labels: {
                    red: 'Красный',
                    dark: 'Темный',
                    light: 'Светлый',
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
                    empty: 'Без иконки',
                    aggregationIcon: 'Агрегация',
                    badIcon: 'Брак',
                    logoutIcon: 'Выйти',
                    printIcon: 'Печать',
                    restartIcon: 'Повторить',
                    scanIcon: 'Сканировать',
                },
            },
        },
        text: {
            description: 'Текст кнопки.',
        },
        isDisabled: {
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
                    medium: 'Стандартный',
                    large: 'Большой',
                },
            },
        },
    },
};



export const Print = {
    args: {
        text: 'Начать печать',
        icon: printIcon,
        height: medium,
        isDisabled: false
    },
};

export const PrintDisabled = {
    args: {
        text: 'Начать печать',
        icon: printIcon,
        height: medium,
        isDisabled: true
    },
};

export const RestartMarking = {
    args: {
        text: 'Повторить маркировку',
        icon: restartIcon,
    },
};

export const Bad = {
    args: {
        text: 'Брак',
        icon: badIcon,
        color: 'gray'
    },
};

export const Scan = {
    args: {
        text: 'Сканировать',
        icon: scanIcon,
    },
};

export const Aggregation = {
    args: {
        text: 'Начать агрегацию',
        icon: aggregationIcon,
        color: 'dark'
    },
};

export const Logout = {
    args: {
        text: 'Выйти',
        icon: logoutIcon,
        color: 'light-gray'
    },
};
