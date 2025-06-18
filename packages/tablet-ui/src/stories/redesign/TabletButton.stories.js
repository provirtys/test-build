import TabletButton from "@components/redesign/TabletButton.vue";

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
const large = "large";
const medium = "medium";
const small = "small";
const extraSmall = "extra-small";

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
const sizes = { large, medium, small, extraSmall };
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
    title: "TabletUI-redesign/TabletButton",
    component: TabletButton,
    argTypes: {
        parameters: {
            backgrounds: {
                default: "white",
            },
        },
        color: {
            description: "Цвет кнопки",
            options: Object.keys(colors),
            mapping: colors,
            control: {
                type: "radio",
                labels: {
                    primary: "Primary",
                    secondary: "Secondary",
                    plane: "Plane",
                    outline: "Outline",
                },
            },
        },
        text: {
            description: "Текст кнопки.",
        },
        textAlignment: {
            description: "Положение текста",
            options: Object.keys(textAlignments),
            mapping: textAlignments,
            control: {
                type: "radio",
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
            control: { type: "radio" },
        },
        height: {
            description: "Размеры кнопки",
            options: Object.keys(sizes),
            mapping: sizes,
            control: {
                type: "radio",
                labels: {
                    large: "Large (L)",
                    medium: "Medium (M)",
                    small: "Small (S)",
                    extraSmall: "Extra small (XS)",
                },
            },
        },
        isRadius: {
            description: "Скругление углов.",
            options: [true, false],
            control: { type: "radio" },
        },
        icon: {
            description: "Имя иконки (название файла из папки с иконками без расширения)",
            options: Object.keys(iconNames),
            mapping: iconNames,
            control: {
                type: "radio",
                labels: iconNames,
            },
        },
        locationIcon: {
            description: "Расположение иконки",
            options: Object.keys(location),
            mapping: location,
            control: {
                type: "radio",
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
            control: { type: "radio" },
        },
        changeIcon: {
            description: "Показывать иконку галочки при отработке нажатия",
            options: [true, false],
            control: { type: "radio" },
        },
    },
};

export const Primary = {
    args: {
        text: "Начать маркировку",
        height: medium,
        isRadius: true,
        color: primary,
    },
};

export const Secondary = {
    args: {
        text: "Начать маркировку",
        height: medium,
        color: secondary,
        isRadius: true,
    },
};

export const Plane = {
    args: {
        text: "Начать маркировку",
        height: medium,
        color: plane,
        isRadius: true,
    },
};

export const Outline = {
    args: {
        text: "Начать маркировку",
        height: medium,
        color: outline,
        isRadius: true,
    },
};

export const Disabled = {
    args: {
        text: "Неактивная кнопка",
        height: medium,
        isDisabled: true,
        color: primary,
        isRadius: true,
    },
};

export const NotRounded = {
    args: {
        text: "Не скругленная",
        height: medium,
        color: primary,
        isRadius: false,
    },
};

export const TextCenter = {
    args: {
        text: "Текст по центру",
        height: medium,
        color: primary,
        isRadius: false,
        textAlignment: "center",
    },
};

export const TextRight = {
    args: {
        text: "Текст справа",
        height: medium,
        color: primary,
        isRadius: false,
        textAlignment: "right",
    },
};

export const IconLeftWithTextLeft = {
    args: {
        text: "Иконка слева текст слева",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "left",
    },
};

export const IconLeftWithTextCenter = {
    args: {
        text: "Иконка слева текст по центру",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "center",
    },
};

export const IconLeftWithTextRight = {
    args: {
        text: "Иконка слева текст справа",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "left",
        icon: "bad",
        textAlignment: "right",
    },
};

export const IconRightWithTextLeft = {
    args: {
        text: "Иконка справа текст слева",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "left",
    },
};

export const IconRightTextCenter = {
    args: {
        text: "Иконка справа текст по центру",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "center",
    },
};

export const IconRightWithTextCenter = {
    args: {
        text: "Иконка справа текст справа",
        height: medium,
        color: primary,
        isRadius: false,
        locationIcon: "right",
        icon: "bad",
        textAlignment: "right",
    },
};

export const ShowIconOnAction = {
    args: {
        text: "Показывать иконку при отработке нажатия",
        height: medium,
        color: primary,
        isRadius: false,
        changeIcon: true,
    },
};
