import CardTask from "../../components/redesign/CardTask.vue";

const cancelStatus = ''
const newStatus = 'new'
const labelingStatus = 'labeling'
const readyStatus = 'ready'
const LabelingStatuses = {newStatus, labelingStatus, readyStatus, cancelStatus}

/** Компонент карточки задания показывает: статус задания (Новое), приоритет задания (P1, может быть скрыт),
 * название задания (Task name), количество позиций маркировки, дату и время добавления задания.*/
export default {
    title: "TabletUI-redesign/CardTask",
    component: CardTask,
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: 'Наименование задачи/артикула',
        },
        labelingStatus: {
            description: 'Статус маркировки',
            options: Object.keys(LabelingStatuses),
            mapping: LabelingStatuses,
            control: {
                type: 'radio',
                labels: {
                    cancelStatus: 'ОТМЕНЕНО',
                    newStatus: 'НОВОЕ',
                    labelingStatus: 'МАРКИРОВКА',
                    readyStatus: 'ЗАВЕРШЕНО',
                },
            },
        },
          toolItems: {
            description: 'Информация об объекте (количество, дата и время)',
        },
        id: {
            description: 'id задачи'
        },
        isPriority: {
            description: 'Приоритет задачи',
            options: [true, false],
            control: {type: 'radio'},
        },
        isActiveTask: {
            description: 'Активное/Нажатие',
            options: [true, false],
            control: {type: 'radio'},
        },

    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {name: 'dark', value: '#242a2b'},
                {name: 'light', value: '#ededed'},
                {name: 'white', value: '#fff'},
            ]
        }
    }
};

export const NewTask = {
    args: {
        title: 'Task name',
        labelingStatus: 'new',
        toolItems: {
            'Количество': 50,
            'Дата и время': '2024-03-19 17:07:15'
        }
    },
};
export const LabelingTask = {
    args: {
        title: 'Task name',
        labelingStatus: 'labeling',
        toolItems: {
            'Количество': 50,
            'Дата и время': '2024-03-19 17:17:15'
        }
    },
};
export const ReadyTask = {
    args: {
        title: 'Task name',
        labelingStatus: 'ready',
        toolItems: {
            'Количество': 150,
            'Дата и время': '2024-03-19 18:57:15'
        }
    },
};
export const CancelTask = {
    args: {
        title: 'Task name',
        labelingStatus: '',
        toolItems: {
            'Количество': 1500,
            'Дата и время': '2024-03-19 18:57:15'
        }
    },
};
