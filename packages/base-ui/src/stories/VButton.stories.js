import { VButton, VInput } from "@base";
import { computed, ref } from "vue";

// Расположение иконки
const empty = "";
const right = "right";
const left = "left";

// Виды кнопок
const primary = "primary";
const secondary = "secondary";
const plane = "plane";
const outline = "outline";

// Размеры кнопки
const lg = "lg";
const md = "md";
const sm = "sm";
const xs = "xs";

const center = "center";

//Названия иконок
const bad = "bad";
const arrow = "arrow";
const aggregation = "aggregation";
const finishAggregation = "finishAggregation";
const barCode = "barCode";
const dataMatrix = "dataMatrix";
const restart = "restart";

const location = { left, right, empty };
const colors = { primary, secondary, plane, outline };
const sizes = { lg, md, sm, xs };
const textAlignments = { left, center, right };
const iconNames = {
    bad,
    arrow,
    aggregation,
    finishAggregation,
    barCode,
    dataMatrix,
    restart,
};

/** Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
 * наличием иконки и её расположением */
export default {
    title: "VButton",
    component: VButton,
    argTypes: {
        color: {
            description: "Цвет кнопки",
            options: Object.keys(colors),
            control: {
                type: "select",
                labels: {
                    primary: "Основной",
                    secondary: "Второстепенный",
                    plane: "Плоский",
                    outline: "С границей",
                },
            },
        },
        text: {
            description: "Текст кнопки",
        },
        textAlignment: {
            description: "Положение текста",
            options: Object.keys(textAlignments),
            control: {
                type: "select",
                labels: {
                    left: "Слева",
                    center: "По центру",
                    right: "Справа",
                },
            },
        },
        isDisabled: {
            description: "Неактивное состояние",
            options: [true, false],
            control: { type: "boolean" },
        },
        height: {
            description: "Размер кнопки",
            options: Object.keys(sizes),
            control: {
                type: "select",
                labels: {
                    lg: "Большой",
                    md: "Средний",
                    sm: "Маленький",
                    xs: "Очень маленький",
                },
            },
        },
        icon: {
            description: "Имя иконки (название файла из папки с иконками без расширения)",
            options: Object.keys(iconNames),
            mapping: iconNames,
            control: {
                type: "select",
                labels: iconNames,
            },
        },
        locationIcon: {
            description: "Расположение иконки",
            options: Object.keys(location),
            mapping: location,
            control: {
                type: "select",
                labels: {
                    empty: "Без иконки",
                    left: "Слева",
                    right: "Справа",
                },
            },
        },
        fitWidth: {
            description: "Отменить растягивание кнопки",
            options: [true, false],
            control: { type: "boolean" },
        },
        changeIcon: {
            description: "Показывать иконку галочки при отработке нажатия",
            options: [true, false],
            control: { type: "boolean" },
        },
        progress: {
            description: "Удерживание кнопки с прогресс баром",
            options: [true, false],
            control: { type: "boolean" },
        },
    },
    args: {
        color: primary,
        height: md,
        text: "Кнопка",
        textAlignment: center,
        isDisabled: false,
        icon: "",
        locationIcon: empty,
        fitWidth: false,
        changeIcon: false,
        progress: false,
    },
};

const BaseComponent = (args) => ({
    components: { VButton },
    setup() {
        const bindingArgs = computed(() => {
            const { text, ...restArgs } = args;
            return restArgs;
        });

        const text = computed(() => args.text);

        return {
            bindingArgs,
            text,
        };
    },
    template: `<v-button v-bind="bindingArgs">{{ text }}</v-button>`,
});

export const Simple = BaseComponent.bind({});
Simple.args = {
    text: "Кнопка",
    height: "md",
    color: primary,
    changeIcon: true,
    progress: false,
};

// export const Simple = {
//     args: {
//         text: "Кнопка",
//         height: md,
//         color: primary,
//         changeIcon: true,
//         progress: false,
//     },
// };

export const Primary = {
    args: {
        text: "Начать маркировку",
        height: md,
        color: primary,
        progress: true,
    },
};

export const Secondary = {
    args: {
        text: "Начать маркировку",
        height: md,
        color: secondary,
        progress: true,
    },
};

export const Plane = {
    args: {
        text: "Начать маркировку",
        height: md,
        color: plane,
        progress: true,
    },
};

export const Outline = {
    args: {
        text: "Начать маркировку",
        height: md,
        color: outline,
        progress: true,
    },
};

export const Disabled = {
    args: {
        text: "Неактивная кнопка",
        height: md,
        isDisabled: true,
        color: primary,
        progress: true,
    },
};

export const NotRounded = {
    args: {
        text: "Не скругленная",
        height: md,
        color: primary,
        progress: true,
    },
};

export const TextCenter = {
    args: {
        text: "Текст по центру",
        height: md,
        color: primary,
        textAlignment: "center",
        progress: true,
    },
};

export const TextRight = {
    args: {
        text: "Текст справа",
        height: md,
        color: primary,
        textAlignment: "right",
        progress: true,
    },
};

export const IconLeftWithTextLeft = {
    args: {
        text: "Иконка слева текст слева",
        height: md,
        color: primary,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "left",
        progress: true,
    },
};

export const IconLeftWithTextCenter = {
    args: {
        text: "Иконка слева текст по центру",
        height: md,
        color: primary,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "center",
        progress: true,
    },
};

export const IconLeftWithTextRight = {
    args: {
        text: "Иконка слева текст справа",
        height: md,
        color: primary,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "right",
        progress: true,
    },
};

export const IconRightWithTextLeft = {
    args: {
        text: "Иконка справа текст слева",
        height: md,
        color: primary,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "left",
        progress: true,
    },
};

export const IconRightTextCenter = {
    args: {
        text: "Иконка справа текст по центру",
        height: md,
        color: primary,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "center",
        progress: true,
    },
};

export const IconRightWithTextCenter = {
    args: {
        text: "Иконка справа текст справа",
        height: md,
        color: primary,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "right",
        progress: true,
    },
};

export const ShowIconOnAction = {
    args: {
        text: "Показывать иконку при отработке нажатия",
        height: md,
        color: primary,
        changeIcon: true,
        progress: true,
    },
};
