import LabelType from "../components/LabelType.vue";

const long = true;
const pieces = false;
const modes = { long, pieces };

const bc = ["Code128"];
const dm = ["DataMatrix"];
const all = ["Code128", "DataMatrix"];
const empty = [];
const selectedTypes = { bc, dm, all, empty };

/** Компонент выбора типа маркировки. Для длинномерной продукции допустим выбор только одного из типов,
 * для штучной могут быть выбраны оба типа. */
export default {
    title: "Tablet/LabelType",
    component: LabelType,
    tags: ["autodocs"],
    argTypes: {
        isAuto: {
            description: "Режим",
            options: Object.keys(modes),
            mapping: modes,
            control: {
                type: "radio",
                labels: {
                    long: "Длинномерная продукция",
                    pieces: "Штучная продукция",
                },
            },
        },
        selectedTypes: {
            description: "Выбранные типы",
            options: Object.keys(selectedTypes),
            mapping: selectedTypes,
            control: {
                type: "radio",
                labels: {
                    bc: "Code128",
                    dm: "Datamatrix",
                    all: "Оба типа",
                    empty: "Тип не выбран",
                },
            },
        },
    },
    args: {
        isAuto: long,
        selectedTypes: ["DataMatrix"],
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
            ],
        },
    },
};

/** Выбран тип DataMatrix для длинномерной продукции. */
export const DatamatrixAuto = {
    args: {
        isAuto: true,
        selectedTypes: ["DataMatrix"],
    },
};

/** Выбран тип Code128 для длинномерной продукции. */
export const Code128Auto = {
    args: {
        isAuto: true,
        selectedTypes: ["Code128"],
    },
};

/** Выбран тип DataMatrix для штучной продукции. */
export const DatamatrixManual = {
    args: {
        isAuto: false,
        selectedTypes: ["DataMatrix"],
    },
};

/** Выбран тип Code128 для штучной продукции. */
export const Code128Manual = {
    args: {
        isAuto: false,
        selectedTypes: ["Code128"],
    },
};

/** Выбраны оба типа для штучной продукции. */
export const BothManual = {
    args: {
        isAuto: false,
        selectedTypes: ["DataMatrix", "Code128"],
    },
};

/** Не выбран ни один тип для штучной продукции. */
export const NoneManual = {
    args: {
        isAuto: false,
        selectedTypes: [],
    },
};
