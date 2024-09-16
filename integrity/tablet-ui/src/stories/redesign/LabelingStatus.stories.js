import LabelingStatus from "../../components/redesign/LabelingStatus.vue";

const newTask = 'new'
const labeling = 'labeling'
const ready = 'ready'
const rejected = ''
const status = {newTask, labeling, ready, rejected}

/** Компонент статус маркировки, используемый на планшетах. Можно регулировать вырианты состояния задачи и приоритет задания (P1, может быть скрыт) */
export default {
    title: "TabletUI-redesign/LabelingStatus",
    component: LabelingStatus,
    tags: ["autodocs"],
    argTypes: {
        status: {
            description: 'Варианты состояния задачи',
            options: Object.keys(status),
            mapping: status,
            control: {
                type: 'radio',
                labels: {
                    newTask: 'Новое (new)',
                    labeling: 'Маркировка (in-progress)',
                    ready: 'Завершено (complite)',
                    rejected: 'Отменено (rejected)',
                },
            },
        },
        isSecondary: {
            description: 'Приоритет задачи',
            options: [true, false],
            control: {type: 'radio'},
        },
        textSecondary: {
            description: 'Текст приоритета задачи',
        },
    },
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#f4f4f4'},
                {name: 'white', value: '#fff'},
            ]
        }
    }
};

export const NewMarking = {
    args: {
        status: 'new',
        isSecondary: true,
        textSecondary: 'P1'
    },
};
export const Marking = {
    args: {
        status: 'labeling',
    },
};
export const FinishMarking = {
    args: {
        status: 'ready'
    },
};
export const CancelMarking = {
    args: {
        status: 'rejected'
    },
};
