import { computed } from 'vue';
import { CodeItem } from './index.js';

const statusDefault = 'default';
const statusNew = 'new';
const statusDeleted = 'deleted';

const statusOptions = { statusDefault, statusNew, statusDeleted };

/**
 *
 * */
export default {
  component: CodeItem,
  argTypes: {
    label: {
      description: 'Текст внутри элемента',
    },
    status: {
      description:
        'Отображает статус кода. <br> `default` - статус не поменялся, ничего не отображается; <br> `new` - новый код, отображается `+`; <br> `deleted` - код на удаление, отображается `-`;',
      options: Object.keys(statusOptions),
      mapping: {
        statusDefault: '',
        statusNew: 'new',
        statusDeleted: 'deleted',
      },
      control: {
        type: 'select',
        labels: {
          statusDefault: 'Обычный',
          statusNew: 'Новый',
          statusDeleted: 'Удаленный',
        },
      },
    },
    cancelable: {
      description: 'Показывать кнопку отмены',
    },
  },
  args: {
    label: 'wv985fjs940',
    status: '',
    cancelable: false,
  },
};

export const Default = {};

export const New = {
  args: {
    status: 'new',
  },
};

export const Deleted = {
  args: {
    status: 'deleted',
  },
};

export const Cancelable = {
  args: {
    cancelable: true,
  },
};
