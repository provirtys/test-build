import MarkingStatusOtk from "@components/MarkingStatus.vue";

const cancelMarking = "";
const newMarking = "new";
const labelingMarking = "labeling";
const readyMarking = "ready";
const statuses = { cancelMarking, newMarking, labelingMarking, readyMarking };

/** Компонент статус маркировки */
export default {
    title: "Tablet/MarkingStatus",
    component: MarkingStatusOtk,
    argTypes: {
        status: {
            description: "Статус маркировки",
            options: Object.keys(statuses),
            mapping: statuses,
            control: {
                type: "radio",
                labels: {
                    cancelMarking: "ОТМЕНЕНО",
                    newMarking: "НОВОЕ",
                    labelingMarking: "МАРКИРОВКА",
                    readyMarking: "ЗАВЕРШЕНО",
                },
            },
        },
    },
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "dark", value: "#242a2b" },
                { name: "light", value: "#f4f4f4" },
                { name: "white", value: "#fff" },
            ],
        },
    },
};

export const New = {
    args: {
        status: "new",
    },
};
export const Labeling = {
    args: {
        status: "labeling",
    },
};
export const Ready = {
    args: {
        status: "ready",
    },
};
export const Cancel = {
    args: {
        status: "",
    },
};
