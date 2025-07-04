import CardTask from '@components/CardTask.vue';

const cancelMarking = '';
const newMarking = 'new';
const labelingMarking = 'labeling';
const readyMarking = 'ready';
const markingStatus = { cancelMarking, newMarking, labelingMarking, readyMarking };

/** Компонент Карточка задачи отображает информацию по задаче. Можно настроить статус маркировки, процент выполнения задачи/маркировки */
export default {
    title: 'Tablet/CardTask',
    component: CardTask,
    argTypes: {
        title: {
            description: 'Название инструмента',
        },
        markingStatus: {
            description: 'Статус маркировки',
            options: Object.keys(markingStatus),
            mapping: markingStatus,
            control: {
                type: 'radio',
                labels: {
                    cancelMarking: 'ОТМЕНЕНО',
                    newMarking: 'НОВОЕ',
                    labelingMarking: 'МАРКИРОВКА',
                    readyMarking: 'ЗАВЕРШЕНО',
                },
            },
        },
        progress: {
            description: 'Процент выполнения',
        },
        toolItems: {
            description: 'Информация об объекте (количество, дата и время)',
        },
        id: {
            description: 'id задачи',
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'dark', value: '#242a2b' },
                { name: 'light', value: '#ededed' },
                { name: 'white', value: '#fff' },
            ],
        },
    },
};

export const NewTask = {
    args: {
        title: 'Название инструмента',
        markingStatus: 'new',
        progress: 0,
        toolItems: {
            Количество: 50,
            'Дата и время': '2024-03-19 17:07:15',
        },
    },
};
export const LabelingTask = {
    args: {
        title: 'Название инструмента',
        markingStatus: 'labeling',
        progress: 45,
        toolItems: {
            Количество: 50,
            'Дата и время': '2024-03-19 17:17:15',
        },
    },
};
export const ReadyTask = {
    args: {
        title: 'Название инструмента',
        markingStatus: 'ready',
        progress: 100,
        toolItems: {
            Количество: 50,
            'Дата и время': '2024-03-19 18:57:15',
        },
    },
};
export const CancelTask = {
    args: {
        title: 'Название инструмента',
        markingStatus: '',
        progress: 90,
        toolItems: {
            Количество: 50,
            'Дата и время': '2024-03-19 18:57:15',
        },
    },
};
