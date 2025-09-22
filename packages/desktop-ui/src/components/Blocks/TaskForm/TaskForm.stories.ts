import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { SelectFieldOptions } from './TaskForm.types';
import TaskForm from './TaskForm.vue';

type Story = StoryObj<typeof TaskForm>;

const inputOptions: SelectFieldOptions = {
  gtin: [
    {
      label: '0001',
      labelLight: 'GTIN 1',
      value: 'gtin-1',
    },
    {
      label: '0002',
      labelLight: 'GTIN 2',
      value: 'gtin-2',
    },
    {
      label: '0003',
      labelLight: 'GTIN 3',
      value: 'gtin-3',
    },
  ],
  line: [
    {
      label: 'Линия 1',
      value: 'line-1',
    },
    {
      label: 'Линия 2',
      value: 'line-2',
    },
    {
      label: 'Линия 3',
      value: 'line-3',
    },
  ],
  labelTemplate: [
    {
      label: 'Шаблон этикетки 1',
      value: 'label-template-1',
    },
    {
      label: 'Шаблон этикетки 2',
      value: 'label-template-2',
    },
    {
      label: 'Шаблон этикетки 3',
      value: 'label-template-3',
    },
  ],
  packageTemplate: [
    {
      label: 'Шаблон упаковки 1',
      value: 'package-template-1',
    },
    {
      label: 'Шаблон упаковки 2',
      value: 'package-template-2',
    },
    {
      label: 'Шаблон упаковки 3',
      value: 'package-template-3',
    },
  ],
};

/** Компонент формы задачи. Если нужно создать новую задачу, то данные задачи можно опустить. Если передать существующие данные, то их можно поменять в этой же форме. <br/>
 *  Для показа опций требуется также их передать. <br/>
 *  При нажатии на кнопки внизу эмитит события `draft` и `submit` <br/> <br/>
 *  TODO: сделать автоматический расчет полей Кол-во и Кол-во упаковок и соответствующие элементы и предупреждения
 * */
const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
  argTypes: {
    task: {
      description: 'Данные задачи',
    },
    options: {
      description: 'Опции для селектов',
    },
  },
  args: {
    task: {
      id: 'task1',
      name: 'Тестовая задача',
      gtin: 'gtin-1',
      dateStart: '',
      timeStart: '',
      quantity: 100000,
      line: 'line-1',
      comment: 'Это обычный комментарий',
      privateComment: 'Это приватный комментарий',
      labelTemplate: 'label-template-1',
      packageTemplate: 'package-template-1',
      packageCount: 1234,
    },
    options: inputOptions,
  },
  render: (args) => ({
    components: { TaskForm },
    setup() {
      const taskData = args.task;
      const options = inputOptions;

      const onSubmit = (data: any) => {
        console.log('Событие создания задачи:', data);
      };

      const onDraft = (data: any) => {
        console.log('Событие сохранения задачи как черновика:', data);
      };

      return {
        taskData,
        options,
        onSubmit,
        onDraft,
      };
    },
    template: `
      <task-form :task="taskData" :options="options" @submit="onSubmit" @draft="onDraft"/>`,
  }),
};

export default meta;

export const NoData: Story = {
  args: {
    task: undefined,
  },
};

export const WithData: Story = {};
