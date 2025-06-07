import CodeCard from "../components/CodeCard.vue";

const dataMatrix = "DataMatrix";
const code128 = "Code128";
const verified = "verified";
const broken = "broken";
const synced = "synced";
const none = "none";
const codeTypes = { dataMatrix, code128 };
const statuses = { verified, broken, synced, none };

/** Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции.  */
export default {
    title: "Tablet/CodeCard",
    component: CodeCard,
    tags: ["autodocs"],
    argTypes: {
        codeType: {
            description: "Тип кода",
            options: Object.keys(codeTypes),
            mapping: codeTypes,
            control: {
                type: "radio",
                labels: {
                    dataMatrix: "DataMatrix",
                    code128: "Code128",
                },
            },
        },
        codeText: {
            description: "Текст кода",
        },
        status: {
            description: "Статус кода",
            options: Object.keys(statuses),
            mapping: statuses,
            control: {
                type: "radio",
                labels: {
                    verified: "verified",
                    broken: "broken",
                    synced: "synced",
                    none: "none",
                },
            },
        },
        time: {
            description: "Время",
        },
        position: {
            description: "Номер позиции",
        },
    },
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
                { name: "white", value: "#fff" },
            ],
        },
    },
};

export const DataMatrixPrimary = {
    args: {
        codeType: "DataMatrix",
        codeText: "wv985fjs934",
        status: "none",
        time: "00:00:00",
        position: 0,
    },
};
export const DataMatrixVerified = {
    args: {
        codeType: "DataMatrix",
        codeText: "wv985fjs935",
        status: "verified",
        time: "00:01:01",
        position: 1,
    },
};
export const DataMatrixBroken = {
    args: {
        codeType: "DataMatrix",
        codeText: "wv985fjs936",
        status: "broken",
        time: "00:02:02",
        position: 2,
    },
};
export const Code128Primary = {
    args: {
        codeType: "code128",
        codeText: "wv985fjs937",
        status: "none",
        time: "00:04:04",
        position: 4,
    },
};
export const Code128Verified = {
    args: {
        codeType: "code128",
        codeText: "wv985fjs938",
        status: "verified",
        time: "00:05:05",
        position: 5,
    },
};
export const Code128Broken = {
    args: {
        codeType: "code128",
        codeText: "wv985fjs939",
        status: "broken",
        time: "00:06:06",
        position: 6,
    },
};
