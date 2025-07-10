import { TaskCard } from './index.js';

const statusNew = 'new';
const statusLabeling = 'labeling';
const statusReady = 'ready';
const statusCanceled = 'canceled';
const statuses = { statusNew, statusLabeling, statusReady, statusCanceled };

/** Компонент карточки задания. Отображает статус, приоритет, название и свойства задачи. <br>
 * Есть 4 типа статуса - new, labeling, ready, canceled.<br>
 * Цвет заднего фона зависит от статуса задачи, если new или labeling - белый фон, иначе прозрачный.<br>
 * Имеет флаг активности, который влияет на границу карточки.*/
export default {
    component: TaskCard,
    argTypes: {
        title: {
            description: 'Наименование задачи/артикула',
        },
        status: {
            description: 'Статус маркировки',
            options: Object.keys(statuses),
            mapping: {
                statusNew: 'new',
                statusLabeling: 'labeling',
                statusReady: 'ready',
                statusCanceled: 'canceled',
            },
            control: {
                type: 'select',
                labels: {
                    statusNew: 'Новое',
                    statusLabeling: 'Маркировка',
                    statusReady: 'Завершено',
                    statusCanceled: 'Отменено',
                },
            },
        },
        properties: {
            description: 'Информация об объекте (количество, дата и время)',
        },
        id: {
            description: 'id задачи',
        },
        priority: {
            description: 'Приоритет задачи',
            control: {
                type: 'number',
            },
        },
        isActive: {
            description: 'Активность задачи',
            options: [true, false],
            control: { type: 'boolean' },
        },
    },
    args: {
        id: '',
        title: 'Название задачи',
        status: statusNew,
        priority: null,
        properties: [],
        isActive: false,
    },
};

export const StatusNew = {
    args: {
        status: 'statusNew',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
    },
};

export const StatusLabeling = {
    args: {
        status: 'statusLabeling',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
    },
};

export const StatusReady = {
    args: {
        status: 'statusReady',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
    },
};

export const StatusCanceled = {
    args: {
        status: 'statusCanceled',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
    },
};

export const StatusNewWithPriority = {
    args: {
        status: 'statusNew',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
        priority: 1,
    },
};

export const ActiveTask = {
    args: {
        status: 'statusNew',
        properties: [
            { name: 'Количество', value: 50 },
            { name: 'Дата и время', value: '2024-03-19 17:07:15' },
        ],
        isActive: true,
    },
};
