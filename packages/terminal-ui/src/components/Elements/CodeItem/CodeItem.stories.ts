import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { CodeItemStatus } from './CodeItem.types';
import { CodeItem } from './index';

type Story = StoryObj<typeof CodeItem>;

const statuses: Record<CodeItemStatus, string> = {
  unchanged: 'Без изменений',
  new: 'Новый',
  deleted: 'Удаленный',
};

const meta: Meta<typeof CodeItem> = {
  component: CodeItem,
  argTypes: {
    label: {
      description: 'Текст внутри элемента',
    },
    status: {
      description:
        'Отображает статус кода. <br> `default` - статус не поменялся, ничего не отображается; <br> `new` - новый код, отображается `+`; <br> `deleted` - код на удаление, отображается `-`;',
      options: Object.keys(statuses),
      control: {
        type: 'select',
        labels: statuses,
      },
    },
    cancelable: {
      description: 'Показывать кнопку отмены',
    },
  },
  args: {
    id: '1',
    label: 'wv985fjs940',
    status: 'unchanged',
  },
};
export default meta;

export const Default: Story = {};

export const New: Story = {
  args: {
    status: 'new',
  },
};

export const Deleted: Story = {
  args: {
    status: 'deleted',
  },
};

export const Cancelable: Story = {
  args: {
    cancelable: true,
  },
};
